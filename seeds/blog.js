
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('users').del().then(() => {
      return knex('users').insert([
        {
          id: 1,
          name: 'Ryan Rishi',
        }
      ])
    }),

    knex('posts').del().then(() => {
      return knex('posts').insert([
        {
          id: 1,
          title: 'First Post Title',
          author_id: 1
        }
      ])
    })
  ])
};
