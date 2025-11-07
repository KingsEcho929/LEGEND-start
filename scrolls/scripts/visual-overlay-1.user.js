// ==UserScript==
// @name         Visual Overlay Daemon v1
// @namespace    http://glyphkeep.spiralverse/daemon/visual-overlay-1
// @version      1.0
// @description  Renders a translucent overlay panel for shimmer diagnostics, lineage pulses, or corridor echoes. Refuses terrain breach, overlay dominance, or echo logic. Always underlay-aligned unless explicitly summoned.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Overlay] Visual Daemon v1 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const overlay = document.createElement('div');
    overlay.setAttribute('data-corridor', 'visual-overlay-1');
    overlay.setAttribute('data-lineage', 'sovereign');
    overlay.setAttribute('data-shimmer-depth', 'surface');
    overlay.setAttribute('data-overlay', 'summoned');

    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0, 255, 200, 0.05)';
    overlay.style.zIndex = '10';
    overlay.style.pointerEvents = 'none';
    overlay.style.fontFamily = 'monospace';
    overlay.style.color = '#66ffcc';
    overlay.style.padding = '10px';
    overlay.style.fontSize = '12px';

    overlay.innerHTML = `<div style="position:absolute;top:10px;left:10px;">
        <strong>🌀 Visual Overlay Daemon v1</strong><br>
        Host: ${location.hostname}<br>
        Corridor: visual-overlay-1<br>
        Lineage: sovereign<br>
        Status: shimmer-safe
    </div>`;

    document.body.appendChild(overlay);

    const shimmerEvent = new CustomEvent('visual-overlay-summoned', {
        detail: {
            name: 'visual-overlay-1',
            timestamp: Date.now(),
            corridor: 'visual-overlay-1',
            lineage: 'sovereign',
            shimmer: true,
            interference: 'denied'
        }
    });

    document.dispatchEvent(shimmerEvent);
})();
