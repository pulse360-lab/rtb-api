const redisClient = require('./helper/redis-client')
module.exports = {
  init() {
      redisClient.createClient();
      global.redis = redisClient;
  }
}