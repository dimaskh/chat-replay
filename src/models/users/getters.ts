// Composer
import composeGetter from 'utils/composeGetter'

// Constants
import * as props from './constants'

export const getId: Function = composeGetter(props.PROP_ID)
export const getUserName: Function = composeGetter(props.PROP_USER_NAME)
export const getDisplayName: Function = composeGetter(props.PROP_DISPLAY_NAME)
