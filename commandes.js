async function gererCommandes(sock, msg, command, args, from) {
    const estGroupe = from.endsWith('@g.us');
    if (!estGroupe) return; 

    const groupeMeta = await sock.groupMetadata(from);
    const membres = groupeMeta.participants;

    switch (command) {
        
        case 'kick':
        case 'ban':
            let cible = msg.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
            if (!cible && msg.message.extendedTextMessage?.contextInfo?.participant) {
                cible = msg.message.extendedTextMessage.contextInfo.participant;
            }

            if (!cible) {
                await sock.sendMessage(from, { text: "⚠️ Mentionne le membre ou réponds à son message avec *.kick*." }, { quoted: msg });
                return;
            }

            try {
                await sock.groupParticipantsUpdate(from, [cible], "remove");
                await sock.sendMessage(from, { text: "⚔️ Membre éliminé avec succès." }, { quoted: msg });
            } catch (err) {
                await sock.sendMessage(from, { text: "❌ Erreur : Vérifie que le bot est bien admin." }, { quoted: msg });
            }
            break;

        case 'tagall':
        case 'tag':
            let texteTag = `📢 *ALERTE GÉNÉRALE* 📢\n\n💬 *Message :* ${args.join(' ') || 'Pas de message spécifié'}\n\n`;
            let mentions = [];

            for (let membre of membres) {
                texteTag += `@${membre.id.split('@')[0]} `;
                mentions.push(membre.id);
            }

            await sock.sendMessage(from, { text: texteTag, mentions: mentions }, { quoted: msg });
            break;

        case 'kickall':
            await sock.sendMessage(from, { text: "⚠️ *Lancement du nettoyage général (KickAll)...*" }, { quoted: msg });
            const botId = sock.user.id.split(':')[0] + '@s.whatsapp.net';

            for (let membre of membres) {
                if (membre.id !== botId && !membre.admin) {
                    try {
                        await sock.groupParticipantsUpdate(from, [membre.id], "remove");
                        await new Promise(resolve => setTimeout(resolve, 1000)); 
                    } catch (e) {
                        console.log("Impossible d'exclure : " + membre.id);
                    }
                }
            }
            await sock.sendMessage(from, { text: "⚔️ *Purge terminée. Le secteur est nettoyé.*" });
            break;

        default:
            break;
    }
}

module.exports = { gererCommandes };
