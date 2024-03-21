require("dotenv").config();

const envVariables = {
  PORT: process.env.PORT,
  DB_URI: process.env.DB_URI,
  GOOGLE_OAUTH_CLIENT_ID: process.env.GOOGLE_OAUTH_CLIENT_ID,
  GOOGLE_OAUTH_CLIENT_SECRET: process.env.GOOGLE_OAUTH_CLIENT_SECRET
};

module.exports = envVariables;
