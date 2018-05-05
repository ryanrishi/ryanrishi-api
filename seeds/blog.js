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
      let postBody = () => faker.lorem.paragraphs(5).split('\n \r').map(p => `<p> ${p} </p>`).join('');

      for (let i = 0; i < 10; i++) {
        console.log('postBody => ', postBody());

        let post = {
          title: faker.lorem.sentence(),
          slug: faker.lorem.slug(),
          body: postBody(),
          author_id: 1
        };

        posts.push(post);
      }

      return knex('posts').insert(posts);
    })
  ]);
};
