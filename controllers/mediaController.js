const fs = require('fs')
const mediaData = require('../data/mediaData')

const testAPI = (request, response) => {
    response.status(200).send(mediaData);
}


module.exports = {testAPI};