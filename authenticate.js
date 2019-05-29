const twillioApi = require('./twillioApi');

(async function() {

    try {
        const response = await twillioApi.authenticate();
        console.log(`Received ${JSON.stringify(response)}`);
    }
    catch (err) {
        console.error(err);
    }

})();