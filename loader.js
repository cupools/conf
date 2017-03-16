const transform = require('./lib/transfrom').default

module.exports = raw => `module.exports = ${JSON.stringify(transform(raw))}`
