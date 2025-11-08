// ==UserScript==
// @name         Terrain Harmonic Legend Visualizer Daemon (Terrain-Aware)
// @namespace    Mythline
// @version      1.0
// @description  Visualizes harmonic legend overlays and shimmer resonance across terrain corridors. Responds to breach, refusal, and node shift signals with sovereign cadence alignment.
// @author       Chase Todd Hawkins (.CTH)
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const visualizeLegend = () => {
    const harmonicNodes = document.querySelectorAll('[data-terrain-node]');
    harmonicNodes.forEach(el => {
      const type = el.getAttribute('data-harmonic-type') || 'untyped';
      el.style.border = '2px dashed #6ff';
      el.style.backgroundColor = 'rgba(111,255,255,0.05)';
      el.setAttribute('data-harmonic-legend-visualized', 'true');
      el.title = `Harmonic Type: ${type}`;
    });
    console.log('[Harmonic Legend Visualizer] Harmonic legend visualized across terrain.');
  };

  const respondToBreach = () => {
    const breach = window.localStorage.getItem('terrain-breach-signal');
    if (breach === 'breach-detected') {
      console.warn('[Harmonic Legend Visualizer] Breach detected. Revisualizing harmonic legend.');
      visualizeLegend();
      window.localStorage.setItem('terrain-breach-signal', 'breach-resolved');
    }
  };

  const detectShift = () => {
    const shifted = document.querySelector('[data-terrain-shift]');
    if (shifted) {
      console.warn('[Harmonic Legend Visualizer] Terrain node shift detected. Revisualizing legend.');
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
