// Constants
import { PROP_ID } from 'models/users/constants'
import { RECEIVE_USERS, REMOVE_USER, UPDATE_USER } from './constants'

// Utils
import createReducer from 'utils/createReducer'

// Types
import { User } from 'models/users/types'
import { AnyAction } from 'redux'

export type UsersState = {
  data: User[]
}

export const initialState: UsersState = {
  data: [],
}

export const receiveUsers = (state: UsersState, action: AnyAction): UsersState => {
  const { payload: users } = action

  return {
    ...state,
    data: [...state.data, ...users],
  }
}

export const updateUser = (state: UsersState, action: AnyAction): UsersState => {
  const { payload: updatedUser } = action

  const newData = state.data.map((user: User) => {
    if (user[PROP_ID] === updatedUser[PROP_ID]) {
      return updatedUser
    }

    return user
  })

  return {
    ...state,
    data: newData,
  }
}

export const removeUser = (state: UsersState, action: AnyAction): UsersState => {
  const { payload: id } = action

  const newData = state.data.filter((user: User) => user[PROP_ID] !== id)

  return {
    ...state,
    data: newData,
  }
}

export default createReducer(initialState, {
  [RECEIVE_USERS]: receiveUsers,
  [REMOVE_USER]: removeUser,
  [UPDATE_USER]: updateUser,
})
