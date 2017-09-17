import React from 'react'

import classNamesBind from 'classnames/bind'
import styles from './sample.styl'

import { mapObject, getTypeShorthand } from '../utils'
import { SampleArrow, KeySampleArrow } from '../const'
import { getSampleImagePublicUrl } from '../config'

const cx = classNamesBind.bind(styles)

export const SampleValue = ({ sampleValue, type, full, mini, medium, className }) => {
  if (!sampleValue || !sampleValue.type || !sampleValue.content)
    return null
  const shouldDisplayLoading = !(sampleValue && sampleValue.type === 'text')
  const shouldDisplayImage = sampleValue && sampleValue.type === 'image'
  const imageUrl = shouldDisplayImage && getSampleImagePublicUrl(sampleValue.content)
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

const getTypeNameFromSpecArray = (arr, name) => {
  const field = arr.find(item => item.name === name)
  return field ? field.type : undefined
}

export const KeySamplePair = ({ sample, spec, input, output, _ref }) => {
  return (
  <div
    className={styles.keySamplePair}
    ref={_ref}
  >
    <SampleValue
      sampleValue={sample.input[input]}
      type={getTypeNameFromSpecArray(spec.input, input)}
      className={styles.input}
      mini
    />
    <KeySampleArrow
      className={styles.arrow}
    />
    <SampleValue
      sampleValue={sample.output[output]}
      type={getTypeNameFromSpecArray(spec.output, output)}
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
              type={getTypeNameFromSpecArray(spec.input, name)}
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
              type={getTypeNameFromSpecArray(spec.output, name)}
              full={true}
            />)
        }
      </div>
    </div>
  )
}