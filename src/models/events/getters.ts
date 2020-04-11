// Composer
import composeGetter from 'utils/composeGetter'

// Constants
import * as props from './constants'

export const getDelta = composeGetter(props.PROP_DELTA)
export const getPayload = composeGetter(props.PROP_PAYLOAD)
