import requestor from '../../../consume'
import { dispatch, getState } from '../../../store'
import { setWaiting } from '../../../slices/waiting'
import { showError } from '../../../slices/error'
import { updateEventVols } from '../../../slices/garden'

export function toggleVolunteerStatus(
  eventId,
  willVolunteer,
  setVolunteering,
  consume = requestor
) {
  const storeState = getState()
  const { id, token } = storeState.user
  if (!id) {
    dispatch(showError('Please register or sign in to volunteer.'))
  } else {
    dispatch(setWaiting())
    const routeMethod = willVolunteer ? 'post' : 'delete'
    const userData = { userId: id, eventId }

    return consume('/volunteers', token, routeMethod, userData)
      .then(() => {
        dispatch(updateEventVols(eventId))
        setVolunteering(willVolunteer)
        return null
      })
      .catch((error) => {
        dispatch(showError(error.message))
        return null
      })
  }
}
