// Composer
import composeGetter from 'utils/composeGetter'

// Constants
import * as props from './constants'

export const getId: Function = composeGetter(props.PROP_ID)
export const getText: Function = composeGetter(props.PROP_TEXT)
export const getAuthor: Function = composeGetter(props.PROP_AUTHOR)
