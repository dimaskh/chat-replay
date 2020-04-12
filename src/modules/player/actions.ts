// Constants
import { CLEAR_DATA, FINISH_RECORD, RECEIVE_RECORD, REPLAY_RECORD } from './constants'

// Types
import { Event } from 'models/events'

export const replayRecord = (url?: string) => ({
  type: REPLAY_RECORD,
  payload: url,
})

export const receiveRecord = (data: Event[] = []) => ({
  type: RECEIVE_RECORD,
  payload: data,
})

export const finishRecord = () => ({
  type: FINISH_RECORD,
})

export const clearData = () => ({
  type: CLEAR_DATA,
})
