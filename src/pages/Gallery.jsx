import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import Reveal from '../components/Reveal'
import SignSvg from '../components/signs/SignSvg'
import CatalogueChart from '../components/CatalogueChart'
import { cautionarySigns, mandatorySigns, specialSigns, facilitySigns } from '../data/products'
import { cautionArt, specialArt, facilityArt } from '../components/CatalogueChart'

const galleryItems = [
  { caption: 'Overhead gantry — four destination panels', note: 'Representative gantry artwork from our highway range.', art: { frame: 'gantry' }, wide: true },
  { caption: 'Cantilever structure with location board', note: 'Representative cantilever artwork.', art: { frame: 'cantilever' }, wide: true },
  { caption: 'Two-post roadside direction board', note: 'Standard roadside board layout.', art: { frame: 'board', rows: [{ hi: 'अम्बाला', en: 'Ambala', dist: '12' }, { hi: 'चंडीगढ़', en: 'Chandigarh', dist: '68' }] } },
  { caption: 'Advance direction board', note: 'Multi-row lane guidance panel.', art: { frame: 'board', rows: [{ hi: 'कानपुर', en: 'Kanpur', arrow: 'up' }, { hi: 'भरथना', en: 'Bharthana', arrow: 'left' }] } },
  { caption: 'Reassurance distance board', note: 'Post-junction distance confirmation.', art: { frame: 'board', rows: [{ hi: 'भोपाल', en: 'Bhopal', dist: '320' }] } },
  { caption: 'Flag-type direction sign', note: 'Arrow-headed deflector board.', art: { frame: 'flagBoard' }, wide: true },
  { caption: 'Roundabout warning triangle', note: 'From our cautionary range.', art: { frame: 'caution', glyph: 'roundabout' } },
  { caption: 'School zone warning with steps', note: 'Pedestrian safety signage.', art: { frame: 'caution', glyph: 'schoolAhead' } },
  { caption: 'Bus prohibition disc', note: 'Regulatory vehicle restriction sign.', art: { frame: 'prohibit', glyph: 'bus' } },
  { caption: 'Compulsory turn-left disc', note: 'Blue compulsory direction sign.', art: { frame: 'comp', glyph: 'left' } },
  { caption: 'Special board — school ahead', note: 'Blue location board range.', art: specialArt(specialSigns[6]) },
  { caption: 'Special board — pedestrian crossing', note: 'Blue location board range.', art: specialArt(specialSigns[2]) },
  { caption: 'Facility board — petrol pump', note: 'Facility sign range with arrow.', art: facilityArt(facilitySigns[0]) },
  { caption: 'Facility board — hospital', note: 'Facility sign range with distance.', art: facilityArt(facilitySigns[7]) },
  { caption: 'Route markers — NE / NH / SH / AH', note: 'Expressway and highway marker plates.', art: { frame: 'marker', kind: 'nh' } },
  { caption: 'Chevron and hazard markers', note: 'Curve and obstruction protection.', art: { frame: 'marker', kind: 'hazard2way' } },
]

export default function Gallery() {
  usePageMeta({
    title: 'Gallery — Road Sign & Highway Signage Artwork',
    description:
      'Image gallery of SS Enterprises sign artwork — traffic signs, highway boards, gantry signage, mandatory and facility signboards. Illustrative catalogue views.',
  })

  return (
    <>
      <section className="page-hero navy slim">
        <div className="container">
          <span className="eyebrow light">Gallery / Projects</span>
          <h1>Our signage, up close</h1>
          <p>
            Clear, un-cropped views of the sign artwork we manufacture — boards, structures and markers from
            every product family.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="callout amber">
            <strong>Note:</strong> the images below are illustrative catalogue artwork from the SS Enterprises
            product range — not photographs of completed installations. Site photographs are being collected
            and will be added as verified project records.
          </Reveal>

          <div className="gallery-grid">
            {galleryItems.map((g, i) => (
              <Reveal key={g.caption} delay={(i % 3) * 60} className={`g-card glass${g.wide ? ' wide' : ''}`}>
                <div className="g-media">
                  <SignSvg art={g.art} />
                </div>
                <div className="g-info">
                  <h3>{g.caption}</h3>
                  <p className="muted">{g.note}</p>
                  <span className="tag">Illustrative artwork</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="catalogue-block scroll-x">
            <h2 className="block-title">Cautionary Sign — full sheet</h2>
            <CatalogueChart slug="cautionary-signs" items={cautionarySigns.map((p) => ({ name: p.name, art: cautionArt(p) }))} />
          </Reveal>
          <Reveal className="catalogue-block scroll-x">
            <h2 className="block-title">Mandatory Sign — full sheet</h2>
            <CatalogueChart slug="mandatory-signs" items={mandatorySigns.map((p) => ({ name: p.name, art: allArtM(p) }))} />
          </Reveal>
          <Reveal className="catalogue-block scroll-x">
            <h2 className="block-title">S. S. Sign — full sheet</h2>
            <CatalogueChart slug="special-signboards" items={specialSigns.map((p) => ({ name: p.name, art: specialArt(p) }))} />
          </Reveal>
          <Reveal className="catalogue-block scroll-x">
            <h2 className="block-title">Facility Sign — full sheet</h2>
            <CatalogueChart slug="facility-signs" items={facilitySigns.map((p) => ({ name: p.name, art: facilityArt(p) }))} />
          </Reveal>

          <div className="center-btn">
            <Link to="/contact?product=Enquiry" className="btn btn-primary">Enquire About Signage</Link>
          </div>
        </div>
      </section>
    </>
  )
}

function allArtM(p) {
  if (p.special === 'horn') return { frame: 'comp', glyph: 'horn' }
  if (p.variant === 'prohibit') return { frame: 'prohibit', glyph: p.glyph, ban: p.ban === 'none' ? undefined : 'slash' }
  if (p.variant === 'comp') return { frame: 'comp', glyph: p.glyph }
  if (p.variant === 'limit') return { frame: 'limit', value: p.value }
  return { frame: p.variant, value: p.value }
}
