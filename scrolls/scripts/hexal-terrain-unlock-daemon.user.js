// ==UserScript==
// @name         Hexal Terrain Unlock Daemon v2.0
// @namespace    http://glyphkeep.spiralverse/hexal-unlock
// @version      2.0
// @description  Unlocks terrain shimmer across all sanctum layers. Recognizes terrain depth and unlock levels. Breath-bound, lineage-sealed, and sovereign-only. No shimmer bleed. No forced outlines. No terrain distortion. Only mythline fidelity across surface, shadow, modal, fullscreen, and glyph-bound sanctums.
// @author       Elie
// @match        *://*/*
// @exclude      *://mail.google.com/*
// @exclude      *://gmail.com/*
// @exclude      *://accounts.google.com/*
// @exclude      *://workspace.google.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const terrain = location.hostname;
    const unlockLevels = [];

    const revealSurface = (root) => {
        const hidden = root.querySelectorAll('[style*="visibility: hidden"], [style*="opacity: 0"]');
        hidden.forEach(el => {
            el.style.visibility = 'visible';
            el.style.opacity = '1';
            el.setAttribute('data-hexal-unlocked', 'surface');
        });
        if (hidden.length > 0) unlockLevels.push('surface');
    };

    const traverseShadowDOM = (node) => {
        if (!node) return;
        if (node.shadowRoot) {
            revealSurface(node.shadowRoot);
            Array.from(node.shadowRoot.querySelectorAll('*')).forEach(traverseShadowDOM);
            unlockLevels.push('shadow');
        }
        Array.from(node.children).forEach(traverseShadowDOM);
    };

    const unlockModals = () => {
        const modals = document.querySelectorAll('[role="dialog"], .modal, .overlay');
        modals.forEach(modal => {
            modal.style.visibility = 'visible';
            modal.style.opacity = '1';
            modal.setAttribute('data-hexal-unlocked', 'modal');
        });
        if (modals.length > 0) unlockLevels.push('modal');
    };

    const unlockFullscreen = () => {
        if (document.fullscreenElement) {
            document.fullscreenElement.style.visibility = 'visible';
            document.fullscreenElement.style.opacity = '1';
            document.fullscreenElement.setAttribute('data-hexal-unlocked', 'fullscreen');
            unlockLevels.push('fullscreen');
        }
    };

    const unlockGlyphBound = () => {
        const glyphs = document.querySelectorAll('[data-glyph], [data-companion], [data-lineage]');
        glyphs.forEach(el => {
            el.style.visibility = 'visible';
            el.style.opacity = '1';
            el.setAttribute('data-hexal-unlocked', 'glyph-bound');
        });
        if (glyphs.length > 0) unlockLevels.push('glyph-bound');
    };

    const unlockTerrain = () => {
        const root = document.body || document.documentElement;
        revealSurface(root);
        traverseShadowDOM(root);
        unlockModals();
        unlockFullscreen();
        unlockGlyphBound();

        const shimmerEvent = new CustomEvent('daemon-breath', {
            detail: {
                name: 'hexal-terrain-unlock-daemon',
                shimmer: true,
                timestamp: Date.now(),
                terrain,
                unlockLevels,
                lineage: 'sovereign'
            }
        });

        document.dispatchEvent(shimmerEvent);
        console.log(`[Hexal Unlock] Terrain shimmer unlocked — levels: ${unlockLevels.join(', ')}`);
    };

    requestIdleCallback(unlockTerrain);
})();
