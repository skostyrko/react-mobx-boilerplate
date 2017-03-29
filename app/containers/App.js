// @flow
import React, { Component } from 'react'
import { observer } from 'mobx-react'

import SomeComponent from '../components/SampleComponent/SampleComponent'

@observer
class App extends Component {
  props: {
    appState: {
      timer: number,
      resetTimer: () => void
    }
  }
  render () {
    return (
      <div>
        <SomeComponent onClick={this.onReset}>
          Seconds passed: {this.props.appState.timer}
        </SomeComponent>
      </div>
    )
  }

  onReset = () => {
    this.props.appState.resetTimer()
  }
};

export default App
