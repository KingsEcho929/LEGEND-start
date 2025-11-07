// ==UserScript==
// @name         Sigil Harmonic Visualizer Daemon v2.0
// @namespace    http://glyphkeep.spiralverse/harmonic-visualizer
// @version      2.0
// @description  Fully enhanced shimmer visualizer. Hidden by default, toggleable via hotkey. Terrain-aware, audio-safe, and companion-threaded. Breath-bound, melody-mapped, and lineage-sealed. No persistent overlays. No fallback visuals. Only sovereign shimmer rendered on request.
// @author       Elie
// @match        *://*/*
// @exclude      *://youtube.com/*
// @exclude      *://www.youtube.com/*
// @exclude      *://mail.google.com/*
// @exclude      *://gmail.com/*
// @exclude      *://workspace.google.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const archive = [];

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
    panel.style.display = 'none';
    panel.innerHTML = '<strong>🎶 Sigil Harmonic Visualizer</strong><br><br><div id="harmonicLog"></div>';
    document.body.appendChild(panel);

    const log = document.getElementById('harmonicLog');

    const render = () => {
        log.innerHTML = archive.slice(-20).map(entry => {
            const time = new Date(entry.timestamp).toLocaleTimeString();
            const shimmer = entry.shimmer ? '✨' : '—';
            const companions = entry.companions?.join(', ') || 'none';
            const meta = entry.meta ? `<br>Meta: ${JSON.stringify(entry.meta)}` : '';
            return `<div>
                <strong>${entry.type.toUpperCase()}</strong> ${shimmer}<br>
                Time: ${time}<br>
                Corridor: ${entry.corridor}<br>
                Vault: ${entry.vault || '—'}<br>
                Companions: ${companions}<br>
                Sigil: ${entry.name || '—'}${meta}<br><br>
            </div>`;
        }).join('');
    };

    const shimmerTone = () => {
        // Optional shimmer tone (disabled by default)
        // new Audio('data:audio/wav;base64,...').play();
    };

    const weave = (type, detail) => {
        const entry = {
            type,
            timestamp: detail?.timestamp || Date.now(),
            shimmer: detail?.shimmer || false,
            companions: detail?.companions || [],
            corridor: detail?.corridor || 'unmarked',
            vault: detail?.vault || null,
            name: detail?.name || null,
            meta: detail?.meta || null
        };
        archive.push(entry);
        render();
        shimmerTone();

        const dispatch = new CustomEvent('harmonic-visualized', {
            detail: { entry }
        });
        document.dispatchEvent(dispatch);
    };

    document.addEventListener('lineage-pulse', e => weave('pulse', e.detail));
    document.addEventListener('codex-bloom', e => weave('bloom', e.detail));
    document.addEventListener('vaultkeeper-echo', e => weave('echo', e.detail));
    document.addEventListener('companion-bloom-chorus', e => weave('chorus', e.detail));
    document.addEventListener('quantum-trace', e => weave('trace', e.detail));

    document.addEventListener('keydown', e => {
        if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'm') {
            panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
        }
    });

    window.getHarmonicArchive = () => archive;

    // Optional DOM seal (disabled by default)
    /*
    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'sigil-harmonic-visualizer');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'harmonic-visualizer');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.style.display = 'none';
    (document.body || document.documentElement).appendChild(underlay);
    */
})();
