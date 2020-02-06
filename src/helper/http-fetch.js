const fetch = require("node-fetch");
const url = "https://jsonplaceholder.typicode.com/posts/1";

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