import React from 'react'
import Type from '~components/MLFeatureType'

import classNamesBind from 'classnames/bind'
import styles from './styles.styl'

const cx = classNamesBind.bind(styles)

const SampleValueBlock = () => (<div className={cx('sampleValue')}>

</div>)

export default () => {
  return (
    <div className={cx('sampleValuePair')}>
      <SampleValueBlock />
      <SampleValueBlock />

      <svg className={cx('sampleArrow')} width="177px" height="91px" viewBox="0 0 177 91" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <defs>
              <filter x="-23.3%" y="-58.7%" width="146.9%" height="221.7%" filterUnits="objectBoundingBox" id="filter-1">
                  <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                  <feGaussianBlur stdDeviation="1.75" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                  <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.4 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
                  <feMerge>
                      <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                      <feMergeNode in="SourceGraphic"></feMergeNode>
                  </feMerge>
              </filter>
          </defs>
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="model-page" transform="translate(-584.000000, -358.000000)" fill="#FFFFFF">
                  <g id="sample-two" transform="translate(493.055556, 329.861111)">
                      <g id="arrow" filter="url(#filter-1)" transform="translate(112.500000, 46.527778)">
                          <path d="M121.408697,10.1705317 L145.316672,40.0139532 L145.316672,40.0139532 C146.036052,40.9119275 145.891272,42.2230518 144.993298,42.9424314 C144.623718,43.238507 144.164297,43.3998384 143.690746,43.3998384 L95.8747959,43.3998384 L95.8747959,43.3998384 C94.7242026,43.3998384 93.7914625,42.4670983 93.7914625,41.3165051 C93.7914625,40.8429544 93.9527939,40.3835332 94.2488696,40.0139532 L118.156845,10.1705317 L118.156845,10.1705317 C118.876224,9.27255741 120.187349,9.12777776 121.085323,9.84715731 C121.204654,9.94275547 121.313099,10.0512001 121.408697,10.1705317 Z" id="Triangle" transform="translate(119.782809, 26.394756) rotate(91.000000) translate(-119.782809, -26.394756) "></path>
                          <rect id="Rectangle-2" x="0" y="12.5" width="120.833333" height="27.0833333"></rect>
                      </g>
                  </g>
              </g>
          </g>
      </svg>
    </div>
  )
}