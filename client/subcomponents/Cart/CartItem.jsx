import React, { useEffect, useState } from 'react'

function CartItem(props) {
  const [items, setItems] = useState([])
  const [num, setNum] = useState(props.items.quantity)
  const [calculateTotal, setCalculateTotal] = useState(
    props.items.price * props.items.quantity
  )

  useEffect(() => {
    const order = JSON.parse(localStorage.getItem('order'))
    if (order) {
      setItems(order)
    }
  }, [])

  const { name, id, quantity, price } = props.items

  function update(e) {
    const newQuantity = e.target.value
    console.log(newQuantity)
    const isValidQuantity = !isNaN(Number(newQuantity))
    if (isValidQuantity) {
      setItems([...items, { id, name, quantity: newQuantity, price }])
      // const items = { id, name, quantity: newQuantity, price }

      localStorage.setItem('order', JSON.stringify(items))
      setCalculateTotal(props.items.price * newQuantity)
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
    <>
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
      <td role="columnheader">Shipping</td>
      <td role="columnheader">Calculated at checkout</td>
      <td>Total(inc. GST)</td>
      <td>{calculateTotal}</td>
    </>
  )
}

export default CartItem
