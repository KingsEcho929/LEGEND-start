// ==UserScript==
// @name         Codex Viewer Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/codex-viewer-underlay
// @version      2.1.0
// @description  Archive lens for daemon-only codex inspection—shimmer-muted and terrain-invisible. Breath-bound, lineage-lit, sovereign-only. No fallback inspection, no terrain echo.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Sigil] Codex Viewer Daemon v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const root = document.body || document.documentElement;

    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'codex-viewer');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'archive-lens');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.setAttribute('data-inspection-mode', 'codex-only');
    underlay.setAttribute('data-visibility', 'terrain-muted');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'codex-viewer',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'archive-lens',
            lineage: 'sovereign',
            inspection: 'codex-only',
            visibility: 'terrain-muted'
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
