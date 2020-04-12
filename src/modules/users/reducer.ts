// Constants
import { RECEIVE_USERS } from './constants'

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

export default createReducer(initialState, {
  [RECEIVE_USERS]: receiveUsers,
})
