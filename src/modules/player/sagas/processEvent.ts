// Effects
import { all, call } from 'redux-saga/effects'

// Sagas
import receiveMessageData from 'modules/chat/sagas/receiveMessageData'
import receiveUserData from 'modules/users/sagas/receiveUserData'

// Utils
// import { getPayload } from 'models/events/getters'

// Types
import { Event } from 'models/events/types'

export default function* processEvent(event: Event) {
  // const payload = getPayload(event, {})

  const sagas = [
    /** Put user data */
    call(receiveUserData, event),
    /** Put message data */
    call(receiveMessageData, event),
  ]
  // console.log(payload, event.delta)
  yield all(sagas)
}
