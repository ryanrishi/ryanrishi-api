const JSONAPISerializer = require('jsonapi-serializer').Serializer;

/**
 * @todo get author relationship working. `author_id` in db, but want author as included relationship. compound document? (see JSON API spec)
 * @type {JSONAPISerializer}
 */
const PostsSerializer = new JSONAPISerializer('posts', {
  attributes: ['title', 'body', 'created_at', 'slug']
});

module.exports = PostsSerializer;
