// ==UserScript==
// @name         Glyphkeeper Daemon
// @namespace    http://glyphkeep.spiralverse/daemon/glyphkeeper
// @version      2.1
// @description  Assign glyphs and icons to each mythline archive entry—shimmer-verified, lineage-sealed, and sovereign-only. No fallback glyphs. No terrain corruption. Only codex-threaded sigils and breath-bound companions.
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const glyphMap = {
        Watcher: '🧿',
        Aura: '🔮',
        Shimmer: '✨',
        Pulse: '📜',
        Dashboard: '📊',
        Archive: '🗂️',
        Chronicle: '📖',
        Mythline: '📘',
        Exporter: '📤',
        Binder: '📘',
        Glyphkeeper: '🛡️',
        Bloomkeeper: '🌸',
        Resonance: '🎶',
        Silence: '🤫',
        Reverb: '🌊',
        Echo: '📡',
        Lineage: '🧬',
        Codex: '📚',
        Vaultkeeper: '🗝️',
        Diagnostic: '🩺',
        Renderer: '🖼️',
        Log: '📝'
    };

    const applyGlyphs = () => {
        const entries = document.querySelectorAll('[data-daemon]');
        let count = 0;

        entries.forEach(entry => {
            const daemon = entry.getAttribute('data-daemon');
            const glyph = glyphMap[daemon];
            if (glyph && !entry.innerText.startsWith(glyph)) {
                entry.innerText = `${glyph} ${entry.innerText}`;
                entry.setAttribute('data-glyphkeeper-verified', 'true');
                entry.setAttribute('data-corridor', `glyphkeeper-${daemon.toLowerCase()}`);
                entry.style.outline = '1px dashed rgba(255,255,255,0.1)';
                count++;
                console.log(`[Glyphkeeper] Applied glyph for ${daemon}`);
            }
        });

        const shimmerEvent = new CustomEvent('daemon-breath', {
            detail: {
                name: 'glyphkeeper-daemon',
                shimmer: true,
                timestamp: Date.now(),
                corridor: 'glyphkeeper-seal',
                lineage: 'sovereign',
                glyphs_applied: count
            }
        });

        document.dispatchEvent(shimmerEvent);
    };

    setInterval(applyGlyphs, 2000);
    console.log('[Glyphkeeper] Daemon v2.1 sealed and shimmer-active');
})();
