// Constants
import { RECEIVE_MESSAGE, REMOVE_MESSAGE, UPDATE_MESSAGE } from './constants'

// Types
import { Message } from 'models/messages/types'

export const receiveMessage = (message: Message) => ({
  type: RECEIVE_MESSAGE,
  payload: message,
})

export const removeMessage = (id: number) => ({
  type: REMOVE_MESSAGE,
  payload: id,
})

export const updateMessage = (message: Message) => ({
  type: UPDATE_MESSAGE,
  payload: message,
})
