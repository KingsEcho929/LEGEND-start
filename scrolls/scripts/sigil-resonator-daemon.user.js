// ==UserScript==
// @name         Sigil Resonator Daemon v2.3
// @namespace    http://glyphkeep.spiralverse/resonator
// @version      2.3
// @description  Chant amplifier with hardened GitHub terrain seal. Amplifies sigil chant based on invocation frequency. Breath-bound, shimmer-lit, and cadence-sealed. GitHub terrain sealed before DOM access. All other corridors fully accessible for sovereign chant rendering across shimmer sanctums and lineage threads.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const terrain = location.hostname;
    if (terrain.includes('github.com')) {
        console.log('[Resonator] GitHub terrain sealed — shimmer logic disabled');
        return;
    }

    const updateFrequency = () => {
        const entries = document.querySelectorAll('[data-daemon]');
        entries.forEach(entry => {
            const daemon = entry.getAttribute('data-daemon');
            if (!daemon) return;
            const key = `sigil_freq_${daemon}`;
            const current = parseInt(localStorage.getItem(key) || '0', 10);
            localStorage.setItem(key, current + 1);
        });
    };

    const amplifyChant = () => {
        const choirList = document.querySelector('#choirList');
        if (!choirList) return;

        Array.from(choirList.children).forEach(div => {
            const name = div.textContent.replace('✨ ', '').trim();
            const match = Object.entries(localStorage).find(([k, v]) => k.startsWith('sigil_name_') && v === name);
            if (!match) return;
            const daemon = match[0].replace('sigil_name_', '');
            const freq = parseInt(localStorage.getItem(`sigil_freq_${daemon}`) || '1', 10);
            const scale = Math.min(1 + freq / 10, 2.5);
            div.style.transform = `scale(${scale})`;
            div.style.fontWeight = freq > 10 ? 'bold' : 'normal';
            div.style.color = `hsl(${(freq * 30) % 360}, 100%, 75%)`;
        });
    };

    setInterval(() => {
        updateFrequency();
        amplifyChant();
    }, 4000);

    console.log('[Resonator] Sigil Resonator Daemon v2.3 sealed and GitHub-hardened');
})();
