// Actions
import * as actions from 'modules/users/actions'

// Constants
import { CLEAR_USERS, RECEIVE_USERS, REMOVE_USER, UPDATE_USER } from 'modules/users/constants'

// Mocks
import { user } from 'tests/mocks/users'

describe('modules/users/actions', () => {
  it('should handle receiveUsers action', () => {
    const expected = { type: RECEIVE_USERS, payload: [user] }
    expect(actions.receiveUsers([user])).toEqual(expected)
  })

  it('should handle receiveUsers action without argument', () => {
    const expected = { type: RECEIVE_USERS, payload: [] }
    expect(actions.receiveUsers()).toEqual(expected)
  })

  it('should handle removeUser action', () => {
    const expected = { type: REMOVE_USER, payload: 1 }
    expect(actions.removeUser(1)).toEqual(expected)
  })

  it('should handle.updateUser action', () => {
    const expected = { type: UPDATE_USER, payload: user }
    expect(actions.updateUser(user)).toEqual(expected)
  })

  it('should handle clearUsers action', () => {
    const expected = { type: CLEAR_USERS }
    expect(actions.clearUsers()).toEqual(expected)
  })
})
