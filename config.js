// ========== KINGATHUR LITE CONFIGURATION ===
/**
 * KINGATHUR LITE - WhatsApp Bot Configuration
 * Main configuration file for bot settings and behavior
 * @version 1.0.0
 * @author ICONIC-TECH
 */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

// == BOT IDENTITY CONFIGURATION ===========
/**
 * Bot Display Name - Appears in menus and responses
 */
global.ATHUR LITE = "👑 KINGATHUR LITE 𝐀𝐈 𝐁𝐄𝐓𝐀";

// ======= GLOBAL SETTINGS ==================
/**
 * Command prefix - Character that triggers bot commands
 */
global.prefix = '!';

/**
 * Menu system version
 */
global.iconictechMenu = "v1";

// ====== FEATURE TOGGLES ===============
/**
 * Auto-feature controls
 */
global.autoRecording = false;      // Auto voice message recording
global.autoTyping = true;          // Show typing indicators
global.autorecordtype = false;     // Auto recording type detection
global.autoread = true;            // Auto read messages
global.autobio = true;             // Auto biography updates
global.private = true;             // Enable in private chats
global.group = true;               // Enable in group chats  
global.welcome = true;             // Welcome messages for new members
global.anticall = true;            // Global anti-call protection
global.audioblock = true;          // Audio message blocking
global.stickerBlock = true;        // Sticker blocking
global.antilink = true;            // Anti-link sharing
global.chataudio = false;          // Chat audio features
global.likestatus = true;          // Status liking
global.chatbot = false;            // AI chatbot responses
global.autoreact = false;          // Auto reactions
global.blockDM = false;            // Block direct messages

// =============== SECURITY SETTINGS ===============
/**
 * Country codes to block
 */
global.blockedCountryCodes = ["+92", "91", "+62"];
global.ignoreGroups = false;       // Ignore group messages

// ================== BOT INFORMATION ==================
/**
 * Bot creator and social links
 */
global.codewave = 'LITE-unit.zone.id';
global.ownername = "ATHUR";
global.ownernumber = '263714740765';

/**
 * Bot branding and information
 */
global.ytname = "📺 YouTube: https://www.youtube.com/@iconic-tech";
global.socialm = "💻 GitHub: https://github.com/kingathurofficial";
global.location = "📍 Zimbabwe, Bulawayo";
global.botname = "👑 KINGATHUR LITE ᴀɪ ʙᴇᴛᴀ";
global.packname = "👑 athur ᴀɪ";
global.author = "⚡ ᴄʀᴇᴀᴛᴇᴅ ʙʏ me";
global.iconic_channel = "📱https://whatsapp.com/channel/0029VbBxbNF0lwghn82Dle0Q";

// =============== MESSAGE CONFIGURATION ===============
/**
 * Response messages for various scenarios
 */
global.mess = {
    antilink: "⚠️ Group link sharing is restricted!",
    owner: "⛔ Owner access required!",
    wait: "⏳ Processing your request...",
    done: "✅ Task completed successfully!",
    prem: "🔒 Premium feature - upgrade to access this!",
    admin: "⛔ Admin privileges required",
    botAdmin: "🤖 Please make me admin to use this feature",
    error: "❌ Oops! Something went wrong",
    group: "💬 This command works in groups only",
    private: "📩 Please use this in private chat with me"
};

// ================= THUMBNAIL SETUP ===================
/**
 * Dynamic thumbnail selection from available images
 */
const thumbnails = ["ruva.jpg", "ruva2.jpg"];
const randomThumb = thumbnails[Math.floor(Math.random() * thumbnails.length)];
global.thumb = fs.readFileSync(path.join("./QueenMedia", randomThumb));

// ================= FILE WATCHER ======================
/**
 * Auto-reload configuration when file changes
 * Ensures settings update without restart
 */
const file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`🔄 Updated '${__filename}'`));
    delete require.cache[file];
    require(file);
});

// =============== CONFIGURATION END ===============
console.log(chalk.green('👑 KINGATHUR LITE AI Configuration Loaded Successfully'));