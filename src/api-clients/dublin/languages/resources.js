const getResource = (language) => {
    const fileJson = require(`./${language ? language : 'en'}.json`);
    return fileJson.response;
}

module.exports = {getResource};