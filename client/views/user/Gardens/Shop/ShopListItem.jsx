import React from 'react'
// import Shop from './Shop'

function ShopListItem({ product, addToCart }) {
  function addNewCart() {
    addToCart(product)
  }

  return (
    <div className="product">
      <img src={product.image} alt="Veggie Box"></img>
      <p className="name">{product.name}</p>
      <p className="price">${product.price}</p>
      <button className="cart-link" onClick={addNewCart}>
        add to basket
      </button>
    </div>
  )
}

export default ShopListItem
