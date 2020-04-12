// Reducer
import rootReducer from './reducer'

// Saga
import rootSaga from 'main/saga'

// Utils
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddlware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddlware()

const getAppliedMiddleware = () => {
  if (process.env.NODE_ENV === 'development') {
    return applyMiddleware(sagaMiddleware, createLogger())
  }
  return applyMiddleware(sagaMiddleware)
}

const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools(getAppliedMiddleware()))
  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore
