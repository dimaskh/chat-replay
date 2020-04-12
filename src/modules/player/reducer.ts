// Constants
import { RECEIVE_RECORD } from './constants'

// Utils
import createReducer from 'utils/createReducer'

// Types
import { Event } from 'models/events'
import { AnyAction } from 'redux'

export type PlayerState = {
  events: Event[]
}

export const initialState: PlayerState = {
  events: [],
}

export const receiveRecord = (state: PlayerState, action: AnyAction): PlayerState => {
  const { payload: events } = action

  return { ...state, events }
}

export default createReducer(initialState, {
  [RECEIVE_RECORD]: receiveRecord,
})
