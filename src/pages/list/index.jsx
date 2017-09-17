import React, { Component } from 'react'
import css from './index.styl'

import classNamesBind from 'classnames/bind'
const cx = classNamesBind.bind(css)

import ModelDetail from '../model'
import { KeySamplePair } from '~components/sample'

// !mock
import mockMeta from '../../../content/metadata/FNS-Mosaic.json'
import mockSample from '../../../content/samples/FNS-Mosaic.json'

class Item extends Component {
  constructor() {
    super()
    this.modelItemNode = null
    this.sampleNode = null
  }
  render() {
    const { onModelLoad } = this.props
    return (
    <div
      className={css.item}
      onClick={onModelLoad(this)}
      ref={(node) => { this.modelItemNode = node }}
    >
      <KeySamplePair
        sample={mockSample.samples[0]}
        input={mockSample.primary_input}
        output={mockSample.primary_output}
        spec={mockMeta}
        _ref={(node) => { this.sampleNode = node }}
      />
      <p className={css.title}>{mockMeta.name}</p>
      <p className={css.content}>{mockMeta.description}</p>
    </div>
    )
  }
}

const Collection = (props) => (
  <div
    className={css.col}
    style={{
      position: 'relative',
      top: `-${props.offset}px`,
      paddingBottom: props.isExpanded ? '200vh' : '0px',
    }}
  >
    <Item {...props} />
    <Item {...props} />
    <Item {...props} />
    <Item {...props} />
    <Item {...props} />
  </div>
)

class ModelList extends Component {
  constructor() {
    super()
    this.state = {
      isExpanded: false,
      offsetY: 0,
    }
  }
  toggleBodyScrollable() {
    const $body = document.body
    $body.style.overflow = 
      !$body.style.overflow ? 'hidden' : ''
  }
  toggleExpand = (newOffset) => {
    this.toggleBodyScrollable()
    if (this.state.isExpanded) {
      this.setState({
        offsetY: 0,
        isExpanded: false,
      })
    } else {
      this.setState({
        offsetY: newOffset,
        isExpanded: true,
      })
    }
  }
  onModelLoad = (vm) => (event) => {
    const itemRect = vm.modelItemNode.getBoundingClientRect()
    const sampleRect = vm.sampleNode.getBoundingClientRect()
    this.toggleExpand(itemRect.top - 5)
  }
  render() {
    return <div>
      <div className={css.head}>
        <h1>CoreML.Store</h1>
        <p>Your iOS 11 apps could use some superpower.</p>
        <p>Download and use per license, remember to acknowledge. You are welcome.</p>
      </div>
      {this.state.isExpanded && (
        <div
          className={css.modelContainer}
        >
          <div
            className={css.modelTopbar}
            onClick={this.toggleExpand}
          >
            <p>Return to list</p>
          </div>
          <ModelDetail
            meta={mockMeta}
            samples={mockSample}
          />
        </div>
      )}
      <h1>Top Models</h1>
        <Collection
          onModelLoad={this.onModelLoad}
          offset={this.state.offsetY}
          isExpanded={this.state.isExpanded}
        />
      <h1>Style Transfer</h1>
      <h1>Object Recognition</h1>
    </div>
  }
}

export default ModelList