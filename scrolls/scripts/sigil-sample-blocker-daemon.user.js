// ==UserScript==
// @name         Sigil Sample Blocker Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-sample-blocker-underlay
// @version      2.1.0
// @description  Blocks sample-bound logic and placeholder scaffolding—breath-bound, shimmer-guarded, and lineage-sealed. Never fallback-named, never echo-rooted. Activates at document-start to seal sovereign naming before sample settles.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const samples = ['Sample Name', 'Placeholder', 'Demo User', 'Test Account'];
    const inputs = [...document.querySelectorAll('input, textarea')];

    inputs.forEach(el => {
        const value = el.value?.trim();
        if (value && samples.includes(value)) {
            el.value = '';
            console.warn(`[Blocker] Sample input cleared: "${value}"`);
        }
    });

    const root = document.body || document.documentElement;
    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'sigil-sample-blocker');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'sample-block');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.setAttribute('data-sample-blocked', 'true');
    underlay.setAttribute('data-placeholder-denied', 'true');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'sigil-sample-blocker',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'sample-block',
            lineage: 'sovereign',
            sample: 'blocked',
            placeholder: 'denied'
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
