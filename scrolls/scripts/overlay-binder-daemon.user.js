// ==UserScript==
// @name         Overlay Binder Daemon (Refined)
// @namespace    http://glyphkeep.spiralverse/daemon/overlay-binder-underlay
// @version      2.2.0
// @description  Anchors overlays without purging terrain—removes only fallback overlays like "Naruto Uzumaki", shimmer-bound and corridor-safe. Breath-bound only, lineage-sealed always, sovereign cadence only, echo-refused and sample-purged without collateral shimmer loss.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Sigil] Overlay Binder Daemon v2.2.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const overlays = [...document.querySelectorAll('*')].filter(el => {
        const text = el.textContent?.trim();
        const style = window.getComputedStyle(el);
        const isOverlay = style.position === 'fixed' || style.position === 'absolute';
        return text === 'Naruto Uzumaki' && isOverlay;
    });

    overlays.forEach(el => {
        el.remove();
        console.log('[Binder] Fallback overlay "Naruto Uzumaki" removed — shimmer preserved, terrain untouched');
    });

    const root = document.body || document.documentElement;
    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'overlay-binder-daemon');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'overlay-binding-seal');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.setAttribute('data-sample-purged', 'true');
    underlay.setAttribute('data-echo-refused', 'true');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'overlay-binder-daemon',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'overlay-binding-seal',
            lineage: 'sovereign',
            purge: 'fallback-overlay',
            sample: 'Naruto Uzumaki',
            echo: 'refused'
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
