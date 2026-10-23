import { useState, useRef, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { site, productCategories } from '../config/site'

function Logo() {
  return (
    <Link to="/" className="brand" aria-label={`${site.name} home`}>
      <svg viewBox="0 0 44 44" className="brand-mark" aria-hidden="true">
        <circle cx="22" cy="22" r="20" fill="#d3202f" />
        <rect x="10" y="16" width="24" height="9" rx="2.5" fill="#fff" />
        <rect x="20" y="10" width="4" height="26" fill="#fff" />
        <rect x="10" y="30" width="24" height="6" rx="2" fill="#0f57a8" />
      </svg>
      <span className="brand-text">
        <strong>{site.name}</strong>
        <small>Road Signage · Ambala Cantt</small>
      </span>
    </Link>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const location = useLocation()
  const dropRef = useRef(null)

  useEffect(() => {
    setOpen(false)
    setDropOpen(false)
  }, [location])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    document.body.classList.add('menu-open')
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('menu-open')
    }
  }, [open])

  useEffect(() => {
    const onClick = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  const navCls = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`

  return (
    <header className="site-header">
      <div className="masthead">
        <div className="container masthead-inner">
          <Logo />
          <button
            className={`hamburger${open ? ' open' : ''}`}
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
          <nav id="primary-nav" className={`primary-nav${open ? ' open' : ''}`} aria-label="Main navigation">
            <div className="nav-mobile-head">
              <Logo />
              <button type="button" className="nav-close" aria-label="Close menu" onClick={() => setOpen(false)}>
                ✕
              </button>
            </div>
            <ul>
              <li><NavLink to="/" className={navCls} end>Home</NavLink></li>
              <li><NavLink to="/about" className={navCls}>About Us</NavLink></li>
              <li className={`has-drop${dropOpen ? ' expanded' : ''}`} ref={dropRef}>
                <button
                  className="nav-link drop-toggle"
                  aria-expanded={dropOpen}
                  aria-haspopup="true"
                  onClick={() => setDropOpen((v) => !v)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setDropOpen((v) => !v)
                    }
                    if (e.key === 'ArrowDown') {
                      e.preventDefault()
                      setDropOpen(true)
                    }
                  }}
                >
                  Products <span className="caret" aria-hidden="true" />
                </button>
                <ul className="dropdown">
                  {productCategories.map((c) => (
                    <li key={c.slug}>
                      <NavLink to={`/products/${c.slug}`} className="dropdown-link">
                        <span>{c.name}</span>
                        <small>{c.short}</small>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li><NavLink to="/gallery" className={navCls}>Gallery</NavLink></li>
              <li><NavLink to="/contact" className={navCls}>Contact Us</NavLink></li>
              <li>
                <Link to="/contact?product=Enquiry" className="btn btn-primary btn-sm nav-cta">Enquire Now</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
