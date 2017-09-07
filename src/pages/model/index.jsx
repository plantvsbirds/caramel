import React, { Component } from 'react'
import classNamesBind from 'classnames/bind'
import styles from './styles.styl'

const cx = classNamesBind.bind(styles)

import Button from '~components/button'
import { SampleValuePair } from '~components/sample'
import IOTable from './iotable'

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

    const InfoTag = ({
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
            <InfoTag title="Author" content={author} />
            <InfoTag title="Type" content={'Classifier'} />
            <InfoTag title="Model Size" content={size} />
            <InfoTag title="Last Update" content={'4 days ago (change me)'} />
            <InfoTag title="License" content={license} />
            {/*
              renderInfoTag({
                title: 'Reference',
                content: reference,
              })
            */}
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
          <SampleValuePair />
      </div>
      <div className={cx('ioLayout')}>
        <IOTable
          title="Input"
          data={input}
        />
        <IOTable
          title="Output"
          data={output}
        />
      </div>
      <h1>Apps using {name}</h1>
      <p>no info</p>
    </div>
  }
}

export default ModalDetail