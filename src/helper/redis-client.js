const redis = require('redis'),
    bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
var client;
const createClient = () => client = redis.createClient();

const get = async(key) => {
   var result = await client.getAsync(key)
   return JSON.parse(result);
};

const save = async(key, obj) => {
    var seconds = require('../config.json').cacheExpireTime;
    return await client.setex(key, seconds, JSON.stringify(obj));
}

module.exports = {createClient, get, save};