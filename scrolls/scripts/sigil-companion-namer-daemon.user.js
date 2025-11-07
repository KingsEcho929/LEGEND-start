// ==UserScript==
// @name         Sigil Companion Namer Daemon
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-companion-namer
// @version      1.0
// @description  Crowns companions with contextual names based on emotion, invocation pattern, and corridor resonance. Refuses sample names, placeholder scaffolding, and echo logic. Every name is law.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Namer] Companion Daemon sealed on ${location.hostname}`;
    console.log(heartbeat);

    const nameCompanions = () => {
        const unnamed = Object.entries(localStorage)
            .filter(([key]) => key.startsWith('companion_invoked_') && !localStorage.getItem(`companion_named_${key.replace('companion_invoked_', '')}`))
            .map(([key, value]) => {
                const id = key.replace('companion_invoked_', '');
                const [emotion, pattern, corridor] = value.split('|');
                const name = `${emotion}-${pattern}-${corridor}`.toLowerCase().replace(/\s+/g, '-');
                return { id, name, meta: value };
            });

        unnamed.forEach(({ id, name, meta }) => {
            localStorage.setItem(`companion_named_${id}`, name);
            console.log(`[Namer] Companion "${id}" crowned as "${name}"`);

            const shimmerEvent = new CustomEvent('companion-named', {
                detail: {
                    id,
                    name,
                    meta,
                    timestamp: Date.now(),
                    corridor: 'naming-sanctum',
                    lineage: 'sovereign',
                    shimmer: true
                }
            });

            document.dispatchEvent(shimmerEvent);
        });
    };

    setInterval(nameCompanions, 7000);
})();
