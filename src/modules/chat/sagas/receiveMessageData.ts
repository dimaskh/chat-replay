// Effects
import { put } from 'redux-saga/effects'

// Actions
import { receiveMessage, removeMessage, updateMessage } from '../actions'

// Constants
import { PAYLOAD_TYPE_DELETE, PAYLOAD_TYPE_MESSAGE, PAYLOAD_TYPE_UPDATE } from 'models/events/constants'
import { PROP_AUTHOR } from 'models/messages/constants'

// Getters
import { getPayload } from 'models/events/getters'
import { getDisplayName } from 'models/users/getters'

// Types
import { Event } from 'models/events/types'
import { Message } from 'models/messages/types'
import { User } from 'models/users/types'

const messageEvents = [PAYLOAD_TYPE_DELETE, PAYLOAD_TYPE_MESSAGE, PAYLOAD_TYPE_UPDATE]

export default function* receiveMessageData(event: Event) {
  const payload = getPayload(event, {})
  const { type, message, user } = payload
  const isMessageEvent = messageEvents.includes(type)

  if (!message || !isMessageEvent) {
    return
  }

  const formattedMessage = formatMessage(message, user)

  const handlerActions = {
    [PAYLOAD_TYPE_MESSAGE]: put(receiveMessage(formattedMessage)),
    [PAYLOAD_TYPE_UPDATE]: put(updateMessage(formattedMessage)),
    [PAYLOAD_TYPE_DELETE]: put(removeMessage(message.id)),
  } as Record<string, any>

  yield handlerActions[payload.type]
}

export function formatMessage(message: Message, user: User): Message {
  const displayName = getDisplayName(user, '')

  return {
    ...message,
    [PROP_AUTHOR]: displayName,
  }
}
