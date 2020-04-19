// Utils
import formatUser from 'modules/users/utils/formatUser'

// Mocks
import { user } from 'tests/mocks/users'

describe('users/utils/formatUser', () => {
  it('should return user if it has valid name', () => {
    expect(formatUser(user)).toEqual(user)
  })

  it('should format and return user without user name', () => {
    const mockUser = { id: 2, display_name: 'Test user' }

    expect(formatUser(mockUser)).toEqual({ ...mockUser, user_name: '' })
  })

  it('should format and return user with user name', () => {
    const mockUser = { id: 2, display_name: 'Test user', username: 'Test user name' }

    expect(formatUser(mockUser)).toEqual({ id: 2, display_name: 'Test user', user_name: 'Test user name' })
  })
})
