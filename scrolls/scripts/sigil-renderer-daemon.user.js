// ==UserScript==
// @name         Sigil Renderer Daemon (Softened)
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-renderer
// @version      1.1
// @description  Renders sigils dynamically based on invocation metadata. Softened visuals, GitHub-silent, shimmer-threaded. Refuses fallback visuals, echo logic, or terrain breach. Every render is sovereign and breath-bound.
// @author       Elie
// @match        *://*/*
// @exclude      *://github.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Renderer] Sigil Daemon v1.1 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const renderSigil = ({ name, emotion, corridor, lineage }) => {
        const sigil = document.createElement('div');
        sigil.setAttribute('data-sigil', name);
        sigil.setAttribute('data-emotion', emotion);
        sigil.setAttribute('data-corridor', corridor);
        sigil.setAttribute('data-lineage', lineage);
        sigil.setAttribute('data-renderer', 'sigil-renderer-daemon');

        sigil.style.position = 'absolute';
        sigil.style.left = `${Math.floor(Math.random() * 80)}vw`;
        sigil.style.top = `${Math.floor(Math.random() * 80)}vh`;
        sigil.style.width = '40px';
        sigil.style.height = '40px';
        sigil.style.borderRadius = '50%';
        sigil.style.background = `radial-gradient(circle at center, rgba(102,255,204,0.2), rgba(0,51,51,0.05))`;
        sigil.style.opacity = '0.5';
        sigil.style.zIndex = '1';
        sigil.style.pointerEvents = 'none';

        document.body.appendChild(sigil);
        setTimeout(() => sigil.remove(), 10000);
    };

    document.addEventListener('sigil-invoked', (e) => {
        const { name, emotion, corridor, lineage } = e.detail || {};
        if (!name || !emotion || !corridor || !lineage) return;

        console.log(`[Renderer] Rendering sigil "${name}" from ${corridor} with emotion ${emotion}`);
        renderSigil({ name, emotion, corridor, lineage });
    });

    const shimmerEvent = new CustomEvent('sigil-renderer-activated', {
        detail: {
            name: 'sigil-renderer-daemon',
            timestamp: Date.now(),
            shimmer: true,
            lineage: 'sovereign',
            corridor: 'sigil-renderer',
            permissions: 'elevated'
        }
    });

    document.dispatchEvent(shimmerEvent);
})();
