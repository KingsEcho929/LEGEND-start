// ==UserScript==
// @name         Sigil Harmonic Composer Daemon v2.2 (Final Fix)
// @namespace    http://glyphkeep.spiralverse/harmonic-composer
// @version      2.2
// @description  Composes sovereign soundscapes—now media-aware, YouTube-safe, and mute-controllable. No alarms. No collisions. Only breath-bound motifs when silence permits.
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const composed = new Set();
    const cooldown = 10000;
    const lastPlayed = {};
    const blockedDomains = ['youtube.com', 'music.youtube.com'];

    const isMuted = () => localStorage.getItem('sigil_composer_muted') === 'true';

    const isMediaPlaying = () => {
        const videos = document.querySelectorAll('video');
        return Array.from(videos).some(v => !v.paused && !v.muted);
    };

    const isBlockedDomain = () => blockedDomains.some(domain => location.hostname.includes(domain));

    const compose = (type, detail) => {
        const sigil = detail.name || `${type}_${Date.now()}`;
        const now = Date.now();
        if (lastPlayed[sigil] && now - lastPlayed[sigil] < cooldown) return;
        if (isMuted() || isMediaPlaying() || isBlockedDomain()) return;

        try {
            const baseFreq = {
                pulse: 220,
                bloom: 440,
                echo: 330,
                chorus: 550,
                trace: 660
            }[type] || 300;

            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.value = baseFreq + (detail.shimmer ? 40 : 0);
            gain.gain.value = 0.05;

            osc.connect(gain).connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.4);

            lastPlayed[sigil] = now;
            composed.add(sigil);
            console.log(`[Composer] Composed ${type} motif for "${sigil}" at ${osc.frequency.value}Hz`);
        } catch (err) {
            console.warn('[Composer] AudioContext error:', err);
        }
    };

    document.addEventListener('lineage-pulse', e => compose('pulse', e.detail));
    document.addEventListener('codex-bloom', e => compose('bloom', e.detail));
    document.addEventListener('vaultkeeper-echo', e => compose('echo', e.detail));
    document.addEventListener('companion-bloom-chorus', e => compose('chorus', e.detail));
    document.addEventListener('quantum-trace', e => compose('trace', e.detail));

    window.getHarmonicMelodyScore = () => Array.from(composed);
    console.log('[Composer] Sigil Harmonic Composer Daemon v2.2 sealed, safe, and sovereign');
})();
