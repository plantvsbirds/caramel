import { types } from './const'
import _ from 'lodash'

export const mapObject = (obj, func) => Object.keys(obj).map(k => func(k, obj[k]))

export const getTypeShorthand = (fullType) =>
  fullType && types.find(candidate => fullType.toLowerCase().indexOf(candidate.toLowerCase()) === 0)

export const bindScrollFunc = (cb) => {
  document.body.addEventListener('mousewheel', cb)
  document.body.addEventListener('touchmove', cb)
}
export const unbindScrollFunc = (cb) => {
  document.body.removeEventListener('mousewheel', cb)
  document.body.removeEventListener('touchmove', cb)
}
export const processScrollCb = function (cb, context) {
  return _.debounce(cb, 30, { leading: true }).bind(context)
}