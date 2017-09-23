const _ = require('lodash')
const db = require('./content.json')
const fs = require('fs')

const truthy = (x) => !!x

const mergeFrom = (fieldName, pathFunc, shouldIgnore) => {
  db.models = db.models.map(m => {
    const name = m.file.split('mlmodel')[0]
    try {
      _.merge(m, require(pathFunc(name)))
    } catch (e) {
      console.log(`No ${fieldName} for ${name}. Dropping!`)
      return false
    }
    return (shouldIgnore && shouldIgnore(m)) ? false : m
  }).filter(truthy)
}

mergeFrom('metadata', (name) => `../content/metadata/${name}json`)
mergeFrom('sample', (name) => `../content/samples/${name}json`, (m) => {
  const res = m.primary_output.length === 0 || m.primary_input.length === 0
  if (res) {
    console.log(`No samples for ${m.file}. Dropping!`)
  }
  return res
})

db.models.forEach(m => {
  m.key = encodeURIComponent(m.name.toLowerCase())
})

const lenBeforeUniq = db.models.length

_.uniqBy(db.models, (m) => m.key)

if (db.models.length !== lenBeforeUniq)
  console.log(`Dropping ${lenBeforeUniq - db.models.length} due to dup key!`)

fs.writeFileSync('db.json', JSON.stringify(db, null ,2))