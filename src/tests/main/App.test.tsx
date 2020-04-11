// Libs
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

// Tested component
import App from 'main/App'

describe('main/App component', () => {
  it('should render correctly', () => {
    const component = shallow(<App />)

    expect(shallowToJson(component)).toMatchSnapshot()
  })
})
