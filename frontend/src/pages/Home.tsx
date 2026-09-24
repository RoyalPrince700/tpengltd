import { Link } from 'react-router-dom'
import { BarChart3, Check, Flame, Handshake, Shield, Star, type LucideIcon } from 'lucide-react'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import CtaBand from '../components/CtaBand'
import { services } from '../data/services'

const values: { icon: LucideIcon; name: string; text: string }[] = [
  { icon: Flame, name: 'Passion', text: 'We bring energy and commitment to every project.' },
  { icon: Handshake, name: 'Respect', text: 'We value our people, clients and communities.' },
  { icon: Shield, name: 'Integrity', text: 'We do what is right — always and everywhere.' },
  { icon: BarChart3, name: 'Monitoring', text: 'We measure, track and assure every deliverable.' },
  { icon: Star, name: 'Excellence', text: 'We hold ourselves to the highest quality standard.' },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* stats band */}
      <div className="stats-band">
        <div className="stats-grid">
          <div className="stat">
            <div className="stat-value"><Counter end={3} /></div>
            <div className="stat-label">Industry Segments Served</div>
          </div>
          <div className="stat">
            <div className="stat-value"><Counter end={9} suffix="+" /></div>
            <div className="stat-label">Specialized Service Lines</div>
          </div>
          <div className="stat">
            <div className="stat-value"><Counter end={100} suffix="%" /></div>
            <div className="stat-label">Indigenous Company</div>
          </div>
          <div className="stat">
            <div className="stat-value">24/7</div>
            <div className="stat-label">Operations &amp; Support</div>
          </div>
        </div>
      </div>

      {/* about preview */}
      <section>
        <div className="container split">
          <Reveal className="split-media">
            <img
              className="main-img"
              src="/images/gas-plant.jpg"
              alt="Aerial view of a gas processing plant"
              loading="lazy"
            />
            <img
              className="float-img"
              src="/images/workers.jpg"
              alt="Oil rig worker monitoring drilling operations"
              loading="lazy"
            />
            <div className="experience-chip">
              <strong>Trusted</strong>
              Local &amp; Foreign Expertise
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="kicker">About Us</span>
            <h2 className="section-title">
              Tulolag Petroleum &amp; Gas and Energy Limited
            </h2>
            <p className="section-lede">
              An indigenous company with local and foreign expertise. Our core business is the
              provision of support services within the Nigerian upstream, downstream and midstream
              oil &amp; gas industry, marine and energy industry.
            </p>
            <ul className="check-list">
              <li><span className="tick" aria-hidden="true"><Check size={14} strokeWidth={3} /></span> Exceptional engineering, procurement and logistics services</li>
              <li><span className="tick" aria-hidden="true"><Check size={14} strokeWidth={3} /></span> Asset buy-back and construction services</li>
              <li><span className="tick" aria-hidden="true"><Check size={14} strokeWidth={3} /></span> Highest quality standard, utmost professionalism</li>
              <li><span className="tick" aria-hidden="true"><Check size={14} strokeWidth={3} /></span> Client satisfaction at the centre of everything we do</li>
            </ul>
            <Link to="/about" className="btn btn-green">
              Learn More <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* services */}
      <section className="services-section">
        <div className="container">
          <Reveal className="center">
            <span className="kicker">What We Do</span>
            <h2 className="section-title">Our Services</h2>
            <p className="section-lede">
              The only place where you&rsquo;ll get the perfect solution for all your industry
              needs.
            </p>
          </Reveal>

          <div className="services-grid">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 100}>
                <Link to={`/services#${s.id}`} className="service-card">
                  <div className="thumb">
                    <img src={s.image} alt={s.title} loading="lazy" />
                    <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="body">
                    <h3>{s.title}</h3>
                    <p>{s.short}</p>
                    <span className="more">
                      Learn More <span className="arrow">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* values */}
      <section className="values-section">
        <div className="container">
          <Reveal className="center">
            <span className="kicker" style={{ color: 'var(--gold-400)' }}>Tulolag Values</span>
            <h2 className="section-title">The Principles That Guide Us</h2>
            <p className="section-lede">
              We underpin our core values by the guiding principles of passion, respect, integrity,
              monitoring and excellence.
            </p>
          </Reveal>

          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal key={v.name} delay={i * 90}>
                <div className="value-card">
                  <div className="icon" aria-hidden="true"><v.icon size={26} /></div>
                  <h3>{v.name}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
