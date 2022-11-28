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
        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1 text-gray-700 text-sm font-semibold">
          <button
            className="outline-8 focus:outline-black bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded cursor-pointer border-2 border-black"
            onClick={handleDecrement}
          >
            <span className="m-auto text-2xl font-thin">-</span>
          </button>
          <p className="w-full block mt-2 p-3 text-center text-black font-semibold font-sans cursor-default bg-transparent text-gray-700 border-2 border-black">
            {quantity}
          </p>

          <button
            className="outline-8 focus:outline-black bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded cursor-pointer border-2 border-black"
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

//"outline-8 focus:outline-black text-center w-full bg-transparent font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 border-2 border-black"
