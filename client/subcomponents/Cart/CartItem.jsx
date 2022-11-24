import React, { useEffect, useState } from 'react'

function CartItem(props) {
  const [items, setItems] = useState([])
  const [num, setNum] = useState(props.items.quantity)

  useEffect(() => {
    const order = JSON.parse(localStorage.getItem('order'))
    if (order) {
      setItems(order)
    }
  }, [])

  const { name, id, quantity, price } = props.items

  function update(e) {
    const newQuantity = e.target.value
    const isValidQuantity = !isNaN(Number(newQuantity))
    if (isValidQuantity) {
      setItems({ id, name, quantity: newQuantity, price })
    }
  }

  // const displayQuantity = quantity === 0 ? '' : quantity

  function decNum() {
    setNum((num) => num - 1)
  }
  function incNum() {
    setNum((num) => num + 1)
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <button type="button" onClick={decNum}>
          -
        </button>
        <input
          aria-label="quantity"
          className="update-input"
          value={num}
          onChange={update}
        />
        <button type="button" onClick={incNum}>
          +
        </button>
      </td>
    </tr>
  )
}

export default CartItem
