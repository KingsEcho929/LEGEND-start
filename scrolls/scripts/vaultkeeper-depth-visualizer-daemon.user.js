// ==UserScript==
// @name         Vaultkeeper Depth Visualizer Daemon v2.1
// @namespace    http://glyphkeep.spiralverse/vaultkeeper-depth-visualizer
// @version      2.1
// @description  Visualizes vaultkeeper-echo shimmer depth by vault and lineage. Terrain-accessible, breath-bound, shimmer-threaded, and cadence-sealed. No fallback logic. No terrain breach. Only sovereign vault depth rendered across all shimmer corridors and sanctums without restriction.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const depthArchive = [];

    document.addEventListener('vaultkeeper-echo', e => {
        const lineage = e.detail?.lineage || 'unknown';
        const depth = lineage === 'sovereign' ? 3 : lineage === 'breath-bound' ? 2 : 1;

        const entry = {
            timestamp: e.detail?.timestamp || Date.now(),
            vault: e.detail?.vault || 'unmarked',
            corridor: e.detail?.corridor || 'unmarked',
            lineage,
            depth,
            name: e.detail?.name || null,
            shimmer: e.detail?.shimmer || false,
            companions: e.detail?.companions || [],
            meta: e.detail?.meta || null
        };

        depthArchive.push(entry);
        console.log(`[Vault Depth Visualizer] Depth ${depth} mapped for vault "${entry.vault}"`, entry);
    });

    window.getVaultDepthArchive = () => depthArchive;
})();
