var request = require('request');
var constants = require('./constants');

exports.selectFromSolr = function (query) {
    console.info('inside post solr data rest call ');
    return new Promise((resolve, reject) => {
        let options = {
            url: constants.SOLR_URI +'/select',
            qs: query
        };

        request(options, function (error, response, body) {
            console.log(`STATUS: ${response.statusCode}`);
            console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
            var searchResult = '';
            if (error) {
                reject(new Error('Failed to load page, status code: ' + response.statusCode));
            } else if (response && body) {
                resolve(JSON.parse(body)); // Print JSON response.
            }

        });

    })
}

exports.suggestFromSolr = function (query) {
    console.info('inside post solr data rest call ');
    return new Promise((resolve, reject) => {
        let options = {
            url: constants.SOLR_URI +'/suggest',
            qs: query
        };

        request(options, function (error, response, body) {
            console.log(`STATUS: ${response.statusCode}`);
            console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
            var searchResult = '';
            if (error) {
                reject(new Error('Failed to load page, status code: ' + response.statusCode));
            } else if (response && body) {
                resolve(JSON.parse(body)); // Print JSON response.
            }

        });

    })
}