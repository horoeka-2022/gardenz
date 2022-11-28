import requestor from '../../../../consume'
import { dispatch } from '../../../../store'
import { setWaiting, clearWaiting } from '../../../../slices/waiting'
import { showError } from '../../../../slices/error'

export function getGalleryImages(gardenId, consume = requestor) {
  dispatch(setWaiting())
  return consume(`/gallery/${gardenId}`)
    .then((res) => {
      return res.body.images
    })
    .catch((error) => {
      dispatch(showError(error.message))
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}
