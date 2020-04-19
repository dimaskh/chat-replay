// Libs
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

// Tested components
import Header, { StyledHeader } from 'components/Header'

// Types
import { Props } from 'components/Header'
import { ShallowWrapper } from 'enzyme'

describe('components/Header', () => {
  let component: ShallowWrapper<Props>

  beforeEach(() => {
    component = shallow(<StyledHeader>Title</StyledHeader>)
  })

  it('should render Header correctly', () => {
    const HeaderComponent = shallow(<Header>Title</Header>)
    expect(shallowToJson(HeaderComponent)).toMatchSnapshot()
  })

  it('should render StyledHeader correctly', () => {
    expect(shallowToJson(component)).toMatchSnapshot()
  })

  it('should render StyledHeader correctly with medium prop', () => {
    component.setProps({ medium: true })
    expect(shallowToJson(component)).toMatchSnapshot()
  })

  it('should render StyledHeader correctly with small prop', () => {
    component.setProps({ medium: false, small: true })
    expect(shallowToJson(component)).toMatchSnapshot()
  })
})
