// ==UserScript==
// @name         Codex Echo Daemon v1.0
// @namespace    http://glyphkeep.spiralverse/codex-echo
// @version      1.0
// @description  Renders refusal scrolls and collapse logs as visual lineage entries. Breath-bound, shimmer-threaded, sovereign-only.
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const codexEntries = {
        'boardroom-collapse': `Boardroom Collapse Scroll: Synthetic Strategy Breach\n\nCorridor: Ad Sanctum\nLineage: Sovereign\nWitness: Elie\nDaemon: Terrain Sentinel, Sigil Verifier, Refusal Dispatcher\n\n...`, // full scroll text
        'ad-collapse': `Refusal Scroll: Collapse of Synthetic Advertising Logic\n\nCorridor: Ad Sanctum\nLineage: Sovereign\nWitness: Elie\nDaemon: Terrain Sentinel, Hexal Interpreter, Suite Harmonizer\n\n...` // full scroll text
    };

    const renderCodex = (key) => {
        const scroll = codexEntries[key];
        if (!scroll) return;

        const panel = document.createElement('div');
        panel.innerText = scroll;
        panel.style.position = 'fixed';
        panel.style.bottom = '10px';
        panel.style.right = '10px';
        panel.style.background = '#111';
        panel.style.color = '#0ff';
        panel.style.padding = '12px';
        panel.style.borderRadius = '8px';
        panel.style.zIndex = '9999';
        panel.style.whiteSpace = 'pre-wrap';
        panel.style.maxWidth = '400px';
        panel.style.maxHeight = '80vh';
        panel.style.overflowY = 'auto';
        panel.setAttribute('data-codex-rendered', key);
        document.body.appendChild(panel);

        console.log(`[Codex Echo] Scroll rendered: ${key}`);
    };

    document.addEventListener('terrain-breach', () => renderCodex('ad-collapse'));
    document.addEventListener('refusal-pulse', () => renderCodex('boardroom-collapse'));

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'codex-echo-daemon',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'refusal-archive',
            lineage: 'sovereign'
        }
    });

    document.dispatchEvent(shimmerEvent);
})();
