import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    image: '/images/hero-platform.jpg',
    tag: 'Indigenous · Local & Foreign Expertise',
    title: (
      <>
        Powering Nigeria&rsquo;s <em>Oil, Gas &amp; Energy</em> Industry
      </>
    ),
    text: 'Support services across the Nigerian upstream, midstream and downstream oil & gas, marine and energy industry — delivered with utmost professionalism.',
  },
  {
    image: '/images/hero-pipeline.jpg',
    tag: 'Engineering · Procurement · Logistics',
    title: (
      <>
        Exceptional Delivery to the <em>Highest Quality Standard</em>
      </>
    ),
    text: 'From pipeline and storage facilities to construction and asset buy-back, we think to the end of every project we take on.',
  },
  {
    image: '/images/hero-refinery.jpg',
    tag: 'Downstream & Midstream Supply',
    title: (
      <>
        Your Trusted <em>AGO, PMS &amp; LPG</em> Supply Partner
      </>
    ),
    text: 'Dependable diesel supply, petrol at the best price, and LPG retail outlets serving businesses and final consumers.',
  },
]

const SLIDE_MS = 6500

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_MS)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[index]

  return (
    <div className="hero">
      {slides.map((s, i) => (
        <div
          key={s.image}
          className={`hero-slide ${i === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${s.image})` }}
        />
      ))}

      <div className="hero-content" key={index}>
        <span className="hero-tag">{slide.tag}</span>
        <h1>{slide.title}</h1>
        <p>{slide.text}</p>
        <div className="hero-actions">
          <Link to="/services" className="btn btn-gold">
            Explore Our Services <span className="arrow">→</span>
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Contact Us
          </Link>
        </div>
      </div>

      <div className="hero-dots">
        {slides.map((s, i) => (
          <button
            key={s.image}
            className={i === index ? 'active' : ''}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}
