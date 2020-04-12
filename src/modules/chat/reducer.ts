// Constants
import { PROP_ID } from 'models/messages/constants'
import { RECEIVE_MESSAGE, REMOVE_MESSAGE, UPDATE_MESSAGE } from './constants'

// Utils
import createReducer from 'utils/createReducer'

// Types
import { Message } from 'models/messages/types'
import { AnyAction } from 'redux'

export type ChatState = {
  data: Message[]
}

export const initialState: ChatState = {
  data: [],
}

export const receiveMessage = (state: ChatState, action: AnyAction): ChatState => {
  const { payload: message } = action

  return {
    ...state,
    data: [...state.data, message],
  }
}

export const updateMessage = (state: ChatState, action: AnyAction): ChatState => {
  const { payload: updatedMessage } = action

  const newData = state.data.map((message: Message) => {
    if (message[PROP_ID] === updatedMessage[PROP_ID]) {
      return updatedMessage
    }

    return message
  })

  return {
    ...state,
    data: newData,
  }
}

export const removeMessage = (state: ChatState, action: AnyAction): ChatState => {
  const { payload: id } = action

  const newData = state.data.filter((message: Message) => message[PROP_ID] !== id)

  return {
    ...state,
    data: newData,
  }
}

export default createReducer(initialState, {
  [RECEIVE_MESSAGE]: receiveMessage,
  [REMOVE_MESSAGE]: removeMessage,
  [UPDATE_MESSAGE]: updateMessage,
})
