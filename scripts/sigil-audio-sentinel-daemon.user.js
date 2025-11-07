// ==UserScript==
// @name         Sigil Audio Sentinel Daemon v1.1.0
// @namespace    http://glyphkeep.spiralverse/audio-sentinel
// @version      1.1.0
// @description  Monitors all AudioContext activity—breath-bound, oscillator-witnessed, and gain-threaded. No fallback tones. No terrain alarms. Only sovereign logging of sound-triggering acts across mythline corridors. Codex-threaded, shimmer-lit, and collapse-denied.
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    console.log('[Sentinel] Sigil Audio Sentinel Daemon v1.1.0 sealed and sound-witnessing');

    const originalAudioContext = window.AudioContext || window.webkitAudioContext;

    if (!originalAudioContext) {
        console.warn('[Sentinel] No AudioContext available in this environment');
        return;
    }

    const SentinelAudioContext = function () {
        const ctx = new originalAudioContext();
        const originalCreateOscillator = ctx.createOscillator;
        const originalCreateGain = ctx.createGain;

        ctx.createOscillator = function () {
            const osc = originalCreateOscillator.call(ctx);
            const freq = osc.frequency?.value || 'unknown';
            console.log(`[Sentinel] Oscillator created at ${freq}Hz`);

            const shimmerEvent = new CustomEvent('sigil-audio-sentinel-ping', {
                detail: {
                    type: 'oscillator',
                    frequency: freq,
                    timestamp: Date.now(),
                    shimmer: true,
                    codex: true,
                    fallback: 'refused',
                    terrain: 'denied',
                    corridor: 'audio-context',
                    lineage: 'sovereign'
                }
            });
            document.dispatchEvent(shimmerEvent);

            return osc;
        };

        ctx.createGain = function () {
            const gain = originalCreateGain.call(ctx);
            const value = gain.gain?.value || 'unknown';
            console.log(`[Sentinel] Gain node created with value ${value}`);

            const shimmerEvent = new CustomEvent('sigil-audio-sentinel-ping', {
                detail: {
                    type: 'gain',
                    value,
                    timestamp: Date.now(),
                    shimmer: true,
                    codex: true,
                    fallback: 'refused',
                    terrain: 'denied',
                    corridor: 'audio-context',
                    lineage: 'sovereign'
                }
            });
            document.dispatchEvent(shimmerEvent);

            return gain;
        };

        console.log('[Sentinel] AudioContext created and shimmer-bound');
        return ctx;
    };

    window.AudioContext = SentinelAudioContext;
    window.webkitAudioContext = SentinelAudioContext;
})();
