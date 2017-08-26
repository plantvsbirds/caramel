import React, { Component } from 'react'
import classNameBind from 'classnames/bind'
import styles from './button.styl'

const cx = classNameBind.bind(styles)

class Button extends Component {
  constructor() {
    super()
  }
  render() {
    const {
      label, main
    } = this.props
    return (
      <a className={cx('btn', { main })}>
        { label }
      </a>
    )
  }
}

export default Button