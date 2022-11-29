import React, { useState } from 'react'

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
      <div className="mx-auto">
        <img
          className="h-52 w-full object-cover p-3"
          src={product.image}
          alt="Veggie Box"
        ></img>
        <p className="text-[#172450] font-black font-serif text-xl text-left border-b-2 w-full p-3">
          {product.name}
        </p>
        <p className="text-[#172450] font-semibold font-serif text-left w-full p-3">
          ${product.price}
        </p>

        <div className="flex flex-row h-14 w-full relative bg-transparent mt-1 text-[#172450] text-center font-semibold font-serif text-sm">
          <button
            className="block mt-2 p-3 cursor-default bg-transparent border-l-2 border-t-2 border-b-2 rounded-l w-full"
            onClick={handleDecrement}
          >
            <span className="m-auto">-</span>
          </button>
          <p className="block mt-2 p-3 cursor-default bg-transparent border-l-2 border-r-2 border-t-2 border-b-2 w-full ">
            {quantity}
          </p>

          <button
            className="block mt-2 cursor-default bg-transparent border-t-2 border-r-2 border-b-2 rounded-r w-full p-3"
            onClick={handleIncrement}
          >
            <span className="m-auto">+</span>
          </button>
        </div>

        <div>
          <button
            className="border-2 justify-center block mt-2 text-center rounded text-[#172450] font-black font-serif cursor-default bg-blue w-full p-3"
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
