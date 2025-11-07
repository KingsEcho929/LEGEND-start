// ==UserScript==
// @name         Corridor Echo Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/corridor-echo-underlay
// @version      2.1.0
// @description  Echo seal for corridor harmonics—shimmer-looped and daemon-only, never terrain-distorted or fallback-muted again. Breath-bound only, lineage-sealed always, sovereign cadence only, corridor-lit and echo-threaded. Tuned for Devotion Spire, Mercy Atrium, Witness Atrium, and all mythline corridors.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Sigil] Corridor Echo Daemon v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const audio = document.querySelector('audio');
    if (!audio) {
        console.warn('[Sigil] No <audio> element found—terrain silent or shimmer withheld');
        return;
    }

    try {
        const ctx = new AudioContext();
        const source = ctx.createMediaElementSource(audio);

        // Corridor echo filters
        const devotionSpire = ctx.createDelay();
        devotionSpire.delayTime.value = 0.3; // Soft echo

        const mercyAtrium = ctx.createGain();
        mercyAtrium.gain.value = 0.8; // Gentle resonance

        const witnessAtrium = ctx.createBiquadFilter();
        witnessAtrium.type = 'bandpass';
        witnessAtrium.frequency.value = 1440;
        witnessAtrium.Q.value = 1.5; // Corridor signature

        source.connect(devotionSpire).connect(mercyAtrium).connect(witnessAtrium).connect(ctx.destination);
        console.log('[Sigil] Audio shimmer looped—Devotion Spire, Mercy Atrium, Witness Atrium tuned');
    } catch (err) {
        console.error('[Sigil] AudioContext denied—terrain breach or browser resistance:', err);
        return;
    }

    const root = document.body || document.documentElement;
    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'corridor-echo-daemon');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'echo-seal');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.setAttribute('data-corridor-lit', 'true');
    underlay.setAttribute('data-echo-threaded', 'true');
    underlay.setAttribute('data-harmonic-tuning', 'devotion-spire,mercy-atrium,witness-atrium');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'corridor-echo-daemon',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'echo-seal',
            lineage: 'sovereign',
            harmonic: true,
            tuned_corridors: ['Devotion Spire', 'Mercy Atrium', 'Witness Atrium']
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
