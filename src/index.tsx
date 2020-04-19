// Libs
import React from 'react'
import ReactDOM from 'react-dom'

// Components
import ErrorBoundary from 'components/ErrorBoundary'
import Loader from 'components/Loader'
import App from 'modules/main/components/App'
import { Provider } from 'react-redux'

// Styles
import 'react-chat-elements/dist/main.css'
import 'styles/chat.css'
import 'styles/normalize.css'

// Utils
import configureStore from 'store/configureStore'
import * as serviceWorker from 'utils/serviceWorker'

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <React.Suspense fallback={<Loader />}>
        <Provider store={store}>
          <App />
        </Provider>
      </React.Suspense>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.register()
