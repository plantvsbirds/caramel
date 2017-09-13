import React, { Component } from 'react'
import classNameBind from 'classnames/bind'
import styles from './MLFeatureType.styl'

const cx = classNameBind.bind(styles)
import { getTypeShorthand } from '../utils'

class MLFeature extends Component {
  constructor() {
    super()
  }
  render() {
    const { className, size, type } = this.props
    return (
      <div
        className={cx(
          'type',
          size,
          className,
          getTypeShorthand(type)
        )}>
      </div>
    )
  }
}

MLFeature.defaultProps = {
  size: 'small'
}

export default MLFeature