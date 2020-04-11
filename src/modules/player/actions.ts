// Constants
import { RECEIVE_RECORD, REPLAY_RECORD } from './constants'

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
