import { Link, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import usePageMeta from '../hooks/usePageMeta'
import Reveal from '../components/Reveal'
import { site, waLink, telLink, mapsLink, mapsEmbed, enquireMessage, productCategories } from '../config/site'

const initialValues = {
  fullName: '',
  phone: '',
  email: '',
  category: '',
  quantity: '',
  location: '',
  message: '',
}

export default function Contact() {
  usePageMeta({
    title: 'Contact Us — Send Your Signage Enquiry',
    description:
      'Contact SS Enterprises, Ambala Cantt — send signage enquiries with product category, quantity and location. Reach the team through the website enquiry form.',
  })

  const [params] = useSearchParams()
  const preProduct = params.get('product') || ''
  const preCategory = params.get('category') || ''
  const prefillCategory =
    preCategory && productCategories.some((c) => c.slug === preCategory)
      ? productCategories.find((c) => c.slug === preCategory).slug
      : ''

  const [values, setValues] = useState({ ...initialValues, category: prefillCategory, message: preProduct && preProduct !== 'Enquiry' ? `Product of interest: ${preProduct}` : '' })
  const [productInterest, setProductInterest] = useState(preProduct === 'Enquiry' ? '' : preProduct)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const wa = waLink(enquireMessage('General signage enquiry'))
  const tel = telLink()
  const waConfigured = Boolean(site.whatsapp)

  function set(k, v) {
    setValues((prev) => ({ ...prev, [k]: v }))
    setErrors((prev) => ({ ...prev, [k]: undefined }))
  }

  function validate() {
    const e = {}
    if (!values.fullName.trim()) e.fullName = 'Please enter your full name.'
    if (!/^[+\d][\d\s-]{6,14}$/.test(values.phone.trim())) e.phone = 'Please enter a valid phone number.'
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) e.email = 'Please enter a valid email address.'
    if (!values.category) e.category = 'Please choose a product category.'
    if (!values.location.trim()) e.location = 'Please enter your delivery / project location.'
    if (!values.message.trim()) e.message = 'Please describe your requirement briefly.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function buildMessage() {
    const lines = [
      `Full Name: ${values.fullName.trim()}`,
      `Phone: ${values.phone.trim()}`,
      values.email ? `Email: ${values.email.trim()}` : null,
      `Product Category: ${values.category}`,
      values.quantity ? `Quantity: ${values.quantity.trim()}` : 'Quantity: (not specified)',
      `Location: ${values.location.trim()}`,
      productInterest ? `Specific Product: ${productInterest}` : null,
      `Message: ${values.message.trim()}`,
    ].filter(Boolean)
    return `Signage Enquiry — ${site.name}\n${lines.join('\n')}`
  }

  function onSubmit(ev) {
    ev.preventDefault()
    if (!validate()) return
    const msg = buildMessage()
    if (site.whatsapp) {
      const link = waLink(msg)
      if (link) {
        window.open(link, '_blank', 'noopener')
        setSent(true)
        return
      }
    }
    // Fallback when WhatsApp number is not yet configured
    window.print()
    alert(
      "Your enquiry details are ready. The website's WhatsApp number is not configured yet — please share these details with our team, or ask the website owner to activate WhatsApp."
    )
    setSent(true)
  }

  return (
    <>
      <section className="page-hero navy slim">
        <div className="container">
          <span className="eyebrow light">Contact Us</span>
          <h1>Talk to the SS Enterprises team</h1>
          <p>
            Share your signage requirement — product category, quantity and location — and we will respond
            with specifications and supply details.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <Reveal className="contact-info">
            <div className="info-card">
              <h2>Business Address</h2>
              <address>
                <strong>{site.name}</strong><br />
                {site.address.line1}<br />
                {site.address.city}, {site.address.state}, {site.address.country}
              </address>
              <a className="btn btn-outline btn-sm" href={mapsLink} target="_blank" rel="noreferrer">
                Open in Google Maps →
              </a>
            </div>

            <div className="info-card">
              <h2>Direct Contact</h2>
              {tel ? (
                <a className="btn btn-primary btn-sm block" href={tel}>
                  Call Our Team
                </a>
              ) : (
                <p className="muted">
                  Phone: available on request — please send your enquiry with a call-back number.
                </p>
              )}
              {wa ? (
                <a className="btn btn-wa btn-sm block" href={wa} target="_blank" rel="noreferrer">
                  WhatsApp Our Team
                </a>
              ) : (
                <p className="muted">
                  WhatsApp support will be activated once the business number is verified — meanwhile please
                  use the enquiry form.
                </p>
              )}
            </div>

            <div className="info-card">
              <h2>Working Enquiry Flow</h2>
              <ol>
                <li>Fill the enquiry form with complete details.</li>
                <li>When WhatsApp is configured, the message opens ready to send.</li>
                <li>Our team responds with specifications and pricing.</li>
              </ol>
            </div>
          </Reveal>

          <Reveal className="contact-form-wrap glass" delay={100}>
            <h2>Send an Enquiry</h2>
            <p className="muted">All fields marked * are required — every submitted field is shared with the team.</p>
            <form onSubmit={onSubmit} noValidate>
              <div className="field-row">
                <label className="field">
                  <span>Full Name *</span>
                  <input type="text" value={values.fullName} onChange={(e) => set('fullName', e.target.value)} autoComplete="name" aria-invalid={!!errors.fullName} />
                  {errors.fullName && <em className="err">{errors.fullName}</em>}
                </label>
                <label className="field">
                  <span>Phone Number *</span>
                  <input type="tel" value={values.phone} onChange={(e) => set('phone', e.target.value)} autoComplete="tel" aria-invalid={!!errors.phone} />
                  {errors.phone && <em className="err">{errors.phone}</em>}
                </label>
              </div>
              <div className="field-row">
                <label className="field">
                  <span>Email (optional)</span>
                  <input type="email" value={values.email} onChange={(e) => set('email', e.target.value)} autoComplete="email" aria-invalid={!!errors.email} />
                  {errors.email && <em className="err">{errors.email}</em>}
                </label>
                <label className="field">
                  <span>Quantity (optional)</span>
                  <input type="text" placeholder="e.g. 50 pieces" value={values.quantity} onChange={(e) => set('quantity', e.target.value)} />
                </label>
              </div>
              <div className="field-row">
                <label className="field">
                  <span>Product Category *</span>
                  <select value={values.category} onChange={(e) => set('category', e.target.value)} aria-invalid={!!errors.category}>
                    <option value="">Select a category…</option>
                    {productCategories.map((c) => (
                      <option key={c.slug} value={c.name}>{c.name}</option>
                    ))}
                    <option value="Other / Custom Signage">Other / Custom Signage</option>
                  </select>
                  {errors.category && <em className="err">{errors.category}</em>}
                </label>
                <label className="field">
                  <span>Delivery / Project Location *</span>
                  <input type="text" placeholder="City, State" value={values.location} onChange={(e) => set('location', e.target.value)} aria-invalid={!!errors.location} />
                  {errors.location && <em className="err">{errors.location}</em>}
                </label>
              </div>
              <div className="field">
                <span>Specific product of interest (optional)</span>
                <input type="text" value={productInterest} onChange={(e) => setProductInterest(e.target.value)} placeholder="e.g. School Ahead warning board" />
              </div>
              <div className="field">
                <span>Message *</span>
                <textarea rows="4" placeholder="Sizes, models, colours, timelines — anything that helps us prepare a quotation." value={values.message} onChange={(e) => set('message', e.target.value)} aria-invalid={!!errors.message} />
                {errors.message && <em className="err">{errors.message}</em>}
              </div>
              <button type="submit" className="btn btn-primary btn-lg">
                {waConfigured ? 'Send on WhatsApp' : 'Submit Enquiry'}
              </button>
              {sent && (
                <p className="sent-note" role="status">
                  Your enquiry has been prepared and handed over for sending. We will get back to you shortly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Find Us</span>
            <h2>Location map</h2>
            <p>{site.fullAddress}</p>
          </Reveal>
          <Reveal className="map-embed glass">
            <iframe
              title="SS Enterprises location map — Sonia Colony, Ambala Cantt"
              src={mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </Reveal>
        </div>
      </section>
    </>
  )
}
