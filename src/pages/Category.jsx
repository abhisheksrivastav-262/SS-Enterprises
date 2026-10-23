import { useParams, Link, Navigate } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import Reveal from '../components/Reveal'
import SignSvg from '../components/signs/SignSvg'
import ProductCard from '../components/ProductCard'
import CatalogueChart, { allChartItems, artFor } from '../components/CatalogueChart'
import { CATEGORY_META, highwaySigns } from '../data/products'
import { productCategories } from '../config/site'

export default function Category() {
  const { slug } = useParams()
  const meta = CATEGORY_META[slug]

  usePageMeta({
    title: meta ? `${meta.heading} — ${meta.title}` : 'Category Not Found',
    description: meta
      ? `${meta.intro} SS Enterprises, Ambala Cantt — enquire for supply.`
      : 'Product category not found.',
  })

  if (!meta) return <Navigate to="/products" replace />
  const isHighway = slug === 'highway-direction-signs'

  /* Highway category gets a richer layout because its products are large structures */
  const galleryRows = isHighway
    ? [highwaySigns[2], highwaySigns[3], highwaySigns[8], highwaySigns[10], highwaySigns[11], highwaySigns[9]]
    : []

  return (
    <>
      <section className="page-hero green">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <Link to="/products">Products</Link> <span>/</span>{' '}
            <strong>{meta.title}</strong>
          </nav>
          <h1>{meta.heading}</h1>
          <p>{meta.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Other-category tabs for quick browsing */}
          <div className="cat-tabs" role="tablist" aria-label="Product categories">
            {productCategories.map((c) => (
              <Link
                key={c.slug}
                to={`/products/${c.slug}`}
                className={`cat-tab${c.slug === slug ? ' active' : ''}`}
                aria-current={c.slug === slug ? 'page' : undefined}
              >
                {c.name}
              </Link>
            ))}
          </div>

          {!isHighway && (
            <Reveal className="catalogue-block">
              <CatalogueChart slug={slug} items={allChartItems(slug)} />
              <p className="chart-note muted">
                Full-sheet reference chart — each sign below is available as an individually produced board.
              </p>
            </Reveal>
          )}

          {isHighway ? (
            <>
              <Reveal className="catalogue-block wide glass">
                <h2 className="block-title">Overhead Gantry &amp; Cantilever Sign</h2>
                <SignSvg art={{ frame: 'gantry' }} />
                <SignSvg art={{ frame: 'cantilever' }} />
              </Reveal>
              <Reveal className="catalogue-block wide glass">
                <h2 className="block-title">Direction Boards &amp; Flag Signs</h2>
                {galleryRows.map((p, i) => (
                  <div className="hw-row" key={i}>
                    <SignSvg art={artFor(slug, p)} />
                  </div>
                ))}
              </Reveal>
              <Reveal className="catalogue-block wide glass">
                <h2 className="block-title">Route Markers &amp; Hazard Plates</h2>
                <div className="marker-row">
                  {['ne', 'nh', 'sh', 'ah', 'chevron', 'hazard', 'hazard2way', 'object'].map((m) => (
                    <span key={m}><SignSvg art={{ frame: 'marker', kind: m }} /></span>
                  ))}
                </div>
              </Reveal>
              <Reveal className="catalogue-block wide glass">
                <h2 className="block-title">Custom Direction Signboards</h2>
                <SignSvg art={{ frame: 'customBoard', wide: true }} />
              </Reveal>
            </>
          ) : null}

          <div className="section-head">
            <span className="eyebrow">Browse</span>
            <h2>{meta.title} catalogue</h2>
            <p className="muted">Every item shown below is produced to specification — click any sign to enquire.</p>
          </div>

          <div className="product-grid">
            {meta.data.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) * 60}>
                <ProductCard
                  name={p.name}
                  desc={
                    p.desc ||
                    'Supplied to specification with a reflective finish and durable colours. Enquire for sizes and quantities.'
                  }
                  art={artFor(slug, p)}
                  slug={slug}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>Need bulk quantities or custom sizes?</h2>
            <p>Tell us the category, quantity and delivery location — our team responds quickly.</p>
          </div>
          <div className="cta-actions">
            <Link to={`/contact?product=${encodeURIComponent(meta.title)}&category=${encodeURIComponent(slug)}`} className="btn btn-light">
              Enquire About {meta.title}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
