
exports.up = function(knex, Promise) {
  return knex.schema.table('posts', (t) => {
    t.string('blurb');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('posts', (t) => {
    t.dropColumn('blurb');
  });
};
