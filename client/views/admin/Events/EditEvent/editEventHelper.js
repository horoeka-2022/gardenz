import { dispatch, getState } from '../../../../store'
import { setWaiting, clearWaiting } from '../../../../slices/waiting'
import { showError } from '../../../../slices/error'
import requestor from '../../../../consume'

export async function getEvent(id, consume = requestor) {
  dispatch(setWaiting())
  try {
    const res = await consume(`/events/${id}`)
    const { title, date, volunteersNeeded, description } = res.body
    return { title, date, description, volunteersNeeded }
  } catch (err) {
    dispatch(showError(err.message))
  } finally {
    dispatch(clearWaiting())
  }
}

export function updateEvent(gardenId, event, navigateTo, consume = requestor) {
  const storeState = getState()
  const { token } = storeState.user
  const eventToUpdate = {
    id: Number(event.id),
    ...event,
  }
  dispatch(setWaiting())
  return consume(`/events/${event.id}`, token, 'patch', eventToUpdate)
    .then(() => {
      navigateTo(`/gardens/${gardenId}`)
      return null
    })
    .catch((err) => {
      dispatch(showError(err.message))
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}

export function cancelEvent(id, navigateTo, consume = requestor) {
  const storeState = getState()
  const { token } = storeState.user
  const eventToUpdate = {
    id: Number(id),
  }
  return consume(`/events/${id}/cancel`, token, 'patch', eventToUpdate)
    .then(() => {
      navigateTo()
      return null
    })
    .catch((err) => {
      dispatch(showError(err.message))
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}
