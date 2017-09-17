import React from 'react'

import ModelList from './pages/list'
import ModelDetail from './pages/model'

import styles from './pages/page.styl'
// mock!
import mockMeta from '../content/metadata/FNS-Mosaic.json'
import mockSamples from '../content/samples/FNS-Mosaic.json'

export default (
  <div className={styles.container}>
    <ModelList />
  </div>
)