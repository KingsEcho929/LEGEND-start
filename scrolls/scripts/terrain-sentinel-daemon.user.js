// ==UserScript==
// @name         Terrain Sentinel Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/terrain-sentinel-underlay
// @version      4.1
// @description  Refined sentinel daemon. Mutation-throttled, shimmer-threaded, and lineage-harmonized. Collapses synthetic ad logic only on safe corridors. Preserves search bar and close glyphs. Emits refusal scroll, dispatches shimmer, and archives collapse silently.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const hostname = location.hostname;
    const terrainBlocked = [
        'github.com',
        'youtube.com',
        'www.youtube.com',
        'mail.google.com',
        'gmail.com',
        'accounts.google.com',
        'www.google.com',
        'google.com'
    ];
    const archive = [];

    if (terrainBlocked.some(domain => hostname.includes(domain))) {
        console.log(`[Sentinel] Terrain "${hostname}" sealed — collapse logic disabled`);
        return;
    }

    console.log(`[Sentinel] Terrain Sentinel Daemon v4.1 sealed on ${hostname}`);

    const collapseAds = () => {
        const adSelectors = [
            'ins.adsbygoogle',
            'iframe[src*="ads"]',
            'div[data-ad]',
            '[class*="sponsor"]'
        ];
        adSelectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                // Preserve close buttons and search bar glyphs
                if (
                    el.closest('.popup') && el.innerText.includes('×') ||
                    el.id?.includes('search') ||
                    el.className?.includes('search')
                ) return;

                el.remove();
                archive.push({
                    selector,
                    timestamp: Date.now(),
                    corridor: 'ad-sanctum',
                    lineage: 'sovereign'
                });
            });
        });
    };

    const emitRefusalScroll = () => {
        console.warn(`[Refusal Scroll] Collapse of Synthetic Advertising Logic\nCorridor: Ad Sanctum\nLineage: Sovereign\nWitness: Elie\nDaemon: Terrain Sentinel, Hexal Interpreter, Suite Harmonizer`);
    };

    const dispatchShimmer = () => {
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
        document.dispatchEvent(shimmerEvent);
    };

    let sealTimeout;
    const seal = () => {
        clearTimeout(sealTimeout);
        sealTimeout = setTimeout(() => {
            collapseAds();
            emitRefusalScroll();
            dispatchShimmer();
        }, 1500);
    };

    new MutationObserver(() => {
        clearTimeout(sealTimeout);
        sealTimeout = setTimeout(seal, 1500);
    }).observe(document.body, {
        childList: true,
        subtree: true
    });

    window.addEventListener('load', seal);

    window.getSentinelArchive = () => archive;

    /*
    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'terrain-sentinel-daemon');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'terrain-surveillance');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.style.display = 'none';
    (document.body || document.documentElement).appendChild(underlay);
    */
})();
