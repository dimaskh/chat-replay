// Props
export declare const PROP_ID: 'id'
export declare const PROP_USER_NAME: 'user_name'
export declare const PROP_USERNAME: 'username'
export declare const PROP_DISPLAY_NAME: 'display_name'

// Model
export declare const MODEL: 'User'

// Entity
export type Message = {
  [PROP_ID]: number
  [PROP_USER_NAME]?: string
  [PROP_USERNAME]?: string
  [PROP_DISPLAY_NAME]: string
}

// Getters
export declare const getId: GetProperty<typeof PROP_ID>
export declare const getUserName: GetProperty<typeof PROP_USER_NAME>
export declare const getDisplayName: GetProperty<typeof PROP_DISPLAY_NAME>
