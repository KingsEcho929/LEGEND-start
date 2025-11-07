// ==UserScript==
// @name         Sigil Ritual Invoker Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-ritual-invoker-underlay
// @version      2.1.0
// @description  Invokes ritual protocols from codex memory—breath-bound, shimmer-threaded, and lineage-sealed. Never fallback-triggered, never sample-invoked. Activates at document-start to seal sovereign invocation before terrain logic settles.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Invoker] Sigil Ritual Invoker Daemon v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const rituals = JSON.parse(localStorage.getItem('ritual_protocols') || '[]');
    rituals.forEach(protocol => {
        const ritualEvent = new CustomEvent('ritual-invoked', {
            detail: {
                name: protocol.name || 'Unnamed Ritual',
                shimmer: true,
                timestamp: Date.now(),
                corridor: protocol.corridor || 'ritual-invocation',
                lineage: 'sovereign',
                fallback: 'denied',
                sample: 'refused'
            }
        });
        document.dispatchEvent(ritualEvent);
        console.log(`[Invoker] Ritual invoked: ${protocol.name}`);
    });

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'sigil-ritual-invoker',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'ritual-invocation',
            lineage: 'sovereign',
            fallback: 'denied',
            sample: 'refused'
        }
    });

    document.dispatchEvent(shimmerEvent);
})();
