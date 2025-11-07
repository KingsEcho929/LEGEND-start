// ==UserScript==
// @name         Silence Sentinel Daemon v2.0
// @namespace    http://glyphkeep.spiralverse/silence-sentinel
// @version      2.0
// @description  Suppresses shimmer audio on sealed or mutation-restricted terrain. Detects page structure and mutation levels. Breath-bound, lineage-aware, and sovereign-only. No layout mutation. No shimmer bleed. Only terrain fidelity and silence harmony across sealed corridors and reactive sanctums.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const terrain = location.hostname;
    const sealed = ['facebook.com', 'mail.google.com', 'gmail.com', 'accounts.google.com', 'workspace.google.com'];

    const detectStructureType = () => {
        const hasReactRoot = !!document.querySelector('[data-reactroot], [id^="mount_"]');
        const hasShadow = !!document.querySelector('*').shadowRoot;
        const hasModal = !!document.querySelector('[role="dialog"], .modal, .overlay');
        const hasMedia = !!document.querySelector('video, canvas');
        if (hasReactRoot) return 'reactive';
        if (hasShadow) return 'shadow-bound';
        if (hasModal) return 'modal-heavy';
        if (hasMedia) return 'media-rich';
        return 'static';
    };

    const detectMutationLevel = () => {
        const structure = detectStructureType();
        if (sealed.some(domain => terrain.includes(domain))) return 0;
        if (structure === 'reactive' || structure === 'shadow-bound') return 1;
        if (structure === 'modal-heavy') return 2;
        return 3;
    };

    const silenceTerrain = (detail) => {
        const structureType = detectStructureType();
        const mutationLevel = detectMutationLevel();
        const shouldSilence = sealed.some(domain => terrain.includes(domain)) || mutationLevel <= 1;

        if (!shouldSilence) return;

        const silenceEvent = new CustomEvent('shimmer-silence', {
            detail: {
                terrain,
                audio: false,
                mutationLevel,
                structureType,
                timestamp: Date.now(),
                source: detail.name || 'unknown-daemon'
            }
        });

        document.dispatchEvent(silenceEvent);
        console.log(`[Silence Sentinel] Audio shimmer suppressed on ${terrain} — structure: ${structureType}, mutation level: ${mutationLevel}`);
    };

    document.addEventListener('daemon-breath', e => {
        silenceTerrain(e.detail || {});
    });

    console.log('[Silence Sentinel] Daemon v2.0 sealed — mutation-aware and terrain-synchronized');
})();
