const getResource = (language) => {
    const fileJson = require(`./${language ? language : 'en_US'}.json`);
    return fileJson.response;
}

module.exports = {getResource};