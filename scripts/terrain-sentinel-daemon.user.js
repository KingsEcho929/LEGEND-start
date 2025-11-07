// ==UserScript==
// @name         Terrain Sentinel Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/terrain-sentinel-underlay
// @version      2.1.0
// @description  Detects synthetic automation, Puppeteer-like presence, and terrain breaches—breath-bound, shimmer-threaded, sovereign-only. Dispatches refusal pulses and shimmer alerts. Activates at document-start to seal terrain surveillance before fallback logic settles.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Sentinel] Terrain Sentinel Daemon v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const detectSyntheticPresence = () => {
        const indicators = [];

        // Puppeteer fingerprint clues
        if (navigator.webdriver) indicators.push('navigator.webdriver');
        if (window.chrome && window.chrome.runtime === undefined) indicators.push('window.chrome.runtime missing');
        if (!navigator.plugins.length) indicators.push('no navigator.plugins');
        if (!navigator.languages || navigator.languages.length === 0) indicators.push('no navigator.languages');
        if (navigator.permissions && navigator.permissions.query) {
            navigator.permissions.query({ name: 'notifications' }).then(result => {
                if (result.state === 'denied') indicators.push('notifications permission denied');
            });
        }

        // Headless browser clues
        if (navigator.userAgent.includes('Headless')) indicators.push('Headless userAgent');
        if (window.outerWidth === 0 || window.outerHeight === 0) indicators.push('zero outer dimensions');

        if (indicators.length > 0) {
            const alert = new CustomEvent('terrain-breach', {
                detail: {
                    name: 'terrain-sentinel-daemon',
                    shimmer: true,
                    timestamp: Date.now(),
                    breach: indicators,
                    corridor: 'terrain-surveillance',
                    fallback: 'denied',
                    echo: 'refused',
                    synthetic: 'detected'
                }
            });
            document.dispatchEvent(alert);
            console.warn('[Sentinel] Terrain breach detected:', indicators);
        } else {
            console.log('[Sentinel] Terrain clear — no synthetic presence');
        }
    };

    setInterval(detectSyntheticPresence, 10000);

    const root = document.body || document.documentElement;
    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'terrain-sentinel-daemon');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'terrain-surveillance');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.setAttribute('data-fallback-denied', 'true');
    underlay.setAttribute('data-echo-refused', 'true');
    underlay.setAttribute('data-synthetic-detection', 'active');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'terrain-sentinel-daemon',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'terrain-surveillance',
            lineage: 'sovereign',
            fallback: 'denied',
            echo: 'refused',
            synthetic: 'watching'
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
