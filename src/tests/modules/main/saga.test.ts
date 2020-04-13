// Effects
import { fork } from 'redux-saga/effects'

// Sagas
import rootSaga from 'modules/main/saga'
import playerSagas from 'modules/player/sagas/main'

describe('main/saga', () => {
  const saga = rootSaga()

  it('should fork player sagas', () => {
    expect(saga.next().value).toEqual(fork(playerSagas))
  })
})
