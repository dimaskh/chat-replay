// Composer
import composeGetter from 'utils/composeGetter'

// Constants
import * as props from './constants'

export const getDelta: Function = composeGetter(props.PROP_DELTA)
export const getPayload: Function = composeGetter(props.PROP_PAYLOAD)
