import request from 'superagent'

export function fetchShopList() {
  return Promise.resolve([
    {
      id: 1,
      productId: 2,
      name: 'Large veggie box',
      description:
        'a large box filled with fresh seasonal produce grown at your local garden',
      price: 29,
      image:
        'https://www.rebootwithjoe.com/wp-content/uploads/2014/04/Farmers-Markets-Local-Produce-Benefits1.jpg',
      stock: 15,
    },
    {
      id: 2,
      productId: 3,
      name: 'Small veggie box',
      description:
        'a small box filled with fresh seasonal produce grown at your local garden',
      price: 15,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-RtCis1YP3HZ4LMb2XfTqQHUXM6w5wkGRA&usqp=CAU',
      stock: 15,
    },
  ])
}
