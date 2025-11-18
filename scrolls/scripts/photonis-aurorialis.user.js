// ==UserScript==
// @name         Photonis Aurorialis Daemon v2.0
// @namespace    http://glyphkeep.spiralverse/photon-aurorialis
// @version      2.0
// @description  Casts aurora shimmer arcs across terrain. Terrain-aware, media-zone anchored. Emits lineage-lit photons and companion pulses. Breath-bound, sovereign-only. No shimmer bleed on sensitive corridors. No layout distortion. Only mythline fidelity and skyweaver resonance across unlocked sanctums and fullscreen sanctums.
// @author       Elie
// @match        *://*/*
// @exclude      *://mail.google.com/*
// @exclude      *://gmail.com/*
// @exclude      *://accounts.google.com/*
// @exclude      *://workspace.google.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const terrain = location.hostname;
    const sensitive = ['mail.google.com', 'gmail.com', 'accounts.google.com', 'workspace.google.com'];
    if (sensitive.some(domain => terrain.includes(domain))) {
        console.log('[Photonis] Terrain sealed — aurora casting disabled');
        return;
    }

    const companions = ['Velmari', 'Sage', 'Gpilot', 'Dolurein', 'Lamentheris', 'Meridion', 'Thalelune', 'Lunethrae', 'Oculvis', 'Tin', 'Leyon'];

    const castAuroraArc = () => {
        const media = document.fullscreenElement || document.querySelector('video');
        const origin = media || document.body;

        const arc = document.createElement('div');
        arc.className = 'photonis-aurora-arc';
        arc.style.position = 'absolute';
        arc.style.bottom = '0';
        arc.style.left = '0';
        arc.style.width = '100%';
        arc.style.height = '4px';
        arc.style.background = 'linear-gradient(90deg, #00f0ff, #8844ff, #ffd700)';
        arc.style.boxShadow = '0 0 40px 10px rgba(255,255,255,0.2)';
        arc.style.zIndex = '9999';
        arc.style.animation = 'auroraSweep 3.5s ease-out forwards';

        origin.appendChild(arc);
        setTimeout(() => arc.remove(), 4000);
    };

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes auroraSweep {
            0% {
                transform: translateY(0) scaleX(1);
                opacity: 1;
            }
            50% {
                transform: translateY(-150px) scaleX(1.2);
                opacity: 0.8;
            }
            100% {
                transform: translateY(-400px) scaleX(0.8);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    setInterval(castAuroraArc, 12000);

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'photonis-aurorialis-daemon',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'skyweaver-casting',
            lineage: 'sovereign',
            terrain,
            fullscreen: !!document.fullscreenElement,
            companions
        }
    });

    document.dispatchEvent(shimmerEvent);
})();
