var express = require('express');
var router = express.Router();

var db = require('../lib/connection');

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
/* GET home page. */
router.get('/', function(req, res, next) {
  db.any('SELECT * from public.pages')
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
  });
});

router.delete('/', function(req, res, next) {
  db.any('delete from public.pages where title = $1', req.body.title)
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
  });
});

router.put('/', function(req, res, next) {
  console.log(req);
  db.any('update public.pages SET title = $1 where title = $2', [req.body.title, req.body.old_title])
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
  });
});

router.post('/', function(req, res, next) {
  db.any('insert into public.pages (title, content, slug) values ($1, $2, $3)', [req.body.title, req.body.content, req.body.slug])
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
  });
});

module.exports = router;
