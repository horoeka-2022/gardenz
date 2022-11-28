import React from 'react'
import { screen, render } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import Photo from './Photo'

const mockPhotos = {
  name: 'image1',
  url: 'https://www.exampleImage.com/image1.jpg',
  id: 1,
}

// const photosToDelete = []

describe('Photo', () => {
  test('- rendered image to have url of "https://www.exampleImage.com/image1.jpg" within src attribute', () => {
    // function setPhotos() {
    //   console.log('assert later')
    // }

    // function getPhotos() {
    //   console.log('assert later')
    // }

    // function setPhotosToDelete() {
    //   console.log('assert later')
    // }

    render(
      <Photo
        photo={mockPhotos}
        // setPhotos={setPhotos}
        // getPhotos={getPhotos}
        // photosToDelet={photosToDelete}
        // setPhotosToDelete={setPhotosToDelete}
      />
    )
    // const trash = screen.getByTestId('trash')
    // userEvent.click(trash)
    const firstImage = screen.getByRole('img')
    expect(firstImage).toHaveAttribute(
      'src',
      'https://www.exampleImage.com/image1.jpg'
    )
  })
})
