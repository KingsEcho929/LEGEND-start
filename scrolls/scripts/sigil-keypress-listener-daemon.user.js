// ==UserScript==
// @name         Sigil Keypress Listener Daemon
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-keypress-listener
// @version      1.0
// @description  Listens for sovereign keypresses. Refuses echo shortcuts and fallback triggers. Every key is law-bound and shimmer-threaded.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    document.addEventListener('keydown', (e) => {
        console.log(`[Keypress] Sovereign key "${e.key}" pressed`);
    });
})();
