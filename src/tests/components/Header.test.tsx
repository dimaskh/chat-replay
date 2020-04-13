// Libs
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

// Tested components
import Header from 'components/Header'

describe('components/Header', () => {
  let component: any
  beforeEach(() => {
    component = shallow(<Header>Text</Header>)
  })

  it('should render correctly', () => {
    expect(shallowToJson(component)).toMatchSnapshot()
  })

  it('should render correctly with medium prop', () => {
    component.setProps({ medium: true })

    expect(shallowToJson(component)).toMatchSnapshot()
  })

  it('should render correctly with small prop', () => {
    component.setProps({ small: true })

    expect(shallowToJson(component)).toMatchSnapshot()
  })
})
