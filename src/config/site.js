// Site configuration — update contact details here once verified.
// When `phone`, `whatsapp` or `email` are null, the related buttons/links
// are hidden automatically across the website.

export const site = {
  name: 'SS Enterprises',
  tagline: 'Road Safety Signage Solutions',
  category:
    'Road Safety Signs, Traffic Sign Boards, Highway Signage, Road Direction Boards, Mandatory Signs, Facility Signs, Signage Manufacturing and Supply',
  fullAddress: 'Plot No. 539, Sonia Colony, Ambala Cantt, Haryana, India',
  address: {
    line1: 'Plot No. 539, Sonia Colony',
    city: 'Ambala Cantt',
    district: 'Ambala',
    state: 'Haryana',
    country: 'India',
  },
  // Verified contact details — set to a value to activate call / WhatsApp / email actions.
  phone: '+91 93156 88058', // e.g. '+919876543210' (or '0171-XXXXXXX')
  whatsapp: '919315688058', // e.g. '919876543210' (digits only, with country code)
  email: null, // e.g. 'contact@ssenterprises.example'
  mapsQuery: 'Plot No. 539, Sonia Colony, Ambala Cantt, Haryana, India',
}

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.mapsQuery
)}`
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  site.mapsQuery
)}&output=embed`

export function waLink(message) {
  if (!site.whatsapp) return null
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

export function telLink() {
  return site.phone ? `tel:${site.phone.replace(/[^+\d]/g, '')}` : null
}

// Products dropdown used by header/footer navigation.
export const productCategories = [
  {
    slug: 'cautionary-signs',
    name: 'Cautionary Signs',
    short: 'Warning & caution boards for bends, junctions and hazards',
  },
  {
    slug: 'mandatory-signs',
    name: 'Mandatory Signs',
    short: 'Regulatory, prohibition and compulsory direction signs',
  },
  {
    slug: 'special-signboards',
    name: 'Special Signboards',
    short: 'Location and information signboards with sign symbols',
  },
  {
    slug: 'facility-signs',
    name: 'Facility Signs',
    short: 'Petrol pump, hospital, parking and public facility boards',
  },
  {
    slug: 'highway-direction-signs',
    name: 'Highway & Direction Signs',
    short: 'Gantry, cantilever, destination and route marker signage',
  },
]

export const enquireMessage = (subject, details = '') =>
  `Hello SS Enterprises, I would like to enquire about: ${subject}${details ? `\n${details}` : ''}\n\n(Sent from the SS Enterprises website)`
