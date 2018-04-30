var express = require('express');
var router = express.Router();
const postsController = require('../../controllers/posts.controller');

const serializePost = (post, single = true) => {
  let serializedPost = {
    type: 'posts',
    id: post.id,
    attributes: {
      content: post.content,
      'published-at': post.publishedAt,
      title: post.title,
    }
  };

  if (single) {
    return { data: serializedPost };
  }

  return serializedPost;
};

const serializePosts = (posts) => {
  return posts.map(post => serializePost(post, /* single */false));
};

/* GET posts listing. */
router.get('/', (req, res) => {
  // TODO GET /posts?limit=5
  return postsController.listPosts(req, res);
});

router
.route('/:id')
.get((req, res) => {
  return postsController.getPost(req, res);
  const id = parseInt(req.params.post);

  let post = posts.find(post => post.id === id);

  if (post) {
    // const serialized = {
    //   data: {
    //     type: 'posts',
    //     id: post.id,
    //     attributes: {
    //       title: post.title,
    //       'published-at': post.publishedAt
    //     }
    //   }
    // }
    const serialized = serializePost(post);
    res.json(serialized);
  }
  else {
    res.status(404).json({ message: 'Not Found' });
  }
});

module.exports = router;
