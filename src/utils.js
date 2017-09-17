import { types } from './const'

export const mapObject = (obj, func) => Object.keys(obj).map(k => func(k, obj[k]))

export const getTypeShorthand = (fullType) =>
  fullType && types.find(candidate => fullType.toLowerCase().indexOf(candidate.toLowerCase()) === 0)