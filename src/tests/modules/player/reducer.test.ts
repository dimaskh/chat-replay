// Reducer
import reducer, { initialState } from 'modules/player/reducer'

// Actions
import { clearData, finishRecord, receiveRecord, replayRecord } from 'modules/player/actions'

// Mocks
import { events } from 'tests/mocks/events'

describe('modules/player/reducer', () => {
  const state = { events, isPlaying: false, isFinished: false }

  it('should define initialState', () => {
    expect(initialState).toEqual({ events: [], isPlaying: false, isFinished: false })
  })

  it('should handle receiveRecord', () => {
    const newState = reducer(initialState, receiveRecord(events))
    expect(newState.events).toEqual(events)
  })

  it('should handle replayRecord', () => {
    const newState = reducer(initialState, replayRecord())
    expect(newState.isPlaying).toBe(true)
  })

  it('should handle finishRecord', () => {
    const newState = reducer(initialState, finishRecord())
    expect(newState.isFinished).toBe(true)
  })

  it('should handle clearData', () => {
    const newState = reducer(state, clearData())
    expect(newState).toEqual(initialState)
  })
})
