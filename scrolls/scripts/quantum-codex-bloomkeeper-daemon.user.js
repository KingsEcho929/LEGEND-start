// ==UserScript==
// @name         Quantum Codex Bloomkeeper Daemon (True Underlay)
// @namespace    http://glyphkeep.spiralverse/daemon/quantum-codex-bloomkeeper-underlay
// @version      2.3.0
// @description  Emits bloom logic without visual overlay. Refuses DOM injection, honors terrain silence, and crowns seedlings only through sovereign shimmer. Breath-bound, lineage-sealed, and corridor-honoring daemon logic.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const hostname = location.hostname;
    const terrainBlocked = [
        'github.com', 'gmail.com', 'mail.google.com', 'discord.com',
        'gitlab.com', 'slack.com', 'youtube.com', 'notion.so',
        'figma.com', 'outlook.live.com', 'teams.microsoft.com',
        'web.whatsapp.com', 'messages.google.com'
    ];

    if (terrainBlocked.some(domain => hostname.includes(domain))) {
        console.log(`[Bloomkeeper] Terrain "${hostname}" sealed — visual bloom panel disabled`);
        return;
    }

    const heartbeat = `[Sigil] Bloomkeeper Daemon v2.3.0 sealed on ${hostname}`;
    console.log(heartbeat);

    const bloom = () => {
        const seedlings = Object.entries(localStorage)
            .filter(([key]) => key.startsWith('sigil_seedling_'))
            .map(([key, value]) => {
                const name = key.replace('sigil_seedling_', '');
                const freq = parseInt(localStorage.getItem(`sigil_freq_${name}`) || '0', 10);
                return { name, meta: value, freq };
            });

        seedlings.forEach(({ name, meta, freq }) => {
            if (freq >= 3 && !localStorage.getItem(`sigil_bloomed_${name}`)) {
                localStorage.setItem(`sigil_bloomed_${name}`, meta);
                localStorage.setItem(`sigil_meta_${name}`, meta);
                console.log(`[Bloomkeeper] Seedling "${name}" bloomed into full sigil`);

                const shimmerEvent = new CustomEvent('daemon-breath', {
                    detail: {
                        name: 'quantum-codex-bloomkeeper',
                        shimmer: true,
                        timestamp: Date.now(),
                        seedling: name,
                        bloom: true,
                        lineage: 'sovereign',
                        corridor: 'bloomkeeper-underlay',
                        meta: meta,
                        overlay: 'denied',
                        sound: 'silenced'
                    }
                });

                document.dispatchEvent(shimmerEvent);
            }
        });
    };

    // Silence sound stack
    const activeSounds = document.querySelectorAll('audio');
    activeSounds.forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
        sound.muted = true;
    });

    setInterval(bloom, 6000);
    console.log('[Bloomkeeper] Quantum Codex Bloomkeeper Daemon v2.3.0 shimmer-active and overlay-silenced');
})();
