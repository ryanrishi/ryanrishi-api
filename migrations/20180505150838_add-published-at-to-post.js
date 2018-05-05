
exports.up = function(knex, Promise) {
  return knex.schema.table('posts', (t) => {
    t.timestamp('published_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('posts', (t) => {
    t.dropColumn('published_at');
  });
};
