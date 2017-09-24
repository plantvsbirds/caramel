import React from 'react'

import { getModelDownloadUrl } from './config'

export const types = [
  'int64',
  'double',
  'string',
  'dictionary',
  'pixelBuffer',
  'image', //??
  'multiArray',
  'undefined'
]

export const promptTypes = ['download', 'reference', 'demo']
export const promptSearches = promptTypes.map(s => '?' + s)
export const promptRender = (flag, prop) => {
  const {
    name, size, license, file,
    reference_link,
    demo_link
  } = prop
  switch(flag) {
    case "download":
      return {
        title: `Downloading ${name}..`,
        content: `Please confirm your download with size of ${size} and acknowledge license specified (${license}).`,
        yesLabel: 'Yes',
        yesHref: getModelDownloadUrl(file),
      }
    case "reference":
      return {
        title: `Scholary Reference of ${name}`,
        content: `Redirecting you to ${reference_link}`,
        yesLabel: 'Visit',
        yesHref: reference_link
      }
    case "demo":
      return {
        title: `Demo project using ${name}`,
        content: `Redirecting you to ${demo_link}`,
        yesLabel: 'Visit',
        yesHref: demo_link
      }
    default:
      return {}
  }
}

const ArrowShadowColorMatrix =
    <feColorMatrix values="0 0 0 0 0.533333333   0 0 0 0 0.533333333   0 0 0 0 0.533333333  0 0 0 1 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>

export const SampleArrow = ({ className }) => (
  <svg width="105px" height="194px" viewBox="0 0 105 194" version="1.1" xmlns="http://www.w3.org/2000/svg" className={className}>
        <desc>Created with Sketch.</desc>
        <defs>
            <filter x="-33.3%" y="-83.4%" width="166.6%" height="274.8%" filterUnits="objectBoundingBox" id="sample-arrow">
                <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                { ArrowShadowColorMatrix }
                <feMerge>
                    <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
            </filter>
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-177.000000, -379.000000)" fill="#FFFFFF">
                <g transform="translate(34.722222, 329.741704)">
                    <g filter="url(#sample-arrow)" transform="translate(194.444444, 146.127640) rotate(90.000000) translate(-194.444444, -146.127640) translate(125.347222, 119.748303)">
                        <path d="M122.817718,11.3362316 L144.785255,38.1499314 L144.785255,38.1499314 C145.835269,39.4315849 145.647489,41.3217753 144.365835,42.3717897 C143.829616,42.8110951 143.157811,43.0511507 142.464616,43.0511507 L98.5295414,43.0511507 L98.5295414,43.0511507 C96.8726872,43.0511507 95.5295414,41.708005 95.5295414,40.0511507 C95.5295414,39.3579554 95.769597,38.6861501 96.2089024,38.1499314 L118.17644,11.3362316 L118.17644,11.3362316 C119.226454,10.0545781 121.116644,9.86679752 122.398298,10.9168119 C122.551616,11.0424203 122.692109,11.1829134 122.817718,11.3362316 Z" transform="translate(120.497110, 26.379521) rotate(91.000000) translate(-120.497110, -26.379521) "></path>
                        <rect x="0" y="13.1896682" width="120.833333" height="27.0735294"></rect>
                    </g>
                </g>
            </g>
        </g>
      </svg>
)

export const KeySampleArrow = ({ className }) => (
    <svg width="90px" height="85px" viewBox="0 0 90 85" version="1.1" xmlns="http://www.w3.org/2000/svg" className={className}>
        <desc>Created with Sketch.</desc>
        <defs>
            <filter x="-23.8%" y="-22.3%" width="146.8%" height="150.0%" filterUnits="objectBoundingBox" id="key-sample-arrow">
                <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                <feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                { ArrowShadowColorMatrix }
                <feMerge>
                    <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
            </filter>
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-843.000000, -111.000000)" fill="#FFFFFF">
                <g filter="url(#key-sample-arrow)" transform="translate(853.000000, 119.000000)">
                    <path d="M56.2493121,25.8075389 L78.2152237,52.6289637 L78.2152237,52.6289637 C79.2650107,53.9108036 79.0768946,55.8009606 77.7950547,56.8507475 C77.2588996,57.2898419 76.5872599,57.5297711 75.8942474,57.5297711 L31.9624241,57.5297711 L31.9624241,57.5297711 C30.3055698,57.5297711 28.9624241,56.1866254 28.9624241,54.5297711 C28.9624241,53.8367586 29.2023533,53.1651189 29.6414477,52.6289637 L51.6073593,25.8075389 L51.6073593,25.8075389 C52.6571463,24.5256991 54.5473032,24.337583 55.8291431,25.3873699 C55.9827589,25.5131765 56.1235055,25.6539231 56.2493121,25.8075389 Z" transform="translate(53.928367, 40.853919) rotate(91.000000) translate(-53.928367, -40.853919) "></path>
                    <path d="M0,27.0803871 L54.1607742,27.0803871 L54.1607742,54.1607742 L20,54.1607742 L20,54.1607742 C8.954305,54.1607742 1.3527075e-15,45.2064692 0,34.1607742 L0,27.0803871 Z"></path>
                    <path d="M-13.5401935,13.5401935 L40.6205806,13.5401935 L40.6205806,26.7332026 L40.6205806,26.7332026 L40.6205806,26.7332026 C40.6205806,34.4029897 34.4029897,40.6205806 26.7332026,40.6205806 L-13.5401935,40.6205806 L-13.5401935,13.5401935 Z" transform="translate(13.540194, 27.080387) rotate(-270.000000) translate(-13.540194, -27.080387) "></path>
                </g>
            </g>
        </g>
    </svg>
)