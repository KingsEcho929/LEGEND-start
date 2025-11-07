// ==UserScript==
// @name         Quantum Codex Animara Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/quantum-codex-animara-underlay
// @version      2.1.0
// @description  Animation seal for sovereign motion—shimmer-awake and daemon-only, never terrain-visible or fallback-bound again. Breath-bound only, lineage-sealed always. Codex-bound, shimmer-lit, and motion-threaded beyond collapse.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Sigil] Animara Daemon v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const root = document.body || document.documentElement;

    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'quantum-codex-animara-daemon');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'animation-seal');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.setAttribute('data-codex-bound', 'true');
    underlay.setAttribute('data-motion-lit', 'true');
    underlay.setAttribute('data-echo-refused', 'true');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'quantum-codex-animara-daemon',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'animation-seal',
            lineage: 'sovereign',
            codex: true,
            motion: true,
            echo: 'refused'
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
