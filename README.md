
# Setup

Obtain account sid and auth token from the [console](https://www.twilio.com/console). Create the `twillio-config.json`. Register a number.

Sample twillio-config.json:

```json
{
    "accountSid": "AC...",
    "authToken": "..."
}
```

These values can be overridden with environment variables `TWILLIO_ACCOUNTSID` and `TWILLIO_AUTHTOKEN`. 

The account sid and auth token can then be used to generate client side API keys.

# Usage

### Register a number in the (480) area code

```bash
node purchaseNumber.js 480
```

### Delete a purchased number

```bash
node deleteNumber.js PN3eae101fea7fc4daee631ddada4ea35b
```


