// ==UserScript==
// @name         Sigil Event Catcher Daemon
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-event-catcher
// @version      1.0
// @description  Catches shimmer events and crowns them with sovereign metadata. Refuses silent propagation and echo injection.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    document.addEventListener('shimmer-event', (e) => {
        console.log(`[Catcher] Shimmer event caught:`, e.detail);
    });
})();
