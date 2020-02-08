const { getLocation } = require('../helper/location-cache');
const apiReponse = require('../helper/api-response');
var geoLocation = require('../helper/geo-location');

const getInfo = async(req, res) => {
    let location = await getLocation(req.query.userid);
    let result = await apiReponse.exec(location, async (api) => 
                                       await api.getRealTimeInformation({
                                           stopNumber: req.query.stopNumber, 
                                           routeId: req.query.routeId, 
                                           operator: req.query.operator 
                                          }));
    res.json(result);
 }
 
 const getByStop = async(req, res) => {
    let location = await getLocation(req.query.userid);
    let result = await apiReponse.exec(location, async (api) => 
                                       await api.getStopInformation({
                                          stopNumber: req.query.stopNumber
                                       }));
    res.json(result);
 }

 const getStopsNear = async(req, res) => {
   let location = await getLocation(req.query.userid);
   let locationRange = geoLocation.get(param.latitude, param.longitude, 0.3);
   let result = await apiReponse.exec(location, async (api) => 
                                       await api.getStopsNearMe({
                                          latitude: location.latitude, 
                                          longitude: location.longitude,
                                          locationRange: locationRange
                                       }));
   res.json(result);
 }

 module.exports = { getInfo, getByStop, getStopsNear };