const config = require('./config/env')
const { initFirebase } = require('./config/firebase')
const { createApp } = require('./app')

// Initialize Firebase (optional, degrades gracefully)
initFirebase()

const app = createApp()

app.listen(config.port, () => {
  console.log(`\n🚀 Portfolio API running on port ${config.port}`)
  console.log(`   Environment: ${config.nodeEnv}`)
  console.log(`   Health: http://localhost:${config.port}/api/health\n`)
})
