import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import homeRoute from './routes/index'
import modelRoute from './routes/model'
import css from './pages/page.styl'

class App extends Component {
  render() {
    return (
      <div className={css.container}>
        <Router>
          <div>
            <Route
              path="/"
              component={homeRoute}
            />
            <Route
              path={`/:modelPath`}
              component={modelRoute}
            />
          </div>
        </Router>
      </div>
    )
  }
}

export default App