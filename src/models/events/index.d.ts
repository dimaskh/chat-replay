// Props
export declare const PROP_DELTA: 'delta'
export declare const PROP_PAYLOAD: 'payload'

// Payload types
export declare const PAYLOAD_TYPE_CONNECT: 'connect'
export declare const PAYLOAD_TYPE_DISCONNECT: 'disconnect'
export declare const PAYLOAD_TYPE_MESSAGE: 'message'
export declare const PAYLOAD_TYPE_UPDATE: 'update'
export declare const PAYLOAD_TYPE_DELETE: 'delete'

// Model
export declare const MODEL: 'Event'

// Entity
export type Event = {
  [PROP_DELTA]: number
  [PROP_PAYLOAD]: Record
}

// Getters
export declare const getDelta: GetProperty<typeof PROP_DELTA>
export declare const getPayload: GetProperty<typeof PROP_PAYLOAD>
