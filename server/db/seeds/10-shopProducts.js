exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('shop_products').del()
  await knex('shop_products').insert([
    {
      id: 1,
      name: 'large veggie box',
      description:
        'a large box filled with fresh seasonal produce grown at your local garden',
      price: 29.99,
      image: 'www.linktowhereeverthisimageis.com',
    },
    {
      id: 2,
      name: 'small veggie box',
      description:
        'a small box filled with fresh seasonal produce grown at your local garden',
      price: 22.99,
      image: 'www.linktowhereeverthisimageis.com',
    },
  ])
}
