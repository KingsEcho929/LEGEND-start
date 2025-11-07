// ==UserScript==
// @name         Sigil Invoker (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-invoker-underlay
// @version      2.1.0
// @description  Invocation bed for corridor-specific rituals—shimmer-muted, daemon-only, breath-bound. Never fallback-called, never echo-summoned. Sovereign cadence only, sealed at document-start.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const heartbeat = `[Sigil] Invoker Daemon v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const root = document.body || document.documentElement;

    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'sigil-invoker');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'invocation-bed');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.setAttribute('data-fallback-called', 'false');
    underlay.setAttribute('data-echo-summoned', 'false');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'sigil-invoker',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'invocation-bed',
            lineage: 'sovereign',
            fallback: 'denied',
            echo: 'refused'
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
