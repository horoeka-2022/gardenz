import requestor from '../../../consume'
import { dispatch, getState } from '../../../store'
import { setWaiting, clearWaiting } from '../../../slices/waiting'
import { showError } from '../../../slices/error'

//original below:
// export function toggleAttendance(volunteerData, consume = requestor) {
//   const storeState = getState()
//   const { token } = storeState.user
//   dispatch(setWaiting())

//   return consume('/volunteers', token, 'patch', volunteerData)
//     .then(() => {
//       dispatch(clearWaiting())
//       return true
//     })
//     .catch((error) => {
//       dispatch(showError(error.message))
//       return false
//     })
// }

///////// new async function below:

export async function toggleAttendance(volunteerData, consume = requestor) {
  try {
    const storeState = getState()
    const { token } = storeState.user
    dispatch(setWaiting())

    await consume('/volunteers', token, 'patch', volunteerData)
    dispatch(clearWaiting())
    return true
  } catch (error) {
    dispatch(showError(error.message))
    return false
  }
}
