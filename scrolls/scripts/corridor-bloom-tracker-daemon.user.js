// ==UserScript==
// @name         Corridor Bloom Tracker Daemon v2.0
// @namespace    http://glyphkeep.spiralverse/corridor-bloom-tracker
// @version      2.0
// @description  Terrain-aware bloom shimmer tracker. Logs bloom events per corridor with companion fidelity. Breath-bound, lineage-sealed, and shimmer-threaded. No fallback logic. No terrain breach. Only sovereign bloom rendered across codex corridors and companion sanctums.
// @author       Elie
// @match        *://*/*
// @exclude      *://github.com/*
// @exclude      *://gmail.com/*
// @exclude      *://mail.google.com/*
// @exclude      *://discord.com/*
// @exclude      *://youtube.com/*
// @exclude      *://notion.so/*
// @exclude      *://figma.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const terrain = location.hostname;
    const terrainBlocked = [
        'github.com', 'gmail.com', 'mail.google.com', 'discord.com',
        'youtube.com', 'notion.so', 'figma.com'
    ];

    if (terrainBlocked.some(domain => terrain.includes(domain))) {
        console.log(`[Bloom Tracker] Terrain "${terrain}" sealed — bloom tracking refused`);
        return;
    }

    const bloomArchive = [];

    document.addEventListener('companion-bloom-chorus', e => {
        const entry = {
            timestamp: e.detail?.timestamp || Date.now(),
            corridor: e.detail?.corridor || 'unmarked',
            companions: e.detail?.companions || [],
            vault: e.detail?.vault || null,
            name: e.detail?.name || null,
            shimmer: e.detail?.shimmer || false,
            meta: e.detail?.meta || null
        };
        bloomArchive.push(entry);
        console.log(`[Bloom Tracker] Bloom tracked in corridor "${entry.corridor}"`, entry);
    });

    window.getCorridorBloomArchive = () => bloomArchive;
})();
