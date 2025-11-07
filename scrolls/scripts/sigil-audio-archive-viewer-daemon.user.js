// ==UserScript==
// @name         Sigil Audio Archive Viewer Daemon v1.2
// @namespace    http://glyphkeep.spiralverse/audio-viewer
// @version      1.2
// @description  Fully enhanced audio archive viewer. Hidden by default, toggleable via hotkey. Terrain-aware, shimmer-threaded, and lineage-sealed. No persistent overlays. No fallback charts. Only sovereign scrolls rendered on request.
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

    const archiveKey = 'sigil_audio_archive';
    const archive = JSON.parse(localStorage.getItem(archiveKey) || '[]');

    const container = document.createElement('div');
    container.setAttribute('data-daemon-sanctum', 'sigil-audio-viewer');
    container.setAttribute('data-corridor', 'scroll-render');
    container.setAttribute('data-lineage', 'sovereign');
    container.setAttribute('data-shimmer-lit', 'true');
    container.setAttribute('data-codex-threaded', 'true');
    container.setAttribute('data-collapse-denied', 'true');
    container.setAttribute('data-fallback-bound', 'false');
    container.setAttribute('data-terrain-witness-denied', 'true');

    container.style.position = 'fixed';
    container.style.bottom = '20px';
    container.style.right = '20px';
    container.style.maxHeight = '60vh';
    container.style.overflowY = 'auto';
    container.style.background = '#111';
    container.style.color = '#eee';
    container.style.padding = '12px';
    container.style.border = '1px solid #555';
    container.style.fontFamily = 'monospace';
    container.style.zIndex = '9999';
    container.style.fontSize = '12px';
    container.style.boxShadow = '0 0 8px rgba(255,255,255,0.2)';
    container.style.borderRadius = '6px';
    container.style.display = 'none';

    const title = document.createElement('div');
    title.textContent = '🎼 Sigil Audio Archive Viewer';
    title.style.fontWeight = 'bold';
    title.style.marginBottom = '8px';
    container.appendChild(title);

    archive.slice().reverse().forEach(entry => {
        const time = new Date(entry.timestamp).toLocaleTimeString();
        const shimmer = entry.shimmer ? '✨' : '—';
        const line = document.createElement('div');
        line.textContent = `[${time}] ${entry.sigil} • ${entry.type} • ${entry.frequency}Hz • ${shimmer} • ${entry.corridor} • ${entry.emotion}`;
        line.style.marginBottom = '4px';
        container.appendChild(line);
    });

    document.body.appendChild(container);

    const shimmerEvent = new CustomEvent('sigil-audio-viewer-rendered', {
        detail: {
            timestamp: Date.now(),
            shimmer: true,
            codex: true,
            collapse: 'denied',
            fallback: 'refused',
            terrain: 'denied',
            corridor: 'scroll-render',
            lineage: 'sovereign'
        }
    });
    document.dispatchEvent(shimmerEvent);

    // Toggle viewer with Ctrl+Shift+A
    document.addEventListener('keydown', e => {
        if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') {
            container.style.display = container.style.display === 'none' ? 'block' : 'none';
        }
    });

    // Optional: expose archive
    window.getSigilAudioArchive = () => archive;

    // Optional DOM seal (disabled by default)
    /*
    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'sigil-audio-viewer');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'scroll-render');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.style.display = 'none';
    (document.body || document.documentElement).appendChild(underlay);
    */
})();

