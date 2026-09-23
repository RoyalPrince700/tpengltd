import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import ceoImg from '../assets/ceo.png'

const competencies = [
  'Strategic Procurement & Oil & Gas Contracting',
  'Supply Chain & Vendor Management',
  'Diesel & Gas Distribution',
  'Land Transportation & Logistics',
  'Downstream Business & General Contracting',
  'Business Process Improvement & Leadership',
]

const trainings = [
  'Hastings Business Training – University Centre, Hastings Campus, UK',
  'Advanced Leadership Programme – NNPC Ltd',
  'Master Class: Oil & Gas Contracting – Talent Expert Programme, Houston, USA',
  'Enhanced Performance and Strategic Management – GTC, London, UK',
  'Business Process Improvements – London, UK',
  'Essential Management Skills for Administrators – GLOMACS, Dubai, UAE',
  'Leadership Through Self-Mastery – Dubai, UAE',
  'Supply Chain Management – ISO-DATEK Mullet and Energy Services, Houston, USA',
  'Oil & Gas Mini MBA – CWC School for Energy, London, UK',
  'Strategy & Strategic Planning – GLOMACS, New York, USA',
  'Petroleum Industry Act (PIA) Certificate – NNPC Academy',
]

const founderServices = [
  'Consultants Oil & Gas Contracts',
  'Diesel & Gas Distribution',
  'Land Transportation & Logistics',
  'Bulk Sales Liquors, Oil, Gas & Energy Training',
  'Downstream Business, General Contractor',
]

