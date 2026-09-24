/// <reference types="node" />

const CONTACT_EMAIL = 'info@tpenglimited.com'

type ContactPayload = {
  name?: unknown
  email?: unknown
  phone?: unknown
  service?: unknown
  message?: unknown
  website?: unknown
}

type ApiRequest = {
  method?: string
  body?: ContactPayload | string
}

type ApiResponse = {
  status: (statusCode: number) => ApiResponse
  json: (body: unknown) => void
}

const clean = (value: unknown, maxLength: number) =>
  typeof value === 'string' ? value.trim().slice(0, maxLength) : ''

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      })[character] ?? character,
  )

export default async function handler(request: ApiRequest, response: ApiResponse) {
  if (request.method !== 'POST') {
    return response.status(405).json({
      success: false,
      code: 'METHOD_NOT_ALLOWED',
      message: 'Method not allowed',
    })
  }

  const apiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.CONTACT_FROM_EMAIL

  if (!apiKey || !fromEmail) {
    console.error('Contact email configuration missing', {
      hasApiKey: Boolean(apiKey),
      hasFromEmail: Boolean(fromEmail),
    })
    return response.status(500).json({
      success: false,
      code: 'EMAIL_NOT_CONFIGURED',
      message: 'Email service is not configured',
    })
  }

  try {
    const payload =
      typeof request.body === 'string'
        ? (JSON.parse(request.body) as ContactPayload)
        : (request.body ?? {})

    // Hidden honeypot field: bots often fill it, people never see it.
    if (clean(payload.website, 100)) {
      return response.status(200).json({ success: true })
    }

    const name = clean(payload.name, 100)
    const email = clean(payload.email, 254)
    const phone = clean(payload.phone, 50) || 'Not provided'
    const service = clean(payload.service, 150) || 'General Enquiry'
    const message = clean(payload.message, 5000)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!name || !emailPattern.test(email) || !message) {
      return response.status(400).json({
        success: false,
        code: 'INVALID_FORM',
        message: 'Please provide a valid name, email, and message',
      })
    }

    console.info('Contact form submission received', { service })

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [CONTACT_EMAIL],
        reply_to: email,
        subject: `Website Enquiry: ${service} — ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          `Service: ${service}`,
          '',
          message,
        ].join('\n'),
        html: `
          <h2>New website enquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Service:</strong> ${escapeHtml(service)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        `,
      }),
    })

    if (!resendResponse.ok) {
      const error = await resendResponse.text()
      console.error('Resend rejected contact email:', resendResponse.status, error)
      return response.status(502).json({
        success: false,
        code: 'RESEND_REJECTED',
        message: 'Email could not be sent',
      })
    }

    const result = (await resendResponse.json()) as { id?: string }
    console.info('Contact email sent', { emailId: result.id ?? 'unknown' })
    return response.status(200).json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return response.status(400).json({
      success: false,
      code: 'INVALID_REQUEST',
      message: 'Invalid request',
    })
  }
}
