// Effects
import { put } from 'redux-saga/effects'

// Actions
import { receiveUsers, removeUser, updateUser } from '../actions'

// Constants
import { PAYLOAD_TYPE_CONNECT, PAYLOAD_TYPE_DISCONNECT, PAYLOAD_TYPE_UPDATE } from 'models/events/constants'

// Utils
import { getPayload } from 'models/events/getters'
import normalizeUser from '../utils/normalizeUser'

// Types
import { Event } from 'models/events/types'

const userEvents = [PAYLOAD_TYPE_CONNECT, PAYLOAD_TYPE_DISCONNECT, PAYLOAD_TYPE_UPDATE]

export default function* receiveUserData(event: Event) {
  const payload = getPayload(event, {})
  const { type, user } = payload
  const isUserEvent = userEvents.includes(type)

  if (!user || !isUserEvent) {
    return
  }

  const normalizedUser = normalizeUser(user)

  const handlerActions = {
    [PAYLOAD_TYPE_CONNECT]: put(receiveUsers([normalizedUser])),
    [PAYLOAD_TYPE_UPDATE]: put(updateUser(normalizedUser)),
    [PAYLOAD_TYPE_DISCONNECT]: put(removeUser(user.id)),
  } as Record<string, any>

  yield handlerActions[payload.type]
}
