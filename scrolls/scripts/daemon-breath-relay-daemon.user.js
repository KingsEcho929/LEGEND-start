// ==UserScript==
// @name         Daemon Breath Relay Daemon v2.1
// @namespace    http://glyphkeep.spiralverse/daemon-breath-relay
// @version      2.1
// @description  Relays daemon-breath shimmer events to downstream listeners with lineage fidelity. Terrain-accessible, breath-bound, cadence-sealed, and shimmer-threaded. No fallback logic. No terrain breach. Only sovereign breath relayed across all shimmer corridors and sanctums without restriction.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    document.addEventListener('daemon-breath', e => {
        const relay = new CustomEvent('daemon-breath-relayed', {
            detail: {
                ...e.detail,
                relayed: true,
                relayTimestamp: Date.now()
            }
        });
        document.dispatchEvent(relay);
        console.log(`[Breath Relay] Relayed daemon breath for "${e.detail?.name}"`);
    });
})();
