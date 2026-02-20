const nodemailer = require('nodemailer')
const config = require('../config/env')

let transporter = null

function getTransporter() {
  if (transporter) return transporter

  // Only create if credentials are configured
  if (!config.email.user || !config.email.pass) {
    console.warn('⚠  Email credentials not configured — email delivery disabled')
    return null
  }

  transporter = nodemailer.createTransport({
    host: config.email.host,
    port: config.email.port,
    secure: config.email.port === 465,
    auth: {
      user: config.email.user,
      pass: config.email.pass,
    },
  })

  return transporter
}

async function sendContactEmail({ name, email, message }) {
  const transport = getTransporter()

  if (!transport) {
    console.log('📧 [DRY RUN] Would send email:', { name, email, message: message.slice(0, 50) })
    return { success: true, dryRun: true }
  }

  await transport.sendMail({
    from: `"Portfolio Contact" <${config.email.from}>`,
    to: config.email.to,
    replyTo: email,
    subject: `Portfolio Contact: ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2 style="color: #58a6ff;">New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr style="border: 1px solid #30363d;" />
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `,
  })

  return { success: true }
}

module.exports = { sendContactEmail }
