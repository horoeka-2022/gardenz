const connection = require('./connection')

module.exports = { getProductsByGardens }

function getProductsByGardens(gardenId, db = connection) {
  return db('garden_shop')
    .join('shop_products', 'shop_products_id', 'shop_products.id')
    .select(
      'gardens_id as id',
      'shop_products_id as productId',
      'shop_products.name as name',
      'shop_products.description as description',
      'shop_products.price as price',
      'shop_products.image as image',
      'stock'
    )
    .where('gardens_id', gardenId)
}
