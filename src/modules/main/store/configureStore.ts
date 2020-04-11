// Utils
import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddlware from 'redux-saga'

// Reducer
import rootReducer from './reducer'

// Saga
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddlware()
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const getAppliedMiddleware = () => {
  if (process.env.NODE_ENV === 'development') {
    return applyMiddleware(sagaMiddleware, createLogger())
  }
  return applyMiddleware(sagaMiddleware)
}

const configureStore = (preloadedState?: any) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(getAppliedMiddleware())
  )
  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore
