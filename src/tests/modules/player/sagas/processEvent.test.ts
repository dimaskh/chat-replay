// Effects
import { all, call } from 'redux-saga/effects'

// Sagas
import processEvent from 'modules/player/sagas/processEvent'
import receiveMessageData from 'modules/chat/sagas/receiveMessageData'
import receiveUserData from 'modules/users/sagas/receiveUserData'

// Mocks
import { messageEvent } from 'tests/mocks/events'

describe('player/sagas/processEvent', () => {
  const saga = processEvent(messageEvent)

  it('should call receiveMessageData and receiveUserData in parallel', () => {
    const expectedCalls = [call(receiveUserData, messageEvent), call(receiveMessageData, messageEvent)]

    expect(saga.next().value).toEqual(all(expectedCalls))
  })
})
