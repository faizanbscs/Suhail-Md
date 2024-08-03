const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="zh8559462@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://f.uguu.se/iOPJDtax.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ zᴀɪᴅ" 


global.devs = "923357433862" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923153287623";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923153287623,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_30_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA3MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDU1LFxuICAgICAgICA3NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc3LFxuICAgICAgICAyOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODAsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDc3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDU2LFxuICAgICAgICA1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjksXG4gICAgICAgIDY4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzksXG4gICAgICAgIDM0LFxuICAgICAgICA4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA0NixcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODQsXG4gICAgICAgIDk4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBY09VRHdEdFJGT1ErOEVsS3ptend2UUNQc3hBaGE2V3NHMGJ6QzBHTzE0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4S04zZHlBVVFJcWFNam9IVnZpaFFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE2ZjkyNjA3LWY5OTItNDE1Zi1iM2NiLWU0ZDMyNWU2NTNkYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTcsXG4gICAgICAxMzcsXG4gICAgICA3MSxcbiAgICAgIDc3LFxuICAgICAgMTczLFxuICAgICAgMTUzLFxuICAgICAgMTUzLFxuICAgICAgMzMsXG4gICAgICAxMDQsXG4gICAgICAyMzYsXG4gICAgICAzNCxcbiAgICAgIDk0LFxuICAgICAgODUsXG4gICAgICAyMTgsXG4gICAgICAxNDYsXG4gICAgICA5MCxcbiAgICAgIDEzNCxcbiAgICAgIDI0NyxcbiAgICAgIDkwLFxuICAgICAgMTE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OSxcbiAgICAgIDY5LFxuICAgICAgMTMzLFxuICAgICAgMjI4LFxuICAgICAgMTAzLFxuICAgICAgNjcsXG4gICAgICAxMjIsXG4gICAgICAxOTAsXG4gICAgICAxMzQsXG4gICAgICAxNDMsXG4gICAgICA4NixcbiAgICAgIDU3LFxuICAgICAgMTYyLFxuICAgICAgNzAsXG4gICAgICAxODEsXG4gICAgICA3MSxcbiAgICAgIDE0MyxcbiAgICAgIDIyMyxcbiAgICAgIDIxMSxcbiAgICAgIDIzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGSzFIS0tZSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTUzMjg3NjIzOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTYWpleVwiLFxuICAgIFwibGlkXCI6IFwiMzg5MDQzMTcxMzMwNDY6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKejUzOW9CRUtHUXRyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkVmbkthdExDbyswOVp1RlJXM1JvcDZJcUhZUVhTZ0NvNGYyUnBuZUc5WGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOUFqZDVJN25Ma0R5RmE4SjU3bGFWbXJvK0NVQXVDWG5aMUtxQlEyMEJOYURvdGI0S1I5ZHFKUnk3T0VJZEdJQlNZMHNsWHFiL083a3hqRVFvNHhSRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieFRZTjBPMmlxSFdQazU1V3MvNWlXMjN3OU1renNLU1FsY0g1dXViZ2tWK2k2ZCtvSHU4ZzJnTmh6NTJkc0pIK3BHWk5hWFFpcXppYzFXN21tR01pQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTUzMjg3NjIzOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjY0ODYxNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURUUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRFRRLmpzb24iOiAie1wia2V5RGF0YVwiOlwidWtHVlZWNWV0dzE3dWkzZHYzZHUzckdLb1lGbHlpSDk2ZVdYc09YQy9VOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NTg3NTExMzAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ zᴀɪᴅ 』```, 
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Sajey's Bot",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
