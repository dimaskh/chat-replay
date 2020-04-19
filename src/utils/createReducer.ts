// Types
import { AnyAction, Reducer } from 'redux'
import { PartialState } from 'store/types'

export default function createReducer(
  initialState: PartialState = {},
  handlers: Record<string, Function> = {}
): Reducer {
  return function reducer(state: PartialState = initialState, action?: AnyAction): PartialState {
    if (!action) {
      return state
    }

    const { type } = action

    if (handlers.hasOwnProperty(type)) {
      return handlers[type](state, action)
    } else {
      return state
    }
  }
}