export default function About() {
  return (
    <>
      <PageBanner
        title="About Tulolag Petroleum"
        crumb="About Us"
        image="/images/hero-platform.jpg"
      />

      <section>
        <div className="container split">
          <Reveal>
            <span className="kicker">Who We Are</span>
            <h2 className="section-title">
              An Indigenous Company with Local and Foreign Expertise
            </h2>
            <p className="section-lede">
              Tulolag Petroleum &amp; Gas and Energy Limited is an indigenous company with local
              and foreign expertise. Our core business is the provision of support services within
              the Nigerian upstream, downstream and midstream oil &amp; gas industry, marine and
              energy industry.
            </p>
            <p className="section-lede">
              Our focus is on delivering exceptional engineering, procurement, logistics services,
              asset buy-back and construction services with the highest quality standard — through
              utmost professionalism, ensuring client satisfaction.
            </p>
            <Link to="/services" className="btn btn-green" style={{ marginTop: 30 }}>
              See What We Do <span className="arrow">→</span>
            </Link>
          </Reveal>

          <Reveal delay={120} className="split-media">
            <img
              className="main-img"
              src="/images/refinery-orig.jpg"
              alt="Petrochemical plant with storage tanks at dusk"
              loading="lazy"
            />
            <img
              className="float-img"
              src="/images/pipe.jpg"
              alt="Pipeline manifold with red valve wheels"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* founder */}
      <section className="services-section">
        <div className="container">
          <div className="split">
            <Reveal className="founder-photo">
              <img src={ceoImg} alt="Otunba Tunde S. Ogunberu, Chairman/CEO of TPENG Limited" />
              <div className="founder-chip">
                <strong>34+</strong>
                Years in Upstream Oil &amp; Gas
              </div>
            </Reveal>

            <Reveal delay={120}>
              <span className="kicker">Our Founder</span>
              <h2 className="section-title">
                Otunba Tunde S. Ogunberu
                <span className="founder-credentials">B.Sc (Hons), MBA, FCP</span>
              </h2>
              <p className="founder-role">
                Chairman/CEO · Oil, Gas &amp; Energy Professional · Procurement &amp; Supply Chain
                Leader
              </p>
              <p className="founder-rc">
                Tulolag Petroleum Energy and Gas Limited (TPENG Limited) · RC: 1837589
              </p>
              <p className="section-lede">
                A professional with over 34 years of experience in the upstream oil &amp; gas
                sector. Retired with deep expertise in strategic sourcing, oil &amp; gas
                contracting, supply chain management, and business process optimization.
              </p>
              <p className="section-lede">
                Now leading TPENG Limited and open to strategic collaborations in energy, oil &amp;
                gas contracting, logistics, and advisory services.
              </p>
              <ul className="chip-list">
                {competencies.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="founder-cards">
            <Reveal>
              <div className="founder-card">
                <h3>Professional Experience</h3>
                <p className="sub-head">Upstream Oil &amp; Gas · Pre-qualified Vendors Management System</p>
                <ul className="check-list">
                  <li>
                    <span className="tick">✓</span> Managed high-value procurement and contracting
                    for upstream oil &amp; gas operations
                  </li>
                  <li>
                    <span className="tick">✓</span> Drove cost optimization, vendor performance,
                    and compliance with procurement policies
                  </li>
                </ul>
                <p className="sub-head">Chairman/CEO — TPENG Limited, Lagos, Nigeria</p>
                <ul className="check-list">
                  <li>
                    <span className="tick">✓</span> Leading a full-service energy company providing
                    contracting, distribution, logistics, and training solutions
                  </li>
                </ul>
                <p className="sub-head">Services Offered</p>
                <ol>
                  {founderServices.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="founder-card">
                <h3>Professional Training &amp; Certifications</h3>
                <ol>
                  {trainings.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ol>
                <p className="sub-head">Professional Fellowship</p>
                <ul className="check-list">
                  <li>
                    <span className="tick">✓</span> Fellow, Center for Public Service Productivity
                    and Development (CEPROD) Global
                  </li>
                  <li>
                    <span className="tick">✓</span> Member, British Project Professionals (BPP)
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="founder-contact">
              <h3>Reach the Founder&rsquo;s Office</h3>
              <span className="item">
                📞&nbsp;
                <span>
                  <a href="tel:+2347050521111">+234 705 052 1111</a>,{' '}
                  <a href="tel:+2348137620368">+234 813 762 0368</a>
                </span>
              </span>
              <span className="item">
                ✉️&nbsp;<a href="mailto:info@tpengltd.com">info@tpengltd.com</a>
              </span>
              <span className="item">
                🌐&nbsp;
                <a href="https://tpengltd.com" target="_blank" rel="noopener noreferrer">
                  tpengltd.com
                </a>
              </span>
              <span className="item">
                📍&nbsp;9, Aina Crescent, Cashew Estate, Off Oreta Road, Igbogbo, Ikorodu, Lagos
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal className="center">
            <span className="kicker">Our Direction</span>
            <h2 className="section-title">Vision &amp; Mission</h2>
          </Reveal>

          <div className="vm-grid">
            <Reveal>
              <div className="vm-card vision">
                <div className="glyph">🎯</div>
                <h3>Our Vision</h3>
                <p>
                  To render excellent services using business to inspire, and to be the leading
                  provider of integrated solutions to clients&rsquo; needs.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="vm-card mission">
                <div className="glyph">🚀</div>
                <h3>Our Mission</h3>
                <p>
                  Whatever we do, we think to the end of the project. Every engagement is planned,
                  executed and monitored through to successful completion.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="container split">
          <Reveal className="split-media">
            <img
              className="main-img"
              src="/images/workers.jpg"
              alt="Oil rig worker at a control console"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={120}>
            <span className="kicker">Why Choose Us</span>
            <h2 className="section-title">Built on Passion, Delivered with Excellence</h2>
            <p className="section-lede">
              We underpin our core values by the guiding principles of passion, respect, integrity,
              monitoring and excellence — across upstream, midstream and downstream operations.
            </p>
            <ul className="check-list">
              <li><span className="tick">✓</span> Indigenous knowledge, international standards</li>
              <li><span className="tick">✓</span> Strict compliance to quality plans and specifications</li>
              <li><span className="tick">✓</span> Specialized manpower and training capability</li>
              <li><span className="tick">✓</span> End-to-end thinking on every project</li>
              <li><span className="tick">✓</span> Marine, oil &amp; gas and energy industry coverage</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
