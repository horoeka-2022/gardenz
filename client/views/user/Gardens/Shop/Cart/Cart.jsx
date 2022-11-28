import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import CartItem from '../../../../../subcomponents/Cart/CartItem'
import Shipping from '../../../../../subcomponents/Cart/Shipping'

function Cart() {
  const navigate = useNavigate()
  const cart = JSON.parse(localStorage.getItem('order'))

  const [items, setItems] = useState(cart)

  const originalTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  console.log(originalTotal)
  const [total, setTotal] = useState(originalTotal)

  function updateQuantity(id, newQuantity) {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    )
    setItems(() => newItems)
    console.table(newItems)
    const newTotal = newItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )
    console.log('newTotal', newTotal)
    setTotal(() => newTotal)
    console.log(total)
  }

  function submitCart() {
    //when checkout button clicked, update the localstorage

    localStorage.setItem('order', JSON.stringify(items))
    const order = JSON.parse(localStorage.getItem('order'))
    console.log(order)
    if (order) {
      setItems(order)
    }
    {
      /*change the url link with dynamic id later */
    }
    navigate('/gardens/:id/shop/delievery/:id')
  }

  return cart ? (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <table className="table table-light table-hover m-0">
          <thead>
            <tr>
              <td role="columnheader">Name</td>
              <td role="columnheader">Price</td>
              <td role="columnheader">Quantity</td>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, id) => {
              return (
                <CartItem
                  key={id}
                  item={item}
                  updateQuantity={updateQuantity}
                />
              )
            })}
          </tbody>
        </table>
        <tbody>
          <Shipping total={total} />
        </tbody>
        <p className="actions">
          <button className="button-primary" onClick={submitCart}>
            Checkout
          </button>
        </p>
      </div>{' '}
    </section>
  ) : (
    <p>
      Your cart is empty! Start shopping{' '}
      <Link to="/gardens/:id/shop/">here</Link>
    </p>
  )
}

export default Cart
