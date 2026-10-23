import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import Reveal from '../components/Reveal'
import SignSvg from '../components/signs/SignSvg'
import { productCategories } from '../config/site'

export default function Products() {
  usePageMeta({
    title: 'Products & Solutions — All Road Sign Categories',
    description:
      'Complete SS Enterprises catalogue: cautionary warning signs, mandatory regulatory signs, special signboards, facility signs and highway direction signage with enquiry support.',
  })

  return (
    <>
      <section className="page-hero navy">
        <div className="container">
          <span className="eyebrow light">Products &amp; Solutions</span>
          <h1>The complete road signage catalogue</h1>
          <p>
            Browse five sign families covering every instruction a road needs — then enquire directly on any
            product that fits your project.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Categories</span>
            <h2>Choose a sign family</h2>
          </Reveal>
          <div className="cat-grid home">
            {productCategories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 70} className="cat-card">
                <Link to={`/products/${c.slug}`} className="cat-link">
                  <CategoryPreview slug={c.slug} />
                  <div>
                    <h3>{c.name}</h3>
                    <p>{c.short}</p>
                    <span className="cat-more">View category <span className="arrow" aria-hidden="true">&rarr;</span></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>Not sure which sign you need?</h2>
            <p>Send us the location and purpose — we will recommend suitable signage and sizes.</p>
          </div>
          <div className="cta-actions">
            <Link to="/contact?product=Enquiry" className="btn btn-light">Ask Our Team</Link>
          </div>
        </div>
      </section>
    </>
  )
}

function CategoryPreview({ slug }) {
  const arts = {
    'cautionary-signs': [
      { frame: 'caution', glyph: 'leftCurve' },
      { frame: 'caution', glyph: 'crossRoad' },
      { frame: 'caution', glyph: 'dangerousDip' },
    ],
    'mandatory-signs': [
      { frame: 'noEntry' },
      { frame: 'stop' },
      { frame: 'comp', glyph: 'up' },
    ],
    'special-signboards': [
      { frame: 'special', g: { frame: 'caution', glyph: 'roundabout' }, label: 'Round About' },
      { frame: 'special', g: { type: 'stop' }, label: 'Stop' },
      { frame: 'special', g: { type: 'noParking' }, label: 'No Parking' },
    ],
    'facility-signs': [
      { frame: 'facility', icon: 'pump', label: 'Petrol Pump', arrow: 'left' },
      { frame: 'facility', icon: 'hospitalH', label: 'Hospital' },
      { frame: 'facility', icon: 'bus', label: 'Bus Stop' },
    ],
    'highway-direction-signs': [
      { frame: 'board', rows: [{ hi: 'दिशा', en: 'Direction', dist: '12' }], posts: 0, alt: 'Direction board' },
      { frame: 'marker', kind: 'nh' },
      { frame: 'marker', kind: 'hazard' },
    ],
  }
  return (
    <div className="cat-art" aria-hidden="true">
      {arts[slug].map((a, i) => (
        <span className="cat-art-item" key={i}><SignSvg art={a} /></span>
      ))}
    </div>
  )
}
