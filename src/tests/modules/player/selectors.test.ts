// Selectors
import { events$, isFinished$, isPlaying$ } from 'modules/player/selectors'

// Mocks
import state from 'tests/mocks/state'
import { events } from 'tests/mocks/events'

describe('modules/player/selectors', () => {
  it('should select events', () => {
    expect(events$(state)).toEqual(events)
  })

  it('should select isFinished', () => {
    expect(isFinished$(state)).toBe(false)
  })

  it('should select isPlaying', () => {
    expect(isPlaying$(state)).toBe(false)
  })
})
