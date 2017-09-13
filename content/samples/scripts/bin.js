// don't run this

let handleName = (name, prefix) => `__${prefix}_${name.split('.PNG').join('_PNG')}.png`

let fixedSample = ((s, name) => { s.input.inputImage.content = handleName(s.input.inputImage.content, name); s.output.outputImage.content = handleName(s.output.outputImage.content, name); return s })
f = fs.readdirSync('.').filter(s => s.endsWith('.json')).map(s => ({name: s, obj: require(`./${s}`)}))
f.map(d => d.obj.samples.map(s => fixedSample(s, d.name.split('.json')[0])))
f.map(({name, obj}) => require('fs').writeFileSync(name, JSON.stringify(obj, null, 4)))
