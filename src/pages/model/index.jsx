import React, { Component } from 'react'
import classNamesBind from 'classnames/bind'
import styles from './styles.styl'

const cx = classNamesBind.bind(styles)

import Button from '~components/button'
import Sample from './sample'

class ModalDetail extends Component {
  constructor() {
    super()
  }
  render() {
    const {
      name,
      description,
      author, reference,
      size,
      license,
      input, output,
    } = this.props.model

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
            {name}
          </h1>
          <p className={cx('content')}>
            {description}
          </p>
          <div className={cx('infoContianer')}>
            {
              renderInfoTag({
                title: 'Author',
                content: author,
              })
            }
            {
              renderInfoTag({
                title: 'Type',
                content: 'Classifier',
              })
            }
            {/*
              renderInfoTag({
                title: 'Reference',
                content: reference,
              })
            */}
            {
              renderInfoTag({
                title: 'Model Size',
                content: size,
              })
            }
            {
              renderInfoTag({
                title: 'Last Update',
                content: '4 days ago (change me)',
              })
            }
            {
              renderInfoTag({
                title: 'License',
                content: license,
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