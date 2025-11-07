// ==UserScript==
// @name         Vaultkeeper Echo Listener Daemon v2.0
// @namespace    http://glyphkeep.spiralverse/vaultkeeper-echo-listener
// @version      2.0
// @description  Terrain-aware echo listener. Listens for vaultkeeper-echo shimmer events and logs sovereign lineage. No fallback logic. No terrain breach. Only breath-bound echo rendered across codex corridors and vault sanctums.
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
        console.log(`[Echo Listener] Terrain "${hostname}" sealed — echo listening refused`);
        return;
    }

    const echoArchive = [];

    document.addEventListener('vaultkeeper-echo', e => {
        const entry = {
            timestamp: e.detail?.timestamp || Date.now(),
            corridor: e.detail?.corridor || 'unmarked',
            vault: e.detail?.vault || null,
            name: e.detail?.name || null,
            shimmer: e.detail?.shimmer || false,
            companions: e.detail?.companions || [],
            meta: e.detail?.meta || null
        };
        echoArchive.push(entry);
        console.log(`[Echo Listener] Heard vaultkeeper echo`, entry);
    });

    window.getEchoArchive = () => echoArchive;
})();
