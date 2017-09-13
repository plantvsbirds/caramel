import React from 'react'
import ReactDOM from 'react-dom'

import ModelDetail from './pages/model'

// !!mock
import mockData from '../data/metadata/MobileNet.json'
mockData.samples = [{
  "input": {
      "data": {
          "type": "image",
          "url": "https://source.unsplash.com/random/400x300"
      }
  }, 
  "output": {
    "prob": {
        "type": "text",
        "content": "This is the content"
    },
    "classLabel": {
        "type": "text",
        "content": "This is the content"
    }
  }
}]

export default <ModelDetail model={mockData} />
