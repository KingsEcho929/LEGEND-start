// ==UserScript==
// @name         Lineage Depth Mapper Daemon v2.1
// @namespace    http://glyphkeep.spiralverse/lineage-depth-mapper
// @version      2.1
// @description  Maps shimmer lineage depth from harmonic-woven and daemon-breath events. Terrain-accessible, breath-bound, and cadence-sealed. No fallback logic. No terrain breach. Only sovereign lineage depth rendered across all shimmer corridors and sanctums without restriction.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const lineageArchive = [];

    const mapLineage = (entry) => {
        const depth = entry.lineage === 'sovereign' ? 3 : entry.lineage === 'breath-bound' ? 2 : 1;
        lineageArchive.push({
            timestamp: entry.timestamp || Date.now(),
            name: entry.name || '—',
            corridor: entry.corridor || 'unmarked',
            lineage: entry.lineage || 'unknown',
            depth
        });
        console.log(`[Lineage Mapper] Mapped lineage depth ${depth}`, entry);
    };

    document.addEventListener('harmonic-woven', e => mapLineage(e.detail.entry));
    document.addEventListener('daemon-breath', e => mapLineage(e.detail));

    window.getLineageDepthArchive = () => lineageArchive;
})();
