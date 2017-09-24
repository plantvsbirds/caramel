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
      label, main, href, simple, round, onClick, target
    } = this.props
    return (
      <a className={cx({ main, round, simple })} href={href} onClick={onClick} target={target || "_blank"}>
        { label }
      </a>
    )
  }
}

export default Button