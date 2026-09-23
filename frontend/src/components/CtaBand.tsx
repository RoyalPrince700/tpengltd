import { Link } from 'react-router-dom'

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h2>Need help with easier industrial solutions? We are experts!</h2>
          <p>
            The only place where you&rsquo;ll get the perfect solution for all your industry needs.
          </p>
        </div>
        <Link to="/contact" className="btn btn-gold">
          Take Action <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  )
}
