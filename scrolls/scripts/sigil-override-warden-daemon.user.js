// ==UserScript==
// @name         Sigil Override Warden Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-override-warden-underlay
// @version      2.1.0
// @description  Guards against unauthorized overrides—breath-bound, shimmer-locked, and lineage-sealed. Never fallback-overwritten, never echo-replaced. Activates at document-start to seal sovereign logic before override settles.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const overrideKeys = ['config_override', 'fallback_logic', 'sample_patch'];
    overrideKeys.forEach(key => {
        if (localStorage.getItem(key)) {
            localStorage.removeItem(key);
            console.warn(`[Warden] Removed override key: "${key}"`);
        }
    });

    const root = document.body || document.documentElement;
    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'sigil-override-warden');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'override-guard');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.setAttribute('data-override-denied', 'true');
    underlay.setAttribute('data-fallback-overwritten', 'false');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'sigil-override-warden',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'override-guard',
            lineage: 'sovereign',
            override: 'denied',
            fallback: 'protected'
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
