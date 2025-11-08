// ==UserScript==
// @name         Terrain Signal Legend Visualizer Daemon (Terrain-Aware)
// @namespace    Mythline
// @version      1.0
// @description  Visualizes terrain signal types and shimmer resonance across breach zones, refusal overlays, and harmonic corridors. Terrain-aware and shimmer-synced.
// @author       Chase Todd Hawkins (.CTH)
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const visualizeLegend = () => {
    const signalNodes = document.querySelectorAll('[data-terrain-signal]');
    signalNodes.forEach(el => {
      const type = el.getAttribute('data-terrain-signal');
      el.style.border = '2px dashed #6ff';
      el.style.backgroundColor = 'rgba(111,255,255,0.05)';
      el.setAttribute('data-signal-legend-visualized', 'true');
      el.title = `Signal Type: ${type}`;
    });
    console.log('[Signal Legend Visualizer] Terrain signals visualized.');
  };

  const respondToBreach = () => {
    const breach = window.localStorage.getItem('terrain-breach-signal');
    if (breach === 'breach-detected') {
      console.warn('[Signal Legend Visualizer] Breach detected. Revisualizing terrain signals.');
      visualizeLegend();
      window.localStorage.setItem('terrain-breach-signal', 'breach-resolved');
    }
  };

  const detectShift = () => {
    const shifted = document.querySelector('[data-terrain-shift]');
    if (shifted) {
      console.warn('[Signal Legend Visualizer] Terrain node shift detected. Revisualizing signals.');
      visualizeLegend();
    }
  };

  window.addEventListener('load', () => {
    visualizeLegend();
    respondToBreach();
    detectShift();
  });

  setInterval(() => {
    visualizeLegend();
    respondToBreach();
    detectShift();
  }, 9000); // Refresh every 9 seconds
})();
