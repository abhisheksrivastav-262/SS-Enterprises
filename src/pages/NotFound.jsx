import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import SignSvg from '../components/signs/SignSvg'

export default function NotFound() {
  usePageMeta({ title: 'Page Not Found', description: 'The page you requested could not be found.' })
  return (
    <section className="page-hero navy slim">
      <div className="container center">
        <div className="nf-art">
          <SignSvg art={{ frame: 'caution', glyph: 'leftCurve' }} />
          <SignSvg art={{ frame: 'comp', glyph: 'up' }} />
        </div>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist. Take the next exit instead:</p>
        <div className="hero-cta center">
          <Link to="/" className="btn btn-primary">Back to Home</Link>
          <Link to="/products" className="btn btn-ghost">View Products</Link>
        </div>
      </div>
    </section>
  )
}
