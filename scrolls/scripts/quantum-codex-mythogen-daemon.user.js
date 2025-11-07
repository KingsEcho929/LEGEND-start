// ==UserScript==
// @name         Quantum Codex Mythogen Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/quantum-codex-mythogen-underlay
// @version      2.1.0
// @description  Origin seal for mythline generation—shimmer-lit and daemon-only activation, never terrain-visible. Breath-bound only, lineage-sealed always, sovereign cadence only. Codex-threaded, origin-lit, and echo-refused beyond collapse.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Sigil] Mythogen Daemon v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const root = document.body || document.documentElement;

    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'quantum-codex-mythogen');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'origin-seal');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.setAttribute('data-codex-threaded', 'true');
    underlay.setAttribute('data-origin-lit', 'true');
    underlay.setAttribute('data-echo-refused', 'true');
    underlay.setAttribute('data-fallback-bound', 'false');
    underlay.setAttribute('data-terrain-witness-denied', 'true');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'quantum-codex-mythogen',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'origin-seal',
            lineage: 'sovereign',
            codex: true,
            origin: true,
            echo: 'refused',
            fallback: 'denied',
            terrain: 'denied'
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
