import requestor from '../../../consume'
import { dispatch } from '../../../store'
import { setWaiting, clearWaiting } from '../../../slices/waiting'
import { showError } from '../../../slices/error'

export async function getProduce(gardenid, consume = requestor) {
  try {
    await dispatch(setWaiting())
    const produceType = await consume(`/gardenproduce/${gardenid}`)
    await dispatch(clearWaiting())
    return produceType.body
  } catch (error) {
    dispatch(showError(error.message))
  }
}