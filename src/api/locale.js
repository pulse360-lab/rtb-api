  
const httpFetch = require('../helper/http-fetch');
const {apis} = require('../../config.json');

const createUrl = (latitude, longitude) =>
    `${apis.geoLocation.url}/reverse.php?key=${apis.geoLocation.token}&lat=${latitude}&lon=${longitude}&format=json`;

//Using Latitude and Longitude to get the current localization.
 const get = async (req, res) =>{
    let url = createUrl(req.query.latitude, req.query.longitude);
    let result = await httpFetch.get(url);
    res.json(result);
 }
     

module.exports = { get };