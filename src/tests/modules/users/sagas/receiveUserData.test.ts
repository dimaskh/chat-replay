// Effects
import { put } from 'redux-saga/effects'

// Actions
import { receiveUsers, removeUser, updateUser } from 'modules/users/actions'

// Tested sagas
import receiveUserData from 'modules/users/sagas/receiveUserData'

// Utils
import formatUser from 'modules/users/utils/formatUser'

// Mocks
import * as events from 'tests/mocks/events'

describe('users/sagas/receiveUserData', () => {
  describe('with connect event', () => {
    const event = events.connectEvent
    const { user } = event.payload
    const formattedUser = formatUser(user)

    const saga = receiveUserData(event)

    it('should put receiveUsers', () => {
      expect(saga.next().value).toEqual(put(receiveUsers([formattedUser])))
    })
  })

  describe('with update event', () => {
    const event = events.updateEvent
    const { user } = event.payload

    const saga = receiveUserData(event)

    it('should put updateUser', () => {
      expect(saga.next().value).toEqual(put(updateUser(user)))
    })
  })

  describe('with disconnect event', () => {
    const event = events.disconnectEvent
    const saga = receiveUserData(event)

    it('should put removeUser', () => {
      expect(saga.next().value).toEqual(put(removeUser(1)))
    })
  })

  describe('with message event', () => {
    const event = events.messageEvent
    const saga = receiveUserData(event)

    it('should exit saga', () => {
      const next = saga.next()

      expect(next.value).toBeUndefined()
      expect(next.done).toBe(true)
    })
  })
})
