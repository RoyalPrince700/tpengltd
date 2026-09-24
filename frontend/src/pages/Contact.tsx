import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import { companyInfo, services } from '../data/services'

type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorCode, setErrorCode] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const phone = String(data.get('phone') || '').trim() || 'Not provided'
    const service = String(data.get('service') || '').trim() || 'General Enquiry'
    const message = String(data.get('message') || '').trim()

    setStatus('sending')
    setErrorCode('')
    let diagnosticCode = 'NETWORK_ERROR'

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        signal: AbortSignal.timeout(15_000),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          service,
          message,
          website: String(data.get('website') || ''),
        }),
      })

      const result = (await res.json().catch(() => null)) as {
        success?: boolean
        code?: string
        message?: string
      } | null

      if (!res.ok || !result?.success) {
        diagnosticCode = result?.code || `HTTP_${res.status}`
        console.error('Contact form request failed', {
          status: res.status,
          code: diagnosticCode,
          message: result?.message || 'Non-JSON response from contact API',
        })
        throw new Error(result?.message || 'Failed to send')
      }

      console.info('Contact form request succeeded')
      setStatus('sent')
      form.reset()
    } catch (error) {
      if (error instanceof DOMException && error.name === 'TimeoutError') {
        diagnosticCode = 'REQUEST_TIMEOUT'
      }
      console.error('Contact form submission error', error)
      setErrorCode(diagnosticCode)
      setStatus('error')
    }
  }

  return (
    <>
      <PageBanner
        title="Contact Us"
        crumb="Contact"
        image="/images/hero-refinery.jpg"
      />

      <section>
        <div className="container">
          <Reveal className="center" >
            <span className="kicker">Get in Touch</span>
            <h2 className="section-title contact-heading">
              We&rsquo;d Love to Hear From You
            </h2>
          </Reveal>

          <div className="contact-grid">
            <Reveal>
              <div className="contact-card">
                <div className="icon" aria-hidden="true"><MapPin size={26} /></div>
                <h3>Visit Our Office</h3>
                <p>{companyInfo.address}</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="contact-card">
                <div className="icon" aria-hidden="true"><Phone size={26} /></div>
                <h3>Call Us</h3>
                <p>
                  {companyInfo.phones.map((p, i) => (
                    <span key={p.href}>
                      {i > 0 && <br />}
                      <a href={p.href}>{p.display}</a>
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="contact-card">
                <div className="icon" aria-hidden="true"><Mail size={26} /></div>
                <h3>Email Us</h3>
                <p>
                  {companyInfo.emails.map((mail, i) => (
                    <span key={mail.href}>
                      {i > 0 && <br />}
                      <a href={mail.href}>{mail.display}</a>
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="contact-split">
            <Reveal>
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send Us a Message</h2>
                <p>Tell us about your project or supply needs and we&rsquo;ll respond promptly.</p>

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" name="name" type="text" placeholder="Your name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" placeholder="you@company.com" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" placeholder="+234 ..." />
                  </div>
                  <div className="field">
                    <label htmlFor="service">Service of Interest</label>
                    <select id="service" name="service" defaultValue="">
                      <option value="">General Enquiry</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div className="contact-honeypot" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <button type="submit" className="btn btn-gold" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : (
                    <>Send Message <span className="arrow">→</span></>
                  )}
                </button>
                {status === 'sent' && (
                  <p className="form-status">
                    Thank you — your message has been sent to {companyInfo.email}.
                  </p>
                )}
                {status === 'error' && (
                  <p className="form-status form-status-error">
                    Something went wrong. Please email us directly at{' '}
                    <a href={companyInfo.emailHref}>{companyInfo.email}</a>.
                    {errorCode && <><br />Reference: {errorCode}</>}
                  </p>
                )}
              </form>
            </Reveal>

            <Reveal delay={120}>
              <div className="map-frame">
                <iframe
                  title="Tulolag Petroleum Energy Ltd office location"
                  src={companyInfo.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
