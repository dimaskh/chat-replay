// Reducer
import reducer, { initialState } from 'modules/users/reducer'

// Actions
import { clearUsers, receiveUsers, removeUser, updateUser } from 'modules/users/actions'

// Mocks
import { user } from 'tests/mocks/users'

describe('modules/users/reducer', () => {
  const state = { data: [user] }

  it('should define initialState', () => {
    expect(initialState).toEqual({ data: [] })
  })

  it('should handle receiveUsers', () => {
    const newState = reducer(initialState, receiveUsers([user]))
    expect(newState.data).toEqual([user])
  })

  it('should handle updateUser', () => {
    const updatedUser = { id: 1, user_name: 'taco', display_name: 'Updated User' }
    const newUser = { id: 2, user_name: 'newUser', display_name: 'New User' }
    const mockState = { data: [user, newUser] }
    const newState = reducer(mockState, updateUser(updatedUser))
    expect(newState.data).toEqual([updatedUser, newUser])
  })

  it('should handle removeUser', () => {
    const newState = reducer(state, removeUser(1))
    expect(newState.data).toEqual([])
  })

  it('should handle clearUsers', () => {
    const newState = reducer(state, clearUsers())
    expect(newState.data).toEqual([])
  })
})
