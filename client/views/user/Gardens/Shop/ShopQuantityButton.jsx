import React, { useState } from 'react'

function StockQuantity() {
  const [quantity, setQuantity] = useState(0)

  function handleIncrement() {
    setQuantity((quantity) => quantity + 1)
  }

  function handleDecrement() {
    setQuantity((quantity) => quantity - 1)
  }

  return (
    <>
      <p>{quantity}</p>
      <button className="button" type="button" onClick={handleIncrement}>
        +
      </button>
      <button onClick={handleDecrement}>-</button>
    </>
  )
}

export default StockQuantity
