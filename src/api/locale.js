  
const httpRequest = require('../helper/http-client');
const {apis} = require('../../config.json');

const getByCoordinate = async (latitude, longitude) => 
    await httpRequest.get(`${apis.geoLocalization.url}/reverse.php?key=${apis.geoLocalization.token}&lat=${latitude}&lon=${longitude}&format=json`);

//Using Latitude and Longitude to get the current localization.
 const get = async (latitude, longitude) => {
    let result = await getByCoordinate(latitude, longitude);
    return result ? result : `Sorry, unfortunately there is no service available for your current location. We do apologize`;
 }

module.exports = { get };