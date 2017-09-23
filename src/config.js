import dbFile from '../db.json'

export const getSampleImagePublicUrl = (fname) => 
  `https://s3-us-west-2.amazonaws.com/coreml-assets/${fname.split('.png')[0]}_tn.jpg`

export const getModelDownloadUrl = (fname) =>
  `https://s3-us-west-2.amazonaws.com/coreml-models/${fname}`

export const localData = dbFile

export const navigationWithPath = ({ pathname }) => {
  const model = localData.models.find(m => m.pathname === pathname)
  if (model)
    return {
      to: '/' + model.pathname,
      state: {
        model
      }
    }
  else
    return '/'
}