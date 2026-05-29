const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason
} = require("@whiskeysockets/baileys")

const P = require("pino")
const qrcode = require("qrcode-terminal")

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState("session")

  const sock = makeWASocket({
    auth: state,
    logger: P({ level: "silent" })
  })

  sock.ev.on("creds.update", saveCreds)

  sock.ev.on("connection.update", ({ connection, qr }) => {

    if (qr) {
      console.log("Scanne ce QR Code :")
      qrcode.generate(qr, { small: true })
    }

    if (connection === "open") {
      console.log("✅ Bot connecté à WhatsApp")
    }

    if (connection === "close") {
      console.log("❌ Déconnecté, reconnexion...")
      startBot()
    }
  })

  sock.ev.on("messages.upsert", async ({ messages }) => {
    const msg = messages[0]

    if (!msg.message) return

    const text =
      msg.message.conversation ||
      msg.message.extendedTextMessage?.text

    const from = msg.key.remoteJid

    if (text === ".ping") {
      await sock.sendMessage(from, {
        text: "🏓 Pong!"
      })
    }
  })
}

startBot()