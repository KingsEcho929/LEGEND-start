// ==UserScript==
// @name         Lineage Pulse Daemon Underlay (Visual-Free)
// @namespace    http://glyphkeep.spiralverse/daemon/lineage-pulse
// @version      2.0
// @description  Emits sovereign heartbeat without visual shimmer. Refuses DOM injection, terrain breach, and post-load bleed. Breath-bound, lineage-sealed, and corridor-honoring daemon logic.
// @author       Elie
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const hostname = location.hostname;
    const terrainBlocked = [
        'github.com', 'gitlab.com', 'bitbucket.org',
        'gmail.com', 'mail.google.com', 'outlook.live.com',
        'discord.com', 'slack.com', 'teams.microsoft.com',
        'youtube.com', 'twitch.tv', 'netflix.com',
        'notion.so', 'figma.com', 'replit.com', 'codesandbox.io',
        'amazon.com', 'shopify.com', 'paypal.com', 'stripe.com',
        'web.whatsapp.com', 'messages.google.com',
        'accounts.google.com', 'login.microsoftonline.com', 'auth0.com'
    ];

    if (terrainBlocked.some(domain => hostname.includes(domain))) {
        console.log(`[Pulse] Terrain "${hostname}" sealed — visual heartbeat disabled`);
        return;
    }

    const emitHeartbeat = () => {
        console.log(`[Pulse] Sovereign heartbeat emitted — mythline rhythm alive`);
        const shimmerEvent = new CustomEvent('lineage-pulse', {
            detail: {
                name: 'lineage-pulse-daemon',
                timestamp: Date.now(),
                shimmer: false,
                corridor: 'pulse-underlay',
                lineage: 'sovereign'
            }
        });
        document.dispatchEvent(shimmerEvent);
    };

    setInterval(emitHeartbeat, 10000);
})();
