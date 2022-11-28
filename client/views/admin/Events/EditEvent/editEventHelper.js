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

export async function updateEvent(
  gardenId,
  event,
  navigateTo,
  consume = requestor
) {
  dispatch(setWaiting())
  try {
    const storeState = getState()
    const { token } = storeState.user
    const eventToUpdate = {
      id: Number(event.id),
      ...event,
    }
    await consume(`/events/${event.id}`, token, 'patch', eventToUpdate)
    navigateTo(`/gardens/${gardenId}`)
  } catch (err) {
    dispatch(showError(err.message))
  } finally {
    dispatch(clearWaiting())
  }
}

export async function cancelEvent(id, navigateTo, consume = requestor) {
  try {
    const storeState = getState()
    const { token } = storeState.user
    const eventToUpdate = {
      id: Number(id),
    }
    await consume(`/events/${id}/cancel`, token, 'patch', eventToUpdate)
    navigateTo()
  } catch (err) {
    dispatch(showError(err.message))
  } finally {
    dispatch(clearWaiting())
  }
}
