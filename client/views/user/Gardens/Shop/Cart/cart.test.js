import React from 'react'
import Cart from './Cart'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

test('when the Cart component is rendered, there is one table', () => {
  //ARRANGE
  render(<Cart />)
  //ACT
  const table = screen.getByRole('table')

  //ASSERT
  expect(table).toHaveLength(1)
  // expect(blogsArray[0]).toHaveTextContent('Wilber')
})

// test('when the Blogs component is rendered, the second link should refer to ...', () => {
//   render(<Blogs />)

//   const links = screen.getAllByRole('link')
//   const linkSecond = links[1]

//   expect(linkSecond).toHaveTextContent('https://templeton.net/blog')
//   // expect(linkSecond).toHaveAttribute('href', '{blog.link}')
// })
