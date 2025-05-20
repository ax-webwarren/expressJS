var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET navigation listing. */
router.get('/', async function(req, res, next) {
    db.any('SELECT * from public.navigation')
    .then((data) => {
        res.send(data);
    })
    .catch((error) => {
        res.send(
            {
                'status': 500,
                'message': error
            }
        )
    })
});

module.exports = router;
