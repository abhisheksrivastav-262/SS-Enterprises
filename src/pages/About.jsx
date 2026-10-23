import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import Reveal from '../components/Reveal'
import SignSvg from '../components/signs/SignSvg'
import CatalogueChart from '../components/CatalogueChart'
import { cautionarySigns } from '../data/products'
import { cautionArt } from '../components/CatalogueChart'

const capacities = [
  ['Reflective sheeting', 'Engineer-grade retro-reflective sheeting for dependable night legibility'],
  ['Board build', 'Rigid backing sheets with protected edges and clean, weather-ready finish'],
  ['Colour systems', 'Standard signalling colours for warning, regulatory and directional signage'],
  ['Mounting structures', 'Pole, cantilever and gantry compatible mounting arrangements'],
]

export default function About() {
  usePageMeta({
    title: 'About Us — Road Safety, Traffic & Highway Signage Company',
    description:
      'SS Enterprises, Ambala Cantt (Haryana) — road safety signs, traffic sign boards and highway signage manufacturer focused on visibility, legibility and specification-driven supply.',
  })

  return (
    <>
      <section className="page-hero navy">
        <div className="container">
          <span className="eyebrow light">About Us</span>
          <h1>Clear roads begin with clear signs</h1>
          <p>
            SS Enterprises builds the sign language of India's roads — warnings that arrive before the hazard,
            rules that catch the eye, and directions that leave no doubt.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-main-grid">
          <Reveal>
            <h2>SS Enterprises — Road Safety Signage Solutions</h2>
            <p>
              SS Enterprises is a road signage business based at Plot No. 539, Sonia Colony, Ambala Cantt,
              Haryana. We manufacture and supply road safety signs, traffic sign boards and highway signage —
              a complete family of boards that helps drivers, riders and pedestrians read the road accurately
              and act in time.
            </p>
            <p>
              Our work centres on road safety and clear visual communication. Every sign we produce carries
              one job: transfer information to a moving road user at the right moment. That is why we hold
              sign specification — scale, symbol, colour contrast and placement guidance — to professional
              standards, and why every legend is finished for sharp contrast and dependable visibility.
            </p>
            <p>
              From junction warnings and regulatory discs on city roads to bilingual destination panels on
              highways and facility boards inside industrial campuses, our signage supports safe, predictable
              movement everywhere vehicles and people share space.
            </p>
          </Reveal>
          <Reveal className="about-side" delay={120}>
            <div className="about-side-art glass">
              <SignSvg art={{ frame: 'caution', glyph: 'roundabout', alt: 'Roundabout warning sign' }} />
              <SignSvg art={{ frame: 'comp', glyph: 'up', alt: 'Straight ahead disc' }} />
              <SignSvg art={{ frame: 'marker', kind: 'sh', alt: 'State highway marker' }} />
              <SignSvg art={{ frame: 'facility', icon: 'bus', label: 'Bus Stop' }} />
              <SignSvg art={{ frame: 'special', g: { frame: 'caution', glyph: 'speedBreaker' }, label: 'Speed Breaker' }} />
            </div>
            <Link to="/products" className="btn btn-primary">Browse the Product Range</Link>
          </Reveal>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Where Our Signs Appear</span>
            <h2>Applications across Indian infrastructure</h2>
          </Reveal>
          <div className="app-grid">
            <Reveal className="app-card"><h3>Roads &amp; Junctions</h3><p>City street warnings, regulatory discs and junction control signage for smooth, safe traffic flow.</p></Reveal>
            <Reveal className="app-card" delay={80}><h3>Highways &amp; Expressways</h3><p>Green direction boards, route markers, gantry and cantilever signage aligned with highway practice.</p></Reveal>
            <Reveal className="app-card" delay={160}><h3>Industrial Facilities</h3><p>In-plant roads, gates, truck parking and restricted zone boards for organised site movement.</p></Reveal>
            <Reveal className="app-card" delay={240}><h3>Parking Areas</h3><p>Parking designation, no-parking and facility boards for orderly vehicle circulation.</p></Reveal>
            <Reveal className="app-card" delay={320}><h3>Public Infrastructure</h3><p>Bus stops, hospitals, schools and civic amenities supported with clear facility signage.</p></Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Product Focus</span>
            <h2>Visibility, legibility and suitable specifications</h2>
            <p>
              Attention to retro-reflective performance, contrast, sizing and finish is what makes a sign
              genuinely functional — these commitments guide every board leaving our works.
            </p>
          </Reveal>
          <div className="cap-grid">
            {capacities.map((c, i) => (
              <Reveal key={c[0]} delay={i * 70} className="cap-card">
                <h3>{c[0]}</h3>
                <p>{c[1]}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Example Range</span>
            <h2>Cautionary sign artwork preview</h2>
          </Reveal>
          <Reveal>
            <CatalogueChart slug="cautionary-signs" items={cautionarySigns.map((p) => ({ name: p.name, art: cautionArt(p) }))} className="scroll-x" />
          </Reveal>
          <div className="center-btn">
            <Link to="/products/cautionary-signs" className="btn btn-outline">View the Cautionary Catalogue</Link>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>Planning a signage requirement?</h2>
            <p>Talk to the team about quantities, sizes and delivery locations — we respond with clear specifications.</p>
          </div>
          <div className="cta-actions">
            <Link to="/contact?product=Enquiry" className="btn btn-light">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
