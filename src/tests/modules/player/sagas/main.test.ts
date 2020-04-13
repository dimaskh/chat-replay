// Effects
import { fork } from 'redux-saga/effects'

// Sagas
import watchClearData from 'modules/player/sagas/clearData'
import main from 'modules/player/sagas/main'
import watchReplayRecord from 'modules/player/sagas/replayRecord'

describe('player/sagas/main', () => {
  const saga = main()

  it('should fork watchReplayRecord', () => {
    expect(saga.next().value).toEqual(fork(watchReplayRecord))
  })

  it('should fork watchClearData', () => {
    expect(saga.next().value).toEqual(fork(watchClearData))
  })
})
