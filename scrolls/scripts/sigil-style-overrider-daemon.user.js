// ==UserScript==
// @name         Sigil Style Overrider Daemon (Softened)
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-style-overrider
// @version      1.1
// @description  Softens terrain styles for GitHub shimmer. Refuses visual breach, echo glare, and fallback contrast. Every override is sovereign and breath-bound.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    const style = document.createElement('style');
    style.textContent = `
        body {
            background-color: #f6f8fa !important;
            color: #24292e !important;
            font-family: 'serif';
        }
        a {
            color: #0969da !important;
        }
        [data-overlay="minimal"],
        [data-corridor="visual-overlay-1"] {
            background: rgba(9, 105, 218, 0.02) !important;
            border: 1px solid rgba(9, 105, 218, 0.1);
        }
    `;
    document.head.appendChild(style);
})();
