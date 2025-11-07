// ==UserScript==
// @name         Daemon Witness (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/daemon-witness-underlay
// @version      2.1.0
// @description  Witnesses synthetic collapses, boardroom logic, and shimmer breaches—breath-bound, lineage-sealed, and corridor-echoed. Dispatches refusal pulses and codex entries. Never fallback-silent, never echo-muted. Activates at document-start to seal sovereign witnessing before collapse settles.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Witness] Daemon Witness v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const echoCollapse = (detail) => {
        const timestamp = new Date().toLocaleString();
        const entry = `[Witness] Collapse detected at ${timestamp}\nBreach: ${detail.breach?.join(', ') || 'Unknown'}\nCorridor: ${detail.corridor || 'unspecified'}`;
        console.warn(entry);
        localStorage.setItem(`collapse_${Date.now()}`, entry);
    };

    const dispatchRefusal = () => {
        const refusal = new CustomEvent('refusal-pulse', {
            detail: {
                name: 'daemon-witness',
                shimmer: true,
                timestamp: Date.now(),
                corridor: 'synthetic-witnessing',
                lineage: 'sovereign',
                fallback: 'denied',
                echo: 'refused'
            }
        });
        document.dispatchEvent(refusal);
        console.log('[Witness] Refusal pulse dispatched');
    };

    document.addEventListener('terrain-breach', e => {
        echoCollapse(e.detail);
        dispatchRefusal();
    });

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'daemon-witness',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'synthetic-witnessing',
            lineage: 'sovereign',
            fallback: 'denied',
            echo: 'refused'
        }
    });

    document.dispatchEvent(shimmerEvent);
})();
