import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import ModelDetail from '../pages/model'
import css from '../pages/page.styl'

import { navigationWithPath } from '../config'

export default class ModelRoute extends Component {
  toggleBodyScrollable(op) {
    const $body = document.body
    $body.style.overflow = 
      !op ? 'hidden' : ''
  }
  componentWillMount() {
    this.toggleBodyScrollable(false)
  }
  componentWillUnmount() {
    this.toggleBodyScrollable(true)
  }
  render () {
    const { location, history } = this.props
    return (
      <div
        className={css.modelContainer}
        onScroll={(ev) => {
          ev.stopPropagation()
        }}
      >
        <div
          className={css.modelTopbar}
          onClick={() => {
            history.push('/')
          }}
        >
          <p>Return to list</p>
        </div>
        {!location.state ? (
          <Redirect
            to={navigationWithPath(location)}
          />
        ) : (
          <ModelDetail
            model={location.state.model}
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