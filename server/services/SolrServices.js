var request = require('request');
var constants = require('./constants');

exports.selectFromSolr = function (query) {

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

exports.selectFromLocation = function (request) {
 
    return new Promise((resolve, reject) => {
        let lat = 18.15;
        let long = 83.85;
        let radiaus = 1000;
        let query = '&q=video_id:[* TO *]&fq={!geofilt%20sfield=geo_location}&pt='+ lat + ',' + long + 
            '&d='+ radius +'&wt=json';
        let options = {
            url: constants.SOLR_LOC_URI + '/select?'+query,
            qs: query
        };
        console.log(options);
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