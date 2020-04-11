// Props
export declare const PROP_ID: 'id'
export declare const PROP_TEXT: 'text'

// Model
export declare const MODEL: 'Message'

// Entity
export type Message = {
  [PROP_ID]: number
  [PROP_TEXT]: string
}

// Getters
export declare const getId: GetProperty<typeof PROP_ID>
export declare const getText: GetProperty<typeof PROP_TEXT>
