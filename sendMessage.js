const twillioApi = require('./twillioApi');

(async function() {

    try {
        const twillioSender = '+14803767602';
        const result = await twillioApi.sendMessage({to: '<your-cell>', from: twillioSender, message: 'Hello World!'});
        console.log(`Received ${JSON.stringify(result)}`);
    }
    catch (err) {
        console.error(err);
    }


})();