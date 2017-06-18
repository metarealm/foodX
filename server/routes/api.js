const express = require('express');
const router = express.Router();
const solr = require('../services/SolrServices');

/* GET api listing. */
router.get('/apitest', (req, res) => {
    res.send('api works');
});


/* GET api listing. */
router.get('/select', (req, res) => {

    solr.getDataToSolr(req.query)
    .then(result => res.status(200).json(result))
    .catch(error => {
      res.status(500).send(error)
    });
    
});

module.exports = router;