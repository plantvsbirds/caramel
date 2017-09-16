import React, { Component } from 'react'
import css from './index.styl'

import classNamesBind from 'classnames/bind'
const cx = classNamesBind.bind(css)

import { KeySamplePair } from '~components/sample'

// !mock
import mockMeta from '../../../content/metadata/FNS-Mosaic.json'
import mockSample from '../../../content/samples/FNS-Mosaic.json'

const Item = () => <div className={css.item}>
  <KeySamplePair
    sample={mockSample.samples[0]}
    input={mockSample.primary_input}
    output={mockSample.primary_output}
    spec={mockMeta}
  />
  <p className={css.title}>{mockMeta.name}</p>
  <p className={css.content}>{mockMeta.description}</p>
</div>
const Collection = () => <div className={css.col}>
  <Item />
  <Item />
  <Item />
  <Item />
  <Item />
  <Item />
</div>

class ModelList extends Component {
  constructor() {
    super()
  }
  render() {
    return <div>
      <div className={css.head}>
        <h1>CoreML.Store</h1>
        <p>Your iOS 11 apps could use some superpower.</p>
        <p>Download and use per license, remember to acknowledge. You are welcome.</p>
      </div>
      <h1>Top Models</h1>
        <Collection />
      <h1>Style Transfer</h1>
      <h1>Object Recognition</h1>
    </div>
  }
}

export default ModelList