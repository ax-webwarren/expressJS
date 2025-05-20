var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET pages listing. */
router.post('/', async function(req, res, next) {
    console.log(req);
    db.none('INSERT INTO public.subscription (NAME, EMAIL) VALUES ($1, $2)', [req.body.name, req.body.email])
    .then(() => {
        res.send(
            {
                'status': 200,
                'message': 'Subscription Added'
            }
        )
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
