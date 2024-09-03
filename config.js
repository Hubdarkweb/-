//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "tuffgamer65@gmail.com";
global.location = "Naiobi, Kenya";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/Hubdarkweb/Cyberpunk";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/T_OpPLUG";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "0112386921";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUJ5elJtT0dSTEYyZTR4QWFBNTF6cHJ3Vmg0Vi9CbmZ5enhtT3BRZ05Haz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUtNNGRjRmxmcEdGTVp1QjQ0TDQ2UVhVMzF2ZVgwWFcyQ1h1ZVNwZm53UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtUFk3elVNdzUwUFVUeTkrU2lMdUpDVjV6d1kydHB1eGdqaWJvUk1KRDNrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjT0tOUnRSM2R0SzVudURLMlRhQytlamN2NGNoakt2a2E0cTA1YlVCaVRnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVDRHlvUWJuWlJOTWtvblF3UHIybjlGN0w1cDJIVUlacUdXbWZqMGtkV0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdmVFlzZG1KVWxmRGpvQWgwV05ZRGxaOHhhVWdIY0lkWXd3c2xBRFBEU3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0o2d2xYcFY2L0VoZHV4ZWZaWXVNNVJ1WWpRSWYvVlBQaEZ0SnRGRDEydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid05FNndKQlhtKzQrYVBkT3F0NUJEMjlDdEltRkxvdHdmdFN5Ymhobk9tQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlBWGtZSHprcXlIcHNmaHFsWnQ5R0tNMk0ycUkrM3Rkb01ZK2hFbm5Ra0dKSjJrTUk0Y3BlYnNTNm5XK0pwcXVWMVp5a3VsLy9Sa1N2bnFvUDJHbUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUxLCJhZHZTZWNyZXRLZXkiOiJoTFlJYU1RWjh3QlZtRFRvOVJac0NBWkZhQ0pRMUxBdDc2MWdKVzVzblgwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDExMjM4NjkyMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2QTkyRTU1MUMxQjdGOThBMUUxMDc5OEVGODc1Q0E3NCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1MzkwNDgwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQxMTIzODY5MjFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDQ5MDFCRjcwQUI0NTUyNjJCQkNFRDg5RDNGRThGQzIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTM5MDQ4MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiUlkzc3U4SFFTVmlmNGxGREswYzRCZyIsInBob25lSWQiOiI4YmExMjQ2YS1mMjE2LTQzZGMtYTg5Ny1jZTA4OTY4NGJlN2IiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzh3S2cxU3paVDNRdmJjcHJSMXBWVk82WTBNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJEYUd5Qzgyb3lOOWZGb3FJZUsxN2l4UVNmdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJDTDRLOTQ5WiIsIm1lIjp7ImlkIjoiMjU0MTEyMzg2OTIxOjMwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlRPcFBMVUcifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04yVW5QNEhFUCs4M2JZR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InF5TGZxdWQ0eWxnZUY4akozVk0xRkVKTjIyN3pzOXRlVG1nd1BtTC9wMFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlVMbTcyUFJPRlhpcDUwMkFKby9naEZPNS9WTXNCQ1h5VzlJT0RKUXFEZnRGR0wxUE1VUlgyV0JXSmFNRWNZbXhKNGlMWDBNcWZ2N0x6dnpXOUJxdEN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIyNHVDVWZlbDREcTB5eDRQdmlDQUovMzQwZCtoUnFCRzNEd05Dd0w3ZHVFSTVnbmNRa3hKV2w3SnJGUUkxY2RZRloydDN4eTYwNHMyUU5kOFN6M0tEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDExMjM4NjkyMTozMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhc2kzNnJuZU1wWUhoZkl5ZDFUTlJSQ1RkdHU4N1BiWGs1b01ENWkvNmRFIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1MzkwNDc4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUQzTCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`TOpPLUG SPIDER🐛™`",
  author: process.env.PACK_AUTHER || "TOpPLUG SPIDER🐛",
  packname: process.env.PACK_NAME || "Cyberpunk",
  botname: process.env.BOT_NAME || "TOpPLUG SPIDER🐛",
  ownername: process.env.OWNER_NAME || "TOpPLUG SPIDER🐛",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
