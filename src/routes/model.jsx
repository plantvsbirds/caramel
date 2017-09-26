import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import ModelDetail from '../pages/model'
import css from '../pages/page.styl'

import classNamesBind from 'classnames/bind'
const cx = classNamesBind.bind(css)

import { navigationWithModel } from '../config'
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
    this.setState({
      firstLanding: this.props.history.action === 'POP',
    })
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
              <p className={cx('flipEntry', 'checkoutIconBefore')}>Check out 116+ Core ML models</p>
            : <p className={css.returnIconBefore}>Return to list</p>
          }
        </div>
        {!location.state ? (
          <Redirect
            to={navigationWithModel(location)}
          />
        ) : (
          <ModelDetail
            model={location.state.model}
            scrollBody={this.state.modelContainer}
            promptType={this.state.promptType}
          />
        )}
        {location.state && 
          <Helmet>
            <title>{`CoreML.Store ${location.state.model.name}`}</title>
          </Helmet>
        }
      </div>
    )
  }
}