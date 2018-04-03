var express = require('express');
var router = express.Router();

const posts = [
  {
    id: 1,
    title: 'first post',
    publishedAt: new Date()
  }
];

/* GET posts listing. */
router.get('/', function(req, res, next) {
  res.json({ posts });
});

module.exports = router;
