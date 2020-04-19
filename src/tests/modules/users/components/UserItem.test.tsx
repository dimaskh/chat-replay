// Libs
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

// Tested component
import UserItem from 'modules/users/components/UserItem'

// Mocks
import { user } from 'tests/mocks/users'

// Types
import { Props } from 'modules/users/components/UserItem'
import { ShallowWrapper } from 'enzyme'

describe('users/UserItem component', () => {
  let component: ShallowWrapper<Props, {}, UserItem>
  let props: Props

  beforeEach(() => {
    props = {
      user,
      date: '2020-04-19T00:00:01.30Z',
    }
    component = shallow<UserItem>(<UserItem {...props} />)
  })

  it('should render correctly', () => {
    expect(shallowToJson(component)).toMatchSnapshot()
  })

  it('should return correct avatar url', () => {
    const instance = component.instance() as any
    expect(instance.getAvatar()).toMatch(/https:\/\/www.gravatar.com\/avatar\//)
  })
})
