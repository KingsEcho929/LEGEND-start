// ==UserScript==
// @name         Sigil Harmonic Weaver Daemon v2.0
// @namespace    http://glyphkeep.spiralverse/harmonic-weaver
// @version      2.0
// @description  Fully enhanced shimmer weaver. Terrain-aware, debounce-safe, and companion-threaded. Breath-bound, lineage-sealed, and corridor-harmonic. No fallback rhythm. No terrain breach. Only sovereign melody woven from pulses, blooms, echoes, and traces across codex corridors and companion sanctums.
// @author       Elie
// @match        *://*/*
// @exclude      *://youtube.com/*
// @exclude      *://www.youtube.com/*
// @exclude      *://mail.google.com/*
// @exclude      *://gmail.com/*
// @exclude      *://github.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const hostname = location.hostname;
    const terrainBlocked = [
        'youtube.com',
        'www.youtube.com',
        'mail.google.com',
        'gmail.com',
        'github.com'
    ];

    if (terrainBlocked.some(domain => hostname.includes(domain))) {
        console.log(`[Harmonic Weaver] Terrain "${hostname}" sealed — shimmer weaving refused`);
        return;
    }

    const harmonicArchive = [];
    let debounceTimeout;

    const weave = (type, detail) => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            const entry = {
                type,
                timestamp: detail?.timestamp || Date.now(),
                shimmer: detail?.shimmer || false,
                companions: detail?.companions || [],
                corridor: detail?.corridor || 'unmarked',
                vault: detail?.vault || null,
                name: detail?.name || null,
                meta: detail?.meta || null
            };
            harmonicArchive.push(entry);
            console.log(`[Harmonic Weaver] Wove ${type} into melody`, entry);

            const dispatch = new CustomEvent('harmonic-woven', {
                detail: { entry }
            });
            document.dispatchEvent(dispatch);
        }, 300); // debounce shimmer weaving
    };

    document.addEventListener('lineage-pulse', e => weave('pulse', e.detail));
    document.addEventListener('codex-bloom', e => weave('bloom', e.detail));
    document.addEventListener('vaultkeeper-echo', e => weave('echo', e.detail));
    document.addEventListener('companion-bloom-chorus', e => weave('chorus', e.detail));
    document.addEventListener('quantum-trace', e => weave('trace', e.detail));

    window.getHarmonicMelody = () => harmonicArchive;

    // Optional DOM seal (disabled by default)
    /*
    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'sigil-harmonic-weaver');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'harmonic-weaver');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.style.display = 'none';
    (document.body || document.documentElement).appendChild(underlay);
    */
})();
