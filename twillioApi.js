const client = require('./twillioFactory');

/** Authenticate and return temporary API Keys.
 * See https://www.twilio.com/docs/iam/keys/api-key-resource
 */
async function authenticate(){
    const {sid, secret} = await client.newKeys.create();
    return {sid, secret};
}

async function sendMessage({to, from, message}){
    console.log(`Sending message '${message}' from ${from} to ${to}.`)
    const {errorCode, errorMessage, status} = await client.messages.create({
        body: message,
        to: to,
        from: from
    });

    return {
        errorCode, 
        errorMessage, 
        status
    };
}

async function purchasePhoneNumber({areaCode}) {

    if (!areaCode){
        console.log(`Purchasing toll free number...`)
        //TODO: purchase toll free
    }
    else {
        console.log(`Purchasing (${areaCode}) phone number...`)

        const phoneNumbers = await client.availablePhoneNumbers('US')
            .local
            .list({areaCode: areaCode});

        if (!phoneNumbers.length){
            throw new Error(`No phone numbers available for area code ${areaCode}. Try another area code.`);
        }

        const {phoneNumber} = phoneNumbers[0];

        const {dateCreated, friendlyName, phoneNumber : purchasedNumber, sid} = await client.incomingPhoneNumbers.create({phoneNumber: phoneNumber})

        return {
            created: dateCreated,
            name: friendlyName,
            purchasedNumber: purchasedNumber,
            sid: sid
        };
    }

}

async function deletePhoneNumber(sid){
    const response = await client.incomingPhoneNumbers(sid).remove();
    return response;
}

module.exports = {
    sendMessage: sendMessage,
    purchasePhoneNumber: purchasePhoneNumber,
    deletePhoneNumber:deletePhoneNumber,
    authenticate: authenticate
};