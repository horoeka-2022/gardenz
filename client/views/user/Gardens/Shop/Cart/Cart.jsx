import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import CartItem from '../../../../../subcomponents/Cart/CartItem'

function Cart() {
  const navigate = useNavigate()
  const cart = JSON.parse(localStorage.getItem('order'))

  function submitCart() {
    //pass the chosed orders into the deliever page
    window.localStorage.getItem('order')
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
