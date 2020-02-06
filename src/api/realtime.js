const redisClient = require('../helper/redis-client');

// let location = await this.redis.get(`user-location:${param.from.id}`);
//         let apiFactory = require('../api-clients/api-factory');
//         let api = apiFactory.getInstance(location.city);
                        
//         let result = await api.getRealTimeInformation(param.routeId, param.parameters);

const getInfo = async (req, res) => {
    redisClient.createClient();
    let location = await this.redis.get(`user-location:${req.query.userid}`);
    let apiFactory = require('../api-clients/api-factory');
    let api = apiFactory.getInstance(location.city);
                        
    let result = await api.getRealTimeInformation(param.routeId, param.parameters);
    res.json({id: 123});
}

module.exports = { getInfo };