// Getters
import { getPayload } from 'models/events/getters'

// Types
import { Event } from 'models/events/types'

export default function* receiveUserData(event: Event) {
  console.log('receiveUserData: ', event)
  // TODO: Receive user data logic
  const payload = getPayload(event, {})
  console.log('PAYLOAD: ', payload)
}
