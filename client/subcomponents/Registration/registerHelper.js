import requestor from '../../consume'
import { dispatch, getState } from '../../store'
import { setWaiting, clearWaiting } from '../../slices/waiting'
import { setUser } from '../../slices/user'
import { showError } from '../../slices/error'

export async function registerUser(
  user,
  isAdmin,
  authUser,
  navigateTo,
  consume = requestor
) {
  dispatch(setWaiting())
  try {
    const newUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      gardenId: user.gardenId,
      email: authUser.email,
      auth0Id: authUser.sub,
    }
    const storeState = await getState()
    const { token } = storeState.user

    const user = await consume('/users', token, 'post', newUser)
    const newUserInfo = user.body
    newUser.isAdmin = isAdmin
    newUser.token = token
    dispatch(setUser(newUserInfo))
    navigateTo(`/gardens`)
    return newUserInfo
  } catch (error) {
    dispatch(showError(error.message))
  } finally {
    dispatch(clearWaiting())
  }
}