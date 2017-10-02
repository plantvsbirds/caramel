import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import ModelDetail from '../pages/model'
import ModelList from '../pages/list'
import css from '../pages/page.styl'

import SiteInfo from '~components/siteinfo'

import classNamesBind from 'classnames/bind'
const cx = classNamesBind.bind(css)

import { navigationWithModel, localData } from '../config'
import { promptSearches } from '../const'

export default class ModelRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstLanding: false,
      promptType: null,
    }
  }
  toggleBodyScrollable(op) {
    const $body = document.body
    $body.style.overflow = 
      !op ? 'hidden' : ''
  }
  componentWillMount() {
    this.toggleBodyScrollable(false)
    const firstLanding = this.props.history.action === 'POP'
    this.setState({
      firstLanding,
    })
    if (firstLanding)
      ga('set', 'page', this.props.location.pathname);
  }
  componentWillUnmount() {
    this.toggleBodyScrollable(true)
  }
  componentDidMount() {
    const { location } = this.props
    const promptTypeLookup = promptSearches.find(s => s === location.search)
    this.setState({
      promptType: this.state.promptType || (promptTypeLookup ? promptTypeLookup.slice(1) : null)
    })
  }
  bindModelContainer = (modelContainer) => {
    this.setState({
      modelContainer
    })
  }
  render () {
    const { location, history } = this.props
    return (
      <div
        className={css.modelContainer}
        ref={this.bindModelContainer}
      >
        <div
          className={css.modelTopbar}
          onClick={() => {
            ga('send', 'event', 'List', 'go_to_home', this.state.firstLanding ? 'first_landing' : 'not_first_landing');
            ga('set', 'page', '/');
            history.push('/')
          }}
        >
          {
            this.state.firstLanding ? 
              <p className={cx('flipEntry', 'checkoutIconBefore')}>Check out {localData.models.length}+ Core ML models</p>
            : <p className={css.returnIconBefore}>Return to list</p>
          }
        </div>
        <div className={css.container}>
          {!location.state ? (
            <Redirect
              to={navigationWithModel(location)}
            />
          ) : (
            <div>
              <ModelDetail
                model={location.state.model}
                scrollBody={this.state.modelContainer}
                promptType={this.state.promptType}
              />
              <h1>Other Core ML models you may like (<a href="/">All</a>)</h1>
              <ModelList
                models={localData.models.sort((a, b) => Math.random() > 0.5).filter(m => m.pathname!== location.state.model.pathname).slice(0, 3)}
                onModelClick={(vm, model) => (event) => {
                  ga('send', 'event', 'List', 'go_to_model', model.name);
                  ga('set', 'page', model.pathname);
                  ga('send', 'event', 'Model', 'go_other_you_like', model.name);
                  history.push(model.pathname, { model })
                  this.state.modelContainer.scrollTop = 0
                }}
              />
              <SiteInfo />
            </div>
          )}
        </div>
        {/*
          <Helmet>
            <title>{`CoreML.Store ${location.state.model.name}`}</title>
          </Helmet>
        */}
      </div>
    )
  }
}