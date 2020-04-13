// Libs
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

// Tested component
import Content from 'modules/main/components/Content'

describe('main/Content component', () => {
  it('should render correctly', () => {
    const component = shallow(<Content />)

    expect(shallowToJson(component)).toMatchSnapshot()
  })
})
