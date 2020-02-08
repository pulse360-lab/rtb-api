const getLocation = async (userId) =>
    await global.redis.get(`user-location:${userId}`);


module.exports = { getLocation };