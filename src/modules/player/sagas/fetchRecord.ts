// Effects
import { call, delay } from 'redux-saga/effects'

// Data
import mockRecord from 'data/sample.json'

export default function* fetchRecord(url?: string) {
  const options = {
    url,
    method: 'GET',
    mode: 'cors',
  }

  const result = url ? yield call(fetch, options as any) : yield call(customFetch)

  return result
}

export function* customFetch() {
  const result = yield delay(0, mockRecord)

  return result
}
