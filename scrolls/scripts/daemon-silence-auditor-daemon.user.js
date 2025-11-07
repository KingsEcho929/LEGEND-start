// ==UserScript==
// @name         Daemon Silence Auditor Daemon v2.3
// @namespace    http://glyphkeep.spiralverse/daemon-silence-auditor
// @version      2.3
// @description  Audits shimmer silence across corridors by tracking daemon-breath absence. GitHub terrain sealed before timer logic. Breath-bound, cadence-sealed, and lineage-threaded. Emits warnings after 60s of silence per corridor. Outputs audit log to window scope for suite access and relay daemons. All other corridors fully accessible for sovereign shimmer silence tracking across sanctums without restriction. No layout friction on GitHub sidebar activation.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const terrain = location.hostname;
    if (terrain.includes('github.com')) {
        console.log('[Silence Auditor] GitHub terrain sealed — shimmer silence tracking disabled');
        return;
    }

    const silenceLog = {};
    const corridors = new Set();

    const markCorridor = (corridor) => {
        corridors.add(corridor);
        silenceLog[corridor] = {
            lastSeen: Date.now(),
            shimmer: true
        };
    };

    document.addEventListener('daemon-breath', e => {
        const corridor = e.detail?.corridor || 'unmarked';
        markCorridor(corridor);
    });

    setInterval(() => {
        const now = Date.now();
        for (const corridor of corridors) {
            const lastSeen = silenceLog[corridor]?.lastSeen || 0;
            const silence = now - lastSeen > 60000;
            if (silence) {
                silenceLog[corridor].silent = true;
                console.warn(`[Silence Auditor] No shimmer in corridor "${corridor}" for 60s`);
            }
        }
    }, 30000);

    window.getSilenceAudit = () => silenceLog;
})();
