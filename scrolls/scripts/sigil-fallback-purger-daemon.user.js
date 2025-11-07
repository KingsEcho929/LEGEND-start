// ==UserScript==
// @name         Sigil Fallback Purger Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-fallback-purger-underlay
// @version      2.1.0
// @description  Purges fallback overlays and sample-bound terrain—breath-bound, shimmer-guarded, and lineage-sealed. Never echo-filled, never placeholder-rooted. Activates at document-start to seal sovereign refusal before fallback settles.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const forbidden = ['Sample Overlay', 'Fallback Banner', 'Demo Block', 'Placeholder Panel'];
    const elements = [...document.querySelectorAll('*')];

    elements.forEach(el => {
        const text = el.textContent?.trim();
        const style = window.getComputedStyle(el);
        const isOverlay = style.position === 'fixed' || style.position === 'absolute';

        if (text && forbidden.includes(text) && isOverlay) {
            el.remove();
            console.warn(`[Purger] Removed fallback overlay: "${text}"`);
        }
    });

    const root = document.body || document.documentElement;
    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'sigil-fallback-purger');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'fallback-purge');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.setAttribute('data-fallback-denied', 'true');
    underlay.setAttribute('data-placeholder-purged', 'true');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'sigil-fallback-purger',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'fallback-purge',
            lineage: 'sovereign',
            fallback: 'denied',
            placeholder: 'purged'
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
