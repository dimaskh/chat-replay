// Effects
import { fork } from 'redux-saga/effects'

// Sagas
import watchClearData from './clearData'
import watchReplayRecord from './replayRecord'

// Main player sagas entry point
export default function* main(): IterableIterator<any> {
  // Initialize watcher sagas
  yield fork(watchReplayRecord)
  yield fork(watchClearData)
}
