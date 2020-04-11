// Composer
import composeGetter from 'utils/composeGetter'

// Constants
import * as props from './constants'

export const getId = composeGetter(props.PROP_ID)
export const getUserName = composeGetter(props.PROP_USER_NAME)
export const getDisplayName = composeGetter(props.PROP_DISPLAY_NAME)
