const express = require('express');
const router = express.Router();
const solr = require('../services/SolrServices');
const mongo = require('../services/mongo');
const MongoClient = require('mongodb').MongoClient


router.get('/citiesincircle', (req, res) => {

    var url = 'mongodb://10.0.0.106:27017';
    var query = {
        $and: [
            { lat: { $gt: "17" } }, { lat: { $lt: "25" } }, { lon: { $gt: "88" } }, { lon: { $lt: "90" } }
        ]
    };
    MongoClient.connect(url)
        .then((client) => client.db('peeknmake'))
        .then((db) => db.collection('indianCities'))
        .then((cities) => {
            return cities.find(query).toArray();
        })
        .then(result => {
            res.status(200).json(result);
        })
        .catch((err) => {
            cres.status(500).send(error)
        })
});
/* GET api listing. */
router.get('/apitest', (req, res) => {
    res.send('api works');
});

router.get('/videoincircle', (req, res) => {
    
    solr.selectFromLocation(req)
    .then(result => res.status(200).json(result))
    .catch(error => {
        res.status(500).send(error)
    });
});
/* GET api listing. */
router.get('/select', (req, res) => {
    solr.selectFromSolr(req.query)
        .then(result => res.status(200).json(result))
        .catch(error => {
            res.status(500).send(error)
        });

});

/* GET api listing. */
router.get('/suggest', (req, res) => {
    solr.suggestFromSolr(req.query)
        .then(result => res.status(200).json(result))
        .catch(error => {
            res.status(500).send(error)
        });

});

module.exports = router;