const { Router } = require('express')
const { handleContact } = require('../controllers/contact.controller')
const rateLimiter = require('../middleware/rateLimiter')
const sanitize = require('../middleware/sanitize')
const { validate, contactSchema } = require('../middleware/validate')

const router = Router()

router.post('/', rateLimiter, sanitize, validate(contactSchema), handleContact)

module.exports = router
