// Mocks
import { events } from './events'
import { user } from './users'

export default {
  chat: {
    data: [],
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
