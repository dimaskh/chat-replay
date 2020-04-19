// Utils
import { createSelector } from 'reselect'
import formatMessage from './utils/formatMessage'

// Types
import { Message } from 'models/messages/types'
import { Selector, OutputSelector } from 'reselect'
import { StoreState } from 'store/reducer'

export const messages$: Selector<StoreState, Message[]> = (state: StoreState) => state.chat.data

export const formattedMessages$: OutputSelector<StoreState, Object[], Function> = createSelector(
  messages$,
  (messages: Message[] = []): Object[] => {
    const result = messages.map(formatMessage)

    return result
  }
)
