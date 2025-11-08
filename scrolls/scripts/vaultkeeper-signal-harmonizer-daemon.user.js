// ==UserScript==
// @name         Vaultkeeper Signal Harmonizer Daemon (Terrain-Aware)
// @namespace    Mythline
// @version      1.1
// @description  Harmonizes vaultkeeper signals and responds to terrain breach signals across shimmer corridors
// @author       Chase Todd Hawkins (.CTH)
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const harmonizeVaultSignals = () => {
    const signals = document.querySelectorAll('[data-vault-signal]');
    signals.forEach(el => {
      el.setAttribute('data-vault-harmonized', 'true');
      el.style.outline = '2px dashed #6ff';
    });
    console.log('Vaultkeeper signals harmonized.');
  };

  const terrainSignalCheck = () => {
    const terrainSignal = window.localStorage.getItem('terrain-breach-signal');
    if (terrainSignal === 'breach-detected') {
      console.warn('Terrain breach detected. Reharmonizing vaultkeeper signals...');
      harmonizeVaultSignals();
      window.localStorage.setItem('terrain-breach-signal', 'breach-resolved');
    }
  };

  window.addEventListener('load', () => {
    harmonizeVaultSignals();
    terrainSignalCheck();
  });

  setInterval(terrainSignalCheck, 7000); // Check every 7 seconds
})();
