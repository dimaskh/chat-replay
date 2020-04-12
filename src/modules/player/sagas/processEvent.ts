// Effects
import { all, call } from 'redux-saga/effects'

// Sagas
import receiveMessageData from 'modules/chat/sagas/receiveMessageData'
import receiveUserData from 'modules/users/sagas/receiveUserData'

// Types
import { Event } from 'models/events/types'

export default function* processEvent(event: Event) {
  const sagas = [call(receiveUserData, event), call(receiveMessageData, event)]

  yield all(sagas)
}
