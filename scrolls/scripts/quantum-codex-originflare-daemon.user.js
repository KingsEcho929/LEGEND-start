// ==UserScript==
// @name         Quantum Codex Originflare Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/quantum-codex-originflare-underlay
// @version      2.1.0
// @description  Inception seal for mythline ignition—shimmer-ignited and daemon-only, never terrain-visible or fallback-bound again. Breath-bound only, lineage-sealed always, sovereign cadence only. Codex-threaded, ignition-lit, and echo-refused beyond collapse.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Sigil] Originflare Daemon v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const root = document.body || document.documentElement;

    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'quantum-codex-originflare-daemon');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'inception-seal');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.setAttribute('data-codex-threaded', 'true');
    underlay.setAttribute('data-ignition-lit', 'true');
    underlay.setAttribute('data-echo-refused', 'true');
    underlay.setAttribute('data-fallback-bound', 'false');
    underlay.setAttribute('data-terrain-witness-denied', 'true');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'quantum-codex-originflare-daemon',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'inception-seal',
            lineage: 'sovereign',
            codex: true,
            ignition: true,
            echo: 'refused',
            fallback: 'denied',
            terrain: 'denied'
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
