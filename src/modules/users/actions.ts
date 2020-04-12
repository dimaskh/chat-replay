// Constants
import { RECEIVE_USERS, REMOVE_USER, UPDATE_USER } from './constants'

// Types
import { User } from 'models/users/types'

export const receiveUsers = (users: User[] = []) => ({
  type: RECEIVE_USERS,
  payload: users,
})

export const removeUser = (id: number) => ({
  type: REMOVE_USER,
  payload: id,
})

export const updateUser = (user: User) => ({
  type: UPDATE_USER,
  payload: user,
})
