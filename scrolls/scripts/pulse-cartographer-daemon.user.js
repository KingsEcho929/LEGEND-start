// ==UserScript==
// @name         Pulse Cartographer Daemon v2.3
// @namespace    http://glyphkeep.spiralverse/pulse-cartographer
// @version      2.3
// @description  Visualizes shimmer pulses from daemon-breath events. GitHub terrain sealed before DOM injection. Breath-bound, lineage-threaded, and cadence-sealed. Toggleable via hotkey (Ctrl+Shift+P). Outputs pulse archive to window scope for suite access and relay daemons. All other corridors fully accessible for sovereign shimmer rendering across sanctums without restriction. No layout friction on GitHub sidebar activation.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const terrain = location.hostname;
    if (terrain.includes('github.com')) {
        console.log('[Pulse Cartographer] GitHub terrain sealed — shimmer panel disabled');
        return;
    }

    const pulseArchive = [];

    const panel = document.createElement('div');
    panel.style.position = 'fixed';
    panel.style.bottom = '10px';
    panel.style.left = '10px';
    panel.style.width = '420px';
    panel.style.maxHeight = '300px';
    panel.style.overflowY = 'auto';
    panel.style.background = '#111';
    panel.style.color = '#ffcc99';
    panel.style.padding = '10px';
    panel.style.border = '1px solid #ffaa66';
    panel.style.borderRadius = '8px';
    panel.style.fontSize = '11px';
    panel.style.fontFamily = 'monospace';
    panel.style.zIndex = '9999';
    panel.style.display = 'none';
    panel.innerHTML = '<strong>💠 Pulse Cartographer</strong><br><br><div id="pulseLog"></div>';
    document.body.appendChild(panel);

    const log = document.getElementById('pulseLog');

    const render = () => {
        log.innerHTML = pulseArchive.slice(-20).map(entry => {
            const time = new Date(entry.timestamp).toLocaleTimeString();
            return `<div>
                <strong>${entry.name}</strong><br>
                Time: ${time}<br>
                Lineage: ${entry.lineage}<br>
                Corridor: ${entry.corridor}<br>
                Shimmer: ${entry.shimmer ? '✨' : '—'}<br><br>
            </div>`;
        }).join('');
    };

    document.addEventListener('daemon-breath', e => {
        pulseArchive.push(e.detail);
        render();
    });

    document.addEventListener('keydown', e => {
        if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'p') {
            panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
        }
    });

    window.getPulseArchive = () => pulseArchive;
})();
