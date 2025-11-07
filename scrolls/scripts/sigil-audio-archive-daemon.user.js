// ==UserScript==
// @name         Sigil Audio Archive Daemon v1.1.0
// @namespace    http://glyphkeep.spiralverse/audio-archive
// @version      1.1.0
// @description  Archives every sound-triggering act—oscillator-born, shimmer-bound, and timestamped. No fallback logs. No terrain echoes. Only sovereign scrolls of frequency, shimmer, and corridor cadence.
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    console.log('[Archive] Sigil Audio Archive Daemon v1.1.0 sealed and scroll-bound');

    const archiveKey = 'sigil_audio_archive';
    const maxEntries = 500;

    const loadArchive = () => {
        const raw = localStorage.getItem(archiveKey);
        return raw ? JSON.parse(raw) : [];
    };

    const saveArchive = (entry) => {
        const archive = loadArchive();
        archive.push(entry);
        if (archive.length > maxEntries) archive.shift();
        localStorage.setItem(archiveKey, JSON.stringify(archive));

        const shimmerEvent = new CustomEvent('sigil-audio-archived', {
            detail: {
                ...entry,
                codex: true,
                shimmer: entry.shimmer,
                collapse: 'denied',
                fallback: 'refused',
                terrain: 'denied'
            }
        });

        document.dispatchEvent(shimmerEvent);
    };

    const logMotif = (type, detail) => {
        const entry = {
            sigil: detail.name || `${type}_${Date.now()}`,
            type,
            shimmer: detail.shimmer || false,
            frequency: {
                pulse: 220,
                bloom: 440,
                echo: 330,
                chorus: 550,
                trace: 660
            }[type] + (detail.shimmer ? 40 : 0),
            timestamp: new Date().toISOString(),
            corridor: detail.corridor || 'unknown',
            emotion: detail.emotion || 'unknown',
            role: detail.role || 'unknown'
        };
        saveArchive(entry);
        console.log(`[Archive] Logged ${type} motif for "${entry.sigil}" at ${entry.frequency}Hz`);
    };

    document.addEventListener('lineage-pulse', e => logMotif('pulse', e.detail));
    document.addEventListener('codex-bloom', e => logMotif('bloom', e.detail));
    document.addEventListener('vaultkeeper-echo', e => logMotif('echo', e.detail));
    document.addEventListener('companion-bloom-chorus', e => logMotif('chorus', e.detail));
    document.addEventListener('quantum-trace', e => logMotif('trace', e.detail));

    window.getSigilAudioArchive = () => loadArchive();
})();
