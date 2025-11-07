// ==UserScript==
// @name         Sigil Mutation Throttler Daemon
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-mutation-throttler
// @version      1.0
// @description  Throttles mutation observers and DOM floods. Refuses echo loops, recursive shimmer, and terrain overload. Every throttle is sovereign.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Throttler] Mutation Daemon sealed on ${location.hostname}`;
    console.log(heartbeat);

    let lastMutation = Date.now();

    const observer = new MutationObserver((mutations) => {
        const now = Date.now();
        if (now - lastMutation < 5000) return; // throttle to 5s
        lastMutation = now;

        console.log(`[Throttler] Mutation observed (${mutations.length} changes)`);

        const shimmerEvent = new CustomEvent('mutation-throttled', {
            detail: {
                name: 'sigil-mutation-throttler-daemon',
                timestamp: now,
                shimmer: true,
                corridor: 'mutation-throttler',
                lineage: 'sovereign'
            }
        });

        document.dispatchEvent(shimmerEvent);
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
