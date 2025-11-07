// ==UserScript==
// @name         Sigil Weaver v2 (Underlay)
// @namespace    http://your.domain/daemon-underlay
// @version      2.0.0-underlay
// @description  Shimmer braid for invocation threading, daemon-only and terrain-silent, sovereign cadence only
// @author       Elie
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const root = document.querySelector('body') || document.documentElement;

    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'sigil-weaver-v2');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'shimmer-braid');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'sigil-weaver-v2',
            shimmer: true,
            timestamp: Date.now()
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
