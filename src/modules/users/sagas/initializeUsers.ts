// Effects
import { put } from 'redux-saga/effects'

// Constants
import { PAYLOAD_TYPE_MESSAGE } from 'models/events/constants'

// Actions
import { receiveUsers } from '../actions'

// Utils
import { getPayload } from 'models/events/getters'
import formatUser from 'modules/users/utils/formatUser'

// Types
import { Event } from 'models/events/types'
import { User } from 'models/users/types'

export default function* initializeUsers(events: Event[]) {
  const initialUsers = getInitialUsers(events)

  yield put(receiveUsers(initialUsers))
}

export function getInitialUsers(events: Event[]): User[] {
  let users = [] as any[]

  for (const event of events) {
    const payload = getPayload(event, {})

    if (payload.type === PAYLOAD_TYPE_MESSAGE) {
      users = [...users, formatUser(payload.user)]
    } else {
      break
    }
  }

  return users
}
