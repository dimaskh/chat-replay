// Libs
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

// Tested component
import UsersList from 'modules/users/components/UsersList'

// Mocks
import { user } from 'tests/mocks/users'

describe('users/UsersList component', () => {
  it('should render correctly', () => {
    const component = shallow(<UsersList users={[user]} />)

    expect(shallowToJson(component)).toMatchSnapshot()
  })
})
