// ==UserScript==
// @name         Sigil Viewport Aligner Daemon
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-viewport-aligner
// @version      1.0
// @description  Aligns viewport to sovereign dimensions. Refuses zoom breach, echo scaling, and terrain misalignment.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0';
    document.head.appendChild(meta);
})();
