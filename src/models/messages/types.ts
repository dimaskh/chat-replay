// Constants
import { PROP_AUTHOR, PROP_ID, PROP_TEXT } from './constants'

// Entity
export type Message = {
  [PROP_ID]: number
  [PROP_TEXT]: string
  [PROP_AUTHOR]?: string
}
