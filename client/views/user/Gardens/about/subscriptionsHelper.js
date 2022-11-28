import requestor from '../../../../consume'
import { dispatch } from '../../../../store'
import { clearWaiting, setWaiting } from '../../../../slices/waiting'
import { showError } from '../../../../slices/error'

export function addSubscription(gardenId, userInfo, consume = requestor) {

  dispatch(setWaiting())
  return consume('/subscriptions', null, 'post', { gardenId, ...userInfo },)
    .then(() => {
      dispatch(clearWaiting())
    })
    .catch((err) => {
      dispatch(showError(err))
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}
