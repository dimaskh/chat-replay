// Libs
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

// Tested component
import Chat from 'modules/chat/components/Chat'

describe('components/Chat', () => {
  const mockMessages = [
    { id: 1, text: 'Message 1' },
    { id: 2, text: 'Message 2' },
  ]

  it('should render correctly', () => {
    const component = shallow(<Chat messages={mockMessages} />)

    expect(shallowToJson(component)).toMatchSnapshot()
  })
})
