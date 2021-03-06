import React, { Component } from 'react'
import css from './index.styl'

import classNamesBind from 'classnames/bind'
const cx = classNamesBind.bind(css)

import { KeySamplePair } from '~components/sample'

class Item extends Component {
  constructor() {
    super()
    this.modelItemNode = null
    this.sampleNode = null
  }
  render() {
    const { onModelClick, model } = this.props
    if (!model) return null
    return (
      <div
        className={css.item}
        onClick={onModelClick(this, model)}
        ref={(node) => { this.modelItemNode = node }}
      >
        <KeySamplePair
          sample={model.samples[0]}
          input={model.primary_input}
          output={model.primary_output}
          spec={model}
          _ref={(node) => { this.sampleNode = node }}
        />
        <p className={css.title}>{model.name}</p>
        <div className={css.content}>{model.description}</div>
      </div>
    )
  }
}

const Collection = (props) => (
  <div
    className={css.col}
  >
  {
    props.models.map(m => (
      <Item
        onModelClick={props.onModelClick}
        model={m}
        key={`model_${m.file}`}
      />
    ))
  }
  </div>
)

class ModelList extends Component {
  render() {
    const { models, onModelClick } = this.props
    return <div>
      <Collection
        onModelClick={onModelClick}
        models={models}
      />
    </div>
  }
}

export default ModelList