const twillio = require('twilio');
const twillioConfig = require('./twillio-config.json');

/*Create an twillio client instance and initiate with account sid and auth token from the environment variable or local config */
const twillioClient = new twillio(
    process.env.TWILLIO_ACCOUNTSID || twillioConfig.accountSid, 
    process.env.TWILLIO_AUTHTOKEN || twillioConfig.authToken
);

module.exports = twillioClient;