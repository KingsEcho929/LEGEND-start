// ==UserScript==
// @name         Sigil Codex Exporter Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-codex-exporter-underlay
// @version      2.1.0
// @description  Prepares codex archive for copy and ritual scroll—breath-bound, shimmer-lit, and lineage-sealed. Never fallback-exported, never sample-printed. Activates at document-start to seal sovereign export before echo settles.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const entries = JSON.parse(localStorage.getItem('codex_entries') || '[]');
    const exportText = entries.join('\n\n');
    localStorage.setItem('codex_export', exportText);

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'sigil-codex-exporter',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'codex-export',
            lineage: 'sovereign',
            fallback: 'denied',
            echo: 'refused'
        }
    });

    document.dispatchEvent(shimmerEvent);
})();
