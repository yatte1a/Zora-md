const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
  return text === fault ? true : false;
};
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "ZORA~bZsC3BjY#dsxwZBh977qWTUl2p1Le1ol5Y1ehNtw88fW7LcuiE5s", // SESSION_ID is required to start the bot. It must begin with 'ZORA~', Example: ZORA~youruniquesessionid
  MONGODB: process.env.MONGODB || ""   // MONGODB URL is optional. Add it only if you have a valid MongoDB URI. If you don't have one, leave it empty. Do NOT insert invalid URLs – the bot won't start !!
};
