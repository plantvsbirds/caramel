import React, { Component } from 'react'
import classNamesBind from 'classnames/bind'
import styles from './styles.styl'
import pageStyles from '../page.styl'
const cx = classNamesBind.bind(styles)

import Button from '~components/button'
import { SampleValuePair } from '~components/sample'
import IOTable from './iotable'
import { getModelDownloadUrl } from '../../config'
import { promptRender } from '../../const'
import { bindScrollFunc, unbindScrollFunc, processScrollCb } from '../../utils'

class ModalDetail extends Component {
  constructor() {
    super()
    this.onScroll = processScrollCb(this.onScroll, this)
    this.state = {
      showPrompt: false,
      prompt: {}
    }
  }
  componentWillMount() {
    bindScrollFunc(this.onScroll)
  }
  componentWillUnmount() {
    unbindScrollFunc(this.onScroll)
  }
  onScroll(evt) {
    const scrollNode = this.props.scrollBody
    if (scrollNode.scrollTop > 100) {
      ga('send', 'event', 'Model', 'ignore_prompt_by_scroll', this.props.model.name || 'unnamed');
      this.hidePrompt()
    }
  }
  showPrompt = (prompt) => {
    this.setState({
      showPrompt: true,
      prompt,
    })
  }
  hidePrompt = () => {
    this.setState({
      showPrompt: false
    })
  }
  setPromptTrigger = (promptType) => {
    const vm = this
    if (promptType && !this.promptTimeout)
      this.promptTimeout = setTimeout(() => {
        vm.showPrompt(promptRender(promptType, vm.props.model))
      }, 1400)
    return null
  }
  render() {
    const {
      name,
      description,
      author,
      size,
      license,
      input, output,
      samples,
      file, demo_link, reference_link,
    } = this.props.model
    const downloadUrl = getModelDownloadUrl(file)

    const {
      prompt
    } = this.state

    this.setPromptTrigger(this.props.promptType)
    
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

    return <div className={pageStyles.container}>
      <div
        className={cx('prompt', { exist: this.state.showPrompt })}
        onScroll={this.onScroll}
      >
        <h1>
          {prompt.title}
        </h1>
        <p>
          {prompt.content}
        </p>
        <p className={styles.promptBtnGroup}>
          <Button
            label={prompt.yesLabel || "Yes"}
            href={prompt.yesHref}
            onClick={() => {
              ga('send', 'event', 'Model', 'prompt_yes', name);
              this.hidePrompt()
            }}
            simple
            main
          />
          <Button
            label="Nevermind"
            onClick={() => {
              ga('send', 'event', 'Model', 'prompt_ignore', name);
              this.hidePrompt()
            }}
            simple
          />
        </p>
      </div>
      <div
        className={cx("meta", { blur: this.state.showPrompt })}
      >
        <div className={styles.modelBody}>
          <h1 className={cx('title')}>
            {name}
          </h1>
          <p className={cx('content')}>
            {description}
          </p>
          <div className={cx('infoContianer')}>
            <InfoTag title="Author" content={author} />
            {/*
            <InfoTag title="Type" content={'Classifier'} />
            */}
            <InfoTag title="Model Size" content={size} />
            <InfoTag title="License" content={license} />
            <InfoTag title="Last Update" content={'Recently'} />
            {/*
              renderInfoTag({
                title: 'Reference',
                content: reference,
              })
            */}
          </div>
          {/*
            <a href="#info" className={cx('showAllInfo', 'alignLeftHalf')}>
              Scholary Reference and more info ...
            </a>
          */}
          <div className={cx('alignLeftHalf', 'btnContainer')}>
            <Button
              label="Get"
              href={downloadUrl}
              onClick={() => {
                ga('send', 'event', 'Model', 'download', name);
              }}
              main
              round
            />
            <a className={styles.linky} href={demo_link} target="_blank"
              onClick={() => {
                ga('send', 'event', 'Model', 'demo', name);
              }}
            >
              Demo
            </a>
            <a className={styles.linky} href={reference_link} target="_blank"
              onClick={() => {
                ga('send', 'event', 'Model', 'reference', name);
              }}
            >
              Reference
            </a>
          </div>
        </div>
      </div>
      <h1>Samples</h1>
      <div className={cx('sampleContainer')}>
        {
          samples.map((s, idx) =>
            <SampleValuePair
              key={`sample__${idx}`}
              sample={s}
              spec={{input, output}}
            />)
        }
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