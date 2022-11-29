import React from 'react'
import Cart from './Cart'
import { getCartFromStorage } from './cartHelper'
import { screen } from '@testing-library/react'
import { renderWithRouter } from '../../../../../test-utils'
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

jest.mock('./cartHelper')
test('when the Cart component is rendered, there is a product named Large veggie box', () => {
  //ARRANGE
  getCartFromStorage.mockImplementation(() => {
    return [
      { id: 1, name: 'Large veggie box', price: 5, quantity: 5 },
      { id: 2, name: 'Small veggie box', price: 5, quantity: 5 },
    ]
  })

  renderWithRouter(<Cart />)
  //ACT
  const productName = screen.getByText('Large veggie box')

  //ASSERT
  expect(productName).toBeInTheDocument()
})

test('when the Cart component is rendered, should have button', () => {
  getCartFromStorage.mockImplementation(() => {
    return [
      { id: 1, name: 'Large veggie box', price: 5, quantity: 5 },
      { id: 2, name: 'Small veggie box', price: 5, quantity: 5 },
    ]
  })

  renderWithRouter(<Cart />)
  const onclickbutton = screen.getByRole('button', { name: 'Checkout' })
  // userEvent.click(onclickbutton)
  // const counter = screen.getAllByText('Checkout')
  expect(onclickbutton).toBeInTheDocument()
})

const setLocalStorage = (id, data) => {
  window.localStorage.setItem(id, JSON.stringify(data))
}
test('data is added into local storage', () => {
  const mockId = '1'
  const mockJson = { data: 'json data' }
  setLocalStorage(mockId, mockJson)
  expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson))
})
