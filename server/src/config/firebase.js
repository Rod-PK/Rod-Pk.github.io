const admin = require('firebase-admin')
const config = require('./env')

let db = null

function initFirebase() {
  // Skip if credentials are not configured
  if (!config.firebase.projectId || !config.firebase.clientEmail) {
    console.warn('⚠  Firebase credentials not configured — Firestore logging disabled')
    return
  }

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: config.firebase.projectId,
        privateKey: config.firebase.privateKey,
        clientEmail: config.firebase.clientEmail,
      }),
    })
  }

  db = admin.firestore()
  console.log('✓ Firebase Admin SDK initialized')
}

function getDb() {
  return db
}

module.exports = { initFirebase, getDb }
