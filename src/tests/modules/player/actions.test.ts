// Actions
import * as actions from 'modules/player/actions'

// Constants
import { CLEAR_DATA, FINISH_RECORD, RECEIVE_RECORD, REPLAY_RECORD } from 'modules/player/constants'

// Mocks
import { events } from 'tests/mocks/events'

describe('modules/player/actions', () => {
  it('should handle replayRecord action', () => {
    const expected = { type: REPLAY_RECORD, payload: 'url' }
    expect(actions.replayRecord('url')).toEqual(expected)
  })

  it('should handle replayRecord action without argument', () => {
    const expected = { type: REPLAY_RECORD, payload: undefined }
    expect(actions.replayRecord()).toEqual(expected)
  })

  it('should handle receiveRecord action', () => {
    const expected = { type: RECEIVE_RECORD, payload: events }
    expect(actions.receiveRecord(events)).toEqual(expected)
  })

  it('should handle receiveRecord action without argument', () => {
    const expected = { type: RECEIVE_RECORD, payload: [] }
    expect(actions.receiveRecord()).toEqual(expected)
  })

  it('should handle finishRecord action', () => {
    const expected = { type: FINISH_RECORD }
    expect(actions.finishRecord()).toEqual(expected)
  })

  it('should handle clearData action', () => {
    const expected = { type: CLEAR_DATA }
    expect(actions.clearData()).toEqual(expected)
  })
})
