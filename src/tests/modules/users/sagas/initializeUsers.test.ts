// Effects
import { put } from 'redux-saga/effects'

// Actions
import { receiveUsers } from 'modules/users/actions'

// Tested saga
import initializeUsers from 'modules/users/sagas/initializeUsers'

// Mocks
import { events } from 'tests/mocks/events'
import { user } from 'tests/mocks/users'

describe('users/sagas/initializeUsers', () => {
  const saga = initializeUsers(events)
  const expectedInitialUsers = [user]

  it('should calculate initial users and put receiveUsers', () => {
    expect(saga.next().value).toEqual(put(receiveUsers(expectedInitialUsers)))
  })

  it('should exit saga', () => {
    const next = saga.next()

    expect(next.value).toBeUndefined()
    expect(next.done).toBe(true)
  })
})
