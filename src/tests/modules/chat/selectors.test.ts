// Selectors
import { messages$, formattedMessages$ } from 'modules/chat/selectors'

// Utils
import formatMessage from 'modules/chat/utils/formatMessage'

// Mocks
import state from 'tests/mocks/state'
import { message } from 'tests/mocks/messages'

describe('modules/chat/selectors', () => {
  it('should select messages', () => {
    expect(messages$(state)).toEqual([message])
  })

  it('should select formatted messages without arguments', () => {
    expect(formattedMessages$.resultFunc()).toEqual([])
  })

  it('should select formatted messages with correct argument', () => {
    const expectedResult = [message].map(formatMessage)
    expect(formattedMessages$.resultFunc([message])).toEqual(expectedResult)
  })
})
