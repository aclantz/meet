'use strict';

// packages
const { google } = require("googleapis");
const calendar = google.calendar("v3");
// scopes managed @ "oAuth consent screen"settings in Google console
const SCOPES = ["https://www.googleapis.com/auth/calendar.events.public.readonly"];
// variables set in serverless.yml/environments which is set in config.js 
const { CLIENT_SECRET, CLIENT_ID, CALENDAR_ID } = process.env;

const redirect_uris = [
  "https://aclantz.github.io/meet/" 
];
// new instance of OAuth2, redirect_uris[0] is calling the first in redirect-uris array
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  redirect_uris[0]
);

//Functions
module.exports.getAuthURL = async () => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      authUrl,
    }),
  };
};

