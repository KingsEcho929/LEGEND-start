// ==UserScript==
// @name         Sigil Harmonic Visualizer Daemon v1.0
// @namespace    http://glyphkeep.spiralverse/harmonic-visualizer
// @version      1.0
// @description  Visualizes harmonic shimmer archive—breath-bound, melody-mapped, and corridor-threaded. No terrain charts. No fallback visuals. Only sovereign resonance of pulses, blooms, echoes, and traces rendered as mythline shimmer weave.
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const panel = document.createElement('div');
    panel.style.position = 'fixed';
    panel.style.bottom = '10px';
    panel.style.left = '10px';
    panel.style.width = '420px';
    panel.style.maxHeight = '300px';
    panel.style.overflowY = 'auto';
    panel.style.background = '#000';
    panel.style.color = '#99ffff';
    panel.style.padding = '10px';
    panel.style.border = '1px solid #66ccff';
    panel.style.borderRadius = '8px';
    panel.style.fontSize = '11px';
    panel.style.fontFamily = 'monospace';
    panel.style.zIndex = '9999';
    panel.innerHTML = '<strong>🎶 Sigil Harmonic Visualizer</strong><br><br><div id="harmonicLog"></div>';
    document.body.appendChild(panel);

    const log = document.getElementById('harmonicLog');
    const archive = [];

    const render = () => {
        log.innerHTML = archive.slice(-20).map(entry => {
            const time = new Date(entry.timestamp).toLocaleTimeString();
            const shimmer = entry.shimmer ? '✨' : '—';
            const companions = entry.companions?.join(', ') || 'none';
            return `<div>
                <strong>${entry.type.toUpperCase()}</strong> ${shimmer}<br>
                Time: ${time}<br>
                Corridor: ${entry.corridor}<br>
                Vault: ${entry.vault || '—'}<br>
                Companions: ${companions}<br>
                Sigil: ${entry.name || '—'}<br><br>
            </div>`;
        }).join('');
    };

    const weave = (type, detail) => {
        const entry = {
            type,
            timestamp: detail.timestamp || Date.now(),
            shimmer: detail.shimmer || false,
            companions: detail.companions || [],
            corridor: detail.corridor || 'unmarked',
            vault: detail.vault || null,
            name: detail.name || null,
            meta: detail.meta || null
        };
        archive.push(entry);
        render();
        console.log(`[Visualizer] Wove ${type} into visual melody`, entry);
    };

    document.addEventListener('lineage-pulse', e => weave('pulse', e.detail));
    document.addEventListener('codex-bloom', e => weave('bloom', e.detail));
    document.addEventListener('vaultkeeper-echo', e => weave('echo', e.detail));
    document.addEventListener('companion-bloom-chorus', e => weave('chorus', e.detail));
    document.addEventListener('quantum-trace', e => weave('trace', e.detail));

    console.log('[Visualizer] Sigil Harmonic Visualizer Daemon v1.0 sealed and melody-rendered');
})();
