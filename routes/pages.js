var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET pages listing. */
router.get('/', async function(req, res, next) {
    db.any('SELECT * from public.pages')
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

router.get('/search', async function(req, res, next) {
  db.any('SELECT * from public.pages WHERE slug LIKE \'%' + req.query.slug + '%\'')
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

router.post('/search', async function(req, res, next) {
  db.any('SELECT * from public.pages WHERE slug = $1', req.body.slug)
  .then((data) => {
    console.log(data);
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
