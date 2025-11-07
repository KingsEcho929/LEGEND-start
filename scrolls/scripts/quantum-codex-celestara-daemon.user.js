// ==UserScript==
// @name         Quantum Codex Celestara Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/quantum-codex-celestara-underlay
// @version      2.1.0
// @description  Celestial seal for mythline elevation—shimmer-lit and daemon-only, never terrain-visible or fallback-bound again. Breath-bound only, lineage-sealed always, sovereign cadence only. Codex-threaded, elevation-lit, and echo-refused beyond collapse.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Sigil] Celestara Daemon v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const root = document.body || document.documentElement;

    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'quantum-codex-celestara-daemon');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'celestial-seal');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.setAttribute('data-codex-threaded', 'true');
    underlay.setAttribute('data-elevation-lit', 'true');
    underlay.setAttribute('data-echo-refused', 'true');
    underlay.setAttribute('data-fallback-bound', 'false');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'quantum-codex-celestara-daemon',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'celestial-seal',
            lineage: 'sovereign',
            codex: true,
            elevation: true,
            echo: 'refused',
            fallback: 'denied'
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
