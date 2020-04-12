// Constants
import { RECEIVE_USERS } from './constants'

// Types
import { User } from 'models/users/types'

export const receiveUsers = (users: User[] = []) => ({
  type: RECEIVE_USERS,
  payload: users,
})
