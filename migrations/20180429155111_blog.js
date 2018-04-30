
exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('users', (t) => {
      t.increments('id').primary();
      t.string('name');
    }),

    knex.schema.createTable('posts', (t) => {
      t.increments('id').primary();
      t.string('title');
      t.string('body');
      t.integer('author_id')
        .references('id')
        .inTable('users');
      t.timestamp('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
      // TODO `CURRENT_TIMESTAMP ON UPDATE` doesn't work in SQLite3, seems unique to MySql
      // https://stackoverflow.com/questions/6578439/on-update-current-timestamp-with-sqlite
      // t.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

      t.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    })
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('posts')
  ]);
};
