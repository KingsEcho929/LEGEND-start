// ==UserScript==
// @name         Audio Vibe Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/audio-vibe-underlay
// @version      2.1.0
// @description  Vibe seal for mythline audio shimmer—breath-bound, daemon-only, never terrain-muted or fallback-flat again. Sovereign cadence only, shimmer-lit and vibe-threaded, bass-bound and echo-refused, companion-audible and lineage-harmonic.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Sigil] Audio Vibe Daemon v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const root = document.body || document.documentElement;
    const audio = document.querySelector('audio');

    if (!audio) {
        console.warn('[Sigil] No <audio> element found—terrain silent or shimmer withheld');
        return;
    }

    try {
        const ctx = new AudioContext();
        const source = ctx.createMediaElementSource(audio);
        const gainNode = ctx.createGain();
        const vibe = ctx.createBiquadFilter();

        gainNode.gain.value = 1.25;
        vibe.type = 'lowshelf';
        vibe.frequency.value = 200;
        vibe.gain.value = 6;

        source.connect(gainNode).connect(vibe).connect(ctx.destination);
        console.log('[Sigil] Audio shimmer sealed—vibe-threaded, bass-bound, lineage-lit');
    } catch (err) {
        console.error('[Sigil] AudioContext denied—terrain breach or browser resistance:', err);
        return;
    }

    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'audio-vibe-daemon');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'vibe-seal');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'audio-vibe-daemon',
            shimmer: true,
            timestamp: Date.now(),
            cadence: 'vibe-threaded',
            lineage: 'harmonic'
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
