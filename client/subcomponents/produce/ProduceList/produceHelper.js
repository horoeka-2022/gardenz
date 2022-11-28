import requestor from '../../../consume'
import { dispatch } from '../../../store'
import { setWaiting, clearWaiting } from '../../../slices/waiting'
import { showError } from '../../../slices/error'

export async function getProduce(gardenid, consume = requestor) {
  try {
    dispatch(setWaiting())
    const res = await consume(`/gardenproduce/${gardenid}`)
    dispatch(clearWaiting())
    return res.body
  } catch (error) {
    dispatch(showError(error.message))
  }
}
