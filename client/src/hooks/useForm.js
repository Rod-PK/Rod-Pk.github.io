import { useState } from 'react'

const initialState = { name: '', email: '', message: '' }

export function useForm() {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function validate() {
    const errs = {}
    if (!values.name.trim() || values.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters'
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errs.email = 'Please enter a valid email address'
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  function handleChange(e) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function reset() {
    setValues(initialState)
    setErrors({})
    setStatus('idle')
  }

  return { values, errors, status, setStatus, validate, handleChange, reset }
}
