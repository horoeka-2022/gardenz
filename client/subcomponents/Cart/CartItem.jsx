import React, { useState } from 'react'

function CartItem(props) {
  const [num, setNum] = useState(props.item.quantity)

  const { id, name, price } = props.item

  function incNum() {
    let newQuantity = Number(num) + 1
    setNum(() => newQuantity)
    props.updateQuantity(id, newQuantity)
  }
  function decNum() {
    let newQuantity = Number(num) - 1
    setNum(() => newQuantity)
    props.updateQuantity(id, newQuantity)
  }

  function handleChange(e) {
    setNum(() => e.target.value)
  }

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>
          <div className="col-xl-1">
            <div className="input-group">
              <button
                className="btn btn-info ms-1 mr-40 bg-orange p-5"
                type="button"
                onClick={decNum}
              >
                -
              </button>

              <input
                type="text"
                className="form-control"
                value={num}
                onChange={handleChange}
              />

              <button
                className="btn btn-info ms-1 bg-orange p-5"
                type="button"
                onClick={incNum}
              >
                +
              </button>
            </div>
          </div>
        </td>
      </tr>
    </>
  )
}

export default CartItem
