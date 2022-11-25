import React, { useEffect, useState } from 'react'

function CartItem(props) {
  const [num, setNum] = useState(props.items.quantity)

  useEffect(() => {}, [])

  const { name, id, quantity, price } = props.items

  function handleChange(e) {
    setNum(e.target.value)
  }

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>
          {/* <button type="button" onClick={decNum}>
            -
          </button> */}
          <input
            aria-label="quantity"
            className="update-input"
            value={num}
            type="number"
            onChange={handleChange}
          />
          {/* <button type="button" onClick={incNum}>
            +
          </button> */}
        </td>
      </tr>
    </>
  )
}

export default CartItem
