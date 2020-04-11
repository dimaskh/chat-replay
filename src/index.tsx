// Libs
import React from 'react'
import ReactDOM from 'react-dom'

// Components
import App from 'modules/main/App'
import { Provider } from 'react-redux'

// Styles
import 'styles/normalize.css'

// Utils
import configureStore from 'modules/main/store/configureStore'
import * as serviceWorker from 'utils/serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
