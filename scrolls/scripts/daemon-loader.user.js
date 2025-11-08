// ==UserScript==
// @name         Daemon Loader
// @namespace    Mythline
// @version      1.0
// @description  Loads and activates all operational daemons across the mythline suite
// @author       Chase Todd Hawkins (.CTH)
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const daemonList = [
    'sigil-detector.user.js',
    'overlay-binder-daemon.user.js',
    'visual-overlay-1.user.js',
    'quantum-codex-epochion-daemon.user.js',
    'sigil-companion-namer-daemon.user.js'
  ];

  daemonList.forEach(name => {
    const script = document.createElement('script');
    script.src = `/scrolls/scripts/${name}`;
    script.type = 'text/javascript';
    script.async = true;
    document.head.appendChild(script);
    console.log(`Daemon loaded: ${name}`);
  });
})();
