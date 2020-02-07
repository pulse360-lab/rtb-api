const { getLocation } = require('../helper/location-cache');
const apiReponse = require('../helper/api-response');


const getInfo = async (req, res) => {
    let location = await getLocation(req.query.userid);
    let result = await apiReponse.exec(location, async (api) => await api.getRealTimeInformation({ stopId: req.query.stopId, routeId: req.query.routeId, operator: req.query.operator }));
    res.json(result);
 }
 
 const getByStop = async(req, res) => {
    let location = await getLocation(req.query.userid);
    let result = await apiReponse.exec(location, async (api) => await api.getStopInformation(req.query.stopNumber));
    res.json(result);
 }

 module.exports = { getInfo, getByStop };