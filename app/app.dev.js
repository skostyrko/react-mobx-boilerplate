import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import DevTools from 'mobx-react-devtools'
import App from './containers/App'
import SampleStore from './stores/SampleStore'

const appState = new SampleStore()

ReactDOM.render(
  <AppContainer>
    <div>
      <App appState={appState} />
      <DevTools />
    </div>
  </AppContainer>,
  document.getElementById('root')
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
