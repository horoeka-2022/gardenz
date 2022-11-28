// import Shop from './Shop'
import { render, screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import { userEvent } from '@storybook/testing-library'
import { fetchShopList } from './shopHelper'

import { renderWithRedux } from '../../../../test-utils'
import store from '../../../../store'
import ShopListItem from '../../Gardens/Shop/ShopListItem'
import Shop from './Shop'

jest.mock('./shopHelper')

const item = {
  id: 1,
  productId: 2,
  name: 'Large veggie box',
  description:
    'a large box filled with fresh seasonal produce grown at your local garden',
  price: 29,
  image:
    'https://www.rebootwithjoe.com/wp-content/uploads/2014/04/Farmers-Markets-Local-Produce-Benefits1.jpg',
  stock: 15,
}

test('Shop component should display 2 items', async () => {
  fetchShopList(() => [
    {
      id: 1,
      productId: 2,
      name: 'Large veggie box',
      description:
        'a large box filled with fresh seasonal produce grown at your local garden',
      price: 29,
      image:
        'https://www.rebootwithjoe.com/wp-content/uploads/2014/04/Farmers-Markets-Local-Produce-Benefits1.jpg',
      stock: 15,
    },
    {
      id: 2,
      productId: 3,
      name: 'Small veggie box',
      description:
        'a small box filled with fresh seasonal produce grown at your local garden',
      price: 15,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-RtCis1YP3HZ4LMb2XfTqQHUXM6w5wkGRA&usqp=CAU',
      stock: 15,
    },
  ])

  //ARRANGE

  function addProductToCart(product, quantity) {
    console.log('to be implemented later')
  }

  render(<ShopListItem product={item} addToCart={addProductToCart} />)

  //ACT
  const produceBoxName = await screen.getByText('Large veggie box')
  const addToBasketButton = screen.getByRole('button', {
    name: 'add to basket',
  })
  userEvent.click(addToBasketButton)
  const addToBasket = screen.getByText()

  //ASSERT
  expect(produceBoxName).toBeInTheDocument()
  expect(addToBasket).toBeInTheDocument()
})

//--Our test
test('when the Counter component is rendered, the counter should start with 1', () => {
  // ARRANGE
  renderWithRedux(<ShopListItem product={item} />)

  //ACT
  const quantity = screen.getByText('1')

  // ASSERT
  expect(quantity).toBeInTheDocument()
})

test('when the increment button is clicked, the counter should equal to two', () => {
  // ARRANGE
  renderWithRedux(<ShopListItem product={item} />)

  //ACT
  const incrementButton = screen.getByRole('button', { name: '+' })
  userEvent.click(incrementButton)
  const quantity = screen.getByText('2')

  // ASSERT
  expect(quantity).toBeInTheDocument()
})

test('when the decrement button is clicked, the counter should be 1', () => {
  renderWithRedux(<ShopListItem product={item} />)

  const decrementButton = screen.getByRole('button', { name: '-' })
  userEvent.click(decrementButton)
  //defining quantity
  const quantity = screen.getByText('1')
  //exact
  expect(quantity).toBeInTheDocument()
})

test('data is added into local storage', () => {
  const setLocalStorage = (id, data) => {
    window.localStorage.setItem(id, JSON.stringify(data))
  }
  const mockId = '1'
  const mockJson = { data: 'json data' }
  setLocalStorage(mockId, mockJson)
  expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson))
})
