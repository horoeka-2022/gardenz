import React from 'react'
import { screen, render } from '@testing-library/react'
import { getPhotos } from './photosHelper'
import Photos from './Photos'

jest.mock('./photosHelper')

const mockPhotos = {
  body: [
    {
      id: 1,
      name: 'image1',
      url: 'https://www.kelmarnagardens.nz/uploads/6/0/1/1/60114025/dji-0065_orig.jpg',
      garden_id: 1,
    },
  ],
}

describe('Photos', () => {
  test('to have an image and a delete button', async () => {
    getPhotos.mockImplementation(() => Promise.resolve(mockPhotos))

    render(<Photos />)

    const button = screen.getByRole('button')
    expect(button).toHaveTextContent(/delete/i)
    const firstImage = await screen.findByRole('img')
    expect(firstImage).toHaveAttribute(
      'src',
      'https://www.kelmarnagardens.nz/uploads/6/0/1/1/60114025/dji-0065_orig.jpg'
    )
  })
})
