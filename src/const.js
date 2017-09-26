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

export const CaramelLogo = ({ className }) => (
    <span
        style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center'
        }}
        className={className}
    >
    <svg height="100px" viewBox="0 0 658 590">
        <desc>Created with Sketch.</desc>
        <defs>
            <linearGradient x1="86.1700322%" y1="77.8701723%" x2="-1.88405705%" y2="77.8701723%" id="caramel-logo-linearGradient-1">
                <stop stopColor="#C5B400" offset="0%"></stop>
                <stop stopColor="#C5B400" stopOpacity="0.6" offset="43.0338287%"></stop>
                <stop stopColor="#C5B400" stopOpacity="0.4" offset="54.432398%"></stop>
                <stop stopColor="#C5B400" offset="100%"></stop>
            </linearGradient>
            <linearGradient x1="72.7300247%" y1="77.8701723%" x2="-1.88405705%" y2="77.8701723%" id="caramel-logo-linearGradient-2">
                <stop stopColor="#DFCE03" offset="0%"></stop>
                <stop stopColor="#DFCE03" stopOpacity="0.6" offset="28.4702156%"></stop>
                <stop stopColor="#DFCE03" stopOpacity="0.4" offset="56.6326531%"></stop>
                <stop stopColor="#DFCE03" offset="100%"></stop>
            </linearGradient>
        </defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Tablet" transform="translate(-69.000000, -59.000000)">
                <g id="Group-2" transform="translate(69.000000, 59.000000)">
                    <path d="M383.982906,71.5102642 L616.396052,242.857861 L616.396052,242.857861 C660.849305,275.631214 670.317735,338.235749 637.544382,382.689003 C631.594939,390.758731 624.46578,397.88789 616.396052,403.837333 L391.76108,569.450437 L391.76108,569.450437 C356.476532,595.464122 308.362817,595.464122 273.078269,569.450437 L40.6651229,398.10284 L40.6651229,398.10284 C-3.78813071,365.329486 -13.2565606,302.724952 19.5167928,258.271698 C25.4662351,250.20197 32.5953943,243.07281 40.6651229,237.123368 L265.300094,71.5102642 L265.300094,71.5102642 C300.584642,45.4965786 348.698358,45.4965786 383.982906,71.5102642 Z" id="三楼地板" fill="#F8E71C"></path>
                    <path d="M0.490129529,1.11324283e-11 L0.490129398,31.4039634 C-2.88185616,65.3520618 11.2133006,100.160008 40.6651229,121.873491 L273.078269,293.221088 C308.362817,319.234774 356.476532,319.234774 391.76108,293.221088 L616.396052,127.607984 C624.46578,121.658542 631.594939,114.529383 637.544382,106.459654 C652.87138,85.6703577 658.959597,60.9111595 656.551304,37.0899093 L656.551304,37.0899093 L656.551304,2.74270843 C655.067808,20.578073 648.778883,38.2366478 637.379124,53.6990988 C631.429682,61.7688274 624.300523,68.8979865 616.230794,74.8474288 L391.595823,240.460533 C356.311275,266.474218 308.19756,266.474218 272.913012,240.460533 L40.4998656,69.112936 C17.2284864,51.9560111 3.54486001,26.6237129 0.490129529,1.11286536e-11 Z" id="Combined-Shape" fill="url(#caramel-logo-linearGradient-1)" transform="translate(328.530587, 156.365676) scale(-1, -1) translate(-328.530587, -156.365676) "></path>
                    <path d="M0.490129529,277.229348 L0.490129398,308.633312 C-2.88185616,342.58141 11.2133006,377.389356 40.6651229,399.10284 L273.078269,570.450437 C308.362817,596.464122 356.476532,596.464122 391.76108,570.450437 L616.396052,404.837333 C624.46578,398.88789 631.594939,391.758731 637.544382,383.689003 C652.87138,362.899706 658.959597,338.140508 656.551304,314.319258 L656.551304,314.319258 L656.551304,279.972057 C655.067808,297.807421 648.778883,315.465996 637.379124,330.928447 C631.429682,338.998176 624.300523,346.127335 616.230794,352.076777 L391.595823,517.689881 C356.311275,543.703567 308.19756,543.703567 272.913012,517.689881 L40.4998656,346.342284 C17.2284864,329.18536 3.54486001,303.853061 0.490129529,277.229348 Z" id="Combined-Shape" fill="url(#caramel-logo-linearGradient-2)"></path>
                    <path d="M383.982906,19.5102642 L616.396052,190.857861 L616.396052,190.857861 C660.849305,223.631214 670.317735,286.235749 637.544382,330.689003 C631.594939,338.758731 624.46578,345.88789 616.396052,351.837333 L391.76108,517.450437 L391.76108,517.450437 C356.476532,543.464122 308.362817,543.464122 273.078269,517.450437 L40.6651229,346.10284 L40.6651229,346.10284 C-3.78813071,313.329486 -13.2565606,250.724952 19.5167928,206.271698 C25.4662351,198.20197 32.5953943,191.07281 40.6651229,185.123368 L265.300094,19.5102642 L265.300094,19.5102642 C300.584642,-6.50342141 348.698358,-6.50342141 383.982906,19.5102642 Z" id="玻璃罩子" fillOpacity="0.8" fill="#F3EB89"></path>
                    <path d="M180.876592,294.449525 L204.794733,275.197378 L307.534022,314.795544 L257.931058,232.426983 L281.577402,213.39361 L378.608952,291.496071 L362.437027,304.513147 L287.556938,244.240801 L335.257322,326.390587 L321.259773,337.657469 L219.471774,299.043787 L294.080067,359.534909 L277.908142,372.551985 L180.876592,294.449525 Z M302.007028,196.949433 L318.994344,183.276033 L401.348853,249.564676 L450.68002,209.857122 L465.357061,221.67094 L399.038578,275.051893 L302.007028,196.949433 Z" id="ML" fill="#FFFFFF"></path>
                </g>
            </g>
        </g>
    </svg>
        <span style={{
            marginTop: '1em',
            fontWeight: 'bold'
        }}>
        Core ML Store
        </span>
    </span>
)