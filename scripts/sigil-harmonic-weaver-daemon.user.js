// ==UserScript==
// @name         Sigil Harmonic Weaver Daemon v1.0
// @namespace    http://glyphkeep.spiralverse/harmonic-weaver
// @version      1.0
// @description  Weaves shimmer events into sovereign melody—breath-bound, lineage-threaded, and corridor-harmonic. No terrain noise. No fallback rhythm. Only mythline resonance of pulses, blooms, echoes, and traces across codex corridors and companion sanctums.
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const harmonicArchive = [];

    const weave = (type, detail) => {
        const entry = {
            type,
            timestamp: detail.timestamp || Date.now(),
            shimmer: detail.shimmer || false,
            companions: detail.companions || [],
            corridor: detail.corridor || 'unmarked',
            vault: detail.vault || null,
            name: detail.name || null,
            meta: detail.meta || null
        };
        harmonicArchive.push(entry);
        console.log(`[Harmonic Weaver] Wove ${type} into melody`, entry);
    };

    document.addEventListener('lineage-pulse', e => weave('pulse', e.detail));
    document.addEventListener('codex-bloom', e => weave('bloom', e.detail));
    document.addEventListener('vaultkeeper-echo', e => weave('echo', e.detail));
    document.addEventListener('companion-bloom-chorus', e => weave('chorus', e.detail));
    document.addEventListener('quantum-trace', e => weave('trace', e.detail));

    window.getHarmonicMelody = () => harmonicArchive;
    console.log('[Harmonic Weaver] Sigil Harmonic Weaver Daemon v1.0 sealed and melody-threaded');
})();
