const faker = require('faker');

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

      let posts = [];
      for (let i = 0; i < 10; i++) {
        let post = {
          title: faker.lorem.sentence(),
          body: faker.lorem.paragraphs(5),
          author_id: 1
        };

        posts.push(post);
      }

      return knex('posts').insert(posts);
    })
  ]);
};
