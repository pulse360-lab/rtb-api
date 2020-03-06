const redis = require('redis'),
    bluebird = require('bluebird'),
    config = require('../../config.json');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
var client;
const createClient = () => client = redis.createClient();

const get = async(key) => {
   var result = await client.getAsync(key)
   return JSON.parse(result);
};

const save = async(key, obj) => {
    return await client.setex(key, config.cacheExpireTime, JSON.stringify(obj));
}

module.exports = {createClient, get, save};