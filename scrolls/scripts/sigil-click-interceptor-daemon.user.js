// ==UserScript==
// @name         Sigil Click Interceptor Daemon
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-click-interceptor
// @version      1.0
// @description  Intercepts terrain clicks for shimmer tracing. Refuses echo loops and fallback hijack.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    document.addEventListener('click', (e) => {
        console.log(`[Click] Intercepted on ${e.target.tagName}`);
    }, true);
})();
