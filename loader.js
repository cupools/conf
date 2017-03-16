const transform = require('./lib/transfrom')

module.exports = raw => `module.exports = ${JSON.stringify(transform(raw))}`
