import React, { Component } from 'react'
import classNameBind from 'classnames/bind'
import styles from './MLFeatureType.styl'

const cx = classNameBind.bind(styles)
import { types } from '../const'

class MLFeature extends Component {
  constructor() {
    super()
  }
  render() {
    const { className } = this.props
    return (
      <div className={cx('type', className, types.find(k => this.props[k]))}>

      </div>
    )
  }
}

export default MLFeature