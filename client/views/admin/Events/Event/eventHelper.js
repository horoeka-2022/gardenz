import requestor from '../../../../consume'
import { dispatch } from '../../../../store'
import { setWaiting, clearWaiting } from '../../../../slices/waiting'
import { showError } from '../../../../slices/error'

export async function getEvent(eventId, user, consume = requestor) {
  dispatch(setWaiting())

  try {
    const res = await consume(`/events/${eventId}`)
    dispatch(clearWaiting())
    const {
      id,
      date,
      title,
      gardenId,
      gardenName,
      gardenAddress,
      volunteersNeeded,
      volunteers,
      extraVolunteers,
      description,
      lat,
      lon,
      status,
    } = res.body
    const result = {
      id,
      date,
      title,
      gardenId,
      gardenName,
      gardenAddress,
      volunteersNeeded,
      description,
      lat,
      lon,
      status,
    }
    return user.isAdmin
      ? {
          ...result,
          volunteers,
          extraVolunteers,
        }
      : {
          ...result,
          isVolunteer: volunteers.some((v) => v.userId === user.id),
        }
  } catch (error) {
    dispatch(showError(error.message))
  }
}
