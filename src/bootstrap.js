const redisClient = require('./helper/redis-client')
module.exports = {
  init() {
    global.redis = redisClient.createClient();
  }
}