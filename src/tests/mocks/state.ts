// Mocks
import { events } from './events'
import { message } from './messages'
import { user } from './users'

export default {
  chat: {
    data: [message],
  },
  player: {
    events,
    isPlaying: false,
    isFinished: false,
  },
  users: {
    data: [user],
  },
}
