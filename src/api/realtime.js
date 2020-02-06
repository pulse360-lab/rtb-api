const getInfo = async (req, res) => {
    //TODO: let location = await global.redis.get(`user-location:${req.query.userid}`);
     let apiFactory = require('../api-clients/api-factory');
     let api = apiFactory.getInstance(location.city);
     try {
         let result = await api.getRealTimeInformation({ stopId: req.query.stopId, routeId: req.query.routeId, operator: req.query.operator });
         res.json(result);
     } catch(error){
         res.json({msgError: 'Service unavailable for your current location'});
     }
   
 }
 
 module.exports = { getInfo };