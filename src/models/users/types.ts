// Constants
import { PROP_DISPLAY_NAME, PROP_ID, PROP_USERNAME, PROP_USER_NAME } from './constants'

// Entity
export type User = {
  [PROP_ID]: number
  [PROP_USER_NAME]?: string
  [PROP_USERNAME]?: string
  [PROP_DISPLAY_NAME]: string
}
