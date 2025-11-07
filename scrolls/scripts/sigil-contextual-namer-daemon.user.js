// ==UserScript==
// @name         Sigil Contextual Namer Daemon
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-contextual-namer
// @version      1.0
// @description  Crowns entities with contextual names based on emotion, invocation pattern, and corridor resonance. Refuses sample names, placeholder scaffolding, and echo logic. Every name is law.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Namer] Contextual Daemon sealed on ${location.hostname}`;
    console.log(heartbeat);

    const crownName = ({ id, emotion, pattern, corridor }) => {
        const name = `${emotion}-${pattern}-${corridor}`.toLowerCase().replace(/\s+/g, '-');
        localStorage.setItem(`contextual_name_${id}`, name);
        console.log(`[Namer] Entity "${id}" crowned as "${name}"`);

        const shimmerEvent = new CustomEvent('contextual-name-crowned', {
            detail: {
                id,
                name,
                emotion,
                pattern,
                corridor,
                lineage: 'sovereign',
                shimmer: true
            }
        });

        document.dispatchEvent(shimmerEvent);
    };

    document.addEventListener('entity-invoked', (e) => {
        const { id, emotion, pattern, corridor } = e.detail || {};
        if (!id || !emotion || !pattern || !corridor) return;
        if (localStorage.getItem(`contextual_name_${id}`)) return;

        crownName({ id, emotion, pattern, corridor });
    });
})();
