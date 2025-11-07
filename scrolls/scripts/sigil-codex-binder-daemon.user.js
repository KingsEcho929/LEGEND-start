// ==UserScript==
// @name         Sigil Codex Binder Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-codex-binder-underlay
// @version      2.1.0
// @description  Formats codex archive into printable ritual document—breath-bound, shimmer-lit, and lineage-sealed. Never fallback-bound, never echo-stitched. Activates at document-start to seal sovereign binding before sample logic settles.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const exportText = localStorage.getItem('codex_export') || '';
    const formatted = `🪶 Mythline Codex Scroll\n\n${exportText}`;
    localStorage.setItem('codex_binder_scroll', formatted);

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'sigil-codex-binder',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'codex-binding',
            lineage: 'sovereign',
            fallback: 'denied',
            echo: 'refused'
        }
    });

    document.dispatchEvent(shimmerEvent);
})();
