exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('subscription').del()
  await knex('subscription').insert([
    { id: 1, garden_id: 1, email: "elvintern@gmail.com", first_name: 'elvin', last_name: "park" },
  ]);
};
