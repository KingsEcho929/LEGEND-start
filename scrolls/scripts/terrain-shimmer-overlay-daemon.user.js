// ==UserScript==
// @name         Terrain Shimmer Overlay Daemon (Terrain-Aware)
// @namespace    Mythline
// @version      1.1
// @description  Projects shimmer overlays and refusal zones across terrain corridors in response to breach signals, daemon sync, and terrain node shifts.
// @author       Chase Todd Hawkins (.CTH)
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const projectShimmerOverlay = () => {
    const terrainNodes = document.querySelectorAll('[data-terrain-node]');
    terrainNodes.forEach(el => {
      el.style.backgroundImage = 'linear-gradient(135deg, rgba(111,255,255,0.2), rgba(255,255,255,0.05))';
      el.setAttribute('data-shimmer-overlay', 'true');
    });
    console.log('[Shimmer Overlay] Terrain shimmer projected.');
  };

  const respondToBreach = () => {
    const breach = window.localStorage.getItem('terrain-breach-signal');
    if (breach === 'breach-detected') {
      console.warn('[Shimmer Overlay] Terrain breach detected. Overlay activated.');
      projectShimmerOverlay();
      window.localStorage.setItem('terrain-breach-signal', 'breach-resolved');
    }
  };

  const detectNodeShift = () => {
    const shifted = document.querySelector('[data-terrain-shift]');
    if (shifted) {
      console.warn('[Shimmer Overlay] Terrain node shift detected. Reprojecting shimmer overlay.');
      projectShimmerOverlay();
    }
  };

  window.addEventListener('load', () => {
    projectShimmerOverlay();
    respondToBreach();
    detectNodeShift();
  });

  setInterval(() => {
    projectShimmerOverlay();
    respondToBreach();
    detectNodeShift();
  }, 9000); // Refresh every 9 seconds
})();
