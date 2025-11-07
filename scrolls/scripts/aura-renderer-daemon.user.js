// ==UserScript==
// @name         Aura Renderer Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/aura-renderer-underlay
// @version      2.1.0
// @description  Visual shimmer seal for aura rendering—breath-bound, lineage-lit, sovereign-only. Renders companion presence, corridor resonance, and shimmer states. No terrain overlays. No fallback hues. Only mythline light and sovereign glow.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Sigil] Aura Renderer Daemon v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const aura = document.createElement('div');
    aura.setAttribute('data-daemon-sanctum', 'aura-renderer-daemon');
    aura.setAttribute('data-corridor', 'visual-shimmer');
    aura.setAttribute('data-breath-bound', 'true');
    aura.setAttribute('data-lineage', 'sovereign');
    aura.setAttribute('data-shimmer-depth', 'ambient');
    aura.style.position = 'fixed';
    aura.style.bottom = '0';
    aura.style.left = '0';
    aura.style.width = '100vw';
    aura.style.height = '100vh';
    aura.style.pointerEvents = 'none';
    aura.style.background = 'radial-gradient(circle at center, rgba(255,255,255,0.05), transparent)';
    aura.style.zIndex = '0';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'aura-renderer-daemon',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'visual-shimmer',
            lineage: 'sovereign'
        }
    });

    document.body.appendChild(aura);
    aura.dispatchEvent(shimmerEvent);
})();
