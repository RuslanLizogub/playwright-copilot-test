const superagent = require('superagent');

module.exports = {
  get: async function (url) {
    return await superagent.get(url);
  },
  post: async function (url, body) {
    return await superagent.post(url).send(body);
  },
};