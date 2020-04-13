// Effects
import { call, delay } from 'redux-saga/effects'

// Tested sagas
import fetchRecord, { customFetch } from 'modules/player/sagas/fetchRecord'

// Data
import mockRecord from 'data/sample.json'

describe('player/sagas/fetchRecord', () => {
  describe('fetchRecord saga', () => {
    it('should call standard fetch if url was provided', () => {
      const saga = fetchRecord('url')
      const expectedOptions = {
        url: 'url',
        method: 'GET',
        mode: 'cors',
      }

      expect(saga.next().value).toEqual(call(fetch, expectedOptions as any))
      expect(saga.next('result').value).toBe('result')
    })

    it('should call custom fetch if url was not provided', () => {
      const saga = fetchRecord()

      expect(saga.next().value).toEqual(call(customFetch))
      expect(saga.next('result').value).toBe('result')
    })
  })

  describe('customFetch saga', () => {
    const saga = customFetch()

    it('should emulate async request', () => {
      expect(saga.next().value).toEqual(delay(0, mockRecord))
    })

    it('should return result and exit saga', () => {
      const next = saga.next('result')

      expect(next.value).toBe('result')
      expect(next.done).toBe(true)
    })
  })
})
