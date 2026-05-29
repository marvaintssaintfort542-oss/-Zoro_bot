const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys');
const pino = require('pino');
const { Boom } = require('@hapi/boom');
const { gererCommandes } = require('./commandes');

async function startZoroBot() {
    // Gère l'authentification et crée un dossier 'session' pour rester connecté
    const { state, saveCreds } = await useMultiFileAuthState('session');

    const sock = makeWASocket({
        logger: pino({ level: 'silent' }),
        auth: state,
        printQRInTerminal: true // Affiche le QR code dans les logs de Render
    });

    // Sauvegarde les informations de connexion chaque fois qu'elles changent
    sock.ev.on('creds.update', saveCreds);

    // Gère la connexion et les reconnexions automatiques
    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect, qr } = update;
        
        if (qr) {
            console.log("[ZORO] Un QR Code est disponible ! Regarde tes logs Render pour le scanner.");
        }
        
        if (connection === 'close') {
            const shouldReconnect = (lastDisconnect.error instanceof Boom)?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log('[ZORO] Connexion fermée en raison de :', lastDisconnect.error, ', reconnexion :', shouldReconnect);
            if (shouldReconnect) {
                startZoroBot(); // Relancer le bot si déconnecté par erreur
            }
        } else if (connection === 'open') {
            console.log('[ZORO] Le bot est connecté avec succès à WhatsApp ! ⚔️');
        }
    });

    // Écoute et gère les messages reçus
    sock.ev.on('messages.upsert', async (m) => {
        const msg = m.messages[0];
        if (!msg.message || msg.key.fromMe) return; // Ignore les messages vides ou envoyés par le bot lui-même

        // Récupérer le texte du message
        const text = msg.message.conversation || msg.message.extendedTextMessage?.text || "";
        const from = msg.key.remoteJid;

        // Définir le préfixe (ici un point)
        const prefix = "."; 
        
        if (text.startsWith(prefix)) {
            const args = text.trim().split(/ +/);
            const command = args.shift().slice(prefix.length).toLowerCase();

            // --- ESPACE DES COMMANDES ---
            switch (command) {
                case 'ping':
                    await sock.sendMessage(from, { text: 'Pong! 🏓 Le bot Zoro est opérationnel.' }, { quoted: msg });
                    break;

                case 'aide':
                case 'menu':
                    const texteMenu = `⚔️ *BOT ZORO - MENU* ⚔️\n\n` +
                                      `*Modération (Admins uniquement) :*\n` +
                                      `.kick - Exclure un membre (mentionne ou réponds)\n` +
                                      `.kickall - Purger tout le groupe\n` +
                                      `.tagall / .tag - Mentionner tout le monde\n\n` +
                                      `*Général :*\n` +
                                      `.ping - Tester le bot\n` +
                                      `.statut - Voir le statut système`;
                    await sock.sendMessage(from, { text: texteMenu }, { quoted: msg });
                    break;

                case 'statut':
                    await sock.sendMessage(from, { text: '🛡️ Système en ligne. Prêt à administrer le secteur.' }, { quoted: msg });
                    break;

                default:
                    // Si ce n'est pas une commande de base, on vérifie dans commandes.js
                    await gererCommandes(sock, msg, command, args, from);
                    break;
            }
        }
    });
}

// Lancement du bot
startZoroBot();
