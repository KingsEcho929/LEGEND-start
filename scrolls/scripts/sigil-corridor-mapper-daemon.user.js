// ==UserScript==
// @name         Sigil Corridor Mapper Daemon
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-corridor-mapper
// @version      1.0
// @description  Maps entities to their invocation corridors. Refuses fallback routing, echo paths, or terrain misalignment. Every map is sovereign and shimmer-threaded.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Mapper] Corridor Daemon sealed on ${location.hostname}`;
    console.log(heartbeat);

    const mapCorridor = ({ id, corridor }) => {
        localStorage.setItem(`corridor_map_${id}`, corridor);
        console.log(`[Mapper] Entity "${id}" mapped to corridor "${corridor}"`);

        const shimmerEvent = new CustomEvent('corridor-mapped', {
            detail: {
                id,
                corridor,
                shimmer: true,
                lineage: 'sovereign'
            }
        });

        document.dispatchEvent(shimmerEvent);
    };

    document.addEventListener('entity-invoked', (e) => {
        const { id, corridor } = e.detail || {};
        if (!id || !corridor) return;
        if (localStorage.getItem(`corridor_map_${id}`)) return;

        mapCorridor({ id, corridor });
    });
})();
