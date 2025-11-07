// ==UserScript==
// @name         Sigil Style Overrider Daemon (Softened)
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-style-overrider
// @version      1.2
// @description  Gmail-sealed style overrider. Softens terrain visuals only on safe corridors. Refuses breach on Gmail. Breath-bound, shimmer-honoring, and lineage-sealed.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    const hostname = location.hostname;
    const terrainBlocked = ['mail.google.com', 'gmail.com', 'workspace.google.com'];

    if (terrainBlocked.some(domain => hostname.includes(domain))) {
        console.log(`[Style Overrider] Terrain "${hostname}" sealed — style override refused`);
        return;
    }

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
