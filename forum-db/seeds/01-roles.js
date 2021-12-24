
exports.seed = async function (knex) {
  await knex('role').del()
  await knex.raw('ALTER SQUENCE role_id_seq restart with 3;')
  return knex('role').insert([{
    id: 1,
    name: 'user',
  },
  {
    id: 2,
    name: 'moderator',
  },
  {
    id: 3,
    name: 'administrator',
  }
  ])
};
