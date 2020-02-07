const apiFactory = require('../api-clients/api-factory');

const exec = async (location, client) =>{
    let api = apiFactory.getInstance(location.city);
    try {
        let result = await client(api);
       return result;
    } catch(error){
        return {msgError: 'Service unavailable for your current location'};
    }
}

module.exports = { exec };