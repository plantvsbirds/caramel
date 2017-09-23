import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import ModelDetail from '../pages/model'
import css from '../pages/page.styl'

import classNamesBind from 'classnames/bind'
const cx = classNamesBind.bind(css)

import { navigationWithPath } from '../config'

export default class ModelRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstLanding: false
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
          {
            this.state.firstLanding ? 
              <p className={cx('flipEntry', 'checkoutIconBefore')}>Check out more models</p>
            : <p className={css.returnIconBefore}>Return to list</p>
          }
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