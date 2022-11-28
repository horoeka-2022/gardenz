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
    <>
      <div>
        <img
          className="h-52 w-full object-cover"
          src={product.image}
          alt="Veggie Box"
        ></img>
        <p className="text-black font-semibold font-sans text-center">
          {product.name}
        </p>
        <p className="text-black font-semibold font-sans text-center">
          ${product.price}
        </p>
        <div className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-20 w-20 rounded-l cursor-pointer outline-none">
          <button onClick={handleDecrement}>-</button>
          <p>{quantity}</p>

          <button
            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-4 w-20 rounded-r cursor-pointer"
            onClick={handleIncrement}
          >
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
        <div>
          <button
            className="w-full block mt-2 p-3 text-center rounded text-black font-semibold font-sans cursor-default bg-blue"
            onClick={addNewCart}
          >
            add to basket
          </button>
        </div>
      </div>
    </>
  )
}

export default ShopListItem
