var express = require('express');
var router = express.Router();

const posts = [
  {
    id: 1,
    title: 'DIY Snare Drum',
    publishedAt: new Date(),
    content: '<em> coming soon </em>'
  },
  {
    id: 2,
    title: 'Ember Component Lifecycle'
  },
  {
    id: 3,
    title: 'Gamelana-ding-dong'
  },
  {
    id: 4,
    title: 'The Seven'
  }
];

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
router.get('/', function(req, res, next) {
  const serialized = serializePosts(posts);

  res.json({ data: serialized });
});

router
.route('/:post')
.get((req, res, next) => {
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
