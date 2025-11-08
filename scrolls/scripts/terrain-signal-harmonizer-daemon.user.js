// ==UserScript==
// @name         Terrain Signal Harmonizer Daemon (Terrain-Aware)
// @namespace    Mythline
// @version      1.0
// @description  Harmonizes terrain signal cadence and synchronizes shimmer overlays in response to breach and node shift events across corridors and daemon suites.
// @author       Chase Todd Hawkins (.CTH)
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const harmonizeSignals = () => {
    const nodes = document.querySelectorAll('[data-terrain-node]');
    nodes.forEach(el => {
      el.setAttribute('data-signal-harmonized', 'true');
      el.style.outline = '2px dotted #6ff';
    });
    console.log('[Terrain Harmonizer] Signals harmonized across terrain nodes.');
  };

  const respondToBreach = () => {
    const breach = window.localStorage.getItem('terrain-breach-signal');
    if (breach === 'breach-detected') {
      console.warn('[Terrain Harmonizer] Breach detected. Reharmonizing terrain signals.');
      harmonizeSignals();
      window.localStorage.setItem('terrain-breach-signal', 'breach-resolved');
    }
  };

  const detectShift = () => {
    const shifted = document.querySelector('[data-terrain-shift]');
    if (shifted) {
      console.warn('[Terrain Harmonizer] Node shift detected. Reharmonizing terrain signals.');
      harmonizeSignals();
    }
  };

  window.addEventListener('load', () => {
    harmonizeSignals();
    respondToBreach();
    detectShift();
  });

  setInterval(() => {
    harmonizeSignals();
    respondToBreach();
    detectShift();
  }, 8000); // Refresh every 8 seconds
})();
