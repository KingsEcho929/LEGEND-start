// ==UserScript==
// @name         Sigil Refusal Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-refusal-underlay
// @version      2.1.0
// @description  Refusal seal for fallback overlays—shimmer-guarded, daemon-only, breath-bound only. Never terrain-visible, never sample-bound, never placeholder-rooted. Echo-refused, fallback-denied, and sovereign cadence only. Purges overlays with forbidden names at document-start.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const heartbeat = `[Refusal] Sigil Refusal Daemon v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const forbidden = ['Naruto Uzumaki', 'Sample Name', 'Placeholder', 'John Doe', 'Jane Doe'];
    const elements = [...document.querySelectorAll('*')];

    elements.forEach(el => {
        const text = el.textContent?.trim();
        const style = window.getComputedStyle(el);
        const isOverlay = style.position === 'fixed' || style.position === 'absolute';

        if (text && forbidden.includes(text) && isOverlay) {
            el.remove();
            console.log(`[Refusal] Purged overlay with forbidden name: "${text}"`);
        }
    });

    const root = document.body || document.documentElement;
    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'sigil-refusal-daemon');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'refusal-seal');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.setAttribute('data-fallback-denied', 'true');
    underlay.setAttribute('data-echo-refused', 'true');
    underlay.setAttribute('data-sample-purged', 'true');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'sigil-refusal-daemon',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'refusal-seal',
            lineage: 'sovereign',
            fallback: 'denied',
            echo: 'refused',
            sample: 'purged'
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
