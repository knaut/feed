import React, { Component } from 'react'
import { Provider } from 'react-dom'

import generateStore from '../../src/utils/generateStore'

const store = generateStore()

class ReduxProvider extends Component {
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default ReduxProvider
