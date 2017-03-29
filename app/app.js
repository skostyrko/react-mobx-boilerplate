import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import SampleStore from './stores/SampleStore'

const appState = new SampleStore()

ReactDOM.render(
  <App appState={appState} />,
  document.getElementById('root')
)
