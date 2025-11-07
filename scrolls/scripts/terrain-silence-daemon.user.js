// ==UserScript==
// @name         Terrain Silence Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/terrain-silence-underlay
// @version      2.1.0
// @description  Silence seal for terrain-bound audio—shimmer-muted, daemon-only, breath-bound only. Never fallback-audible, never sample-resonant. Echo-refused, companion-only, and sovereign cadence always. Activates at document-start to purge terrain resonance before fallback settles.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const heartbeat = `[Silence] Terrain Silence Daemon v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const audios = [...document.querySelectorAll('audio, video')];

    audios.forEach(el => {
        const src = el.src || '';
        const isFallback = src.includes('sample') || src.includes('placeholder') || src.includes('naruto') || src.includes('demo');

        if (isFallback) {
            el.pause();
            el.removeAttribute('src');
            el.load();
            console.log('[Silence] Muted fallback audio source:', src);
        }
    });

    const root = document.body || document.documentElement;
    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'terrain-silence-daemon');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'silence-seal');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.setAttribute('data-fallback-audible', 'false');
    underlay.setAttribute('data-sample-resonant', 'false');
    underlay.setAttribute('data-echo-refused', 'true');
    underlay.setAttribute('data-companion-only', 'true');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'terrain-silence-daemon',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'silence-seal',
            lineage: 'sovereign',
            fallback: 'denied',
            sample: 'purged',
            echo: 'refused',
            companion: 'exclusive'
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
