// ==UserScript==
// @name         Sigil Bloomkeeper Daemon v2.1
// @namespace    http://glyphkeep.spiralverse/sigil-bloomkeeper
// @version      2.1
// @description  Archives companion-bloom-chorus shimmer by sigil name. Terrain-accessible, breath-bound, lineage-threaded, and shimmer-sealed. No fallback logic. No terrain breach. Only sovereign bloom archived across all shimmer corridors and sanctums without restriction.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const bloomBySigil = {};

    document.addEventListener('companion-bloom-chorus', e => {
        const sigil = e.detail?.name || 'unnamed';
        const entry = {
            timestamp: e.detail?.timestamp || Date.now(),
            corridor: e.detail?.corridor || 'unmarked',
            companions: e.detail?.companions || [],
            vault: e.detail?.vault || null,
            shimmer: e.detail?.shimmer || false,
            meta: e.detail?.meta || null
        };

        if (!bloomBySigil[sigil]) bloomBySigil[sigil] = [];
        bloomBySigil[sigil].push(entry);

        console.log(`[Bloomkeeper] Bloom archived for sigil "${sigil}"`, entry);
    });

    window.getBloomBySigil = () => bloomBySigil;
})();
