const { sendContactEmail } = require('../services/email.service')
const { logSubmission } = require('../services/firestore.service')

async function handleContact(req, res) {
  const { name, email, message } = req.body

  try {
    // Send email
    const emailResult = await sendContactEmail({ name, email, message })
    const status = emailResult.success ? 'sent' : 'failed'

    // Log to Firestore (fire-and-forget, don't block response)
    logSubmission({
      name,
      email,
      message,
      ip: req.ip,
      userAgent: req.headers['user-agent'],
      status,
    }).catch((err) => console.error('Firestore log error:', err.message))

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully.',
    })
  } catch (err) {
    console.error('Contact error:', err.message)

    // Still try to log the failed submission
    logSubmission({
      name,
      email,
      message,
      ip: req.ip,
      userAgent: req.headers['user-agent'],
      status: 'failed',
    }).catch(() => {})

    res.status(500).json({
      error: 'Failed to send message. Please try again later.',
    })
  }
}

module.exports = { handleContact }
