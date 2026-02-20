const express = require('express')
const helmet = require('helmet')
const corsMiddleware = require('./middleware/cors')
const contactRoutes = require('./routes/contact.routes')
const healthRoutes = require('./routes/health.routes')

function createApp() {
  const app = express()

  // Security headers
  app.use(helmet())

  // CORS
  app.use(corsMiddleware)

  // Body parsing with size limit
  app.use(express.json({ limit: '10kb' }))

  // Routes
  app.use('/api/contact', contactRoutes)
  app.use('/api/health', healthRoutes)

  // 404 handler
  app.use((_req, res) => {
    res.status(404).json({ error: 'Not found' })
  })

  // Global error handler
  app.use((err, _req, res, _next) => {
    console.error('Unhandled error:', err.message)
    res.status(500).json({ error: 'Internal server error' })
  })

  return app
}

module.exports = { createApp }
