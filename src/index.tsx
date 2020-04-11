// Libs
import React from 'react'
import ReactDOM from 'react-dom'

// Components
import ErrorBoundary from 'components/ErrorBoundary'
import App from 'modules/main/App'
import { Provider } from 'react-redux'

// Styles
import 'styles/normalize.css'

// Utils
import configureStore from 'modules/main/store/configureStore'
import * as serviceWorker from 'utils/serviceWorker'

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.register()
