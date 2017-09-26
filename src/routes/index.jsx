import React, { Component } from 'react'
import ModelList from '../pages/list'
import css from '../pages/page.styl'

import { localData } from '../config'
import { CaramelLogo } from '../const'
import { bindScrollFunc, unbindScrollFunc, processScrollCb } from '../utils'

import TopBar from '~components/topbar'

export default class HomeRoute extends Component {
  constructor() {
    super()
    this.state = {
      offsetY: 0,
      showTopBar: false
    }
    this.onScroll = processScrollCb(this.onScroll, this)
  }
  componentWillMount() {
    bindScrollFunc(this.onScroll)
  }
  componentWillUnmount() {
    unbindScrollFunc(this.onScroll)
  }
  onScroll() {
    this.setState({
      showTopBar: document.body.scrollTop > 300
    })
  }
  setModelListOffset = (newOffset) => {
    this.setState({
      offsetY: newOffset || 0,
    })
  }
  get isCurrentPage() {
    return this.props.location && this.props.location.pathname === '/'
  }
  /*
  componentWillReceiveProps({ location }) {
    if (this.isCurrentPage)
      this.setModelListOffset()
  }
  */
  onModelClick = (history) => (vm, model) => (event) => {
    const itemRect = vm.modelItemNode.getBoundingClientRect()
    const sampleRect = vm.sampleNode.getBoundingClientRect()
    this.setModelListOffset(itemRect.top - 5)
    history.push(model.pathname, { model })
  }
  render () {
    const { history } = this.props
    return (
      <div style={{
        transform: this.isCurrentPage ? null : `translate3d(0px, -${this.state.offsetY}px, 0px)`,
        transition: 'transform 0.4s',
      }}>
        {/*
        <TopBar
          show={this.state.showTopBar && this.isCurrentPage}
        />
        */}
        <div className={css.head}>
          <CaramelLogo className={css.logo} />
          <div>
            <p className={css.intro}>
              Your iOS 11 apps could use some superpower.<br />
              Download and use per license, remember to acknowledge. You are welcome.<br />
            </p>
            <br/>
            <p className={css.secondary}>
              Please contribute to our curated list of free coreml models by 
              <a
                onClick={() => {
                  ga('send', 'event', 'Index', 'click_contribute');
                }}
                href="https://github.com/likedan/Awesome-CoreML-Models/pulls"
                target="_blank"
              > submitting a PR</a>.
            </p>
            <p className={css.secondary}>
              How can we serve you better with cool ML models? Please answer this 
              <a
                onClick={() => {
                  ga('send', 'event', 'Index', 'click_feedback');
                }}
                href="https://coreml.typeform.com/to/grz0b2"
                target="_blank"
              > form</a>.
            </p>
            <p className={css.secondary}>
              To receive weekly updates for new ML models, please
              <a
                onClick={() => {
                  ga('send', 'event', 'Index', 'click_subscribe');
                }}
                href="http://eepurl.com/c4II-r"
                target="_blank"
              > subscribe</a>.
            </p>
          </div>
        </div>
        <ModelList
          models={localData.models}
          onModelClick={this.onModelClick(history)}
        />

        {/*
        <h1>Top Models</h1>
        <h1>Style Transfer</h1>
        <h1>Object Recognition</h1>
        */}
      </div>
    )
  }
}