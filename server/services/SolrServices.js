var request = require('request');
var constants = require('./constants');

exports.selectFromSolr = function (query) {
    console.log("constants.SOLR_URI " +constants.SOLR_URI );
    return new Promise((resolve, reject) => {
        let options = {
            url: constants.SOLR_URI + '/select',
            qs: query
        };

        request(options, function (error, response, body) {
            var searchResult = '';
            if (error) {
                reject(new Error('Failed to load page, status code: ' + response.statusCode));
            } else if (response && body) {
                resolve(JSON.parse(body));
            }

        });

    })
}

exports.suggestFromSolr = function (query) {
    console.log("constants.SOLR_URI " +constants.SOLR_URI );
    return new Promise((resolve, reject) => {
        let options = {
            url: constants.SOLR_URI + '/suggest',
            qs: query
        };
        request(options, function (error, response, body) {
            var searchResult = '';
            if (error) {
                reject(new Error('Failed to load page, status code: ' + response.statusCode));
            } else if (response && body) {
                resolve(JSON.parse(body));
            }

        });

    })
}