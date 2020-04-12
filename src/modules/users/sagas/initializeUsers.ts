// Effects
import { put } from 'redux-saga/effects'

// Constants
import { PAYLOAD_TYPE_MESSAGE } from 'models/events/constants'

// Actions
import { receiveUsers } from '../actions'

// Utils
import { getPayload } from 'models/events/getters'
import normalizeUser from 'modules/users/utils/normalizeUser'

// Types
import { Event } from 'models/events/types'
import { User } from 'models/users/types'

export default function* initializeUsers(events: Event[]) {
  const initialUsers = getInitialUsers(events)

  yield put(receiveUsers(initialUsers))
}

export function getInitialUsers(events: Event[]): User[] {
  const result = [...events].reduce((acc: User[], event: Event, index: number, initial: Event[]): User[] => {
    const nextEvent = initial[index + 1]
    const nextPayload = getPayload(nextEvent, {})
    const payload = getPayload(event, {})
    if (nextPayload.type !== PAYLOAD_TYPE_MESSAGE) initial.splice(index)
    return [...acc, normalizeUser(payload.user)]
  }, [])

  return result
}
