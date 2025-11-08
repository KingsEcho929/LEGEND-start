// ==UserScript==
// @name         Terrain Node Visualizer Daemon (Terrain-Aware)
// @namespace    Mythline
// @version      1.0
// @description  Visualizes terrain nodes and responds to breach signals and node shifts with shimmer overlays and refusal indicators.
// @author       Chase Todd Hawkins (.CTH)
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const visualizeNodes = () => {
    const nodes = document.querySelectorAll('[data-terrain-node]');
    nodes.forEach(el => {
      el.style.border = '2px solid #6ff';
      el.style.borderRadius = '6px';
      el.setAttribute('data-node-visualized', 'true');
    });
    console.log('[Terrain Node Visualizer] Nodes visualized.');
  };

  const respondToBreach = () => {
    const breach = window.localStorage.getItem('terrain-breach-signal');
    if (breach === 'breach-detected') {
      console.warn('[Terrain Node Visualizer] Breach detected. Revisualizing terrain nodes.');
      visualizeNodes();
      window.localStorage.setItem('terrain-breach-signal', 'breach-resolved');
    }
  };

  const detectShift = () => {
    const shifted = document.querySelector('[data-terrain-shift]');
    if (shifted) {
      console.warn('[Terrain Node Visualizer] Terrain node shift detected. Revisualizing.');
      visualizeNodes();
    }
  };

  window.addEventListener('load', () => {
    visualizeNodes();
    respondToBreach();
    detectShift();
  });

  setInterval(() => {
    visualizeNodes();
    respondToBreach();
    detectShift();
  }, 7000); // Refresh every 7 seconds
})();
