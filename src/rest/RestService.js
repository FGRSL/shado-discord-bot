require("dotenv").config();
const fetch = require("node-fetch");

async function execute(method, url, body = null) {
    let options = {
        method: method,
        headers: {
            authorization: process.env.RS_AUTH,
            "content-type": "application/json",
        },
    }
    if (body != null) {
        options.body = JSON.stringify(body);

    }
    console.log(process.env.RS_AUTH);
    console.log(process.env.RS_ENDPOINT);

    const response = await fetch(process.env.RS_ENDPOINT + url, options);
    return await response.text();

}
module.exports = { execute };