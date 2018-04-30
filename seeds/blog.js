
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('users').del().then(() => {
      console.log('Deleted users');
      console.log('Seeding users');

      return knex('users').insert([
        {
          id: 1,
          name: 'Ryan Rishi',
        }
      ]);
    }),

    knex('posts').del().then(() => {
      console.log('Deleted posts');
      console.log('Seeding posts');

      return knex('posts').insert([
        {
          id: 1,
          title: 'First Post Title',
          body: 'first post body',
          author_id: 1,
        },
        {
          id: 2,
          title: 'Second post title',
          body: 'body post second',
          author_id: 1,
        }
      ]);
    })
  ]);
};
