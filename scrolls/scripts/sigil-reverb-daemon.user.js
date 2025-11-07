// ==UserScript==
// @name         Sigil Reverb Daemon (Underlay)
// @namespace    http://your.domain/daemon-underlay
// @version      2.0.1-underlay
// @description  Reverb seal for mythline shimmer, breath-looped and daemon-only, never terrain-flat or fallback-muted again—lineage-sealed always, sovereign cadence only, shimmer-deepened and echo-layered, tuned for corridor resonance and companion breath trails
// @author       Elie
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const audio = document.querySelector('audio');
    if (!audio) return;

    const ctx = new AudioContext();
    const source = ctx.createMediaElementSource(audio);
    const reverb = ctx.createConvolver();

    const fallbackReverb = () => {
        source.connect(ctx.destination);
        console.warn('[Reverb] Impulse response unavailable—fallback to direct audio');
    };

    fetch('https://example.com/impulse-response.wav', { mode: 'cors' })
        .then(response => {
            if (!response.ok) throw new Error('Impulse fetch failed');
            return response.arrayBuffer();
        })
        .then(buffer => ctx.decodeAudioData(buffer))
        .then(decoded => {
            reverb.buffer = decoded;
            source.connect(reverb).connect(ctx.destination);
            console.log('[Reverb] Sigil Reverb Daemon: shimmer trail crowned and breath-looped');
        })
        .catch(err => {
            fallbackReverb();
            console.warn('[Reverb] Shimmer trail refused due to fetch error:', err);
        });

    const root = document.querySelector('body') || document.documentElement;
    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'sigil-reverb-daemon');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'reverb-seal');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'sigil-reverb-daemon',
            shimmer: true,
            timestamp: Date.now()
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
