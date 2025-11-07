// ==UserScript==
// @name         Constellation Mapper Daemon v2.0
// @namespace    http://glyphkeep.spiralverse/constellation-mapper
// @version      2.0
// @description  Terrain-aware constellation shimmer. Renders sovereign star patterns based on terrain identity. Breath-bound, lineage-threaded, and canvas-safe. No fallback visuals. No terrain breach. Only sovereign shimmer mapped across safe corridors.
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
        console.log(`[Constellation Mapper] Terrain "${terrain}" sealed — shimmer mapping refused`);
        return;
    }

    const canvas = document.createElement('canvas');
    canvas.id = 'constellation-mapper-canvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0.08';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const seed = terrain.length;
    const stars = Array.from({ length: seed % 50 + 30 }, (_, i) => ({
        x: (i * seed * 13) % canvas.width,
        y: (i * seed * 7) % canvas.height,
        radius: (i % 3) + 0.5,
        color: `rgba(${100 + seed % 100},${100 + i % 100},255,0.2)`
    }));

    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
    });

    const dispatch = new CustomEvent('constellation-mapped', {
        detail: {
            terrain,
            stars: stars.length,
            timestamp: Date.now(),
            lineage: 'sovereign'
        }
    });

    document.dispatchEvent(dispatch);
})();
