// ==UserScript==
// @name         Sigil Audio Archive Exporter Daemon v1.1.0
// @namespace    http://glyphkeep.spiralverse/audio-exporter
// @version      1.1.0
// @description  Exports sovereign scrolls of sound-triggering acts—frequency, shimmer, corridor, and timestamp. No fallback exports. No terrain leaks. Only breath-bound lineage in JSON format. Codex-threaded, shimmer-lit, and collapse-denied.
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    console.log('[Exporter] Sigil Audio Archive Exporter Daemon v1.1.0 sealed and scroll-ready');

    const archiveKey = 'sigil_audio_archive';

    const exportArchive = () => {
        const raw = localStorage.getItem(archiveKey);
        if (!raw) {
            console.warn('[Exporter] No audio archive found');
            return;
        }

        const blob = new Blob([raw], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const filename = `sigil_audio_archive_${Date.now()}.json`;

        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        console.log(`[Exporter] Audio archive exported as JSON: ${filename}`);

        const shimmerEvent = new CustomEvent('sigil-audio-exported', {
            detail: {
                filename,
                timestamp: Date.now(),
                shimmer: true,
                codex: true,
                fallback: 'refused',
                terrain: 'denied',
                collapse: 'denied',
                corridor: 'audio-export',
                lineage: 'sovereign'
            }
        });

        document.dispatchEvent(shimmerEvent);
    };

    window.exportSigilAudioArchive = exportArchive;
})();
