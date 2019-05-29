const twillioApi = require('./twillioApi');

(async function(numberSid) {

    try {
        const response = await twillioApi.deletePhoneNumber(numberSid);
        console.log(`Received ${JSON.stringify(response)}`);
    }
    catch (err) {
        console.error(err);
    }

})(process.argv[2]);