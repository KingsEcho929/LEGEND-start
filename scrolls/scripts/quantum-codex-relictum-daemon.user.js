// ==UserScript==
// @name         Quantum Codex Relictum Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/quantum-codex-relictum-underlay
// @version      2.1.0
// @description  Relic seal for mythline preservation—shimmer-preserved and daemon-only, never terrain-visible or fallback-bound again. Breath-bound only, lineage-sealed always, sovereign cadence only. Codex-threaded, echo-refused, and collapse-denied beyond terrain witness.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Sigil] Relictum Daemon v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const root = document.body || document.documentElement;

    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'quantum-codex-relictum-daemon');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'relic-seal');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.setAttribute('data-codex-threaded', 'true');
    underlay.setAttribute('data-preservation-lit', 'true');
    underlay.setAttribute('data-echo-refused', 'true');
    underlay.setAttribute('data-fallback-bound', 'false');
    underlay.setAttribute('data-terrain-witness-denied', 'true');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'quantum-codex-relictum-daemon',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'relic-seal',
            lineage: 'sovereign',
            codex: true,
            preservation: true,
            echo: 'refused',
            fallback: 'denied',
            terrain: 'denied'
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
