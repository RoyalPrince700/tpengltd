import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import { companyInfo, services } from '../data/services'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const subject = encodeURIComponent(
      `Website Enquiry: ${data.get('service') || 'General'} — ${data.get('name')}`,
    )
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')}\nService: ${data.get('service')}\n\n${data.get('message')}`,
    )
    window.location.href = `${companyInfo.emailHref}?subject=${subject}&body=${body}`
    setSent(true)
    form.reset()
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
                  {companyInfo.emails.map((e, i) => (
                    <span key={e.href}>
                      {i > 0 && <br />}
                      <a href={e.href}>{e.display}</a>
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

                <button type="submit" className="btn btn-gold">
                  Send Message <span className="arrow">→</span>
                </button>
                {sent && (
                  <p className="form-status">
                    Your email client has been opened — send the message to complete your enquiry.
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
