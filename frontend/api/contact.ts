const CONTACT_EMAIL = 'info@tpenglimited.com'

type ContactPayload = {
  name?: unknown
  email?: unknown
  phone?: unknown
  service?: unknown
  message?: unknown
  website?: unknown
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

export default async function handler(request: Request) {
  if (request.method !== 'POST') {
    return Response.json({ success: false, message: 'Method not allowed' }, { status: 405 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.CONTACT_FROM_EMAIL

  if (!apiKey || !fromEmail) {
    console.error('Contact email configuration missing', {
      hasApiKey: Boolean(apiKey),
      hasFromEmail: Boolean(fromEmail),
    })
    return Response.json(
      {
        success: false,
        code: 'EMAIL_NOT_CONFIGURED',
        message: 'Email service is not configured',
      },
      { status: 500 },
    )
  }

  try {
    const payload = (await request.json()) as ContactPayload

    // Hidden honeypot field: bots often fill it, people never see it.
    if (clean(payload.website, 100)) {
      return Response.json({ success: true })
    }

    const name = clean(payload.name, 100)
    const email = clean(payload.email, 254)
    const phone = clean(payload.phone, 50) || 'Not provided'
    const service = clean(payload.service, 150) || 'General Enquiry'
    const message = clean(payload.message, 5000)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!name || !emailPattern.test(email) || !message) {
      return Response.json(
        {
          success: false,
          code: 'INVALID_FORM',
          message: 'Please provide a valid name, email, and message',
        },
        { status: 400 },
      )
    }

    console.info('Contact form submission received', { service })

    const response = await fetch('https://api.resend.com/emails', {
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

    if (!response.ok) {
      const error = await response.text()
      console.error('Resend rejected contact email:', response.status, error)
      return Response.json(
        {
          success: false,
          code: 'RESEND_REJECTED',
          message: 'Email could not be sent',
        },
        { status: 502 },
      )
    }

    const result = (await response.json()) as { id?: string }
    console.info('Contact email sent', { emailId: result.id ?? 'unknown' })
    return Response.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json(
      { success: false, code: 'INVALID_REQUEST', message: 'Invalid request' },
      { status: 400 },
    )
  }
}
