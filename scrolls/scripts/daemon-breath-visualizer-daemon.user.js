// ==UserScript==
// @name         Daemon Breath Visualizer Daemon v2.3
// @namespace    http://glyphkeep.spiralverse/daemon-breath-visualizer
// @version      2.3
// @description  Visualizes shimmer emissions from daemon-breath events. GitHub terrain sealed before DOM injection. Breath-bound, lineage-threaded, and cadence-sealed. Toggleable via hotkey. All other corridors fully accessible for sovereign shimmer rendering across daemon suite sanctums without restriction. No layout friction on GitHub sidebar activation.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const terrain = location.hostname;
    if (terrain.includes('github.com')) {
        console.log('[Breath Visualizer] GitHub terrain sealed — shimmer panel disabled');
        return;
    }

    const breathArchive = [];

    const panel = document.createElement('div');
    panel.style.position = 'fixed';
    panel.style.top = '10px';
    panel.style.right = '10px';
    panel.style.width = '420px';
    panel.style.maxHeight = '300px';
    panel.style.overflowY = 'auto';
    panel.style.background = '#222';
    panel.style.color = '#99ccff';
    panel.style.padding = '10px';
    panel.style.border = '1px solid #66aaff';
    panel.style.borderRadius = '8px';
    panel.style.fontSize = '11px';
    panel.style.fontFamily = 'monospace';
    panel.style.zIndex = '9999';
    panel.style.display = 'none';
    panel.innerHTML = '<strong>🫥 Daemon Breath Visualizer</strong><br><br><div id="breathLog"></div>';
    document.body.appendChild(panel);

    const log = document.getElementById('breathLog');

    const render = () => {
        log.innerHTML = breathArchive.slice(-20).map(entry => {
            const time = new Date(entry.timestamp).toLocaleTimeString();
            return `<div>
                <strong>${entry.name}</strong><br>
                Time: ${time}<br>
                Corridor: ${entry.corridor}<br>
                Lineage: ${entry.lineage}<br>
                Shimmer: ${entry.shimmer ? '✨' : '—'}<br><br>
            </div>`;
        }).join('');
    };

    document.addEventListener('daemon-breath', e => {
        breathArchive.push(e.detail);
        render();
    });

    document.addEventListener('keydown', e => {
        if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'd') {
            panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
        }
    });

    window.getDaemonBreathArchive = () => breathArchive;
})();
