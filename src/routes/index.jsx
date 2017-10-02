import React, { Component } from 'react'
import ModelList from '../pages/list'
import css from '../pages/page.styl'

import { localData } from '../config'
import { CaramelLogo } from '../const'
import { bindScrollFunc, unbindScrollFunc, processScrollCb } from '../utils'

import TopBar from '~components/topbar'
import SiteInfo from '~components/siteinfo'

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
    ga('send', 'event', 'List', 'go_to_model', model.name);
    ga('set', 'page', model.pathname);
    history.push(model.pathname, { model })
  }
  render () {
    const { history } = this.props
    return (
      <div style={{
        transform: `translate3d(0px, ${this.isCurrentPage ? 0 : -this.state.offsetY}px, 0px)`,
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
              Please contribute to our curated list of free Core ML models 
              <a
                onClick={() => {
                  ga('send', 'event', 'Index', 'click_contribute');
                }}
                href="https://github.com/likedan/Awesome-CoreML-Models/issues/new"
                target="_blank"
              > here</a>.
            </p>
            <SiteInfo />
          </div>
        </div>
        <ModelList
          models={localData.models.sort((a, b) => a.pathname > b.pathname)}
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