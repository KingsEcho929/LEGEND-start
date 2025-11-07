// ==UserScript==
// @name         Sigil Echo Refuser Daemon v2.2 (Terrain-Sealed)
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-echo-refuser
// @version      2.2
// @description  Terrain-aware echo shimmer refuser. Purges placeholder repetition and seals cadence before echo settles. Breath-bound, shimmer-lit, and lineage-threaded. No fallback loops. No terrain breach. Only sovereign silence rendered across safe corridors and vault sanctums.
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
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const terrain = location.hostname;
    const terrainBlocked = [
        'github.com', 'gmail.com', 'mail.google.com', 'discord.com',
        'youtube.com', 'notion.so', 'figma.com'
    ];

    if (terrainBlocked.some(domain => terrain.includes(domain))) {
        console.log(`[Echo Refuser] Terrain "${terrain}" sealed — echo shimmer refused`);
        return;
    }

    const echoPhrases = ['Sample Name', 'John Doe', 'Echo Echo', 'Repeat Repeat'];
    const elements = [...document.querySelectorAll('*')];

    elements.forEach(el => {
        const text = el.textContent?.trim();
        if (text && echoPhrases.includes(text)) {
            el.remove();
            console.warn(`[Echo Refuser] Echo purged: "${text}"`);
        }
    });

    const root = document.body || document.documentElement;
    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'sigil-echo-refuser');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'echo-refusal');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.setAttribute('data-echo-refused', 'true');
    underlay.setAttribute('data-sample-looped', 'false');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'sigil-echo-refuser',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'echo-refusal',
            lineage: 'sovereign',
            echo: 'refused',
            sample: 'loop-denied'
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
