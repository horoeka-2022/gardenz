import { getGalleryImages } from "./galleryHelper";
import { setWaiting, clearWaiting } from "../../../../slices/waiting";
import { dispatch } from '../../../../store'

jest.mock('../../../../store')

afterEach(() => {
  return jest.resetAllMocks()
})

describe(' -> GET /gallery/${gardenId} api call success', () => {
  it('dispatches with the correct images by Id', () => {
    function consume(path) {
      expect(path).toMatch('1')
      return Promise.resolve({
        body: {
          photos: [
            {
              name: "image2",
              url: "https://www.kelmarnagardens.nz/uploads/6/0/1/1/60114025/kelmarna-autumn-festival-2019-2-1_orig.jpg",
            },
          ],
        },
      })
    } 
return  getGalleryImages(1, consume).then((photos))
  })