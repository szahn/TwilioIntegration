const twillioApi = require('./twillioApi');

(async function(areaCode) {

    try {
        const {purchasedNumber, sid} = await twillioApi.purchasePhoneNumber({areaCode: areaCode});
        console.log(`Created phone number ${purchasedNumber} ${sid}`);
    }
    catch (err) {
        console.error(err);
    }

})(process.argv[2]);