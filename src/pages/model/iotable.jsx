import React from 'react'
import classNamesBind from 'classnames/bind'
import styles from './iotable.styl'

const cx = classNamesBind.bind(styles)

import TypeIndicator from '~components/MLFeatureType'

const IOItem = ({
  name, type, description
}) => (
  <div className={cx('ioItem')}>
    <div className={cx('row')}>
      <TypeIndicator type={type} />
      <div className={cx('ioInfo')}>
        <span>
          {name}
          <br />
          <span className={cx('type')}>
          {type}
          </span>
        </span>
      </div>
    </div>
    <div className={cx('ioDesc')}>
      {description}
    </div>
  </div>
)
export default ({
  title
}) => (
  <div className={cx('ioTable')}>
    <h1 className={cx('title')}>
    { title }
    </h1>
    <IOItem
      name="prob"
      type="Dictionary (String -> Double)"
      description="Probability of each category"
    />
    <IOItem
      name="prob"
      type="Dictionary (String -> Double)"
      description="Probability of each category"
    />
  </div>
)