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
    <svg width="200px" viewBox="0 0 658 714" version="1.1" style={{display: 'inline-block'}} height="150px">
        <defs>
            <linearGradient x1="72.7300247%" y1="77.8701723%" x2="-1.88405705%" y2="77.8701723%" id="1L-gradient">
                <stop stopColor="#555555" offset="0%"></stop>
                <stop stopColor="#AAAAAA" stopOpacity="0.6" offset="28.2645089%"></stop>
                <stop stopColor="#AAAAAA" stopOpacity="0.4" offset="57.6137465%"></stop>
                <stop stopColor="#555555" offset="100%"></stop>
            </linearGradient>
            <linearGradient x1="72.7300247%" y1="77.8701723%" x2="1.05880088%" y2="77.8701723%" id="2L-gradient">
                <stop stopColor="#1E51EE" offset="0%"></stop>
                <stop stopColor="#19E6FF" offset="29.5300542%"></stop>
                <stop stopColor="#19E6FF" offset="58.1114477%"></stop>
                <stop stopColor="#1E51EE" offset="100%"></stop>
            </linearGradient>
            <linearGradient x1="86.1700322%" y1="77.8701723%" x2="-1.88405705%" y2="77.8701723%" id="3L-gradient">
                <stop stopColor="#AAAAAA" offset="0%"></stop>
                <stop stopColor="#444444" offset="43.0338287%"></stop>
                <stop stopColor="#444444" offset="54.432398%"></stop>
                <stop stopColor="#AAAAAA" offset="100%"></stop>
            </linearGradient>
            <linearGradient x1="72.7300247%" y1="77.8701723%" x2="-1.88405705%" y2="77.8701723%" id="4L-gradient">
                <stop stopColor="#444444" offset="0%"></stop>
                <stop stopColor="#AAAAAA" stopOpacity="0.6" offset="28.4702156%"></stop>
                <stop stopColor="#AAAAAA" stopOpacity="0.4" offset="57.6137465%"></stop>
                <stop stopColor="#444444" offset="100%"></stop>
            </linearGradient>
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-55.000000, -155.000000)">
                <g id="caramel-logo!export" transform="translate(55.000000, 155.000000)">
                    <path d="M657.061175,437.558701 C659.469467,461.379952 653.381251,486.13915 638.054252,506.928446 C632.10481,514.998175 624.975651,522.127334 616.905922,528.076776 L392.270951,693.68988 C356.986403,719.703566 308.872687,719.703566 273.588139,693.68988 L41.1749932,522.342283 C10.8917283,500.015815 -3.1555765,463.84512 1.3273889,429 L1,429 L1,357 L47.0926416,357 L265.809965,195.749708 C301.094513,169.736022 349.208228,169.736022 384.492776,195.749708 L616.905922,367.097305 C619.076083,368.697265 621.162865,370.368322 623.165423,372.104892 L657.061175,372.104892 L657.061175,437.558701 L657.061175,437.558701 Z" id="caramel-logo-一楼" fill="url(#1L-gradient)"></path>
                    <path d="M657.061175,379.558701 C659.469467,403.379952 653.381251,428.13915 638.054252,448.928446 C632.10481,456.998175 624.975651,464.127334 616.905922,470.076776 L392.270951,635.68988 C356.986403,661.703566 308.872687,661.703566 273.588139,635.68988 L41.1749932,464.342283 C11.7231709,442.6288 -2.37198584,407.820854 0.999999722,373.872756 L1,307 L36.5344782,307 C38.0438873,305.743374 39.5913281,304.530376 41.1749932,303.362812 L265.809965,137.749708 C301.094513,111.736022 349.208228,111.736022 384.492776,137.749708 L616.905922,309.097305 C622.241591,313.03105 627.073238,317.39457 631.388312,322.104892 L657.061175,322.104892 L657.061175,379.558701 L657.061175,379.558701 Z" id="caramel-logo-二楼" fill="url(#2L-gradient)"></path>
                    <path d="M383.982906,71.5102642 L616.396052,242.857861 C660.849305,275.631214 670.317735,338.235749 637.544382,382.689003 C631.594939,390.758731 624.46578,397.88789 616.396052,403.837333 L391.76108,569.450437 C356.476532,595.464122 308.362817,595.464122 273.078269,569.450437 L40.6651229,398.10284 C-3.78813071,365.329486 -13.2565606,302.724952 19.5167928,258.271698 C25.4662351,250.20197 32.5953943,243.07281 40.6651229,237.123368 L265.300094,71.5102642 C300.584642,45.4965786 348.698358,45.4965786 383.982906,71.5102642 Z" id="caramel-logo-三楼地板" fill="#000000"></path>
                    <path d="M656.571045,312.731352 L656.571045,281.327389 C659.943031,247.37929 645.847874,212.571344 616.396052,190.857861 L383.982906,19.5102642 C348.698358,-6.50342141 300.584642,-6.50342141 265.300094,19.5102642 L40.6651229,185.123368 C32.5953943,191.07281 25.4662351,198.20197 19.5167928,206.271698 C4.18979416,227.060995 -1.89842248,251.820193 0.509870324,275.641443 L0.509870324,309.988644 C1.99336691,292.153279 8.28229134,274.494704 19.6820501,259.032254 C25.6314925,250.962525 32.7606516,243.833366 40.8303802,237.883923 L265.465352,72.2708195 C300.7499,46.2571339 348.863615,46.2571339 384.148163,72.2708195 L616.561309,243.618416 C639.832688,260.775341 653.516315,286.107639 656.571045,312.731352 Z" id="caramel-logo-Combined-Shape" fill="url(#3L-gradient)"></path>
                    <path d="M0.490129529,277.229348 L0.490129398,308.633312 C-2.88185616,342.58141 11.2133006,377.389356 40.6651229,399.10284 L273.078269,570.450437 C308.362817,596.464122 356.476532,596.464122 391.76108,570.450437 L616.396052,404.837333 C624.46578,398.88789 631.594939,391.758731 637.544382,383.689003 C652.87138,362.899706 658.959597,338.140508 656.551304,314.319258 L656.551304,279.972057 C655.067808,297.807421 648.778883,315.465996 637.379124,330.928447 C631.429682,338.998176 624.300523,346.127335 616.230794,352.076777 L391.595823,517.689881 C356.311275,543.703567 308.19756,543.703567 272.913012,517.689881 L40.4998656,346.342284 C17.2284864,329.18536 3.54486001,303.853061 0.490129529,277.229348 Z" id="caramel-logo-Combined-Shape" fill="url(#4L-gradient)"></path>
                    <path d="M383.982906,19.5102642 L616.396052,190.857861 C660.849305,223.631214 670.317735,286.235749 637.544382,330.689003 C631.594939,338.758731 624.46578,345.88789 616.396052,351.837333 L391.76108,517.450437 C356.476532,543.464122 308.362817,543.464122 273.078269,517.450437 L40.6651229,346.10284 C-3.78813071,313.329486 -13.2565606,250.724952 19.5167928,206.271698 C25.4662351,198.20197 32.5953943,191.07281 40.6651229,185.123368 L265.300094,19.5102642 C300.584642,-6.50342141 348.698358,-6.50342141 383.982906,19.5102642 Z" id="caramel-logo-玻璃罩子" fillOpacity="0.8" fill="#333333"></path>
                    <path d="M190.802315,290.698134 C189.241858,289.96274 187.661419,289.403209 186.060951,289.019525 C184.460483,288.635841 182.840033,288.491962 181.199553,288.587883 C179.559073,288.683804 177.938623,289.035509 176.338155,289.643008 C174.737687,290.250508 173.157248,291.17773 171.596791,292.424702 C169.316124,294.247201 167.805705,296.189571 167.065488,298.251872 C166.325272,300.314173 166.205238,302.376443 166.705385,304.438743 C167.205531,306.501044 168.185803,308.515354 169.64623,310.481734 C171.106658,312.448114 172.857144,314.246605 174.897741,315.877261 C176.938338,317.507918 179.188962,318.906744 181.649682,320.073783 C184.110402,321.240821 186.631102,322.024164 189.211857,322.423835 C191.792612,322.823505 194.373329,322.727586 196.954084,322.136073 C199.534839,321.544561 201.965513,320.337573 204.246181,318.515075 C205.926672,317.172181 207.117003,315.757368 207.817208,314.270593 C208.517413,312.783818 208.817496,311.265092 208.717467,309.71437 C208.617437,308.163648 208.147307,306.636929 207.307061,305.134167 C206.466815,303.631405 205.346504,302.192612 203.946094,300.817745 L211.2682,294.966595 C213.668903,297.140804 215.4594,299.450866 216.639745,301.896851 C217.82009,304.342835 218.380246,306.820756 218.320228,309.330688 C218.260211,311.84062 217.570019,314.294561 216.249633,316.692586 C214.929246,319.09061 212.968702,321.328732 210.367941,323.40702 C207.167005,325.964912 203.706044,327.787383 199.984955,328.874487 C196.263867,329.961592 192.502823,330.39323 188.70171,330.169414 C184.900598,329.945598 181.169563,329.122289 177.508491,327.699461 C173.84742,326.276634 170.476485,324.334263 167.395583,321.872292 C164.354693,319.442294 161.944024,316.764541 160.163503,313.838951 C158.382982,310.913362 157.352696,307.931863 157.072614,304.894366 C156.792533,301.856868 157.32268,298.843397 158.663072,295.85386 C160.003464,292.864323 162.274094,290.09065 165.475031,287.532758 C167.875733,285.614338 170.466452,284.071633 173.247266,282.904594 C176.02808,281.737556 178.858865,281.010166 181.739708,280.722403 C184.620551,280.43464 187.46134,280.610493 190.262159,281.249966 C193.062979,281.889439 195.743723,283.040473 198.304472,284.703103 L190.802315,290.698134 Z M248.582931,292.581373 C246.102205,294.563739 243.481478,296.002532 240.72067,296.897794 C237.959862,297.793057 235.189093,298.200715 232.40828,298.120781 C229.627466,298.040847 226.886705,297.481316 224.185915,296.442172 C221.485125,295.403028 218.934417,293.924269 216.533714,292.00585 C214.173024,290.119404 212.342516,288.097101 211.042135,285.938879 C209.741755,283.780657 209.04156,281.590495 208.941531,279.368326 C208.841502,277.146157 209.351643,274.932014 210.471971,272.725832 C211.592299,270.51965 213.392799,268.425407 215.873525,266.44304 C218.35425,264.460673 220.974978,263.02188 223.735786,262.126618 C226.496593,261.231356 229.267362,260.823698 232.048176,260.903632 C234.82899,260.983566 237.56975,261.543097 240.270541,262.58224 C242.971331,263.621384 245.502033,265.084157 247.862724,266.970603 C250.263426,268.889022 252.11394,270.927312 253.414321,273.085534 C254.714701,275.243755 255.414895,277.433918 255.514925,279.656087 C255.614954,281.878256 255.104812,284.092399 253.984485,286.298581 C252.864157,288.504763 251.063657,290.599006 248.582931,292.581373 Z M243.181378,288.264951 C244.701823,287.049952 245.7021,285.739052 246.182241,284.332211 C246.662381,282.92537 246.742403,281.51855 246.42231,280.111709 C246.102216,278.704869 245.462038,277.346009 244.501757,276.035089 C243.541477,274.724169 242.381154,273.525175 241.020756,272.43807 C239.70037,271.38294 238.209956,270.463711 236.549471,269.680356 C234.888985,268.897002 233.188513,268.385431 231.448003,268.145629 C229.707494,267.905826 227.957008,267.977766 226.196493,268.36145 C224.435978,268.745134 222.795523,269.544463 221.275078,270.759462 C219.754633,271.974461 218.754355,273.285361 218.274215,274.692202 C217.794074,276.099043 217.704049,277.497869 218.004137,278.888723 C218.304225,280.279577 218.944403,281.638437 219.92469,282.965344 C220.904976,284.292251 222.055296,285.483251 223.375682,286.538382 C224.73608,287.625486 226.236497,288.552708 227.876977,289.320076 C229.517456,290.087444 231.217929,290.599015 232.978444,290.854804 C234.738959,291.110593 236.499447,291.046647 238.259962,290.662963 C240.020478,290.279279 241.660933,289.47995 243.181378,288.264951 Z M238.123923,250.005466 L244.54577,244.87372 L250.547496,249.669744 L250.667531,249.573824 C250.027343,248.742509 249.597224,247.77532 249.37716,246.672229 C249.157095,245.569138 249.127087,244.426097 249.287134,243.243072 C249.447181,242.060046 249.827286,240.909012 250.427462,239.789934 C251.027637,238.670856 251.847865,237.695674 252.888169,236.864359 C253.688403,236.224886 254.258562,235.801242 254.598661,235.593413 C254.938761,235.385584 255.288858,235.169765 255.648963,234.94595 L262.250862,240.221576 C261.690698,240.541313 261.130542,240.877031 260.570379,241.228741 C260.010215,241.580452 259.49007,241.948143 259.00993,242.331827 C257.84959,243.259063 256.989351,244.314178 256.429188,245.497203 C255.869024,246.680228 255.658965,247.935176 255.799006,249.262082 C255.939047,250.588989 256.449189,251.955842 257.329447,253.362683 C258.209704,254.769524 259.510065,256.160357 261.230568,257.535224 L275.994814,269.333444 L269.152847,274.800912 L238.123923,250.005466 Z M292.303504,227.141219 C291.143165,226.341878 289.872812,225.694421 288.492408,225.198829 C287.112005,224.703238 285.721619,224.423473 284.321209,224.359525 C282.920799,224.295578 281.52041,224.455444 280.120001,224.839128 C278.719591,225.222812 277.439236,225.878262 276.278896,226.805498 C275.078545,227.764707 274.1983,228.803836 273.638137,229.922913 C273.077973,231.041991 272.8179,232.177039 272.857912,233.328091 C272.897924,234.479142 273.20801,235.622183 273.78818,236.757248 C274.368349,237.892313 275.218585,238.939434 276.338913,239.898644 L292.303504,227.141219 Z M280.840208,243.495662 C282.040559,244.454872 283.370928,245.246208 284.831356,245.869694 C286.291783,246.493181 287.782197,246.868865 289.302641,246.99676 C290.823086,247.124655 292.353511,246.972782 293.893962,246.541138 C295.434412,246.109493 296.924826,245.318157 298.365248,244.167106 C300.365833,242.568423 301.546161,240.937791 301.906266,239.275161 C302.266371,237.612531 301.886266,235.854006 300.765938,233.999534 L307.247802,228.819828 C308.568188,230.450484 309.448433,232.145063 309.888562,233.903614 C310.32869,235.662165 310.378704,237.396709 310.038605,239.1073 C309.698505,240.817891 308.988308,242.472502 307.907992,244.071185 C306.827676,245.669868 305.447293,247.140634 303.766801,248.483528 C301.326087,250.433921 298.765376,251.84074 296.084592,252.704029 C293.403807,253.567318 290.693055,253.943003 287.952253,253.831095 C285.211451,253.719187 282.510701,253.127683 279.849923,252.056566 C277.189144,250.985448 274.658442,249.490702 272.25774,247.572283 C270.057096,245.813732 268.316613,243.863368 267.036238,241.721133 C265.755863,239.578898 265.015658,237.388736 264.815599,235.15058 C264.615541,232.912424 264.995646,230.706275 265.955927,228.532066 C266.916208,226.357858 268.556664,224.343548 270.877343,222.489076 C273.318057,220.538683 276.018806,219.195809 278.979673,218.460415 C281.940539,217.725021 284.901361,217.517196 287.862227,217.836932 C290.823093,218.156669 293.683888,218.955998 296.444695,220.234944 C299.205503,221.513891 301.606169,223.192482 303.646767,225.27077 L280.840208,243.495662 Z M297.372962,183.762778 L307.936,175.321775 L353.309048,192.683383 L331.402749,156.56932 L341.845752,148.224238 L384.698075,182.467851 L377.556021,188.17512 L344.486511,161.749026 L365.552569,197.767169 L359.370792,202.707074 L314.417864,185.777108 L347.36734,212.299123 L340.225286,218.006392 L297.372962,183.762778 Z M350.892353,140.99503 L358.394511,135 L394.76497,164.063907 L416.551236,146.654339 L423.0331,151.834045 L393.744677,175.238644 L350.892353,140.99503 Z M287.207372,392.189469 C289.75923,394.228678 292.373289,395.621287 295.049627,396.367339 C297.725966,397.113391 300.417824,397.324769 303.125283,397.00148 C305.832742,396.678191 308.462361,395.919716 311.014219,394.726033 C313.566076,393.53235 316.024537,391.990532 318.389673,390.100534 C320.941531,388.061325 322.824276,386.084317 324.037964,384.16945 C325.251652,382.254584 325.951847,380.47652 326.138568,378.835206 C326.325289,377.193891 326.060772,375.689376 325.345007,374.321614 C324.629242,372.953852 323.648969,371.772621 322.404161,370.777885 C319.852303,368.738676 317.393843,367.694219 315.028706,367.644482 C312.66357,367.594745 310.547427,367.91803 308.680214,368.614345 C305.443712,369.808028 301.86494,371.349846 297.943793,373.239844 C294.022646,375.129842 289.136845,377.417701 283.286245,380.103488 C279.676299,381.794539 276.315367,382.9136 273.203345,383.460705 C270.091323,384.007809 267.228306,384.13215 264.614208,383.833729 C262.00011,383.535308 259.619449,382.901173 257.472154,381.931306 C255.324859,380.961438 253.379875,379.780207 251.637143,378.387577 C248.276159,375.70179 246.066657,372.817099 245.00857,369.733417 C243.950483,366.649736 243.763764,363.541233 244.448409,360.407814 C245.133054,357.274396 246.549002,354.228063 248.696297,351.268724 C250.843592,348.309384 253.410971,345.636071 256.398512,343.248705 C259.883976,340.463445 263.618346,338.200454 267.601734,336.459666 C271.585122,334.718878 275.646249,333.637119 279.785238,333.214356 C283.924226,332.791594 288.000914,333.09001 292.015422,334.109614 C296.029929,335.129219 299.779859,337.031623 303.265323,339.816883 L291.595301,349.142486 C286.989509,345.959331 282.492705,344.703496 278.104754,345.374943 C273.716804,346.046389 269.500078,347.998529 265.45445,351.231421 C264.08516,352.325631 262.82481,353.556598 261.673362,354.92436 C260.521914,356.292122 259.681681,357.709599 259.152637,359.176835 C258.623594,360.64407 258.530235,362.136152 258.872557,363.653124 C259.214879,365.170097 260.226271,366.600008 261.906763,367.942902 C264.271899,369.8329 266.854838,370.728149 269.655658,370.628675 C272.456477,370.529202 275.381734,369.808029 278.431515,368.465135 C278.742717,368.315925 279.987507,367.74396 282.165922,366.749224 C284.344337,365.754488 286.771678,364.635427 289.448017,363.392007 C292.124355,362.148587 294.738414,360.930054 297.290272,359.736371 C299.84213,358.542688 301.678195,357.697175 302.798523,357.199807 C305.661582,356.006124 308.49348,355.235215 311.294299,354.887058 C314.095119,354.5389 316.802537,354.5389 319.416635,354.887058 C322.030733,355.235215 324.473633,355.894218 326.745409,356.864085 C329.017185,357.833953 331.024409,359.015184 332.767141,360.407814 C336.501567,363.392022 338.928907,366.550261 340.049235,369.882627 C341.169563,373.214992 341.325162,376.547308 340.516036,379.879673 C339.70691,383.212039 338.104243,386.457316 335.707987,389.615603 C333.31173,392.773889 330.464273,395.671014 327.16553,398.307064 C323.368864,401.341009 319.323296,403.827812 315.028706,405.767547 C310.734117,407.707282 306.377352,408.900947 301.958281,409.348578 C297.53921,409.796209 293.073526,409.410755 288.561095,408.192203 C284.048663,406.973652 279.707458,404.747964 275.537349,401.515072 L287.207372,392.189469 Z M307.697265,334.186351 L315.72624,327.770336 L301.255412,316.206588 L311.898473,307.701639 L326.369301,319.265386 L335.9854,311.581089 L343.921015,317.922499 L334.304917,325.606796 L360.072327,346.197727 C361.192655,347.09299 362.204046,347.826596 363.106533,348.398569 C364.009019,348.970543 364.911492,349.343563 365.813978,349.517642 C366.716464,349.691721 367.650057,349.617117 368.614783,349.293827 C369.57951,348.970538 370.653142,348.336404 371.83571,347.391404 C372.582595,346.794563 373.313909,346.185296 374.029674,345.563586 C374.745439,344.941876 375.383394,344.258006 375.943558,343.511954 L384.159254,350.077178 C383.101166,351.121651 382.074215,352.14124 381.078368,353.135976 C380.082521,354.130712 378.99333,355.100565 377.810761,356.045564 C375.009942,358.28372 372.489242,359.875273 370.248587,360.820272 C368.007931,361.765272 365.891788,362.212896 363.900094,362.163159 C361.9084,362.113423 359.963416,361.603628 358.065083,360.63376 C356.16675,359.663893 354.190646,358.408058 352.136711,356.866217 L323.661856,334.111746 L315.63288,340.527761 L307.697265,334.186351 Z M415.385567,327.362141 C411.52666,330.445822 407.449973,332.683945 403.155383,334.076575 C398.860794,335.469205 394.550708,336.10334 390.224998,335.978998 C385.899288,335.854656 381.635882,334.984275 377.434653,333.367829 C373.233424,331.751383 369.265656,329.451091 365.53123,326.466883 C361.859045,323.532412 359.011587,320.386607 356.988773,317.029373 C354.965959,313.672139 353.876768,310.26522 353.721167,306.808512 C353.565566,303.351805 354.35912,299.907583 356.101852,296.475744 C357.844584,293.043905 360.645361,289.786194 364.504268,286.702513 C368.363175,283.618831 372.439862,281.380709 376.734452,279.988079 C381.029042,278.595448 385.339127,277.961314 389.664837,278.085656 C393.990547,278.209998 398.253953,279.080378 402.455182,280.696824 C406.656411,282.31327 410.59306,284.588695 414.265245,287.523166 C417.999671,290.507373 420.878248,293.678047 422.901062,297.035281 C424.923876,300.392514 426.013067,303.799434 426.168668,307.256141 C426.324269,310.712849 425.530716,314.15707 423.787984,317.588909 C422.045251,321.020748 419.244474,324.27846 415.385567,327.362141 Z M406.983151,320.647707 C409.348287,318.757709 410.904275,316.718531 411.65116,314.530111 C412.398045,312.341692 412.522524,310.153306 412.024601,307.964887 C411.526677,305.776468 410.530845,303.662686 409.037075,301.623477 C407.543304,299.584268 405.738359,297.719167 403.622184,296.028115 C401.56825,294.386801 399.249829,292.95689 396.666851,291.738338 C394.083873,290.519787 391.438694,289.72401 388.731235,289.350984 C386.023776,288.977958 383.300798,289.089864 380.562219,289.686705 C377.82364,290.283547 375.271821,291.526948 372.906684,293.416947 C370.541548,295.306945 368.98556,297.346123 368.238675,299.534542 C367.49179,301.722961 367.351751,303.898913 367.818554,306.062464 C368.285358,308.226015 369.28119,310.339797 370.80608,312.403874 C372.330971,314.467951 374.120357,316.320619 376.174291,317.961933 C378.290465,319.652984 380.624447,321.09533 383.176304,322.289013 C385.728162,323.482696 388.373341,324.278473 391.11192,324.676367 C393.850499,325.074262 396.589037,324.97479 399.327616,324.377948 C402.066195,323.781107 404.618014,322.537705 406.983151,320.647707 Z M399.091548,261.152492 L409.081088,253.169776 L418.417106,260.630259 L418.603826,260.481049 C417.607979,259.187892 416.938905,257.683377 416.596582,255.967457 C416.25426,254.251538 416.20758,252.473474 416.456542,250.633212 C416.705504,248.792951 417.296779,247.002453 418.230385,245.261665 C419.163992,243.520877 420.439902,242.003928 422.058153,240.710771 C423.302961,239.716035 424.189874,239.057032 424.718918,238.733743 C425.247962,238.410454 425.792557,238.074736 426.352721,237.726578 L436.622341,245.933108 C435.750975,246.430476 434.879622,246.952705 434.008256,247.49981 C433.13689,248.046914 432.327777,248.618879 431.580891,249.215721 C429.775919,250.658088 428.43777,252.299377 427.566404,254.139639 C426.695037,255.9799 426.36828,257.93204 426.586122,259.996118 C426.803963,262.060195 427.597517,264.186411 428.966806,266.37483 C430.336096,268.563249 432.35888,270.726767 435.035218,272.865449 L458.001823,291.218236 L447.358762,299.723186 L399.091548,261.152492 Z M483.346445,225.605426 C481.541472,224.362006 479.565368,223.354851 477.418073,222.58393 C475.270778,221.81301 473.107956,221.37782 470.929541,221.278346 C468.751126,221.178872 466.572743,221.427553 464.394328,222.024394 C462.215913,222.621236 460.224249,223.640825 458.419276,225.083192 C456.552063,226.575296 455.182794,228.191718 454.311428,229.932506 C453.440062,231.673293 453.035505,233.438923 453.097746,235.229448 C453.159986,237.019973 453.642342,238.798036 454.544829,240.563693 C455.447315,242.329349 456.769904,243.958205 458.512636,245.450309 L483.346445,225.605426 Z M465.51465,251.04567 C467.381863,252.537774 469.451326,253.768742 471.723102,254.738609 C473.994878,255.708477 476.313299,256.292875 478.678436,256.491822 C481.043572,256.69077 483.424233,256.454523 485.82049,255.783077 C488.216746,255.11163 490.535168,253.880663 492.775823,252.090138 C495.887845,249.603298 497.72391,247.066759 498.284074,244.480446 C498.844238,241.894133 498.252963,239.15865 496.510231,236.273915 L506.59313,228.216595 C508.647064,230.753171 510.016333,233.389182 510.700978,236.124706 C511.385623,238.86023 511.463422,241.55841 510.934379,244.219329 C510.405335,246.880248 509.300584,249.454088 507.620092,251.940928 C505.939601,254.427768 503.792338,256.715626 501.17824,258.804572 C497.381573,261.838517 493.398245,264.026903 489.228136,265.369796 C485.058027,266.71269 480.841301,267.297088 476.577832,267.12301 C472.314362,266.948931 468.113196,266.028814 463.974207,264.362631 C459.835218,262.696449 455.89857,260.371288 452.164144,257.38708 C448.74092,254.651556 446.033502,251.617657 444.041808,248.285292 C442.050114,244.952927 440.898684,241.546007 440.587481,238.064431 C440.276279,234.582855 440.867555,231.151068 442.361325,227.768966 C443.855095,224.386863 446.406915,221.253492 450.01686,218.368758 C453.813526,215.334813 458.014692,213.245899 462.620484,212.101953 C467.226276,210.958007 471.831999,210.634722 476.437791,211.13209 C481.043583,211.629458 485.493708,212.872859 489.788297,214.862331 C494.082887,216.851803 497.817257,219.462946 500.991519,222.695838 L465.51465,251.04567 Z" id="Core-ML-Store" fill="#F8E71C"></path>
                </g>
            </g>
        </g>
    </svg>
)