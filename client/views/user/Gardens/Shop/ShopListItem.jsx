import React, { useState } from 'react'
// import Shop from './Shop'

function ShopListItem({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1)

  function handleIncrement() {
    setQuantity((quantity) => quantity + 1)
  }

  function handleDecrement() {
    if (quantity > 1) setQuantity((quantity) => quantity - 1)
  }

  function addNewCart() {
    console.log({ product, quantity })
    addToCart(product, quantity)
  }

  return (
    <div className="product">
      <img src={product.image} alt="Veggie Box"></img>
      <p className="name">{product.name}</p>
      <p className="price">${product.price}</p>
      <button className="cart-link" onClick={addNewCart}>
        add to basket
      </button>
      <p>{quantity}</p>
      <button className="button" type="button" onClick={handleIncrement}>
        +
      </button>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default ShopListItem
