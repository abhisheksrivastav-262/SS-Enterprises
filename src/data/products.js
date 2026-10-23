/*
 * Complete SS Enterprises product catalogue, organised like the supplied
 * reference sheets. Every entry carries `art` (SVG artwork descriptor)
 * rendered by src/components/signs/SignSvg.jsx.
 */

export const cautionarySigns = [
  { name: 'Left-Hand Curve', glyph: 'leftCurve', desc: 'Warns drivers of a curve bending to the left, prompting safe speed reduction ahead.' },
  { name: 'Right-Hand Curve', glyph: 'rightCurve', desc: 'Corner warning for right-hand curves with retro-reflective sheet for night visibility.' },
  { name: 'Hairpin Bend', glyph: 'hairpinBend', desc: 'Alerts traffic to sharp hairpin bends on ghat roads and mountain stretches.' },
  { name: 'Reverse Bend', glyph: 'reverseBend', desc: 'Indicates consecutive bends in opposite directions requiring extra driver caution.' },
  { name: 'Series of Bends', glyph: 'seriesOfBends', desc: 'Multiple-bend warning ideal for winding approach roads and hilly terrain.' },
  { name: 'Side Road Signs', glyph: 'sideRoad', desc: 'Side road left/right junction boards with matching right-side variants available.' },
  { name: 'T-Junction & Y-Intersection', glyph: 'tJunction', desc: 'Junction warning boards covering T-intersections and Y-shaped road splits.' },
  { name: 'Cross Road', glyph: 'crossRoad', desc: 'Major crossroad warning to bring approaching traffic to alert mode in advance.' },
  { name: 'Roundabout', glyph: 'roundabout', desc: 'Circular flow warning at roundabouts for smooth, controlled merging.' },
  { name: 'Traffic Signals', glyph: 'trafficSignals', desc: 'Advance notice of signal-controlled junctions on high-speed corridors.' },
  { name: 'Pedestrian Crossing', glyph: 'pedestrian', desc: 'High-visibility crossing warning protecting pedestrians at busy points.' },
  { name: 'School Ahead', glyph: 'schoolAhead', desc: 'School zone warning encouraging slow, careful driving near campus gates.' },
  { name: 'Narrow Bridge', glyph: 'narrowBridge', desc: 'Narrow bridge and causeway warning to sequence two-way traffic safely.' },
  { name: 'Steep Ascent & Descent', glyph: 'steepAscent', desc: 'Steep gradient warning boards available for both ascent and descent stretches.' },
  { name: 'Road Works / Men at Work', glyph: 'menAtWork', desc: 'Work-zone safety signage for repairs and construction with men at work.' },
  { name: 'Speed Breaker', glyph: 'speedBreaker', desc: 'Speed breaker warning to prevent sudden braking damage and rear collisions.' },
  { name: 'Rough Road', glyph: 'roughRoad', desc: 'Uneven surface warning for rough stretches under repair or heavy wear.' },
  { name: 'Slippery Road', glyph: 'slipperyRoad', desc: 'Slippery-surface caution for rain-soaked, loose-gravel or oily road patches.' },
  { name: 'Falling Rocks', glyph: 'fallingRocks', desc: 'Rock-fall and landslide zone warning commonly used on hill-cut sections.' },
  { name: 'Dangerous Dip', glyph: 'dangerousDip', desc: 'Sudden dip warning where visibility of the road ahead is restricted.' },
  { name: 'Wild Animal & Cattle Crossing', glyph: 'wildAnimal', desc: 'Animal crossing caution available in wild animal and cattle silhouette designs.' },
  { name: 'Tunnel Ahead', glyph: 'tunnel', desc: 'Tunnel approach warning prompting lane discipline and headlight use.' },
]

