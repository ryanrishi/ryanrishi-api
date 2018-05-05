const JSONAPISerializer = require('jsonapi-serializer').Serializer;

/**
 * @todo get author relationship working. `author_id` in db, but want author as included relationship. compound document? (see JSON API spec)
 * @type {JSONAPISerializer}
 */
const PostsSerializer = new JSONAPISerializer('posts', {
  attributes: [
    'title',
    'body',
    'blurb',
    'slug',
    'created_at',
    'published_at'
  ]
});

module.exports = PostsSerializer;
