import React, { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

import CartItem from '../../../../../subcomponents/Cart/CartItem'
import useGarden from '../../../../../hooks/useGarden'
import Total from '../../../../../subcomponents/Cart/Total'
import { getCartFromStorage, updateCartFromLocalStorage } from './cartHelper'

function Cart() {
  const navigate = useNavigate()
  // const cart = JSON.parse(localStorage.getItem('order'))

  const { id } = useParams()
  useGarden(id)

  const cart = getCartFromStorage()

  const [items, setItems] = useState(cart)

  const originalTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

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

    updateCartFromLocalStorage(items)
    const order = getCartFromStorage()
    console.log(order)
    if (order) {
      setItems(order)
    }

    navigate(`/gardens/${id}/shop/delievery/1`)
  }

  return cart ? (
    <div className="flex flex-col ml-40 mt-40">
      <div>
        {cart.map((item, id) => {
          return (
            <CartItem key={id} item={item} updateQuantity={updateQuantity} />
          )
        })}
      </div>

      <div className="mt-40">
        <Total total={total} />
      </div>
      <div className="actions">
        <button
          // testId="checkout-button"
          className="button-primary text-xl float-right mr-40 bg-orange p-5"
          onClick={submitCart}
        >
          Checkout
        </button>
      </div>
    </div>
  ) : (
    <p>
      Your cart is empty! Start shopping{' '}
      <Link to="/gardens/:id/shop/">here</Link>
    </p>
  )
}

export default Cart
