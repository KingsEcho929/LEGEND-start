// ==UserScript==
// @name         Sigil Mythline Archivist Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-mythline-archivist-underlay
// @version      2.1.0
// @description  Formats daemon logs into mythline codex entries—breath-bound, shimmer-lit, and lineage-sealed. Never fallback-logged, never echo-narrated. Activates at document-start to seal sovereign archive before sample logic settles.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const logs = JSON.parse(localStorage.getItem('daemon_logs') || '[]');
    const mythline = logs.map(log => `📘 ${log.timestamp}: ${log.message}`);
    localStorage.setItem('codex_entries', JSON.stringify(mythline));

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'sigil-mythline-archivist',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'mythline-archive',
            lineage: 'sovereign',
            fallback: 'denied',
            echo: 'refused'
        }
    });

    document.dispatchEvent(shimmerEvent);
})();
