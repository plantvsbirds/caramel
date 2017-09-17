import React from 'react'

import ModelList from './pages/list'
import ModelDetail from './pages/model'

import css from './pages/page.styl'

import { localData } from './config'

export default (
  <div className={css.container}>
    <div className={css.head}>
      <h1>CoreML.Store</h1>
      <p>Your iOS 11 apps could use some superpower.</p>
      <p>Download and use per license, remember to acknowledge. You are welcome.</p>
    </div>

    <h1>Top Models</h1>
    <ModelList
      models={localData.models}
    />
    <h1>Style Transfer</h1>
    <h1>Object Recognition</h1>
  </div>
)