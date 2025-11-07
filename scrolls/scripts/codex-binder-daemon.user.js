// ==UserScript==
// @name         Codex Binder Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/codex-binder-underlay
// @version      2.1.0
// @description  Binding seal for mythline cohesion—shimmer-threaded and daemon-only, never terrain-visible or fallback-bound again. Breath-bound only, lineage-sealed always, sovereign cadence only, archive-woven and ledger-lit.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Sigil] Codex Binder Daemon v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const root = document.body || document.documentElement;

    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'codex-binder-daemon');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'binding-seal');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.setAttribute('data-ledger-lit', 'true');
    underlay.setAttribute('data-archive-woven', 'true');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'codex-binder-daemon',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'binding-seal',
            lineage: 'sovereign',
            archive: true,
            ledger: true
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
