// Libs
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

// Tested components
import Loader, { spin } from 'components/Loader'

describe('components/Loader', () => {
  it('should render correctly', () => {
    const component = shallow(<Loader />)

    expect(shallowToJson(component)).toMatchSnapshot()
  })

  it('should define spin', () => {
    expect(spin).toBeDefined()
  })
})
