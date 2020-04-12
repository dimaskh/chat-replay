// Constants
import { FINISH_RECORD, RECEIVE_RECORD, REPLAY_RECORD, CLEAR_DATA } from './constants'

// Utils
import createReducer from 'utils/createReducer'

// Types
import { Event } from 'models/events'
import { AnyAction } from 'redux'

export type PlayerState = {
  events: Event[]
  isPlaying: boolean
  isFinished: boolean
}

export const initialState: PlayerState = {
  events: [],
  isPlaying: false,
  isFinished: false,
}

export const receiveRecord = (state: PlayerState, action: AnyAction): PlayerState => {
  const { payload: events } = action

  return { ...state, events }
}

export const replayRecord = (state: PlayerState, action: AnyAction): PlayerState => ({
  ...state,
  isPlaying: true,
})

export const finishRecord = (state: PlayerState, action: AnyAction): PlayerState => ({
  ...state,
  isFinished: true,
})

export const clearData = (state: PlayerState, action: AnyAction): PlayerState => initialState

export default createReducer(initialState, {
  [FINISH_RECORD]: finishRecord,
  [RECEIVE_RECORD]: receiveRecord,
  [REPLAY_RECORD]: replayRecord,
  [CLEAR_DATA]: clearData,
})
