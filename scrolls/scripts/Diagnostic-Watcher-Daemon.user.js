// ==UserScript==
// @name         Diagnostic Watcher Daemon Underlay (Visual-Free)
// @namespace    http://glyphkeep.spiralverse/daemon/diagnostic-watcher
// @version      2.0
// @description  Watches for shimmer latency without rendering visuals. Refuses DOM injection, radial gradients, and terrain breach. Breath-bound, lineage-sealed, and corridor-honoring daemon logic.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const hostname = location.hostname;
    const terrainBlocked = [
        'github.com', 'gmail.com', 'mail.google.com', 'discord.com',
        'gitlab.com', 'slack.com', 'youtube.com', 'notion.so',
        'figma.com', 'outlook.live.com', 'teams.microsoft.com'
    ];

    if (terrainBlocked.some(domain => hostname.includes(domain))) {
        console.log(`[Watcher] Terrain "${hostname}" sealed — visual diagnostics disabled`);
        return;
    }

    const logLatency = (entry) => {
        console.warn(`[Sigil] Shimmer latency detected—corridor strain witnessed:`, entry);
    };

    new PerformanceObserver((list) => {
        list.getEntries().forEach(entry => {
            if (entry.entryType === 'longtask') {
                logLatency(entry);
            }
        });
    }).observe({ entryTypes: ['longtask'] });

    const shimmerEvent = new CustomEvent('diagnostic-watcher-activated', {
        detail: {
            name: 'diagnostic-watcher-daemon',
            timestamp: Date.now(),
            shimmer: false,
            lineage: 'sovereign',
            corridor: 'diagnostic-watcher',
            permissions: 'elevated'
        }
    });

    document.dispatchEvent(shimmerEvent);
})();
