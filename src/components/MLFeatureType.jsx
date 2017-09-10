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
    const { className, size, type } = this.props
    const inProps = (k) => {
      return this.props.type && this.props.type.toLowerCase().indexOf(k) == 0
    }
    return (
      <div className={cx(
        'type',
        size,
        className,
        types.find(k => this.props[k] || inProps(k)))}>
      </div>
    )
  }
}

MLFeature.defaultProps = {
  size: 'small'
}

export default MLFeature