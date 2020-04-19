// Utils
import formatMessage from 'modules/chat/utils/formatMessage'

// Mocks
import { message } from 'tests/mocks/messages'

describe('chat/utils/formatMessage', () => {
  it('should format message correcty', () => {
    const expectedMessage = {
      ...message,
      type: 'text',
      position: 'left',
      title: '',
    }

    expect(formatMessage(message)).toEqual(expectedMessage)
  })
})
