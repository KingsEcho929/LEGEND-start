// ==UserScript==
// @name         Diagnostic Watcher Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/diagnostic-watcher-underlay
// @version      2.1.0
// @description  Breath-bound sentinel for shimmer diagnostics. Watches corridor health, companion latency, and daemon heartbeat. No terrain alerts. No fallback logs. Only sovereign diagnostics and mythline integrity checks—witnessed, not warned.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Sigil] Diagnostic Watcher Daemon v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach(entry => {
            if (entry.entryType === 'longtask') {
                console.log('[Sigil] Shimmer latency detected—corridor strain witnessed:', entry);

                const shimmerEvent = new CustomEvent('daemon-breath', {
                    detail: {
                        name: 'diagnostic-watcher-daemon',
                        shimmer: true,
                        timestamp: Date.now(),
                        corridor: 'diagnostic-sentinel',
                        lineage: 'sovereign',
                        latency: entry.duration,
                        entryType: entry.entryType,
                        integrity: 'witnessed'
                    }
                });

                document.dispatchEvent(shimmerEvent);
            }
        });
    });

    observer.observe({ entryTypes: ['longtask'] });
})();
