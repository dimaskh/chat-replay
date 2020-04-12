// Effects
import { fork } from 'redux-saga/effects'

// Sagas
import playerSagas from 'modules/player/sagas/main'

export default function* rootSaga() {
  yield fork(playerSagas)
}
