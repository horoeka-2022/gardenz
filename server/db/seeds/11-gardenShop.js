exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('garden_shop').del()
  await knex('garden_shop').insert([
    {
      id: 1,
      garden_id: 3,
      shop_products_id: 2,
      stock: 15,
    },
  ])
}
