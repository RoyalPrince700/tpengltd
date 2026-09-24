import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { services, companyInfo } from '../data/services'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src="/images/logo.png" alt="Tulolag Petroleum Energy Ltd logo" />
              <span className="brand-name">
                Tulolag Petroleum
                <small>Gas &amp; Energy Ltd</small>
              </span>
            </div>
            <p>
              An indigenous company with local and foreign expertise, providing support services
              within the Nigerian upstream, midstream and downstream oil &amp; gas, marine and
              energy industry.
            </p>
          </div>

          <div>
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4>Our Services</h4>
            <ul className="footer-links">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={`/services#${s.id}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Get in Touch</h4>
            <ul className="footer-contact">
              <li>
                <span className="ico" aria-hidden="true"><MapPin size={16} /></span>
                <span>{companyInfo.address}</span>
              </li>
              <li>
                <span className="ico" aria-hidden="true"><Phone size={16} /></span>
                <span>
                  {companyInfo.phones.map((p, i) => (
                    <span key={p.href}>
                      {i > 0 && ', '}
                      <a href={p.href}>{p.display}</a>
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <span className="ico" aria-hidden="true"><Mail size={16} /></span>
                <a href={companyInfo.emailHref}>{companyInfo.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {companyInfo.fullName}. All rights reserved.</span>
          <span>Passion · Respect · Integrity · Monitoring · Excellence</span>
        </div>
      </div>
    </footer>
  )
}
