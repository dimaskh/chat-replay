// Getters
import { getAuthor } from 'models/messages/getters'

// Types
import { Message } from 'models/messages/types'

export default function formatMessage(message: Message): Object {
  return {
    ...message,
    type: 'text',
    position: 'left',
    title: getAuthor(message, ''),
  }
}
