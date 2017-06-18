var request = require('request');
var constants = require('./constants');

exports.getDataToSolr = function (query) {
    console.info('inside post solr data rest call ');
    //console.info(query);
    return new Promise((resolve, reject) => {
        let options = {
            url: 'ec2-34-209-114-162.us-west-2.compute.amazonaws.com:8983/solr/foodx/select',
            qs: { q: '*:*', wt: 'json' },
        };

        request({
            url: 'http://ec2-34-209-114-162.us-west-2.compute.amazonaws.com:8983/solr/foodx/select',
            qs: query
        }, function (error, response, body) {
            console.log(`STATUS: ${response.statusCode}`);
            console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
            var searchResult = '';
            if (error) {
                reject(new Error('Failed to load page, status code: ' + response.statusCode));
            } else if (response && body) {
                console.log(JSON.parse(body));
                resolve(JSON.parse(body)); // Print JSON response.
            }

        });

    })
}