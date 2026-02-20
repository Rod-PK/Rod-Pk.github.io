const crypto = require('crypto')
const { getDb } = require('../config/firebase')

async function logSubmission({ name, email, message, ip, userAgent, status }) {
  const db = getDb()
  if (!db) {
    console.log('📝 [DRY RUN] Would log submission:', { name, email, status })
    return null
  }

  const doc = await db.collection('submissions').add({
    name,
    email,
    message,
    ip: crypto.createHash('sha256').update(ip || 'unknown').digest('hex').slice(0, 16),
    userAgent: (userAgent || 'unknown').slice(0, 200),
    status,
    createdAt: new Date(),
  })

  return doc.id
}

module.exports = { logSubmission }
