import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { companyInfo } from '../data/services'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-group">
            <a href={companyInfo.phoneHref}>📞 {companyInfo.phone}</a>
            <a href={companyInfo.emailHref}>✉️ {companyInfo.email}</a>
          </div>
          <span className="topbar-note">Upstream · Midstream · Downstream</span>
        </div>
      </div>

      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <img src="/images/logo.png" alt="Tulolag Petroleum Energy Ltd logo" />
            <span className="brand-name">
              Tulolag Petroleum
              <small>Gas &amp; Energy Ltd</small>
            </span>
          </Link>

          <nav className={`nav-links ${open ? 'open' : ''}`}>
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn btn-gold nav-cta" onClick={() => setOpen(false)}>
              Get a Quote
            </Link>
          </nav>

          <button
            className={`nav-toggle ${open ? 'open' : ''}`}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
    </>
  )
}
