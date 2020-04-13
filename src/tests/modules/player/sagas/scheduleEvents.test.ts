// Effects
import { call, delay, put } from 'redux-saga/effects'

// Sagas
import processEvent from 'modules/player/sagas/processEvent'
import scheduleEvents from 'modules/player/sagas/scheduleEvents'

// Actions
import { finishRecord } from 'modules/player/actions'

// Mocks
import { events } from 'tests/mocks/events'

describe('player/sagas/scheduleEvents', () => {
  const saga = scheduleEvents(events)

  it('should delay delta', () => {
    expect(saga.next().value).toEqual(delay(1000))
  })

  it('should process first event', () => {
    expect(saga.next().value).toEqual(call(processEvent, events[0]))
  })

  it('should delay delta', () => {
    expect(saga.next().value).toEqual(delay(1000))
  })

  it('should process second event', () => {
    expect(saga.next().value).toEqual(call(processEvent, events[1]))
  })

  it('should delay delta', () => {
    expect(saga.next().value).toEqual(delay(1000))
  })

  it('should process third event', () => {
    expect(saga.next().value).toEqual(call(processEvent, events[2]))
  })

  it('should delay delta', () => {
    expect(saga.next().value).toEqual(delay(1000))
  })

  it('should process fourth event', () => {
    expect(saga.next().value).toEqual(call(processEvent, events[3]))
  })

  it('should delay delta', () => {
    expect(saga.next().value).toEqual(delay(1000))
  })

  it('should process last event', () => {
    expect(saga.next().value).toEqual(call(processEvent, events[4]))
  })

  it('should put finishRecord', () => {
    expect(saga.next().value).toEqual(put(finishRecord()))
  })
})
