// Reducer
import reducer, { initialState } from 'modules/chat/reducer'

// Actions
import { clearMessages, receiveMessage, removeMessage, updateMessage } from 'modules/chat/actions'

// Mocks
import { message, messages } from 'tests/mocks/messages'

describe('modules/chat/reducer', () => {
  const state = { data: [message] }

  it('should define initialState', () => {
    expect(initialState).toEqual({ data: [] })
  })

  it('should handle receiveMessage', () => {
    const newState = reducer(initialState, receiveMessage(message))
    expect(newState.data).toEqual([message])
  })

  it('should handle updateMessage', () => {
    const updatedMessage = { id: 2, text: 'Updated text' }
    const mockState = { data: messages }
    const newState = reducer(mockState, updateMessage(updatedMessage))
    expect(newState.data).toEqual([message, updatedMessage])
  })

  it('should handle removeMessage', () => {
    const newState = reducer(state, removeMessage(1))
    expect(newState.data).toEqual([])
  })

  it('should handle clearMessages', () => {
    const newState = reducer(state, clearMessages())
    expect(newState.data).toEqual([])
  })
})
