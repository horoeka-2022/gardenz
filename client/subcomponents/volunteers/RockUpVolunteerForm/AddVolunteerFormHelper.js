import requestor from '../../../consume'
import { dispatch, getState } from '../../../store'
import { setWaiting, clearWaiting } from '../../../slices/waiting'
import { showError } from '../../../slices/error'

export async function addVolunteer(
  volunteer,
  addExtraVolunteer,
  consume = requestor
) {
  try {
    const { token } = await getState().user
    await dispatch(setWaiting())
    const response = await consume('/volunteers/extras', token, 'post', volunteer)
    await dispatch(clearWaiting())
    const newVolunteer = { ...volunteer, ...response.body }
    await addExtraVolunteer(newVolunteer)
    return response
  } catch (error) {
    dispatch(showError(error.message))
  }
}
