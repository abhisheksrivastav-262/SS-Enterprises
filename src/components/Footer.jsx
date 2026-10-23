import { Link } from 'react-router-dom'
import { site, productCategories, telLink, waLink } from '../config/site'

export default function Footer() {
  const tel = telLink()
  const wa = waLink('Hello SS Enterprises, I would like to discuss a signage requirement.')
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col footer-about">
          <div className="brand brand-light">
            <svg viewBox="0 0 44 44" className="brand-mark" aria-hidden="true">
              <circle cx="22" cy="22" r="20" fill="#d3202f" />
              <rect x="10" y="16" width="24" height="9" rx="2.5" fill="#fff" />
              <rect x="20" y="10" width="4" height="26" fill="#fff" />
              <rect x="10" y="30" width="24" height="6" rx="2" fill="#0f57a8" />
            </svg>
            <span className="brand-text"><strong>{site.name}</strong><small>Ambala Cantt · Haryana</small></span>
          </div>
          <p>
            Manufacturer and supplier of road safety signs, traffic sign boards and highway direction
            signage — serving roads, highways, industrial campuses and public infrastructure.
          </p>
          <address>
            Plot No. 539, Sonia Colony<br />
            Ambala Cantt, Haryana, India
          </address>
        </div>
        <div className="footer-col">
          <h4>Product Range</h4>
          <ul>
            {productCategories.map((c) => (
              <li key={c.slug}><Link to={`/products/${c.slug}`}>{c.name}</Link></li>
            ))}
            <li><Link to="/products">All Products &amp; Solutions</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/gallery">Gallery / Projects</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/contact?product=Enquiry">Enquire Now</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Get In Touch</h4>
          <ul>
            {tel ? <li><a href={tel}>Call our team</a></li> : null}
            {wa ? <li><a href={wa} target="_blank" rel="noreferrer">WhatsApp enquiry</a></li> : null}
            <li>
              <Link to="/contact" className="footer-cta-link">
                Use the enquiry form
              </Link>
            </li>
            <li className="muted">Phone &amp; WhatsApp details available via the enquiry form.</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="muted">Road signage · Traffic signs · Highway signboards · Facility signs</p>
        </div>
      </div>
    </footer>
  )
}
