import requestor from '../../../consume'
import { dispatch, getState } from '../../../store'
import { clearWaiting, setWaiting } from '../../../slices/waiting'
import { showError } from '../../../slices/error'

// original below:
// export function toggleVolunteerStatus(
//   eventId,
//   willVolunteer,
//   setVolunteering,
//   consume = requestor
// ) {
//   const storeState = getState()
//   const { id, token } = storeState.user
//   if (!id) {
//     dispatch(showError('Please register or sign in to volunteer.'))
//   } else {
//     dispatch(setWaiting())
//     const routeMethod = willVolunteer ? 'post' : 'delete'
//     const userData = { userId: id, eventId }

//     return consume('/volunteers', token, routeMethod, userData)
//       .then(() => {
//         setVolunteering(willVolunteer)
//         dispatch(clearWaiting())
//         return null
//       })
//       .catch((error) => {
//         dispatch(showError(error.message))
//         return null
//       })
//   }
// }

/////// changed to async below - to be checked

export async function toggleVolunteerStatus(
  eventId,
  willVolunteer,
  setVolunteering,
  consume = requestor
) {
  try {
    const storeState = getState()
    const { id, token } = storeState.user
    if (!id) {
      dispatch(showError('Please register or sign in to volunteer.'))
    } else {
      dispatch(setWaiting())
      const routeMethod = willVolunteer ? 'post' : 'delete'
      const userData = { userId: id, eventId }

      await consume('/volunteers', token, routeMethod, userData)
      setVolunteering(willVolunteer)
      dispatch(clearWaiting())
      return null
    }
  } catch (err) {
    dispatch(showError(err.message))
    return null
  }
}
