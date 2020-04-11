// Composer
import composeGetter from 'utils/composeGetter'

// Constants
import * as props from './constants'

export const getId = composeGetter(props.PROP_ID)
export const getText = composeGetter(props.PROP_TEXT)
