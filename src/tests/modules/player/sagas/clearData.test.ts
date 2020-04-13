// Effects
import { all, put, takeLatest } from 'redux-saga/effects'

// Actions
import { clearMessages } from 'modules/chat/actions'
import { clearUsers } from 'modules/users/actions'

// Tested sagas
import watchClearData, { handleClearData } from 'modules/player/sagas/clearData'

// Constants
import { CLEAR_DATA } from 'modules/player/constants'

describe('player/sagas/clearData', () => {
  describe('watchClearData saga', () => {
    const saga = watchClearData()

    it('should takeLatest CLEAR_DATA', () => {
      expect(saga.next().value).toEqual(takeLatest(CLEAR_DATA, handleClearData))
    })
  })

  describe('handleClearData saga', () => {
    const saga = handleClearData()

    it('should put clearMessages and clearUsers in parallel', () => {
      const actions = [put(clearUsers()), put(clearMessages())]

      expect(saga.next().value).toEqual(all(actions))
    })

    it('should exit saga', () => {
      const next = saga.next()

      expect(next.value).toBeUndefined()
      expect(next.done).toBe(true)
    })
  })
})
