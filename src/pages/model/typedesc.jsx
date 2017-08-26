import React from 'react'
import Type from '~components/MLFeatureType'

import classNamesBind from 'classnames/bind'
import styles from './styles.styl'

const cx = classNamesBind.bind(styles)

/*
'int64',
'double',
'string',
'dictionary',
'pixelBuffer',
'multiArray',
'undefined'
*/

const renderArrow = () => <svg className={cx('arrow')} width="91px" height="39px" viewBox="0 0 91 39" version="1.1" xmlns="http://www.w3.org/2000/svg">
<defs>
    <filter x="-5.9%" y="-12.3%" width="112.1%" height="131.7%" filterUnits="objectBoundingBox" id="filter-1">
        <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
        <feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.4 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
        <feMerge>
            <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
    </filter>
</defs>
<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="model-page" transform="translate(-763.000000, -94.000000)" stroke="#FFFFFF" stroke-width="3.47222222">
        <g id="type-indicator" transform="translate(733.333333, 66.666667)">
            <g id="Group" filter="url(#filter-1)" transform="translate(33.333333, 29.861111)">
                <path d="M1.73611111,8.68055556 L1.73611111,23.9583333 L67.2261871,23.9583333 L67.1198738,30.0490147 C67.1183255,30.137718 67.1507895,30.2236496 67.2106023,30.2891714 C67.3398905,30.4307998 67.5595117,30.4408035 67.7011401,30.3115154 L82.6589433,16.6570002 C82.6637416,16.6526199 82.6684161,16.6481058 82.6729611,16.6434633 C82.8071133,16.5064333 82.8047803,16.2865967 82.6677503,16.1524446 L68.1955947,1.98422753 C68.1322002,1.92216443 68.047454,1.88672128 67.9587506,1.88517296 C67.7670143,1.88182619 67.6088682,2.0345461 67.6055214,2.22628244 L67.4928617,8.68055556 L1.73611111,8.68055556 Z" id="Combined-Shape"></path>
            </g>
        </g>
    </g>
</g>
</svg>

export default ({ data }) => (<div className={cx('typeDesc')}>
  <div className={cx('typeIconContainer')}>
    <Type pixelBuffer className={cx('input')} />
    { renderArrow() }
    <Type int64 className={cx('output')} />
  </div>
  <p>
    Car image
    <br />
    ↪joiajsoidiaj
  </p>
</div>)