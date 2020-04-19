// Selectors
import { users$ } from 'modules/users/selectors'

// Mocks
import state from 'tests/mocks/state'
import { user } from 'tests/mocks/users'

describe('modules/users/selectors', () => {
  it('should select users', () => {
    expect(users$(state)).toEqual([user])
  })
})