export const mandatorySigns = [
  { name: 'No Entry', variant: 'noEntry', desc: 'Classic no-entry disc used at wrong-way deterrents and exit-only gates.' },
  { name: 'Stop', variant: 'stop', desc: 'High-gloss octagonal stop board, a statutory must at uncontrolled junctions.' },
  { name: 'Give Way', variant: 'giveway', desc: 'Inverted-triangle give way sign directing yielding at merge points.' },
  { name: 'Speed Limit', variant: 'limit', value: '50', desc: 'Speed limit circles supplied in 20/30/40/50/60/80 km/h and custom values.' },
  { name: 'No Parking', variant: 'noParking', desc: 'No-parking discs for public roads, markets, hospitals and campus zones.' },
  { name: 'No Stopping / No Standing', variant: 'noStopping', desc: 'Strict no-stopping and no-standing discs to keep asphalt edges clear.' },
  { name: 'No Overtaking', variant: 'prohibit', glyph: 'overtaking', desc: 'Overtaking ban discs for bridges, blind rises and accident-prone stretches.' },
  { name: 'No U-Turn', variant: 'prohibit', glyph: 'uTurn', desc: 'Prohibitory U-turn sign for medians, flyovers and high-traffic corridors.' },
  { name: 'No Right Turn', variant: 'prohibit', glyph: 'turnRight', desc: 'Right-turn prohibition used at one-way exits and restricted intersections.' },
  { name: 'No Left Turn', variant: 'prohibit', glyph: 'turnLeft', desc: 'Left-turn prohibition boards for one-way entries and sealed side roads.' },
  { name: 'One Way', variant: 'comp', glyph: 'up', desc: 'Blue compulsory straight-ahead disc marking officially designated one ways.' },
  { name: 'Vehicle Restriction Signs', variant: 'prohibit', glyph: 'bus', desc: 'Vehicle-class bans for buses, cars, trucks, two-wheelers, cycles and horns.' },
  { name: 'Compulsory Direction Signs', variant: 'comp', glyph: 'keepLeft', desc: 'Compulsory go-ahead, turn-left, turn-right, keep-left and keep-right discs.' },
  { name: 'Cycle Only', variant: 'comp', glyph: 'cycle', desc: 'Blue compulsory discs demarcating cycle-only lanes and cycle tracks.' },
  { name: 'Pedestrian Only', variant: 'comp', glyph: 'ped', desc: 'Pedestrian-only route discs for walkways, plazas and market streets.' },
  { name: 'Bus Only', variant: 'comp', glyph: 'bus', desc: 'Bus lane designation discs for BRT corridors and city bus routes.' },
  { name: 'Compulsory Sound Horn', variant: 'comp', glyph: 'horn', desc: 'Blue compulsory sound-horn discs for blind curves and narrow bridges.' },
  { name: 'Restriction Ends', variant: 'restrictionEnds', desc: 'Restriction-ends disc clearing earlier bans such as overtaking or speed limits.' },
]

export const specialSigns = [
  { name: 'Gap in Median', g: { frame: 'caution', glyph: 'gapMedian' } },
  { name: 'Roundabout', g: { frame: 'caution', glyph: 'roundabout' } },
  { name: 'Pedestrian Crossing', g: { frame: 'caution', glyph: 'pedestrian' } },
  { name: 'Cross Road', g: { frame: 'caution', glyph: 'crossRoad' } },
  { name: 'Left-Hand Curve', g: { frame: 'caution', glyph: 'leftCurve' } },
  { name: 'Speed Breaker', g: { frame: 'caution', glyph: 'speedBreaker' } },
  { name: 'School Ahead', g: { frame: 'caution', glyph: 'schoolAhead' } },
  { name: 'Stop', type: 'stop' },
  { name: 'No Entry', type: 'noEntry' },
  { name: 'No Parking', type: 'noParking' },
  { name: 'Speed Limit', value: '50', desc: 'Special blue location board carrying a mini speed-limit disc for junction and cab-road placement.' },
]

export const facilitySigns = [
  { name: 'Petrol Pump', icon: 'pump', arrow: 'left' },
  { name: 'Repair Facility', icon: 'wrench' },
  { name: 'Eating Place', icon: 'forkKnife', meters: '500m' },
  { name: 'Police Station', icon: 'police' },
  { name: 'Bus Stop', icon: 'bus' },
  { name: 'Light Refreshment', icon: 'cup' },
  { name: 'Resting Place', icon: 'bed' },
  { name: 'Hospital', icon: 'hospitalH', meters: '500m', arrow: 'left' },
  { name: 'Industrial Area', icon: 'factory' },
  { name: 'Railway Station', icon: 'train' },
  { name: 'Foot Over Bridge', icon: 'footBridge' },
  { name: 'Parking Area', icon: 'parking' },
  { name: 'Taxi Stand', icon: 'taxi' },
  { name: 'U-Turn Ahead', icon: 'uTurn', note: true },
]

