// Effects
import { call, delay, put } from 'redux-saga/effects'

// Sagas
import processEvent from './processEvent'

// Actions
import { finishRecord } from '../actions'

// Getters
import { getDelta } from 'models/events/getters'

// Types
import { Event } from 'models/events/types'

export default function* scheduleEvents(events: Event[]) {
  let counter = 0

  while (counter < events.length) {
    const currentEvent = events[counter]
    const prevEventIndex = counter - 1
    const prevEvent = prevEventIndex >= 0 ? events[prevEventIndex] : {}
    const calculatedDelta = getDelta(currentEvent, 0) - getDelta(prevEvent, 0)

    yield delay(calculatedDelta)
    yield call(processEvent, currentEvent)

    counter++
  }

  yield put(finishRecord())
}
