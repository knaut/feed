import React, { Component } from 'react'
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import generateStore from '../../src/utils/generateStore'

const rootReducer = combineReducers({

})

const store = createStore( rootReducer, )

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