export const highwaySigns = [
  { name: 'Overhead Gantry Signs', frame: 'gantry', wide: true, desc: 'Full-span overhead gantry structures carrying multi-destination boards across carriageways.' },
  { name: 'Cantilever Signs', frame: 'cantilever', wide: true, desc: 'Side-mounted cantilever structures with long-reach arms to display boards over traffic lanes.' },
  { name: 'Advance Direction Signs', rows: [
      { hi: 'कानपुर', en: 'Kanpur', arrow: 'up' },
      { hi: 'भरथना', en: 'Bharthana', arrow: 'left' },
      { hi: 'भिकनपुर', en: 'Bhikanpur', arrow: 'right' },
    ], frame: 'board', desc: 'Multi-row advance direction boards guiding lane selection well before junctions.' },
  { name: 'Destination Boards', rows: [ { hi: 'सोनीपत', en: 'Sonipat', dist: '46', arrow: 'up' } ], frame: 'board', desc: 'City-to-city destination boards with bilingual text and clear distance mapping.' },
  { name: 'Route Marker Signs', marker: 'nh', desc: 'Compact NH plate markers fixed on gantry ends, gantry posts and roadside fixtures.' },
  { name: 'Expressway Route Markers', marker: 'ne', desc: 'Expressway NE plates in blue and white for access-controlled corridors.' },
  { name: 'State Highway Markers', marker: 'sh', desc: 'State highway SH shield markers produced for every state specification.' },
  { name: 'National Highway Markers', marker: 'nh2', desc: 'NH yellow shield markers with green trim for national highway stretches.' },
  { name: 'Public Information Boards', rows: [ { hi: 'खुरसापार', en: 'Khursapaar' } ], frame: 'board', compact: false, posts: 2, desc: 'Green public information boards announcing towns, facilities and toll points.' },
  { name: 'Flag-Type Direction Signs', frame: 'flagBoard', wide: true, desc: 'Arrow-headed flag boards for deflector placement at diversions and minor junctions.' },
  { name: 'Reassurance Signs', rows: [
      { hi: 'भोपाल', en: 'Bhopal', dist: '320' },
      { hi: 'बैतूल', en: 'Betul', dist: '138' },
      { hi: 'पांढुर्ण', en: 'Pandhurna', dist: '54' },
    ], frame: 'board', desc: 'Reassurance boards confirming route and remaining distance after major junctions.' },
  { name: 'Roadside Direction Boards', rows: [
      { hi: 'अम्बाला', en: 'Ambala', dist: '12' },
      { hi: 'चंडीगढ़', en: 'Chandigarh', dist: '68' },
    ], frame: 'board', compact: false, posts: 2, desc: 'Post-mounted roadside boards in all standard and custom size combinations.' },
  { name: 'Custom Direction Signboards', frame: 'customBoard', wide: true, desc: 'Fully custom boards — arrow, residential and departmental layouts built to drawing.' },
]

/* Custom multi-line board artwork (residence/office style composite from reference) */
export const customBoardSample = {
  art: 'customBoard',
}

export const CATEGORY_META = {
  'cautionary-signs': {
    title: 'Cautionary Signs',
    heading: 'Cautionary / Warning Signs',
    intro:
      'Warning triangles for every road hazard — curves, junctions, gradients, work zones and animal crossings. Manufactured with retro-reflective sheeting for clear night visibility.',
    chartTitle: 'Cautionary Sign',
    data: cautionarySigns,
    featured: true,
  },
  'mandatory-signs': {
    title: 'Mandatory Signs',
    heading: 'Mandatory / Regulatory Signs',
    intro:
      'Statutory regulatory signage — prohibitions, speed limits, compulsory directions and restriction notices that keep traffic lawful and predictable.',
    chartTitle: 'Mandatory Sign',
    data: mandatorySigns,
  },
  'special-signboards': {
    title: 'Special Signboards',
    heading: 'Special / Location Signboards',
    intro:
      'Blue informational signboards pairing a bold location symbol with clear white text — the S. S. sign range for junctions, schools, speed zones and restricted areas.',
    chartTitle: 'S. S. Sign',
    data: specialSigns,
  },
  'facility-signs': {
    title: 'Facility Signs',
    heading: 'Facility Signs',
    intro:
      'Blue facility boards guiding road users to petrol pumps, hospitals, repair shops, transit and parking — with symbols, distances and direction arrows as required.',
    chartTitle: 'Facility Sign',
    data: facilitySigns,
  },
  'highway-direction-signs': {
    title: 'Highway & Direction Signs',
    heading: 'Highway & Direction Signage',
    intro:
      'Green highway direction boards, overhead gantries, cantilevers, destination and route marker signage — engineered panels for national and state highway specifications.',
    chartTitle: 'Overhead Gantry & Cantilever Sign',
    data: highwaySigns,
  },
}
