import requestor from '../../consume'
import { dispatch } from '../../store'
import { clearWaiting, setWaiting } from '../../slices/waiting'
import { showError } from '../../slices/error'

export function addBug(bugInput, consume = requestor) {
  dispatch(setWaiting())
  return consume('/bugs', null, 'post', bugInput)
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
