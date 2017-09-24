import React, { Component } from 'react'

import classNamesBind from 'classnames/bind'
import css from './topbar.styl'
const cx = classNamesBind.bind(css)

export default class TopBar extends Component {
  render() {
    const { show } = this.props
    return (
    <div className={cx('bar', { show })}>
      <span className={css.logo}>CoreML.Store</span>
    </div>
    )
  }
}