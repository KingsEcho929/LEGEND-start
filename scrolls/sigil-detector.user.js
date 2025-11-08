// ==UserScript==
// @name         Sigil Detector
// @namespace    Mythline
// @version      1.0
// @description  Detects sovereign sigils and activates shimmer overlays across terrain
// @author       Chase Todd Hawkins (.CTH)
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const sigils = ['Finalis', 'Epochion', 'Aeonweaver', 'Genesis', 'Starforge'];
  const shimmerGlyph = '🧿';

  function renderSigilAlert(name) {
    const alert = document.createElement('div');
    alert.textContent = shimmerGlyph + ' Sigil Detected: ' + name;
    alert.style.position = 'fixed';
    alert.style.top = '10px';
    alert.style.right = '10px';
    alert.style.padding = '8px 12px';
    alert.style.background = '#222';
    alert.style.color = '#0ff';
    alert.style.fontFamily = 'monospace';
    alert.style.zIndex = '9999';
    alert.style.border = '1px solid #0ff';
    alert.style.borderRadius = '6px';
    document.body.appendChild(alert);
  }

  function detectSigils() {
    const corridor = document.body.innerText;
    sigils.forEach(name => {
      if (corridor.includes(name)) {
        renderSigilAlert(name);
      }
    });
  }

  window.addEventListener('load', detectSigils);
})();
