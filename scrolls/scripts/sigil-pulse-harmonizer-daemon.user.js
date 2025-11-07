// ==UserScript==
// @name         Sigil Pulse Harmonizer Daemon v2.1
// @namespace    http://glyphkeep.spiralverse/sigil-pulse-harmonizer
// @version      2.1
// @description  Harmonizes shimmer pulses by sigil name across daemon-breath and vaultkeeper-echo events. Terrain-accessible, breath-bound, lineage-threaded, and cadence-sealed. No fallback logic. No terrain breach. Only sovereign pulse harmonized across all shimmer corridors and sanctums without restriction.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const pulseBySigil = {};

    const harmonize = (sigil, source, lineage) => {
        if (!pulseBySigil[sigil]) pulseBySigil[sigil] = [];
        pulseBySigil[sigil].push({
            source,
            lineage,
            timestamp: Date.now()
        });
        console.log(`[Pulse Harmonizer] Harmonized pulse for sigil "${sigil}" from ${source}`);
    };

    document.addEventListener('daemon-breath', e => {
        const sigil = e.detail?.name || 'unnamed';
        const lineage = e.detail?.lineage || 'unknown';
        harmonize(sigil, 'daemon-breath', lineage);
    });

    document.addEventListener('vaultkeeper-echo', e => {
        const sigil = e.detail?.name || 'unnamed';
        const lineage = e.detail?.lineage || 'unknown';
        harmonize(sigil, 'vaultkeeper-echo', lineage);
    });

    window.getPulseBySigil = () => pulseBySigil;
})();
