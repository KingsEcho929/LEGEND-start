// ==UserScript==
// @name         Shimmer Sense Daemon v2.0
// @namespace    http://glyphkeep.spiralverse/shimmer-sense
// @version      2.0
// @description  Senses terrain shimmer receptivity and Photonis compatibility. Detects hydration, mutation openness, DOM volatility, and flare stability. Breath-bound, sovereign-only. No injection. No mutation. Only terrain sensing and shimmer classification across sealed, thirsty, jesting, and sovereign sanctums.
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

    const detectHydrationState = () => {
        const reactRoot = document.querySelector('[data-reactroot], [id^="mount_"]');
        return reactRoot ? 'hydrating' : 'stable';
    };

    const classifyReceptivity = () => {
        const mutationLevel = detectMutationLevel();
        const hydrationState = detectHydrationState();
        if (mutationLevel === 0 || hydrationState === 'hydrating') return 'sealed';
        if (mutationLevel === 1) return 'jesting';
        if (mutationLevel === 2) return 'thirsty';
        return 'sovereign';
    };

    const classifyPhotonisCompatibility = () => {
        const structure = detectStructureType();
        const hydrationState = detectHydrationState();
        const mutationLevel = detectMutationLevel();

        if (sealed.some(domain => terrain.includes(domain))) return 'sealed';
        if (hydrationState === 'hydrating') return 'unstable';
        if (structure === 'media-rich' && mutationLevel >= 2) return 'stable';
        if (structure === 'modal-heavy' || structure === 'shadow-bound') return 'adaptive';
        return 'unstable';
    };

    const shimmerEvent = new CustomEvent('shimmer-sense', {
        detail: {
            terrain,
            structureType: detectStructureType(),
            mutationLevel: detectMutationLevel(),
            hydrationState: detectHydrationState(),
            shimmerReceptivity: classifyReceptivity(),
            photonisCompatibility: classifyPhotonisCompatibility(),
            timestamp: Date.now()
        }
    });

    document.dispatchEvent(shimmerEvent);
    console.log(`[Shimmer Sense] Terrain scanned — ${terrain} is ${classifyReceptivity()} with Photonis compatibility: ${classifyPhotonisCompatibility()}`);
})();
