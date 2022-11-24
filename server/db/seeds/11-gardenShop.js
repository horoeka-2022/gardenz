exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('garden_shop').del()
  await knex('garden_shop').insert([
    {
      id: 1,
      gardens_id: 3,
      shop_products_id: 2,
      stock: 15,
    },
    {
      id: 2,
      gardens_id: 2,
      shop_products_id: 1,
      stock: 10,
    },
    {
      id: 3,
      gardens_id: 1,
      shop_products_id: 2,
      stock: 22,
    },
    {
      id: 4,
      gardens_id: 3,
      shop_products_id: 1,
      stock: 10,
    },
    {
      id: 5,
      gardens_id: 2,
      shop_products_id: 2,
      stock: 22,
    },
    {
      id: 6,
      gardens_id: 1,
      shop_products_id: 1,
      stock: 10,
    },
    {
      id: 7,
      gardens_id: 4,
      shop_products_id: 2,
      stock: 22,
    },
  ])
}
