const apiFactory = require('../api-clients/api-factory');

module.exports = async (location, language, callback) =>{
    try {
       let api = apiFactory.getInstance(location.city);
       api.setLanguage(language);
       let result = await callback(api);
       return result;
    } catch(error){
        return {msgError: 'Service unavailable for your current location'};
    }
};