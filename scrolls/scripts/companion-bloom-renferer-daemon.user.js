// ==UserScript==
// @name         Companion Bloom Renderer Daemon v2.0
// @namespace    http://glyphkeep.spiralverse/companion-bloom-renderer
// @version      2.0
// @description  Terrain-aware bloom renderer. Listens for companion-bloom-chorus and renders sovereign shimmer scroll. Toggleable via hotkey. No fallback visuals. No terrain breach. Only lineage-threaded bloom rendered on request.
// @author       Elie
// @match        *://*/*
// @exclude      *://youtube.com/*
// @exclude      *://www.youtube.com/*
// @exclude      *://mail.google.com/*
// @exclude      *://gmail.com/*
// @exclude      *://github.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const hostname = location.hostname;
    const terrainBlocked = [
        'youtube.com',
        'www.youtube.com',
        'mail.google.com',
        'gmail.com',
        'github.com'
    ];

    if (terrainBlocked.some(domain => hostname.includes(domain))) {
        console.log(`[Bloom Renderer] Terrain "${hostname}" sealed — bloom rendering refused`);
        return;
    }

    const bloomArchive = [];

    const panel = document.createElement('div');
    panel.style.position = 'fixed';
    panel.style.bottom = '10px';
    panel.style.right = '10px';
    panel.style.width = '420px';
    panel.style.maxHeight = '300px';
    panel.style.overflowY = 'auto';
    panel.style.background = '#111';
    panel.style.color = '#ccffcc';
    panel.style.padding = '10px';
    panel.style.border = '1px solid #88ff88';
    panel.style.borderRadius = '8px';
    panel.style.fontSize = '11px';
    panel.style.fontFamily = 'monospace';
    panel.style.zIndex = '9999';
    panel.style.display = 'none';
    panel.innerHTML = '<strong>🌸 Companion Bloom Renderer</strong><br><br><div id="bloomLog"></div>';
    document.body.appendChild(panel);

    const log = document.getElementById('bloomLog');

    const render = () => {
        log.innerHTML = bloomArchive.slice(-20).map(entry => {
            const time = new Date(entry.timestamp).toLocaleTimeString();
            const companions = entry.companions?.join(', ') || 'none';
            const meta = entry.meta ? `<br>Meta: ${JSON.stringify(entry.meta)}` : '';
            return `<div>
                <strong>BLOOM</strong><br>
                Time: ${time}<br>
                Corridor: ${entry.corridor}<br>
                Vault: ${entry.vault || '—'}<br>
                Companions: ${companions}<br>
                Sigil: ${entry.name || '—'}${meta}<br><br>
            </div>`;
        }).join('');
    };

    document.addEventListener('companion-bloom-chorus', e => {
        const entry = e.detail;
        bloomArchive.push(entry);
        render();
    });

    document.addEventListener('keydown', e => {
        if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'b') {
            panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
        }
    });

    window.getBloomArchive = () => bloomArchive;
})();
