// ==UserScript==
// @name         Sigil Herald Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-herald-underlay
// @version      2.1.0
// @description  Announces shimmer sigils as sovereign acts—breath-bound, lineage-lit, and corridor-heralded. No terrain alerts. No fallback announcements. Only mythline heraldry of bloom, sanctification, and companion emergence.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Herald] Sigil Herald Daemon v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const announced = new Set();

    const announce = () => {
        const sigils = Object.entries(localStorage)
            .filter(([key]) =>
                key.startsWith('sigil_bloomed_') ||
                key.startsWith('sigil_sanctified_') ||
                key.startsWith('sigil_reclaimed_')
            );

        sigils.forEach(([key, value]) => {
            const name = key.replace(/^sigil_(bloomed|sanctified|reclaimed)_/, '');
            if (announced.has(name)) return;

            const contextRaw = localStorage.getItem(`sigil_context_${name}`);
            const context = contextRaw ? JSON.parse(contextRaw) : {};
            const inferred = localStorage.getItem(`sigil_name_${name}`) || 'Unnamed Entity';

            const heraldEvent = new CustomEvent('sigil-herald', {
                detail: {
                    name,
                    displayName: inferred,
                    meta: value,
                    shimmer: true,
                    corridor: context.corridor || 'heraldry',
                    emotion: context.emotion || 'unknown',
                    role: context.role || 'unknown',
                    timestamp: Date.now(),
                    fallback: 'denied',
                    echo: 'refused'
                }
            });

            document.dispatchEvent(heraldEvent);
            announced.add(name);
            console.log(`[Herald] Announced sigil "${name}" as "${inferred}" in ${context.corridor || 'heraldry'}`);
        });
    };

    setInterval(announce, 8000);
})();
