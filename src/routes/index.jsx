import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import ModelList from '../pages/list'
import css from '../pages/page.styl'

import { localData } from '../config'

export default class HomeRoute extends Component {
  constructor() {
    super()
    this.state = {
      offsetY: 0,
    }
  }
  setModelListOffset = (newOffset) => {
    this.setState({
      offsetY: newOffset || 0,
    })
  }
  componentWillReceiveProps({ location }) {
    if (location.pathname == '/')
      this.setModelListOffset()
  }
  onModelClick = (history) => (vm, model) => (event) => {
    const itemRect = vm.modelItemNode.getBoundingClientRect()
    const sampleRect = vm.sampleNode.getBoundingClientRect()
    this.setModelListOffset(itemRect.top - 5)
    history.push(model.pathname, { model })
  }
  render () {
    const { history } = this.props
    return (
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
          offsetY={this.state.offsetY}
          onModelClick={this.onModelClick(history)}
        />
        <h1>Style Transfer</h1>
        <h1>Object Recognition</h1>
      </div>
    )
  }
}