// Effects
import { fork } from 'redux-saga/effects'

// Sagas
import watchClearData from './clearData'
import watchReplayRecord from './replayRecord'

export default function* main(): IterableIterator<any> {
  yield fork(watchReplayRecord)
  yield fork(watchClearData)
}
