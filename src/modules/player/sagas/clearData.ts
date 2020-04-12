// Effects
import { all, put, takeLatest } from 'redux-saga/effects'

// Actions
import { clearMessages } from 'modules/chat/actions'
import { clearUsers } from 'modules/users/actions'

// Constants
import { CLEAR_DATA } from '../constants'

export default function* watchClearData() {
  yield takeLatest(CLEAR_DATA, handleClearData)
}

export function* handleClearData() {
  const actions = [put(clearUsers()), put(clearMessages())]

  yield all(actions)
}
