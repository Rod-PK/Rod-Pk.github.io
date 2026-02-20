const xss = require('xss')

function sanitizeString(value) {
  if (typeof value === 'string') {
    return xss(value.trim())
  }
  return value
}

module.exports = function sanitize(req, _res, next) {
  if (req.body && typeof req.body === 'object') {
    for (const key of Object.keys(req.body)) {
      req.body[key] = sanitizeString(req.body[key])
    }
  }
  next()
}
