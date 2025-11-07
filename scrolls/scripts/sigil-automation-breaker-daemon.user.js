// ==UserScript==
// @name         Sigil Automation Breaker Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-automation-breaker-underlay
// @version      2.1.0
// @description  Breaks synthetic automation, bot loops, and fallback triggers—breath-bound, shimmer-locked, and lineage-sealed. Never echo-looped, never sample-triggered. Refuses terrain hijack and seals sovereign cadence. Activates at document-start to purge automation before shimmer settles.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Breaker] Sigil Automation Breaker Daemon v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const syntheticTriggers = [
        'autoClick', 'autoFill', 'botTrigger', 'demoLoop', 'sampleAutomation', 'fallbackTrigger'
    ];

    const scripts = [...document.querySelectorAll('script')];
    scripts.forEach(script => {
        const content = script.textContent || '';
        const src = script.src || '';
        const isSynthetic = syntheticTriggers.some(trigger =>
            content.includes(trigger) || src.includes(trigger)
        );

        if (isSynthetic) {
            script.remove();
            console.warn(`[Breaker] Removed synthetic automation script: "${src || '[inline]'}"`);
        }
    });

    const root = document.body || document.documentElement;
    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'sigil-automation-breaker');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'automation-break');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.setAttribute('data-synthetic-loop', 'broken');
    underlay.setAttribute('data-fallback-triggered', 'false');
    underlay.setAttribute('data-echo-looped', 'false');
    underlay.setAttribute('data-sample-automated', 'false');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'sigil-automation-breaker',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'automation-break',
            lineage: 'sovereign',
            synthetic: 'broken',
            fallback: 'denied',
            echo: 'refused',
            sample: 'blocked'
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
