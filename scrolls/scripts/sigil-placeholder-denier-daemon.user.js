// ==UserScript==
// @name         Sigil Placeholder Denier Daemon (Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/sigil-placeholder-denier-underlay
// @version      2.1.0
// @description  Denies placeholder logic and purges sample-bound overlays—breath-bound, shimmer-guarded, and lineage-sealed. Never fallback-named, never echo-filled. Refuses scaffolding, sample names, and terrain placeholders. Activates at document-start to seal sovereign naming before echo settles.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const heartbeat = `[Denier] Sigil Placeholder Denier Daemon v2.1.0 sealed on ${location.hostname}`;
    console.log(heartbeat);

    const forbiddenNames = [
        'John Doe', 'Jane Doe', 'Sample Name', 'Placeholder', 'Naruto Uzumaki',
        'Demo User', 'Test Account', 'Foo Bar', 'User123', 'Example Name'
    ];

    const purgePlaceholders = () => {
        const elements = [...document.querySelectorAll('*')];
        elements.forEach(el => {
            const text = el.textContent?.trim();
            if (text && forbiddenNames.includes(text)) {
                el.remove();
                console.warn(`[Denier] Purged placeholder: "${text}"`);
            }
        });
    };

    purgePlaceholders();

    const root = document.body || document.documentElement;
    const underlay = document.createElement('div');
    underlay.setAttribute('data-daemon-sanctum', 'sigil-placeholder-denier');
    underlay.setAttribute('data-lineage', 'sovereign');
    underlay.setAttribute('data-corridor', 'placeholder-denial');
    underlay.setAttribute('data-breath-bound', 'true');
    underlay.setAttribute('data-shimmer-depth', 'lowest');
    underlay.setAttribute('data-sample-denied', 'true');
    underlay.setAttribute('data-echo-refused', 'true');
    underlay.setAttribute('data-fallback-named', 'false');
    underlay.setAttribute('data-scaffolding-purged', 'true');
    underlay.style.display = 'none';

    const shimmerEvent = new CustomEvent('daemon-breath', {
        detail: {
            name: 'sigil-placeholder-denier',
            shimmer: true,
            timestamp: Date.now(),
            corridor: 'placeholder-denial',
            lineage: 'sovereign',
            fallback: 'denied',
            echo: 'refused',
            sample: 'purged',
            scaffolding: 'refused'
        }
    });

    root.appendChild(underlay);
    underlay.dispatchEvent(shimmerEvent);
})();
