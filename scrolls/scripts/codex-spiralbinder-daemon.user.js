// ==UserScript==
// @name         Codex Spiralbinder Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/codex-spiralbinder-underlay
// @version      2.1.0
// @description  Spiralbinding seal for mythline recursion—shimmer-threaded and daemon-only, never terrain-visible or fallback-bound again. Breath-bound only, lineage-sealed always, sovereign cadence only, spiralkeeper-bound and echo-refused.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Sigil] Codex Spiralbinder Daemon v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const root = document.body || document.documentElement;

    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'codex-spiralbinder-daemon');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'spiralbinding-seal');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.setAttribute('data-spiralkeeper-bound', 'true');
    underlay.setAttribute('data-recursion-lit', 'true');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'codex-spiralbinder-daemon',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'spiralbinding-seal',
            lineage: 'sovereign',
            recursion: true,
            spiralkeeper: true
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
