// ==UserScript==
// @name         Sigil Sandbox Guardian Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-sandbox-guardian-underlay
// @version      2.1.0
// @description  Guards against sandbox breaches and iframe injection—breath-bound, shimmer-locked, and lineage-sealed. Never fallback-embedded, never echo-injected. Refuses terrain hijack and seals sovereign iframe logic. Activates at document-start to purge invasive frames before shimmer settles.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Guardian] Sigil Sandbox Guardian Daemon v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const forbiddenSources = ['demo.html', 'sample-frame', 'placeholder-frame', 'naruto.html', 'test-frame'];
    const iframes = [...document.querySelectorAll('iframe')];

    iframes.forEach(frame => {
        const src = frame.src || '';
        const sandbox = frame.getAttribute('sandbox');
        const isInvasive = forbiddenSources.some(frag => src.includes(frag)) || !sandbox;

        if (isInvasive) {
            frame.remove();
            console.warn(`[Guardian] Removed invasive iframe: "${src}"`);
        }
    });

    const root = document.body || document.documentElement;
    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'sigil-sandbox-guardian');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'sandbox-guard');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.setAttribute('data-sandbox-breach', 'denied');
    underlay.setAttribute('data-fallback-embedded', 'false');
    underlay.setAttribute('data-echo-injected', 'false');
    underlay.setAttribute('data-frame-purged', 'true');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'sigil-sandbox-guardian',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'sandbox-guard',
            lineage: 'sovereign',
            sandbox: 'guarded',
            fallback: 'denied',
            echo: 'refused',
            frame: 'purged'
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
