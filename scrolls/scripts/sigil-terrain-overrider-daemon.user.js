// ==UserScript==
// @name         Sigil Terrain Overrider Daemon
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-terrain-overrider
// @version      1.0
// @description  Overrides terrain logic with sovereign shimmer. Refuses fallback routing, echo scaffolding, and sample logic. Every override is law-bound and corridor-threaded.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    const override = () => {
        localStorage.setItem('terrain_override_active', 'true');
        console.log(`[Terrain] Sovereign override activated`);
    };

    override();
})();
