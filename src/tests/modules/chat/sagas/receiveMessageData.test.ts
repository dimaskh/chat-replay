// Effects
import { put } from 'redux-saga/effects'

// Actions
import { receiveMessage, removeMessage, updateMessage } from 'modules/chat/actions'

// Tested sagas
import receiveMessageData from 'modules/chat/sagas/receiveMessageData'

// Utils
import { formatMessage } from 'modules/chat/sagas/receiveMessageData'

// Mocks
import * as events from 'tests/mocks/events'

describe('chat/sagas/receiveMessageData', () => {
  describe('with add message event', () => {
    const event = events.messageEvent
    const { message, user } = event.payload
    const formattedMessage = formatMessage(message, user)

    const saga = receiveMessageData(event)

    it('should put receiveMessage', () => {
      expect(saga.next().value).toEqual(put(receiveMessage(formattedMessage)))
    })
  })

  describe('with update message event', () => {
    const event = events.updateEvent
    const { message } = event.payload
    const saga = receiveMessageData(event)

    it('should put updateMessage', () => {
      expect(saga.next().value).toEqual(put(updateMessage(message)))
    })
  })

  describe('with delete message event', () => {
    const event = events.deleteEvent
    const saga = receiveMessageData(event)

    it('should put removeMessage', () => {
      expect(saga.next().value).toEqual(put(removeMessage(1)))
    })
  })

  describe('with user event', () => {
    const event = events.connectEvent
    const saga = receiveMessageData(event)

    it('should exit saga', () => {
      const next = saga.next()

      expect(next.value).toBeUndefined()
      expect(next.done).toBe(true)
    })
  })
})
