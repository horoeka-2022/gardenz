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
    if (num > 0) {
      let newQuantity = Number(num) - 1
      setNum(() => newQuantity)
      props.updateQuantity(id, newQuantity)
    }
  }

  function handleChange(e) {
    setNum(() => e.target.value)
  }

  return (
    <>
      <div>
        <div>
          <div className="text-xl mr-20">
            <p>{name}</p>
            <div className="gap-1 columns-2">
              <p>{price}</p>
              <button
                className="btn btn-info ms-1 mr-40 bg-orange p-5"
                type="button"
                onClick={decNum}
              >
                -
              </button>

              <input
                type="text"
                className="form-control ml-10"
                value={num}
                onChange={handleChange}
              />

              <button
                className="btn btn-info ms-1 ml-0 bg-orange p-5"
                type="button"
                onClick={incNum}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem
