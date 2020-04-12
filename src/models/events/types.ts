import { PROP_DELTA, PROP_PAYLOAD } from './constants'

// Entity
export type Event = {
  [PROP_DELTA]: number
  [PROP_PAYLOAD]: Object
}
