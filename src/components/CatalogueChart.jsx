import { cautionarySigns, mandatorySigns, specialSigns, facilitySigns } from '../data/products'
import SignSvg from './signs/SignSvg'
import { BoardRows } from './signs/SignSvg'

export function mandatoryArt(p) {
  if (p.special === 'horn') return { frame: 'comp', glyph: 'horn', alt: `${p.name} sign` }
  switch (p.variant) {
    case 'limit':
      return { frame: 'limit', value: p.value || '50', alt: `${p.name} sign` }
    case 'prohibit':
      return { frame: 'prohibit', glyph: p.glyph, ban: p.ban === 'none' ? undefined : 'slash', alt: `${p.name} sign` }
    case 'comp':
      return { frame: 'comp', glyph: p.glyph, alt: `${p.name} sign` }
    default:
      return { frame: p.variant, value: p.value, glyph: p.glyph, alt: `${p.name} sign` }
  }
}

export function specialArt(p) {
  return { frame: 'special', g: p.g || { frame: 'circle', type: p.type, value: p.value }, label: p.name, alt: `${p.name} special signboard` }
}

export function facilityArt(p) {
  return { frame: 'facility', icon: p.icon, label: p.name, meters: p.meters, arrow: p.arrow }
}

export function cautionArt(p) {
  return { frame: 'caution', glyph: p.glyph, alt: `${p.name} cautionary sign` }
}

export function highwayArt(p) {
  if (p.marker === 'nh2') return { frame: 'marker', kind: 'nh' }
  if (p.marker) return { frame: 'marker', kind: p.marker }
  return { frame: p.frame, rows: p.rows, color: 'green', compact: p.compact !== false, alt: `${p.name}` }
}

export function artFor(slug, p) {
  switch (slug) {
    case 'cautionary-signs':
      return cautionArt(p)
    case 'mandatory-signs':
      return mandatoryArt(p)
    case 'special-signboards':
      return specialArt(p)
    case 'facility-signs':
      return facilityArt(p)
    default:
      return highwayArt(p)
  }
}

function chartItem(slug, p) {
  return { name: p.name, art: artFor(slug, p) }
}

const chartProps = {
  'cautionary-signs': { title: 'Cautionary Sign', max: 22, cols: 7 },
  'mandatory-signs': { title: 'Mandatory Sign', max: 18, cols: 6 },
  'special-signboards': { title: 'S. S. Sign', max: 11, cols: 6 },
  'facility-signs': { title: 'Facility Sign', max: 14, cols: 6 },
}

/* Render a full catalogue sheet like the supplied reference images */
export default function CatalogueChart({ slug, items, className = '' }) {
  const props = chartProps[slug]
  if (!props || !items) return null
  const list = items.slice(0, props.max)
  return (
    <figure className={`chart-sheet ${className}`} aria-label={`${props.title} full catalogue chart`}>
      <figcaption className="chart-title">{props.title}</figcaption>
      <div className={`chart-grid cols-${props.cols}`}>
        {list.map((item) => (
          <div className="chart-cell" key={item.name}>
            <SignSvg art={item.art} />
            <span className="chart-caption">{item.name}</span>
          </div>
        ))}
      </div>
    </figure>
  )
}

export function allChartItems(slug) {
  switch (slug) {
    case 'cautionary-signs':
      return cautionarySigns.map((p) => chartItem(slug, p))
    case 'mandatory-signs':
      return mandatorySigns.map((p) => chartItem(slug, p))
    case 'special-signboards':
      return specialSigns.map((p) => chartItem(slug, p))
    case 'facility-signs':
      return facilitySigns.map((p) => chartItem(slug, p))
    default:
      return []
  }
}
