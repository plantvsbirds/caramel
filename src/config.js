import dbFile from '../db.json'

export const getSampleImagePublicUrl = (fname) => 
  `https://s3-us-west-2.amazonaws.com/coreml-assets/${fname.split('.png')[0]}_tn.jpg`

export const getModelDownloadUrl = (fname) => {}

export const localData = dbFile