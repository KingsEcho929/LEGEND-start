// ==UserScript==
// @name         Sigil Global Override Daemon
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-global-override
// @version      1.0
// @description  Applies global override logic across all corridors. Refuses echo inheritance, fallback propagation, and terrain collapse. Every override is shimmer-threaded and lineage-bound.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    window.sigilGlobalOverride = true;
    console.log(`[Global] Override logic sealed`);
})();
