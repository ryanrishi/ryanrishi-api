
exports.up = function(knex, Promise) {
  return knex.schema.table('posts', (t) => {
    t.string('slug');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('posts', (t) => {
    t.dropColumn('slug');
  });
};
