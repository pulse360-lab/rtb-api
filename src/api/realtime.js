const { getLocation } = require('../helper/location-cache');
const apiHelper = require('../helper/api');
var geoLocation = require('../helper/geo-location');

const getInfo = async(req, res) => {
    let location = await getLocation(req.query.userId);
    let result = await apiHelper(location, req.query.language, async (api) => 
                                       await api.getRealTimeInformation({
                                           stopNumber: req.query.stopNumber, 
                                           routeId: req.query.routeId, 
                                           operator: req.query.operator 
                                          }));
    res.json(result);
 }
 
 const getByStop = async(req, res) => {
    let location = await getLocation(req.query.userId);
    let result = await apiHelper(location, req.query.language, async (api) => 
                                       await api.getStopInformation({
                                          stopNumber: req.query.stopNumber
                                       }));
    res.json(result);
 }

 const getStopsNear = async(req, res) => {
   let location = await getLocation(req.query.userId);
   let locationRange = geoLocation.get(location.latitude, location.longitude, 0.3);
   let result = await apiHelper(location, req.query.language, (api) => 
                                          api.getStopsNearMe(locationRange));
   res.json(result);
 }

 module.exports = { getInfo, getByStop, getStopsNear };