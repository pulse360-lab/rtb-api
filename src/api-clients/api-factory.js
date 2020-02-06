const {dublinApi} = require('.'),
    apis = [new dublinApi()];

/*
    Description: Choose a proper instance accord a key is being expired.
*/
module.exports = {
    getInstance : cityId => apis.filter(f => cityId.includes(f.client))[0]//.getClient(cityId) == cityId)[0]
};