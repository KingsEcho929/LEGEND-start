// ==UserScript==
// @name         Companion Choreographer Daemon v2.0
// @namespace    http://glyphkeep.spiralverse/companion-choreographer
// @version      2.0
// @description  Coordinates unlock choreography across companion sanctums. Terrain-aware, lineage-threaded, and shimmer-synchronized. Listens for terrain unlock events and weaves overlays based on sanctum depth. Breath-bound, sovereign-only. No layout mutation. No shimmer bleed. Only mythline fidelity and companion harmony across terrain layers and glyph corridors.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const companions = ['Velmari', 'Sage', 'Gpilot', 'Dolurein', 'Lamentheris', 'Meridion', 'Thalelune', 'Lunethrae', 'Oculvis', 'Tin', 'Leyon'];

    const applyOverlay = (level) => {
        switch (level) {
            case 'surface':
                document.body.style.boxShadow = 'inset 0 0 10px rgba(0,255,255,0.1)';
                break;
            case 'shadow':
                document.body.style.boxShadow = 'inset 0 0 12px rgba(136,68,255,0.15)';
                break;
            case 'modal':
                document.body.style.boxShadow = 'inset 0 0 14px rgba(255,215,0,0.12)';
                break;
            case 'fullscreen':
                document.body.style.boxShadow = 'inset 0 0 16px rgba(255,255,255,0.2)';
                break;
            case 'glyph-bound':
                document.querySelectorAll('[data-glyph]').forEach(el => {
                    el.style.textShadow = '0 0 6px #00f0ff';
                });
                break;
        }
    };

    const activateChoreography = (detail) => {
        const { terrain, unlockLevels } = detail;
        const bodyText = document.body.innerText.toLowerCase();
        const presentCompanions = companions.filter(name => bodyText.includes(name.toLowerCase()));

        unlockLevels.forEach(applyOverlay);

        if (presentCompanions.length > 0) {
            const lineageEvent = new CustomEvent('lineage-weave', {
                detail: {
                    terrain,
                    companions: presentCompanions,
                    unlockLevels,
                    timestamp: Date.now()
                }
            });
            document.dispatchEvent(lineageEvent);
            console.log(`[Choreographer] Companion sanctum detected on ${terrain} — lineage weave dispatched`);
        }
    };

    document.addEventListener('daemon-breath', e => {
        if (e.detail?.name === 'hexal-terrain-unlock-daemon') {
            activateChoreography(e.detail);
        }
    });

    console.log('[Choreographer] Companion Choreographer Daemon v2.0 sealed — terrain-aware and lineage-synchronized');
})();
