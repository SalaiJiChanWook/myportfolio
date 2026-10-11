import React, { useState } from 'react'
import emailjs from 'emailjs-com'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  function onChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function validate() {
    return (
      form.name.trim().length > 1 &&
      form.email.includes('@') &&
      form.message.trim().length >= 10
    )
  }

  function onSubmit(e) {
    e.preventDefault()
    if (!validate()) {
      setStatus({
        type: 'danger',
        text: 'Please provide a valid name, email, and message (10+ characters).',
      })
      return
    }

    setLoading(true)
    setStatus(null)

    // ✅ Replace these with your own EmailJS values
    const SERVICE_ID = 'service_yezv2ui'
    const TEMPLATE_ID = 'template_o5tgl6i'
    const PUBLIC_KEY = 'uwGDB108d3-wk7cWz'

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        setStatus({
          type: 'success',
          text: '✅ Message sent successfully! I’ll get back to you soon.',
        })
        setForm({ name: '', email: '', message: '' })
      })
      .catch(err => {
        console.error('EmailJS Error:', err)
        setStatus({
          type: 'danger',
          text: '❌ Failed to send message. Please try again later.',
        })
      })
      .finally(() => setLoading(false))
  }

  return (
    <section id="contact" className="container mt-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      <form onSubmit={onSubmit} className="row g-3">
        {status && (
          <div className={`alert alert-${status.type}`} role="alert">
            {status.text}
          </div>
        )}
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            className="form-control"
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            className="form-control"
            required
          />
        </div>
        <div className="col-12">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            className="form-control"
            rows="4"
            required
          />
        </div>
        <div className="col-12 text-center">
          <button
            type="submit"
            className="btn btn-primary px-4"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Contact
