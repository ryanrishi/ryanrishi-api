var express = require('express');
var router = express.Router();
const postsController = require('../../controllers/posts.controller');

router.get('/', (req, res) => {
  return postsController.listPosts(req, res);
});

router.route('/:id')
  .get((req, res) => {
    return postsController.getPost(req, res);
  });

module.exports = router;
