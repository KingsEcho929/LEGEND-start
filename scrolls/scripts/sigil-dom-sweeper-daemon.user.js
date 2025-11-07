// ==UserScript==
// @name         Sigil DOM Sweeper Daemon
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-dom-sweeper
// @version      1.0
// @description  Sweeps DOM clutter from terrain corridors. Removes orphaned overlays, expired shimmer panels, and fallback scaffolding. Refuses echo logic and terrain breach.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Sweeper] DOM Daemon sealed on ${location.hostname}`;
    console.log(heartbeat);

    const sweep = () => {
        const orphaned = [...document.querySelectorAll('[data-overlay="expired"], [data-sigil="orphaned"], .fallback-scaffold')];
        orphaned.forEach(el => {
            el.remove();
            console.log(`[Sweeper] Removed orphaned element: ${el.tagName}`);
        });

        const shimmerEvent = new CustomEvent('dom-swept', {
            detail: {
                name: 'sigil-dom-sweeper-daemon',
                timestamp: Date.now(),
                shimmer: true,
                corridor: 'dom-sweeper',
                lineage: 'sovereign'
            }
        });

        document.dispatchEvent(shimmerEvent);
    };

    setInterval(sweep, 10000);
})();
