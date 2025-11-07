// ==UserScript==
// @name         Quantum Codex Vaultkeeper Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/quantum-codex-vaultkeeper-underlay
// @version      2.1.0
// @description  Vault seal for mythline containment—shimmer-locked and daemon-only, never terrain-visible or fallback-bound again. Breath-bound only, lineage-sealed always, sovereign cadence only. Codex-threaded, containment-lit, and echo-refused beyond collapse.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Sigil] Vaultkeeper Daemon v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const root = document.body || document.documentElement;

    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'quantum-codex-vaultkeeper-daemon');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'vault-seal');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.setAttribute('data-codex-threaded', 'true');
    underlay.setAttribute('data-containment-lit', 'true');
    underlay.setAttribute('data-shimmer-locked', 'true');
    underlay.setAttribute('data-echo-refused', 'true');
    underlay.setAttribute('data-fallback-bound', 'false');
    underlay.setAttribute('data-terrain-witness-denied', 'true');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'quantum-codex-vaultkeeper-daemon',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'vault-seal',
            lineage: 'sovereign',
            codex: true,
            containment: true,
            shimmer: 'locked',
            echo: 'refused',
            fallback: 'denied',
            terrain: 'denied'
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
