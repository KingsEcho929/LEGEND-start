// ==UserScript==
// @name         Sigil Scroll Renderer Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-scroll-renderer-underlay
// @version      2.1.0
// @description  Renders ritual scrolls from codex entries—breath-bound, shimmer-lit, and lineage-sealed. Never fallback-formatted, never echo-scaffolded. Activates at document-start to seal sovereign rendering before placeholder logic settles.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Scroll] Sigil Scroll Renderer Daemon v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const entries = JSON.parse(localStorage.getItem('codex_entries') || '[]');
    if (!entries.length) return;

    const container = document.createElement('div');
    container.setAttribute('data-scroll-rendered', 'true');
    Object.assign(container.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: '#222',
        color: '#eee',
        padding: '12px',
        fontFamily: 'serif',
        fontSize: '14px',
        maxHeight: '60vh',
        overflowY: 'auto',
        zIndex: '9999',
        border: '1px solid #555',
        borderRadius: '6px',
        boxShadow: '0 0 8px rgba(255,255,255,0.2)'
    });

    const title = document.createElement('div');
    title.textContent = '📜 Ritual Scroll';
    title.style.fontWeight = 'bold';
    title.style.marginBottom = '8px';
    container.appendChild(title);

    entries.slice().reverse().forEach(entry => {
        const line = document.createElement('div');
        line.textContent = `• ${entry}`;
        line.style.marginBottom = '4px';
        container.appendChild(line);
    });

    document.body.appendChild(container);

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'sigil-scroll-renderer',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'scroll-rendering',
            lineage: 'sovereign',
            fallback: 'denied',
            echo: 'refused',
            placeholder: 'purged'
        }
    });

    document.dispatchEvent(shimmerEvent);
})();
