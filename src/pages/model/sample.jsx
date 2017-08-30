import React from 'react'
import Type from '~components/MLFeatureType'

import classNamesBind from 'classnames/bind'
import styles from './styles.styl'

const cx = classNamesBind.bind(styles)

const SampleValueBlock = () => (<div className={cx('sampleValue', 'pixelBuffer')}>

</div>)

export default () => {
  return (
    <div className={cx('sampleValuePair')}>
      <div className={cx('inputs')}>
        <SampleValueBlock />
        <SampleValueBlock />
        <SampleValueBlock />
      </div>


      <svg width="105px" height="194px" viewBox="0 0 105 194" version="1.1" xmlns="http://www.w3.org/2000/svg" className={cx('arrow')}>
        <desc>Created with Sketch.</desc>
        <defs>
            <filter x="-33.3%" y="-83.4%" width="166.6%" height="274.8%" filterUnits="objectBoundingBox" id="filter-1">
                <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.4 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
                <feMerge>
                    <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
            </filter>
        </defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="model-page" transform="translate(-177.000000, -379.000000)" fill="#FFFFFF">
                <g id="sample-one" transform="translate(34.722222, 329.741704)">
                    <g id="arrow" filter="url(#filter-1)" transform="translate(194.444444, 146.127640) rotate(90.000000) translate(-194.444444, -146.127640) translate(125.347222, 119.748303)">
                        <path d="M122.817718,11.3362316 L144.785255,38.1499314 L144.785255,38.1499314 C145.835269,39.4315849 145.647489,41.3217753 144.365835,42.3717897 C143.829616,42.8110951 143.157811,43.0511507 142.464616,43.0511507 L98.5295414,43.0511507 L98.5295414,43.0511507 C96.8726872,43.0511507 95.5295414,41.708005 95.5295414,40.0511507 C95.5295414,39.3579554 95.769597,38.6861501 96.2089024,38.1499314 L118.17644,11.3362316 L118.17644,11.3362316 C119.226454,10.0545781 121.116644,9.86679752 122.398298,10.9168119 C122.551616,11.0424203 122.692109,11.1829134 122.817718,11.3362316 Z" id="Triangle" transform="translate(120.497110, 26.379521) rotate(91.000000) translate(-120.497110, -26.379521) "></path>
                        <rect id="Rectangle-2" x="0" y="13.1896682" width="120.833333" height="27.0735294"></rect>
                    </g>
                </g>
            </g>
        </g>
      </svg>

      <div className={cx('outputs')}>
        <SampleValueBlock />
        <SampleValueBlock />
        <SampleValueBlock />
      </div>
    </div>
  )
}