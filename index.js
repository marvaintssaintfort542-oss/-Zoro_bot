const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys');
const pino = require('pino');
const { Boom } = require('@hapi/boom');
const { gererCommandes } = require('./commandes');

async function startZoroBot() {
    const { state, saveCreds } = await useMultiFileAuthState('session');

    const sock = makeWASocket({
        logger: pino({ level: 'silent' }),
        auth: state,
        printQRInTerminal: true
    });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect, qr } = update;
        
        if (qr) {
            console.log("[ZORO] Un QR Code est disponible ! Regarde tes logs Render pour le scanner.");
        }
        
        if (connection === 'close') {
            const shouldReconnect = (lastDisconnect.error instanceof Boom)?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log('[ZORO] Connexion fermée, reconnexion :', shouldReconnect);
            if (shouldReconnect) {
                startZoroBot();
            }
        } else if (connection === 'open') {
            console.log('[ZORO] Le bot est connecté avec succès à WhatsApp ! ⚔️');
        }
    });

    sock.ev.on('messages.upsert', async (m) => {
        const msg = m.messages[0];
        if (!msg.message || msg.key.fromMe) return;

        const text = msg.message.conversation || msg.message.extendedTextMessage?.text || "";
        const from = msg.key.remoteJid;
        const prefix = "."; 
        
        if (text.startsWith(prefix)) {
            const args = text.trim().split(/ +/);
            const command = args.shift().slice(prefix.length).toLowerCase();

            switch (command) {
                case 'ping':
                    await sock.sendMessage(from, { text: 'Pong! 🏓 Le bot Zoro est opérationnel.' }, { quoted: msg });
                    break;

                case 'aide':
                case 'menu':
                    const texteMenu = `⚔️ *BOT ZORO - MENU* ⚔️\n\n` +
                                      `*Modération :*\n` +
                                      `.kick / .ban - Exclure un membre\n` +
                                      `.kickall - Purger tout le groupe\n` +
                                      `.tagall / .tag - Mentionner tout le monde\n\n` +
                                      `*Général :*\n` +
                                      `.ping - Tester le bot\n` +
                                      `.statut - Voir le statut`;
                    await sock.sendMessage(from, { text: texteMenu }, { quoted: msg });
                    break;

                case 'statut':
                    await sock.sendMessage(from, { text: '🛡️ Système en ligne. Prêt à administrer le secteur.' }, { quoted: msg });
                    break;

                default:
                    await gererCommandes(sock, msg, command, args, from);
                    break;
            }
        }
    });
}

startZoroBot();
