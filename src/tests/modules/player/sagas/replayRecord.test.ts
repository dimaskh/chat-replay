// Effects
import { call, put, takeLatest } from 'redux-saga/effects'

// Actions
import { receiveRecord, replayRecord } from 'modules/player/actions'

// Sagas
import initializeUsers from 'modules/users/sagas/initializeUsers'
import fetchRecord from 'modules/player/sagas/fetchRecord'
import watchReplayRecord, { handleReplayRecord } from 'modules/player/sagas/replayRecord'
import scheduleEvents from 'modules/player/sagas/scheduleEvents'

// Constants
import { REPLAY_RECORD } from 'modules/player/constants'

// Mocks
import { events } from 'tests/mocks/events'

describe('player/sagas/replayRecord', () => {
  describe('watchReplayRecord saga', () => {
    const saga = watchReplayRecord()

    it('should takeLatest REPLAY_RECORD', () => {
      expect(saga.next().value).toEqual(takeLatest(REPLAY_RECORD, handleReplayRecord))
    })
  })

  describe('handleReplayRecord saga', () => {
    const saga = handleReplayRecord(replayRecord('url'))

    it('should call fetchRecord', () => {
      expect(saga.next().value).toEqual(call(fetchRecord, 'url'))
    })

    it('should put receiveRecord', () => {
      expect(saga.next(events).value).toEqual(put(receiveRecord(events)))
    })

    it('should call initializeUsers', () => {
      expect(saga.next().value).toEqual(call(initializeUsers, events))
    })

    it('should call scheduleEvents', () => {
      expect(saga.next().value).toEqual(call(scheduleEvents, events))
    })

    it('should exit saga', () => {
      const next = saga.next()

      expect(next.value).toBeUndefined()
      expect(next.done).toBe(true)
    })
  })
})
