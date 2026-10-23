import { Link } from 'react-router-dom'
import SignSvg from './signs/SignSvg'
import { site, waLink, enquireMessage } from '../config/site'

export default function ProductCard({ name, desc, art, slug, featured = false }) {
  const wa = waLink(enquireMessage(name, `Category: ${slug}`))
  const to = `/contact?product=${encodeURIComponent(name)}&category=${encodeURIComponent(slug)}`
  return (
    <article className={`product-card${featured ? ' featured' : ''}`}>
      <Link to={to} className="product-media" aria-label={`Enquire about ${name}`}>
        <SignSvg art={art} />
      </Link>
      <div className="product-body">
        <h3 className="product-name">{name}</h3>
        <p className="product-desc">{desc}</p>
        <div className="product-actions">
          <Link to={to} className="btn btn-outline btn-sm">Enquire About This Product</Link>
          {wa && (
            <a className="btn btn-wa btn-sm" href={wa} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
