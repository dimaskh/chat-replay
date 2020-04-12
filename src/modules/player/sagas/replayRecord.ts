// Effects
import { call, put, takeLatest } from 'redux-saga/effects'

// Sagas
import initializeUsers from 'modules/users/sagas/initializeUsers'
import fetchRecord from './fetchRecord'
import scheduleEvents from './scheduleEvents'

// Actions
import { receiveRecord } from '../actions'

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

  yield put(receiveRecord(data))
  yield call(initializeUsers, data)
  yield call(scheduleEvents, data)
}
