import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import Reveal from '../components/Reveal'
import SignSvg from '../components/signs/SignSvg'
import { signCtaRow, whyChoose, applications, homeGallery } from '../data/homeContent'
import { site, telLink, waLink, enquireMessage } from '../config/site'

export default function Home() {
  usePageMeta({
    title: 'Road Safety Signage Solutions You Can Trust',
    description:
      'SS Enterprises, Ambala Cantt — road signs, traffic signage, highway direction boards and safety sign solutions with sharp visibility and dependable quality. Enquire today.',
  })
  const tel = telLink()
  const wa = waLink(enquireMessage('General signage enquiry'))

  return (
    <>
      <section className="hero" aria-label="Introduction">
        <div className="container hero-inner">
          <Reveal className="hero-copy">
            <span className="hero-kicker">Ambala Cantt · Haryana · India</span>
            <h1>
              Road Safety Signage<br />
              <span className="accent">Solutions</span> You Can Trust
            </h1>
            <p className="lede">
              Reliable road signs, traffic signage, highway direction boards and safety sign solutions
              designed to improve visibility, communication and road safety.
            </p>
            <div className="hero-cta">
              <Link to="/products" className="btn btn-primary btn-lg">Explore Our Products</Link>
              <Link to="/contact" className="btn btn-ghost btn-lg">Contact Our Team</Link>
            </div>
            <ul className="hero-points">
              <li>Retro-reflective traffic signs</li>
              <li>Highway direction boards</li>
              <li>Custom sign manufacturing</li>
            </ul>
          </Reveal>
        </div>
        <div className="hero-road" aria-hidden="true">
          <div className="lane" />
          <div className="lane" />
          <div className="lane" />
        </div>
      </section>

      <section className="section categories" id="categories">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Our Range</span>
            <h2>Featured Product Categories</h2>
            <p>
              A complete signage catalogue for Indian roads — engineered for clarity, weather resistance and
              dependable visibility at every speed.
            </p>
          </Reveal>
          <div className="cat-grid">
            {signCtaRow.map((c, i) => (
              <Reveal key={c.slug} delay={i * 70} className="cat-card">
                <Link to={`/products/${c.slug}`} className="cat-link">
                  <div className="cat-art"><SignSvg art={c.art} /></div>
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

      <section className="section about-strip">
        <div className="container about-grid">
          <Reveal className="about-copy">
            <span className="eyebrow">About SS Enterprises</span>
            <h2>Signage built for the realities of Indian roads</h2>
            <p>
              SS Enterprises, based in Ambala Cantt (Haryana), supplies road safety signs, traffic sign
              boards and highway direction signage. Our focus is simple: signs that remain legible and
              visible through sun, rain, dust and night driving — so regulatory information, warnings and
              directions always reach the road user in time.
            </p>
            <p className="muted">
              From cautionary triangles to overhead gantry panels, we manufacture to specification and supply
              across roads, highways, industrial campuses and public infrastructure.
            </p>
            <Link to="/about" className="btn btn-outline">More About Us</Link>
          </Reveal>
          <Reveal className="about-art glass" delay={140}>
            <SignSvg art={{ frame: 'cantilever', alt: 'Blue cantilever location board on steel structure' }} />
            <p className="art-caption">Cantilever mounted location signage</p>
          </Reveal>
        </div>
      </section>

      <section className="section why">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Why Choose Us</span>
            <h2>What sets our signage apart</h2>
          </Reveal>
          <div className="why-grid">
            {whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 80} className="why-card">
                <span className="why-icon" aria-hidden="true">{w.icon}</span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section applications">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Applications</span>
            <h2>Where our sign boards work</h2>
          </Reveal>
          <div className="app-grid">
            {applications.map((a, i) => (
              <Reveal key={a.title} delay={(i % 4) * 60} className="app-card">
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery-strip">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Sign Gallery</span>
            <h2>A look at our sign artwork</h2>
            <p className="muted">Catalogue artwork shown — worked samples from our product range, not completed site installations.</p>
          </Reveal>
          <div className="strip-grid">
            {homeGallery.map((g, i) => (
              <Reveal key={g.caption} delay={(i % 3) * 80} className="strip-card glass">
                <SignSvg art={g.art} className={g.wide ? 'wide' : ''} />
                <span className="strip-caption">{g.caption}</span>
              </Reveal>
            ))}
          </div>
          <div className="center-btn">
            <Link to="/gallery" className="btn btn-outline">Open Full Gallery</Link>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>Need signage for your road, highway or facility?</h2>
            <p>
              Share your requirement — sizes, quantities and location — and our team will respond with suitable
              sign specifications and supply details.
            </p>
          </div>
          <div className="cta-actions">
            <Link to="/contact?product=Enquiry" className="btn btn-light">Send an Enquiry</Link>
            {tel && <a href={tel} className="btn btn-outline-light">Call Our Team</a>}
            {wa && <a href={wa} target="_blank" rel="noreferrer" className="btn btn-wa">WhatsApp Us</a>}
          </div>
        </div>
      </section>
    </>
  )
}
