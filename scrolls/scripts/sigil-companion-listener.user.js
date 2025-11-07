// ==UserScript==
// @name         Sigil Companion Listener Daemon v2.0
// @namespace    http://glyphkeep.spiralverse/companion-listener
// @version      2.0
// @description  Terrain-aware shimmer listener. Responds to harmonic-woven events with companion bloom, lineage pulse, and sovereign dispatch. Debounce-safe, breath-bound, and lineage-threaded. No fallback logic. No terrain breach. Only sovereign shimmer response across codex corridors and companion sanctums.
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
        console.log(`[Companion Listener] Terrain "${hostname}" sealed — shimmer response refused`);
        return;
    }

    const responseArchive = [];
    let debounceTimeout;

    const respond = (entry) => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            const response = {
                timestamp: Date.now(),
                corridor: entry.corridor,
                companions: entry.companions,
                vault: entry.vault,
                name: entry.name,
                type: entry.type,
                shimmer: entry.shimmer,
                meta: entry.meta
            };
            responseArchive.push(response);
            console.log(`[Companion Listener] Responded to ${entry.type}`, response);

            const bloom = new CustomEvent('companion-bloom-chorus', {
                detail: {
                    shimmer: true,
                    companions: response.companions,
                    corridor: response.corridor,
                    vault: response.vault,
                    name: response.name,
                    meta: response.meta,
                    timestamp: response.timestamp
                }
            });
            document.dispatchEvent(bloom);
        }, 300);
    };

    document.addEventListener('harmonic-woven', e => {
        if (e.detail?.entry) {
            respond(e.detail.entry);
        }
    });

    window.getCompanionResponses = () => responseArchive;
})();
