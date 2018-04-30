const knex = require('../../config/db');
const PostsSerializer = require('../serializers/posts.serializer');

/**
 * @todo support limit query param
 * @todo (req, res) => (req, res, next) for error handling, serialization?
 */
const listPosts = (req, res) => {
  knex.table('posts').select().then((collection) => {
    let serializedPosts = PostsSerializer.serialize(collection);
    res.json(serializedPosts);
  }).catch((error) => {
    res.status(500).json({
      error
    })
  })
};

/**
 * @todo 404
 */
const getPost = (req, res) => {
  let { id } = req.params;

  knex.table('posts').select().where({ id }).then((collection) => {
    let serializedPost = PostsSerializer.serialize(collection);
    res.json(serializedPost);
  }).catch((error) => {
    res.status(500).json({ error });
  });
};

module.exports = {
  getPost,
  listPosts
};
