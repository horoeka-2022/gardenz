import Gallery from './Gallery'
import { screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'

import { getGalleryImages } from './galleryHelper'
import { renderWithRedux } from '../../../../test-utils'
import store from '../../../../store'

jest.mock('./galleryHelper')

describe('Gallery', () => {
  it('First image in Gallery must have src ="/images/comGardenPlant.png" and alt = "garden image1"', async () => {
    getGalleryImages.mockImplementation(() =>
      Promise.resolve([{ id: 1, url: 'test.png', name: 'test' }])
    )

    renderWithRedux(<Gallery />, { store, initialState: {} })

    const firstImage = await screen.findAllByRole('img')
    expect(firstImage[0]).toHaveAttribute('src', 'test.png')
    expect(firstImage[0]).toHaveAttribute('alt', 'test')
  })
})
