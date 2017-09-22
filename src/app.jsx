import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import { Helmet } from 'react-helmet'

import ModelList from './pages/list'
import ModelDetail from './pages/model'

import css from './pages/page.styl'

import { localData } from './config'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isModelPageExpanded: false,
      offsetY: 0,
      currentModel: null
    }
  }
  lookupModelByPath({ pathname }) {
    // todo©
    return '/'
  }
  toggleBodyScrollable() {
    const $body = document.body
    $body.style.overflow = 
      !$body.style.overflow ? 'hidden' : ''
  }
  toggleExpand = (newOffset) => {
    this.toggleBodyScrollable()
    if (this.state.isModelPageExpanded) {
      this.setState({
        offsetY: 0,
        isModelPageExpanded: false,
      })
    } else {
      this.setState({
        offsetY: newOffset,
        isModelPageExpanded: true,
      })
    }
  }
  onModelClick = (history) => (vm, model) => (event) => {
    const itemRect = vm.modelItemNode.getBoundingClientRect()
    const sampleRect = vm.sampleNode.getBoundingClientRect()
    this.toggleExpand(itemRect.top - 5)
    history.push('/xxx', { model })
  }
  render() {
    return (
      <div className={css.container}>
        <Router>
          <div>
          <Route path="/" render={({ history }) => (
            <div>
              <Helmet>
                <title>{`CoreML.Store`}</title>
                <meta name="og:site_name" content="CoreML.Store" />
                <meta name="og:title" content="CoreML.Store" />
                <meta name="description" content="Your iOS 11 apps could use these superpower." />
                <meta name="og:description" content="Your iOS 11 apps could use these superpower." />
                <meta name="og:type" content="website" />
                <meta name="og:url" content="https://coreml.store" />
              </Helmet>
              <div className={css.head}>
                <h1>CoreML.Store</h1>
                <p>Your iOS 11 apps could use some superpower.</p>
                <p>Download and use per license, remember to acknowledge. You are welcome.</p>
              </div>
              <h1>Top Models</h1>
              <ModelList
                models={localData.models}
                isExpanded={this.state.isExpanded}
                onModelClick={this.onModelClick(history)}
              />
              <h1>Style Transfer</h1>
              <h1>Object Recognition</h1>
            </div>
            )}
          />
          <Route
            path={`/:modelPath`}
            render={({ location, history }) => (
            <div
              className={css.modelContainer}
            >
              <div
                className={css.modelTopbar}
                onClick={() => {
                  this.toggleExpand()
                  history.push('/')
                }}
              >
                <p>Return to list</p>
              </div>
              {!location.state ? (
                <Redirect
                  to={this.lookupModelByPath(location)}
                />
              ) : (
                <ModelDetail
                  model={location.state.model}
                />
              )}
            </div>
            )}
          />
          </div>
        </Router>
      </div>
    )
  }
}

export default App