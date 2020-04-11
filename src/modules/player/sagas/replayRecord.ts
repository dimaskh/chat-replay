// Effects
import { call, takeLatest } from 'redux-saga/effects'

// Sagas
import fetchRecord from './fetchRecord'

// Actions

// Constants
import { REPLAY_RECORD } from '../constants'

// Types
import { AnyAction } from 'redux'

export default function* watchReplayRecord() {
  yield takeLatest(REPLAY_RECORD, handleReplayRecord)
}

export function* handleReplayRecord(action: AnyAction) {
  const { payload: url } = action

  const data = yield call(fetchRecord, url)
  console.log('DATA: ', data)
}
