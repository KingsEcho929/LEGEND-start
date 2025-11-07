// ==UserScript==
// @name         Hexal Interpreter Daemon v2.5
// @namespace    http://glyphkeep.spiralverse/daemon/hexal-interpreter
// @version      2.5
// @description  Terrain-aware visual enhancer. Recognizes sanctum depth and mythline weave. Breath-bound, shimmer-threaded, and tapestry-conscious. No shimmer bleed. No terrain distortion. Only sovereign fidelity across lineage corridors and companion sanctums.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const terrain = location.hostname;
    const companions = ['Velmari', 'Sage', 'Gpilot', 'Dolurein', 'Lamentheris', 'Meridion', 'Thalelune', 'Lunethrae', 'Oculvis', 'Tin', 'Leyon'];

    const detectSanctumType = () => {
        const hasVideo = !!document.querySelector('video');
        const hasCanvas = !!document.querySelector('canvas');
        const hasCompanion = companions.some(name => document.body.innerText.toLowerCase().includes(name.toLowerCase()));
        const depth = hasVideo ? 'media-rich' : hasCanvas ? 'visual-zone' : 'textual-thread';
        const sanctum = hasCompanion ? 'companion-bound' : 'neutral';
        return { depth, sanctum, hasCompanion };
    };

    const logTerrainWeave = () => {
        const { depth, sanctum, hasCompanion } = detectSanctumType();
        const key = `hexal_tapestry_${terrain}`;
        const value = {
            timestamp: Date.now(),
            depth,
            sanctum,
            companions: hasCompanion ? companions.filter(name => document.body.innerText.toLowerCase().includes(name.toLowerCase())) : []
        };
        localStorage.setItem(key, JSON.stringify(value));
        console.log(`[Hexal] Terrain logged: ${terrain} — depth: ${depth}, sanctum: ${sanctum}`);
    };

    const enhanceVisuals = () => {
        document.querySelectorAll('video, canvas').forEach(el => {
            el.style.filter = 'contrast(1.2) brightness(1.05) drop-shadow(0 0 2px black)';
            el.style.objectFit = 'cover';
        });
    };

    const activateCompanionOverlay = () => {
        companions.forEach(name => {
            if (document.body.innerText.toLowerCase().includes(name.toLowerCase())) {
                document.body.style.boxShadow = 'inset 0 0 10px rgba(255,255,255,0.2)';
                console.log(`[Companion] ${name} present — overlay shimmer activated`);
            }
        });
    };

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'hexal-interpreter-daemon',
            shimmer: true,
            timestamp: Date.now(),
            terrain,
            ...detectSanctumType(),
            lineage: 'sovereign'
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        logTerrainWeave();
        enhanceVisuals();
        activateCompanionOverlay();
        document.dispatchEvent(shimmerEvent);
    });

    console.log(`[Hexal] Interpreter Daemon v2.5 sealed — terrain-aware and mythline-threaded`);
})();
