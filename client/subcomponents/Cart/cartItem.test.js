// import React from 'react'

// import { getCartFromStorage } from '../../views/user/Gardens/Shop/Cart/cartHelper'
// import { screen } from '@testing-library/react'
// import { renderWithRouter } from '../../test-utils'
// // import userEvent from '@testing-library/user-event'
// import '@testing-library/jest-dom'
// import { userEvent } from '@storybook/testing-library'
// import Cart from '../../views/user/Gardens/Shop/Cart/Cart'

// jest.mock('../../views/user/Gardens/Shop/Cart/cartHelper')

// test('when the increment button is clicked, the counter should increase by 1', () => {
//   // ARRANGE
//   getCartFromStorage.mockImplementation(() => {
//     return [{ id: 1, name: 'Large veggie box', price: 5, quantity: 5 }]
//   })
//   renderWithRouter(<Cart />)

//   //ACT
//   const incrementButton = screen.getByRole('button', { name: '+' })
//   userEvent.click(incrementButton)
//   const quantity = screen.getByText('6')

//   // ASSERT
//   expect(quantity).toBeInTheDocument()
// })

// test('when the decrement button is clicked, the counter should decrease by 1', () => {
//   getCartFromStorage.mockImplementation(() => {
//     return [{ id: 1, name: 'Large veggie box', price: 5, quantity: 5 }]
//   })

//   renderWithRouter(<Cart />)

//   const decrementButton = screen.getByRole('button', { name: '-' })
//   userEvent.click(decrementButton)
//   //defining quantity
//   const quantity = screen.getByText('4')
//   //exact
//   expect(quantity).toBeInTheDocument()
// })
