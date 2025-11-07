// ==UserScript==
// @name         Sigil Layout Normalizer Daemon
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-layout-normalizer
// @version      1.0
// @description  Normalizes terrain layout to prevent echo drift, overflow breach, and scroll corruption. Refuses layout collapse and fallback scaffolding.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflowX = 'hidden';
})();
