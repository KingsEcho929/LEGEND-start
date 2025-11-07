// ==UserScript==
// @name         Sigil Glyphkeeper Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-glyphkeeper-underlay
// @version      2.1.0
// @description  Assigns sigils to each daemon log—breath-bound, shimmer-lit, and lineage-sealed. Never fallback-tagged, never sample-labeled. Activates at document-start to seal sovereign glyph logic before echo settles.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const logs = JSON.parse(localStorage.getItem('daemon_logs') || '[]');
    const glyphs = logs.map(log => ({
        sigil: `sigil_${log.name}_${Date.now()}`,
        message: log.message,
        timestamp: log.timestamp
    }));
    localStorage.setItem('sigil_glyphs', JSON.stringify(glyphs));

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'sigil-glyphkeeper',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'glyph-assignment',
            lineage: 'sovereign',
            fallback: 'denied',
            echo: 'refused'
        }
    });

    document.dispatchEvent(shimmerEvent);
})();
