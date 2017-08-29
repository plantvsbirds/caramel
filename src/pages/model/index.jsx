import React, { Component } from 'react'
import classNamesBind from 'classnames/bind'
import styles from './styles.styl'

const cx = classNamesBind.bind(styles)

import Button from '~components/button'
import TypeDesc from './typedesc'
import Sample from './sample'

class ModalDetail extends Component {
  constructor() {
    super()
  }
  render() {
    const renderInfoTag = ({
      title, content
    }) =>
    <div className={cx('info')}>
      <div className={cx('infoTitle')}>
        {title}
      </div>
      <div className={cx('infoContent')}>
        {content}
      </div>
    </div>

    return <div className={cx('container')}>
      <div className={cx("meta")}>
        <div style={{ overflow: 'hidden' }}>
          <h1 className={cx('title')}>
            Car Recognition Model
          </h1>
          <p className={cx('content')}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className={cx('infoContianer')}>
            {
              renderInfoTag({
                title: 'Author',
                content: 'Your Dad',
              })
            }
            {
              renderInfoTag({
                title: 'Type',
                content: 'Classifier',
              })
            }
            {
              renderInfoTag({
                title: 'Last Update',
                content: '4 days ago',
              })
            }
            {
              renderInfoTag({
                title: 'License',
                content: 'MIT',
              })
            }
          </div>
          <a href="#info" className={cx('showAllInfo', 'alignLeftHalf')}>
            Scholary Reference and more info ...
          </a>
          <div className={cx('alignLeftHalf', 'btnContainer')}>
            <Button
              label="Get"
              main
            />
            <Button
              label="Demo"
            />
          </div>
        </div>
        <div>
          <TypeDesc />
        </div>
      </div>
      <div className={cx('sampleContainer')}>
          <Sample />
          <Sample />
          <Sample />
          <Sample />
          <Sample />
          <Sample />
      </div>
    </div>
  }
}

export default ModalDetail