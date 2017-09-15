import React from 'react'

import classNamesBind from 'classnames/bind'
import styles from './sample.styl'

import { mapObject, getTypeShorthand } from '../utils'
import { SampleArrow } from '../const'
import { getSampleImagePublicUrl } from '../config'

const cx = classNamesBind.bind(styles)

export const SampleValue = ({ name, sampleValue, type }) => {
  const shouldDisplayLoading = !(sampleValue && sampleValue.type === 'text')
  const shouldDisplayImage = sampleValue && sampleValue.type === 'image'
  const imageUrl = getSampleImagePublicUrl(sampleValue.content)
  return (
    <div
      className={
        cx('sampleValue', type, shouldDisplayLoading && 'loading')
      }
      style={{ backgroundImage: `url(${imageUrl})`}}
    >
      {
        sampleValue && sampleValue.type === 'text' && <p>{sampleValue.content}</p>
      }
    </div>
  )
}

export const SampleValuePair = ({ sample, spec }) => {
  const lookupInIOSpecs = (ioArray, name) => ioArray.find(item => item.name === name)
  const specFromInput = (name) => lookupInIOSpecs(spec.input, name)
  const specFromOutput = (name) => lookupInIOSpecs(spec.output, name)
  return (
    <div className={cx('sampleValuePair')}>
      <div className={cx('inputs')}>
        {
          mapObject(sample.input, (name, sampleValue) =>
            <SampleValue
              key={`sampleValue_input_${name}`}
              name={name}
              sampleValue={sampleValue}
              type={getTypeShorthand(specFromInput(name).type)}
            />)
        }
      </div>
      <SampleArrow className={cx('arrow')} />
      <div className={cx('outputs')}>
        {
          mapObject(sample.output, (name, sampleValue) =>
            <SampleValue
              key={`sampleValue_output_${name}`}
              name={name}
              sampleValue={sampleValue}
              type={getTypeShorthand(specFromOutput(name).type)}
            />)
        }
      </div>
    </div>
  )
}