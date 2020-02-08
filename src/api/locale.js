const httpFetch = require('../helper/http-fetch');
const {apis} = require('../../config.json');

const createUrl = (latitude, longitude) =>
    `${apis.geoLocation.url}/reverse.php?key=${apis.geoLocation.token}&lat=${latitude}&lon=${longitude}&format=json`;

const saveOnChage = async(userId, locale) => {
    await global.redis.save(`user-location:${userId}`, locale);
}

//Using Latitude and Longitude to get the current localization.
 const get = async (req, res) =>{
    let url = createUrl(req.query.latitude, req.query.longitude);
    let result = await httpFetch.get(url);
    await saveOnChage(req.query.userId, {city: result.address.city,  latitude: req.query.latitude, longitude: req.query.longitude});
    res.json(result);
 }
     

module.exports = { get };