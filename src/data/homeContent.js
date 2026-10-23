/* Home page content — signage artwork via SignSvg art descriptors */

export const heroSigns = [
  { frame: 'comp', glyph: 'up', alt: 'Straight ahead compulsory sign' },
  { frame: 'caution', glyph: 'pedestrian', alt: 'Pedestrian crossing sign' },
  { frame: 'marker', kind: 'nh', alt: 'National highway route marker' },
]

export const signCtaRow = [
  {
    slug: 'cautionary-signs',
    name: 'Cautionary Signs',
    short: 'Warning triangles for bends, junctions, gradients, work zones and hazards.',
    art: { frame: 'caution', glyph: 'tJunction' },
  },
  {
    slug: 'mandatory-signs',
    name: 'Mandatory Signs',
    short: 'Statutory prohibitions, speed limits and compulsory direction discs.',
    art: { frame: 'prohibit', glyph: 'bus' },
  },
  {
    slug: 'special-signboards',
    name: 'Special Signboards',
    short: 'Blue location boards pairing symbols with clear white text.',
    art: { frame: 'special', g: { frame: 'caution', glyph: 'schoolAhead' }, label: 'School Ahead' },
  },
  {
    slug: 'facility-signs',
    name: 'Facility Signs',
    short: 'Petrol pump, hospital, parking, transit and public facility boards.',
    art: { frame: 'facility', icon: 'pump', label: 'Petrol Pump', arrow: 'left' },
  },
  {
    slug: 'highway-direction-signs',
    name: 'Highway & Direction',
    short: 'Gantry, cantilever, destination and route marker signage.',
    art: { frame: 'board', rows: [{ hi: 'अम्बाला', en: 'Ambala', dist: '12', arrow: 'up' }], color: 'green', posts: 0, alt: 'Green direction board' },
  },
]

export const whyChoose = [
  { icon: '◐', title: 'High Night Visibility', text: 'Retro-reflective sheeting keeps every legend clearly readable under headlights — indispensable for night driving safety.' },
  { icon: '◎', title: 'Specification-Driven', text: 'Sizes, colours, symbols and legends follow road-safety conventions and client drawings, from single discs to gantry panels.' },
  { icon: '✚', title: 'Complete Sign Family', text: 'Cautionary, mandatory, special, facility and highway direction boards — one supplier for the entire traffic sign requirement.' },
  { icon: '⚙', title: 'Manufacturing Capability', text: 'In-house fabrication for boards, backing and mounting systems enables repeat quality and dependable delivery timelines.' },
  { icon: '⇄', title: 'Flexible Supply', text: 'Single-piece or bulk quantities with support for project-aligned delivery schedules to suit site progress.' },
  { icon: '✓', title: 'Enquiry-Led Service', text: 'Direct access to the team for product selection, sizing guidance and quick, no-obligation quotations.' },
]

export const applications = [
  { title: 'Roads & Highways', text: 'Advance direction, reassurance and hazard warnings for national and state highway stretches.' },
  { title: 'City Traffic', text: 'Regulatory discs and junction warnings for municipal roads, market streets and crossings.' },
  { title: 'Industrial Facilities', text: 'Campus and plant signage for internal roads, gates, parking and restricted zones.' },
  { title: 'Parking Areas', text: 'Parking designation, no-parking and facility boards for organised vehicle movement.' },
  { title: 'Public Infrastructure', text: 'Directional and facility signage for bus stops, hospitals, schools and civic amenities.' },
]

export const homeGallery = [
  { caption: 'Advance direction board (green)', art: { frame: 'board', rows: [{ hi: 'कानपुर', en: 'Kanpur', arrow: 'up' }, { hi: 'भरथना', en: 'Bharthana', arrow: 'left' }], posts: 0 }, wide: true },
  { caption: 'Compulsory direction disc', art: { frame: 'comp', glyph: 'up' } },
  { caption: 'Stop — regulatory octagon', art: { frame: 'stop' } },
  { caption: 'National highway marker', art: { frame: 'marker', kind: 'nh' } },
  { caption: 'Hazard marker board', art: { frame: 'marker', kind: 'hazard' } },
  { caption: 'Petrol pump facility board', art: { frame: 'facility', icon: 'pump', label: 'Petrol Pump', arrow: 'left' } },
]
