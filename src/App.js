import 'babel-polyfill'

// IMPORTS
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// ROUTER
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

// SCREENS
import Index from './screens/Index'

// COMPONENTS
import Theme from './Theme'

// UTILS
import generateStore from './utils/generateStore'

const store = generateStore()
const history = createBrowserHistory()

const DEBUG = process.env.DEBUG

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Theme>
        <Switch>
          <Route path='/' exact component={Index} />
        </Switch>
      </Theme>
    </ConnectedRouter>
  </Provider>
)



ReactDOM.render(<App />, document.getElementById('root'))
