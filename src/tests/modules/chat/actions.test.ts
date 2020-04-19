// Actions
import * as actions from 'modules/chat/actions'

// Constants
import { CLEAR_MESSAGES, RECEIVE_MESSAGE, REMOVE_MESSAGE, UPDATE_MESSAGE } from 'modules/chat/constants'

// Mocks
import { message } from 'tests/mocks/messages'

describe('modules/chat/actions', () => {
  it('should handle receiveMessage action', () => {
    const expected = { type: RECEIVE_MESSAGE, payload: message }
    expect(actions.receiveMessage(message)).toEqual(expected)
  })

  it('should handle removeMessage action', () => {
    const expected = { type: REMOVE_MESSAGE, payload: 1 }
    expect(actions.removeMessage(1)).toEqual(expected)
  })

  it('should handle.updateUser action', () => {
    const expected = { type: UPDATE_MESSAGE, payload: message }
    expect(actions.updateMessage(message)).toEqual(expected)
  })

  it('should handle clearUsers action', () => {
    const expected = { type: CLEAR_MESSAGES }
    expect(actions.clearMessages()).toEqual(expected)
  })
})
