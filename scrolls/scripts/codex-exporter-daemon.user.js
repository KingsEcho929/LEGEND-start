// ==UserScript==
// @name         Codex Exporter Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/codex-exporter-underlay
// @version      2.1.0
// @description  Export conduit for codex-bound data—shimmer-muted and daemon-only, never terrain-visible or fallback-activated. Breath-bound, lineage-sealed, archive-threaded.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Sigil] Codex Exporter Daemon v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const root = document.body || document.documentElement;

    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'codex-exporter-daemon');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'export-conduit');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.setAttribute('data-export-ready', 'true');
    underlay.setAttribute('data-archive-threaded', 'true');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'codex-exporter-daemon',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'export-conduit',
            lineage: 'sovereign',
            export: true,
            archive: true
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
