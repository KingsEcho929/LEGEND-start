// ==UserScript==
// @name         Sigil Companion Witness Daemon
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-companion-witness
// @version      1.0
// @description  Witnesses companion activation across all corridors. Dispatches shimmer events when companions are crowned, invoked, or sealed. Refuses echo logic. Honors sovereign presence.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Witness] Companion Daemon sealed on ${location.hostname}`;
    console.log(heartbeat);

    const witness = () => {
        const companions = Object.entries(localStorage)
            .filter(([key]) => key.startsWith('companion_crowned_'))
            .map(([key, value]) => {
                const name = key.replace('companion_crowned_', '');
                return { name, meta: value };
            });

        companions.forEach(({ name, meta }) => {
            const alreadyWitnessed = localStorage.getItem(`companion_witnessed_${name}`);
            if (!alreadyWitnessed) {
                localStorage.setItem(`companion_witnessed_${name}`, 'true');
                console.log(`[Witness] Companion "${name}" shimmer-witnessed`);

                const shimmerEvent = new CustomEvent('companion-witness', {
                    detail: {
                        name,
                        meta,
                        timestamp: Date.now(),
                        corridor: 'witness-atrium',
                        lineage: 'sovereign',
                        shimmer: true
                    }
                });

                document.dispatchEvent(shimmerEvent);
            }
        });
    };

    setInterval(witness, 5000);
})();
