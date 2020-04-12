// Utils
import { createSelector } from 'reselect'
import formatMessage from './utils/formatMessage'

// Types
import { Message } from 'models/messages/types'
import { Selector } from 'reselect'
import { StoreState } from 'store/reducer'

export const messages$: Selector<StoreState, Message[]> = (state: StoreState) => state.chat.data

export const formattedMessages$: Selector<StoreState, Object[]> = createSelector(
  messages$,
  (messages: Message[] = []): Object[] => {
    const result = messages.map(formatMessage)
    console.log('formattedMessages$ Result: ', result)
    return result
  }
)
