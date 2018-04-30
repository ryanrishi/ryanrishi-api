
exports.up = function(knex, Promise) {
  return Promise.all([

        knex.schema.createTable('users', function(table) {
            table.increments('id').primary();
            table.string('name');
            table.timestamps();
        }),

        knex.schema.createTable('posts', function(table){
            table.increments('id').primary();
            table.string('title');
            table.string('body');
            table.integer('author_id')
                 .references('id')
                 .inTable('users');
            table.dateTime('postDate');
        })
    ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
        knex.schema.dropTable('users'),
        knex.schema.dropTable('posts')
    ]);
};
