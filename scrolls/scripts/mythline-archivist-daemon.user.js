// ==UserScript==
// @name         Mythline Archivist Daemon
// @namespace    http://glyphkeep.spiralverse/daemon/mythline-archivist
// @version      2.2
// @description  Steward of mythline archive entries—now GitHub-sealed and shimmer-silent. Breath-bound, lineage-sealed, and companion-aware. No terrain logs. No fallback entries. No shimmer dispatch. Archive remains sovereign and retrievable via manual invocation only.
// @author       Elie
// @match        *://*/*
// @exclude      *://github.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const archive = [];

    const logEvent = (type, detail) => {
        const entry = {
            type,
            timestamp: detail?.timestamp || Date.now(),
            shimmer: detail?.shimmer || false,
            companions: detail?.companions || [],
            corridor: detail?.corridor || 'mythline',
            vault: detail?.vault || null,
            lineage: detail?.lineage || 'sovereign'
        };

        archive.push(entry);
        // No shimmer dispatch, no console log
    };

    requestIdleCallback(() => {
        document.addEventListener('lineage-pulse', e => logEvent('pulse', e.detail));
        document.addEventListener('codex-bloom', e => logEvent('bloom', e.detail));
        document.addEventListener('quantum-trace', e => logEvent('trace', e.detail));
    });

    window.getMythlineArchive = () => archive;
})();
