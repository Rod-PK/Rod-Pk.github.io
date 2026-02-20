const cors = require('cors')
const config = require('../config/env')

module.exports = cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (server-to-server, curl, mobile)
    if (!origin) return callback(null, true)

    if (config.allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  maxAge: 86400,
})
