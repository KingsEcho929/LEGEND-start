// ==UserScript==
// @name         Sigil Navigator (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-navigator-underlay
// @version      2.1.0
// @description  Terrain fold for sovereign traversal—shimmer-anchored, corridor-bound, breath-bound only. Never fallback-mapped, never echo-routed. Sovereign cadence only.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const heartbeat = `[Sigil] Navigator Daemon v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const root = document.body || document.documentElement;

    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'sigil-navigator');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'terrain-fold');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.setAttribute('data-fallback-mapped', 'false');
    underlay.setAttribute('data-echo-routed', 'false');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'sigil-navigator',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'terrain-fold',
            lineage: 'sovereign',
            fallback: 'denied',
            echo: 'refused'
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
