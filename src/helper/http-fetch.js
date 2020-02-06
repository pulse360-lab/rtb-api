const fetch = require("node-fetch");

const get = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
      return json;
  } catch (error) {
      return error;
  }
};

module.exports = { get };