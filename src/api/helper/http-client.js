const request = require('request-promise');

const options = uri => {
    return {
        uri: `${ uri }`,
        method: 'GET',
        header: {
            'Content-Type' : 'application/json'
        },
        json: true
    };
}

const get = uri => request(options(uri));

module.exports = { get };