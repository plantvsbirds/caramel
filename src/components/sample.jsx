import React from 'react'

import classNamesBind from 'classnames/bind'
import styles from './sample.styl'

import { mapObject, getTypeShorthand } from '../utils'
import { SampleArrow, KeySampleArrow } from '../const'
import { getSampleImagePublicUrl } from '../config'

const cx = classNamesBind.bind(styles)

export const SampleValue = ({ sampleValue, type, full, mini, medium, className }) => {
  const shouldDisplayLoading = !(sampleValue && sampleValue.type === 'text')
  const shouldDisplayImage = sampleValue && sampleValue.type === 'image'
  const imageUrl = getSampleImagePublicUrl(sampleValue.content)
  return (
    <div
      className={
        cx({
          sampleValue: true,
          [getTypeShorthand(type)]: true,
          loading: shouldDisplayLoading,
          full: !!full,
          mini: !!mini,
          medium: !!medium,
          [className]: !!className,
        })
      }
      style={{ backgroundImage: `url(${imageUrl})`}}
    >
      {
        sampleValue && sampleValue.type === 'text' && <p>{sampleValue.content}</p>
      }
    </div>
  )
}

const lookupInIOSpecs = (ioArray, name) => ioArray.find(item => item.name === name)
const specFromInput = (spec, name) => lookupInIOSpecs(spec.input, name)
const specFromOutput = (spec, name) => lookupInIOSpecs(spec.output, name)

export const KeySamplePair = ({ sample, spec, input, output, _ref }) => {
  return (
  <div
    className={styles.keySamplePair}
    ref={_ref}
  >
    <SampleValue
      sampleValue={sample.input[input]}
      type={specFromInput(spec, input).type}
      className={styles.input}
      mini
    />
    <KeySampleArrow
      className={styles.arrow}
    />
    <SampleValue
      sampleValue={sample.output[output]}
      type={specFromOutput(spec, output).type}
      className={styles.output}
      medium
    />
  </div>)
}
export const SampleValuePair = ({ sample, spec }) => {
  return (
    <div className={cx('sampleValuePair')}>
      <div className={cx('inputs')}>
        {
          mapObject(sample.input, (name, sampleValue) =>
            <SampleValue
              key={`sampleValue_input_${name}`}
              name={name}
              sampleValue={sampleValue}
              type={specFromInput(spec, name).type}
              full={true}
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
              type={specFromOutput(spec, name).type}
              full={true}
            />)
        }
      </div>
    </div>
  )
}