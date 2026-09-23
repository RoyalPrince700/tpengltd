import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { services } from '../data/services'

export default function Services() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (el) {
      // wait a tick for layout
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60)
    }
  }, [hash])

  return (
    <>
      <PageBanner
        title="Our Services"
        crumb="Services"
        image="/images/hero-pipeline.jpg"
      />

      <section style={{ paddingBottom: 0 }}>
        <div className="container">
          <Reveal className="center">
            <span className="kicker">What We Do</span>
            <h2 className="section-title">
              Integrated Solutions Across the Oil, Gas &amp; Energy Value Chain
            </h2>
            <p className="section-lede">
              From onshore pipeline storage facilities to LPG retail, we deliver engineering,
              procurement, logistics, asset buy-back and construction services to the highest
              quality standard.
            </p>
          </Reveal>

          {services.map((s, i) => (
            <div className={`service-row ${i % 2 === 1 ? 'flip' : ''}`} id={s.id} key={s.id}>
              <Reveal className="media">
                <img src={s.image} alt={s.title} loading="lazy" />
              </Reveal>
              <Reveal delay={100}>
                <span className="badge">Service {String(i + 1).padStart(2, '0')}</span>
                <h2>{s.title}</h2>
                <p>{s.description}</p>
                <ul className="check-list">
                  {s.points.map((p) => (
                    <li key={p}>
                      <span className="tick">✓</span> {p}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-green" style={{ marginTop: 28 }}>
                  Request This Service <span className="arrow">→</span>
                </Link>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
