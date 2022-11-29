import { getGalleryImages } from './galleryHelper'
import { setWaiting, clearWaiting } from '../../../../slices/waiting'
import { dispatch } from '../../../../store'

jest.mock('../../../../store')

afterEach(() => {
  return jest.resetAllMocks()
})

describe('-> GET /gallery/${gardenId} api call success', () => {
  it('dispatches with the correct images by Id', async () => {
    function consume(path) {
      expect(path).toMatch('1')
      return Promise.resolve({
        body: {
          images: [
            {
              name: 'image2',
              url: 'https://www.kelmarnagardens.nz/uploads/6/0/1/1/60114025/kelmarna-autumn-festival-2019-2-1_orig.jpg',
            },
            {
              name: 'image3',
              url: 'https://www.kelmarnagardens.nz/uploads/6/0/1/1/60114025/kelmarna-autumn-festival-2019-2-1_orig.jpg',
            },
          ],
        },
      })
    }
    const images = await getGalleryImages(1, consume)
    expect(dispatch).toHaveBeenCalledWith(setWaiting())
    expect(dispatch).toHaveBeenCalledWith(clearWaiting())
    expect(images).toHaveLength(2)
    expect(images[0].name).toBe('image2')
    expect(images[1].name).toBe('image3')
    expect(images[0].url).toContain('kelmarna')
  })
})
