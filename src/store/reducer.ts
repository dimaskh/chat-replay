// Reducers
import chatReducer from 'modules/chat/reducer'
import playerReducer from 'modules/player/reducer'
import usersReducer from 'modules/users/reducer'

// Utils
import { combineReducers } from 'redux'

// Types
import { Reducer, ReducersMapObject } from 'redux'
import { ChatState } from 'modules/chat/reducer'
import { PlayerState } from 'modules/player/reducer'
import { UsersState } from 'modules/users/reducer'

export type StoreState = {
  chat: ChatState
  player: PlayerState
  users: UsersState
}

type ReducerMaps = { [K in keyof StoreState]: Reducer }

const allReducers: ReducerMaps = {
  chat: chatReducer,
  player: playerReducer,
  users: usersReducer,
}

export default combineReducers({ ...allReducers } as ReducersMapObject<StoreState, any>)
