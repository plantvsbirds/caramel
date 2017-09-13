import React from 'react'
import ReactDOM from 'react-dom'

import ModelDetail from './pages/model'

// mock!
import mockMeta from '../content/metadata/FNS-Mosaic.json'
import mockSamples from '../content/samples/FNS-Mosaic.json'

export default (
  <ModelDetail
    meta={mockMeta}
    samples={mockSamples}
  />
)