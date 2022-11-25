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
    <div>
      <img
        className="h-52 w-full object-cover"
        src={product.image}
        alt="Veggie Box"
      ></img>
      <p className="name">{product.name}</p>
      <p className="price">${product.price}</p>
      <div className="h-30 grid grid-cols-1 gap-1 content-center ...">
        <button className="bg-black" type="button" onClick={handleIncrement}>
          +
        </button>
        <p>{quantity}</p>
        <button onClick={handleDecrement}>-</button>
      </div>
      <div>
        <button className="bg-blue" onClick={addNewCart}>
          add to basket
        </button>
      </div>
    </div>
  )
}

export default ShopListItem
