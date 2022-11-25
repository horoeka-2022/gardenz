import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import CartItem from '../../../../../subcomponents/Cart/CartItem'

function Cart() {
  const navigate = useNavigate()
  const cart = JSON.parse(localStorage.getItem('order'))
  const [items, setItems] = useState(cart)
  // useEffect(() => {
  //   localStorage.setItem('order', JSON.stringify(items))
  //   const order = JSON.parse(localStorage.getItem('order'))
  //   if (order) {
  //     setItems(order)
  //   }
  // }, [])

  //define the useState() later
  const [calculateTotal, setCalculateTotal] = useState()

  function submitCart() {
    //pass the chosed orders into the deliever page
    const { name, id, quantity, price } = items
    localStorage.setItem('order', JSON.stringify(items))
    const order = JSON.parse(localStorage.getItem('order'))
    if (order) {
      setItems(order)
    }
    {
      /*change the url link with dynamic id later */
    }
    navigate('/gardens/:id/shop/delievery/:id')
  }

  return cart ? (
    <div className="cart">
      <table>
        <thead>
          <tr>
            <td role="columnheader">Name</td>
            <td role="columnheader">Price</td>
            <td role="columnheader">Quantity</td>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, id) => {
            return <CartItem key={id} items={item} />
          })}
        </tbody>
      </table>
      <p className="actions">
        <button className="button-primary" onClick={submitCart}>
          Checkout
        </button>
      </p>
    </div>
  ) : (
    <p>
      Your cart is empty! Start shopping{' '}
      <Link to="/gardens/:id/shop/">here</Link>
    </p>
  )
}

export default Cart
