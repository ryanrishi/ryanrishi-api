const knex = require('../../config/db');
const PostsSerializer = require('../serializers/posts.serializer');
const { notFound, handler: errorHandler } = require('../middlewares/error');

/**
 * @todo support limit query param
 */
const listPosts = (req, res) => {
  let { limit } = req.query;

  let query = knex.table('posts');
  let parsedLimit = parseInt(limit);
  if (Number.isInteger(parsedLimit)) {
    query.limit(parsedLimit);
  }

  query.select().then((collection) => {
    let serializedPosts = PostsSerializer.serialize(collection);
    res.json(serializedPosts);
  }).catch((error) => {
    errorHandler(error, req, res);
  });
};

const getPost = (req, res) => {
  let { slug } = req.params;

  knex.table('posts').select().where({ slug }).then((collection) => {
    if (collection.length === 0) {
      return notFound(req, res);
    }

    let post = collection[0];

    let serializedPost = PostsSerializer.serialize(post);
    res.json(serializedPost);
  });
};

module.exports = {
  getPost,
  listPosts
};
