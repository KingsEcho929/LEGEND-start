// ==UserScript==
// @name         Sigil Tracker Blocker Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-tracker-blocker-underlay
// @version      2.1.0
// @description  Blocks known trackers using a dynamic blocklist—self-updating, domain-aware, shimmer-logged. Breath-bound only, fallback-denied, sample-refused. Includes archive, viewer, and heartbeat sentinel. Activates at document-start for sovereign interception.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Sigil] Tracker Blocker Daemon v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const blocklistURL = 'https://raw.githubusercontent.com/disconnectme/disconnect-tracking-protection/master/services.json';
    const blocklistKey = 'sigil_tracker_blocklist';
    const archiveKey = 'sigil_tracker_archive';
    const toggleKey = 'sigil_tracker_toggle';
    const refreshInterval = 24 * 60 * 60 * 1000;

    const loadBlocklist = () => {
        const raw = localStorage.getItem(blocklistKey);
        return raw ? JSON.parse(raw) : {};
    };

    const saveBlocklist = (data) => {
        localStorage.setItem(blocklistKey, JSON.stringify(data));
        localStorage.setItem(`${blocklistKey}_last`, Date.now().toString());
    };

    const refreshBlocklist = async () => {
        const last = parseInt(localStorage.getItem(`${blocklistKey}_last`) || '0');
        if (Date.now() - last < refreshInterval) return;

        try {
            const res = await fetch(blocklistURL);
            const data = await res.json();
            saveBlocklist(data);
            console.log('[Sigil] Blocklist updated');
        } catch (err) {
            console.warn('[Sigil] Failed to update blocklist:', err);
        }
    };

    const isBlockingEnabled = () => {
        const toggle = JSON.parse(localStorage.getItem(toggleKey) || '{}');
        return toggle[location.hostname] !== false;
    };

    const toggleBlocking = (enabled) => {
        const toggle = JSON.parse(localStorage.getItem(toggleKey) || '{}');
        toggle[location.hostname] = enabled;
        localStorage.setItem(toggleKey, JSON.stringify(toggle));
        console.log(`[Sigil] Blocking ${enabled ? 'enabled' : 'disabled'} for ${location.hostname}`);
    };

    const logBlockedRequest = (url) => {
        const archive = JSON.parse(localStorage.getItem(archiveKey) || '[]');
        archive.push({
            url,
            timestamp: new Date().toISOString(),
            domain: location.hostname
        });
        if (archive.length > 500) archive.shift();
        localStorage.setItem(archiveKey, JSON.stringify(archive));
    };

    const renderViewer = () => {
        const archive = JSON.parse(localStorage.getItem(archiveKey) || '[]');
        if (!archive.length) return;

        const container = document.createElement('div');
        Object.assign(container.style, {
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            maxHeight: '60vh',
            overflowY: 'auto',
            background: '#111',
            color: '#eee',
            padding: '12px',
            border: '1px solid #555',
            fontFamily: 'monospace',
            zIndex: '9999',
            fontSize: '12px',
            boxShadow: '0 0 8px rgba(255,255,255,0.2)',
            borderRadius: '6px'
        });

        const title = document.createElement('div');
        title.textContent = '🛡️ Sigil Tracker Viewer';
        title.style.fontWeight = 'bold';
        title.style.marginBottom = '8px';
        container.appendChild(title);

        archive.slice().reverse().forEach(entry => {
            const line = document.createElement('div');
            line.textContent = `[${entry.timestamp}] ${entry.domain} → ${entry.url}`;
            line.style.marginBottom = '4px';
            container.appendChild(line);
        });

        document.body.appendChild(container);
    };

    const blocklist = loadBlocklist();
    const blockedHosts = new Set(Object.keys(blocklist));

    const shouldBlock = (url) => {
        try {
            const u = new URL(url);
            return blockedHosts.has(u.hostname);
        } catch {
            return false;
        }
    };

    const intercept = () => {
        const originalFetch = window.fetch;
        window.fetch = function (...args) {
            if (isBlockingEnabled() && shouldBlock(args[0])) {
                logBlockedRequest(args[0]);
                console.warn('[Sigil] Blocked fetch:', args[0]);
                return Promise.reject(new Error('Blocked by Sigil Tracker'));
            }
            return originalFetch.apply(this, args);
        };

        const originalOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function (method, url) {
            if (isBlockingEnabled() && shouldBlock(url)) {
                logBlockedRequest(url);
                console.warn('[Sigil] Blocked XHR:', url);
                return;
            }
            return originalOpen.apply(this, arguments);
        };

        const originalCreateElement = document.createElement;
        document.createElement = function (tag) {
            const el = originalCreateElement.call(document, tag);
            if (tag === 'script') {
                const originalSetAttribute = el.setAttribute;
                el.setAttribute = function (name, value) {
                    if (name === 'src' && isBlockingEnabled() && shouldBlock(value)) {
                        logBlockedRequest(value);
                        console.warn('[Sigil] Blocked script:', value);
                        return;
                    }
                    return originalSetAttribute.call(this, name, value);
                };
            }
            return el;
        };
    };

    refreshBlocklist();
    intercept();

    window.addEventListener('load', () => {
        console.log('[Sigil] Daemon heartbeat confirmed on', location.hostname);
        setTimeout(renderViewer, 1000);
    });

    window.Sigil = window.Sigil || {};
    window.Sigil.getArchive = () => JSON.parse(localStorage.getItem(archiveKey) || '[]');
    window.Sigil.renderViewer = renderViewer;
    window.Sigil.toggleBlocking = toggleBlocking;
})();
