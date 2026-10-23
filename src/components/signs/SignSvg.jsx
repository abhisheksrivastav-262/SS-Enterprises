/*
 * SignSvg — every road sign and board on the site is drawn here as crisp scalable
 * vector artwork, faithfully recreating the supplied reference catalogue sheets
 * (Cautionary / Mandatory / S.S. special / Facility / Overhead Gantry & Cantilever).
 */

const C = {
  red: '#d3202f',
  ink: '#1b1d21',
  blue: '#0f57a8',
  blueDark: '#0b3f80',
  green: '#0f7b40',
  greenDark: '#0c6234',
  yellow: '#f6c50d',
  steel: '#8a9098',
  steelDark: '#65696f',
  white: '#ffffff',
}

const stroke = {
  fill: 'none',
  stroke: C.ink,
  strokeWidth: 5.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}
const wS = { ...stroke, stroke: C.white, strokeWidth: 7 }

function Head({ x, y, dir = 'left', size = 10, color = C.ink }) {
  const map = {
    left: `${x + 2},${y - size} ${x + 2},${y + size} ${x - size},${y}`,
    right: `${x - 2},${y - size} ${x - 2},${y + size} ${x + size},${y}`,
    up: `${x - size},${y + 2} ${x + size},${y + 2} ${x},${y - size}`,
    down: `${x - size},${y - 2} ${x + size},${y - 2} ${x},${y + size}`,
  }
  return <polygon points={map[dir]} fill={color} />
}

/* ================= cautionary symbols (inside red triangle) ================= */
const T = (d, w = 5.5) => <path d={d} {...stroke} strokeWidth={w} />

const CAUTION = {
  leftCurve: (<><path d="M62 28 C62 46 52 51 40 54" {...stroke} /><Head x={38} y={54} dir="left" size={9} /></>),
  rightCurve: (<><path d="M38 28 C38 46 48 51 60 54" {...stroke} /><Head x={62} y={54} dir="right" size={9} /></>),
  hairpinBend: (<><path d="M63 30 c0 15 -5 21 -13 21 c-9 0 -12 -5 -12 -14" {...stroke} /><Head x={38} y={52} dir="down" size={9} /></>),
  reverseBend: (<><path d="M38 30 c0 15 5 21 13 21 c9 0 12 -5 12 -14" {...stroke} /><Head x={63} y={52} dir="down" size={9} /></>),
  seriesOfBends: (<><path d="M63 28 c-16 0 -16 10 -2 12 c15 2 15 12 -3 14" {...stroke} /><Head x={62} y={56} dir="left" size={9} /></>),
  sideRoad: (<><path d="M50 28 V74" {...stroke} /><path d="M50 47 H30" {...stroke} /><Head x={28} y={47} dir="left" size={8} /></>),
  sideRoadRight: (<><path d="M50 28 V74" {...stroke} /><path d="M50 47 H70" {...stroke} /><Head x={72} y={47} dir="right" size={8} /></>),
  tJunction: (<><path d="M50 30 V74" {...stroke} /><path d="M31 35 H69" {...stroke} /></>),
  yIntersection: (<><path d="M50 28 V52" {...stroke} /><path d="M50 52 L35 74" {...stroke} /><path d="M50 52 L65 74" {...stroke} /></>),
  crossRoad: (<><path d="M50 28 V74" {...stroke} /><path d="M27 49 H73" {...stroke} /></>),
  roundabout: (<><circle cx="50" cy="55" r="19" {...stroke} /><polygon points="45,35 55,35 50,26" fill={C.ink} /><polygon points="60,62 66,53 71,61" fill={C.ink} /><polygon points="40,62 34,53 29,61" fill={C.ink} /></>),
  trafficSignals: (<><rect x="41" y="26" width="18" height="46" rx="4" fill={C.ink} /><circle cx="50" cy="36" r="4.6" fill={C.red} /><circle cx="50" cy="49" r="4.6" fill="#f6b40e" /><circle cx="50" cy="62" r="4.6" fill="#24a55a" /></>),
  pedestrian: (<><circle cx="47" cy="32" r="4.4" fill={C.ink} /><path d="M47 37 V52 M39 44 L55 49 M47 52 L42 70 M47 52 L53 70" {...stroke} /><path d="M30 72 L34 64 M38 72 L42 64 M46 72 L50 64 M54 72 L58 64 M62 72 L66 64" {...stroke} strokeWidth="3.2" /></>),
  schoolAhead: (<><circle cx="42" cy="31" r="4.6" fill={C.ink} /><path d="M42 36 V52 M34 44 L50 47 M42 52 L37 70 M42 52 L47 70" {...stroke} /><circle cx="60" cy="40" r="3.6" fill={C.ink} /><path d="M60 44 V56 M54 50 L66 52 M60 56 L56 68 M60 56 L64 68" {...stroke} /></>),
  narrowBridge: (<><rect x="36" y="32" width="28" height="40" {...stroke} /><path d="M50 38 V46 M50 52 V60" {...stroke} strokeWidth="3.6" /></>),
  steepAscent: (<><path d="M27 68 L74 38" {...stroke} /><polygon points="52,28 66,32 56,44" fill={C.ink} /></>),
  steepDescent: (<><path d="M27 36 L74 66" {...stroke} /><polygon points="56,66 66,54 74,58" fill={C.ink} /></>),
  menAtWork: (<><circle cx="38" cy="36" r="4.4" fill={C.ink} /><path d="M38 41 V55 M38 45 L50 50 M38 55 L32 70 M38 55 L44 70" {...stroke} /><path d="M50 50 L60 34" {...stroke} strokeWidth="4.4" /><path d="M58 54 l8 8" {...stroke} strokeWidth="4" /><path d="M56 66 q10 -16 22 0 Z" fill={C.ink} /></>),
  speedBreaker: (<path d="M25 63 Q50 36 75 63" {...stroke} strokeWidth="6.5" />),
  roughRoad: (<path d="M21 62 q6 -10 12 0 q6 -10 12 0 q6 -10 12 0 q6 -10 12 0 q6 -10 12 0" {...stroke} strokeWidth="5" />),
  slipperyRoad: (<><path d="M40 30 q6 8 0 16 q-6 8 0 16 q-6 8 0 16" {...stroke} /><path d="M58 32 q6 8 0 16 q-6 8 0 16 q-6 8 0 16" {...stroke} /><path d="M70 44 q5 6 0 12 q-5 6 0 12" {...stroke} strokeWidth="4.2" /></>),
  fallingRocks: (<><path d="M22 44 L60 58" {...stroke} /><circle cx="34" cy="56" r="3.6" fill={C.ink} /><circle cx="45" cy="58" r="4.6" fill={C.ink} /><circle cx="56" cy="61" r="3.6" fill={C.ink} /><circle cx="40" cy="66" r="3" fill={C.ink} /><circle cx="52" cy="68" r="3" fill={C.ink} /></>),
  dangerousDip: (<path d="M24 42 Q50 74 76 42" {...stroke} strokeWidth="6.5" />),
  wildAnimal: (<><path d="M30 54 h20" {...stroke} strokeWidth="8" /><path d="M52 54 L58 42" {...stroke} /><path d="M58 42 L66 40" {...stroke} strokeWidth="4.5" /><path d="M60 37 q1 -7 -2 -9 M63 39 q5 -5 5 -11" {...stroke} strokeWidth="3" /><path d="M35 58 V70 M42 58 V70 M48 58 V70 M54 58 V70" {...stroke} strokeWidth="3.6" /></>),
  tunnel: (<><path d="M30 72 V50 A20 22 0 0 1 70 50 V72" {...stroke} /><path d="M20 72 H30 M70 72 H80" {...stroke} /></>),
  gapMedian: (<><path d="M32 30 V72 M39 30 V72" {...stroke} strokeWidth="4.5" /><path d="M61 30 V72 M68 30 V72" {...stroke} strokeWidth="4.5" /><path d="M50 32 V44 M50 56 V68" {...stroke} strokeWidth="4.5" strokeDasharray="6 5" /></>),
  narrowRoad: (<><path d="M36 30 L44 72 M64 30 L56 72" {...stroke} /></>),
  rumbleStrip: (<><path d="M21 62 q6 -10 12 0 q6 -10 12 0 q6 -10 12 0 q6 -10 12 0" {...stroke} strokeWidth="5" /><path d="M35 46 h30 M40 36 h20" {...stroke} strokeWidth="3.4" /></>),
}

/* ================= silhouettes for prohibition / compulsory circles ================= */
const GLYPHS = {
  car: (<path d="M20 62 v-5 q0 -8 9 -10 l5 -8 q2 -3 5 -3 h13 q4 0 6 3 l5 8 q9 2 9 10 v5 h-4 a5.5 5.5 0 1 1 -11 0 h-21 a5.5 5.5 0 1 1 -11 0 Z" fill={C.ink} />),
  bus: (<><rect x="22" y="38" width="56" height="26" rx="7" fill={C.ink} /><path d="M22 51 h56" stroke={C.white} strokeWidth="2.4" /><circle cx="34" cy="66" r="4.4" fill={C.ink} /><circle cx="66" cy="66" r="4.4" fill={C.ink} /></>),
  truck: (<><rect x="18" y="36" width="34" height="24" rx="2" fill={C.ink} /><path d="M56 44 h18 q4 0 4 4 v12 h-22 Z" fill={C.ink} /><rect x="60" y="46" width="10" height="7" fill={C.white} /><circle cx="28" cy="64" r="4.4" fill={C.ink} /><circle cx="58" cy="64" r="4.4" fill={C.ink} /><circle cx="72" cy="64" r="4.4" fill={C.ink} /></>),
  bike: (<><circle cx="31" cy="62" r="8" {...stroke} strokeWidth="4.5" /><circle cx="69" cy="62" r="8" {...stroke} strokeWidth="4.5" /><path d="M40 60 L52 42 h7 l6 10" {...stroke} strokeWidth="4.5" /><circle cx="57" cy="32" r="4" fill={C.ink} /><path d="M57 36 L53 48" {...stroke} strokeWidth="4" /><path d="M60 34 L66 40" {...stroke} strokeWidth="4" /></>),
  cycle: (<><circle cx="30" cy="62" r="9" {...stroke} strokeWidth="4.2" /><circle cx="70" cy="62" r="9" {...stroke} strokeWidth="4.2" /><path d="M30 62 L44 42 h14 L70 62 M44 42 L52 62 H30" {...stroke} strokeWidth="4.2" /></>),
  horn: (<><circle cx="29" cy="50" r="6" fill={C.ink} /><path d="M35 46 L64 38 L64 62 L35 54 Z" fill={C.ink} /><path d="M69 42 q5 8 0 16 M75 38 q8 12 0 24" {...stroke} strokeWidth="3" /></>),
  ped: (<><circle cx="50" cy="30" r="4.6" fill={C.ink} /><path d="M50 35 V53 M41 42 L59 47 M50 53 L44 70 M50 53 L56 70" {...stroke} /></>),
  turnLeft: (<><path d="M55 68 V48 Q55 40 45 40" {...stroke} /><Head x={43} y={40} dir="left" size={10} /></>),
  turnRight: (<><path d="M45 68 V48 Q45 40 55 40" {...stroke} /><Head x={57} y={40} dir="right" size={10} /></>),
  uTurn: (<><path d="M42 70 V46 Q42 33 54 33 Q66 33 66 45 V58" {...stroke} /><Head x={66} y={62} dir="down" size={9} /></>),
  overtaking: (<><path d="M38 72 V40" {...stroke} /><Head x={38} y={36} dir="up" size={9} /><path d="M62 40 V72" {...stroke} /><Head x={62} y={76} dir="down" size={9} /></>),
}

function Prohibit({ glyph, ban = 'slash' }) {
  return (
    <g>
      <circle cx="50" cy="50" r="41" fill="#fff" stroke={C.red} strokeWidth="9" />
      <g transform="translate(8,2) scale(0.84)">{GLYPHS[glyph]}</g>
      {ban === 'slash' && <path d="M28 28 L72 72" stroke={C.red} strokeWidth="9" strokeLinecap="round" />}
      {ban === 'cross' && (
        <>
          <path d="M30 30 L70 70" stroke={C.red} strokeWidth="8" strokeLinecap="round" />
          <path d="M70 30 L30 70" stroke={C.red} strokeWidth="8" strokeLinecap="round" />
        </>
      )}
    </g>
  )
}

function Compulsory({ glyph }) {
  return (
    <g>
      <circle cx="50" cy="50" r="40" fill={C.blue} />
      <g stroke={C.white}>
        {glyph === 'up' && (<><path d="M50 70 V34" {...wS} /><Head x={50} y={32} dir="up" size={11} color={C.white} /></>)}
        {glyph === 'left' && (<><path d="M52 68 V48 Q52 40 44 40" {...wS} /><Head x={42} y={40} dir="left" size={10} color={C.white} /></>)}
        {glyph === 'right' && (<><path d="M48 68 V48 Q48 40 56 40" {...wS} /><Head x={58} y={40} dir="right" size={10} color={C.white} /></>)}
        {glyph === 'keepLeft' && (<><path d="M62 38 L44 56" {...wS} /><Head x={40} y={60} dir="left" size={10} color={C.white} /></>)}
        {glyph === 'keepRight' && (<><path d="M38 38 L56 56" {...wS} /><Head x={60} y={60} dir="right" size={10} color={C.white} /></>)}
        {glyph === 'eitherSide' && (<><path d="M50 30 V44" {...wS} /><path d="M50 44 q0 12 -8 16" {...wS} /><path d="M50 44 q0 12 8 16" {...wS} /><Head x={40} y={62} dir="down" size={9} color={C.white} /><Head x={60} y={62} dir="down" size={9} color={C.white} /></>)}
      </g>
      {(glyph === 'horn' || glyph === 'cycle' || glyph === 'ped' || glyph === 'bus') && (
        <g transform={glyph === 'bus' ? 'translate(8,6) scale(0.84)' : 'translate(4,2) scale(0.92)'}>{GLYPHS[glyph]}</g>
      )}
    </g>
  )
}

function Octagon() {
  return (
    <g>
      <polygon points="50,6 72,12 88,28 94,50 88,72 72,88 50,94 28,88 12,72 6,50 12,28 28,12" fill={C.red} />
      <text x="50" y="61" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="700" fontFamily="Arial, sans-serif">STOP</text>
    </g>
  )
}

function GiveWay() {
  return (
    <g>
      <polygon points="10,18 90,18 50,88" fill="#fff" stroke={C.red} strokeWidth="9" strokeLinejoin="round" />
      <text x="50" y="42" textAnchor="middle" fill={C.ink} fontSize="14" fontWeight="800" fontFamily="Arial, sans-serif">GIVE</text>
      <text x="50" y="60" textAnchor="middle" fill={C.ink} fontSize="14" fontWeight="800" fontFamily="Arial, sans-serif">WAY</text>
    </g>
  )
}

function NoEntry() {
  return (
    <g>
      <circle cx="50" cy="50" r="40" fill={C.red} />
      <rect x="27" y="43" width="46" height="14" rx="2" fill="#fff" />
    </g>
  )
}

function NoParking() {
  return (
    <g>
      <circle cx="50" cy="50" r="40" fill="#fff" stroke={C.red} strokeWidth="8.5" />
      <text x="50" y="63" textAnchor="middle" fill={C.red} fontSize="34" fontWeight="800" fontFamily="Arial, sans-serif">P</text>
      <path d="M30 30 L70 70" stroke={C.red} strokeWidth="7.5" strokeLinecap="round" />
    </g>
  )
}

/* ================= blue specialty board (S. S. sign) ================= */
function MiniSign({ g }) {
  const inner =
    g.frame === 'caution' ? (
      <>
        <path d="M50 6 L96 92 L4 92 Z" fill="#fff" stroke={C.red} strokeWidth="9" strokeLinejoin="round" />
        {CAUTION[g.glyph]}
      </>
    ) : g.type === 'stop' ? <Octagon /> : g.type === 'noEntry' ? <NoEntry /> : g.type === 'noParking' ? <NoParking /> : <RegNum v={g.value} />
  return <g transform="translate(35,10) scale(0.55)">{inner}</g>
}

function SpecialBoard({ g, label, sublabel }) {
  const size = !label ? 12 : label.length <= 8 ? 13.5 : label.length <= 12 ? 11.5 : 9.5
  return (
    <svg viewBox="0 0 120 150" className="sign-svg" role="img" aria-label={`${label} special signboard`}>
      <rect x="6" y="6" width="108" height="138" rx="8" fill={C.blue} stroke="#fff" strokeWidth="3" />
      <rect x="12" y="12" width="96" height="126" rx="5" fill="none" stroke="#fff" strokeWidth="1.4" opacity="0.75" />
      <MiniSign g={g} />
      <text x="60" y="108" textAnchor="middle" fill="#fff" fontSize={size} fontWeight="600" fontFamily="Arial, sans-serif">{label}</text>
      {sublabel && <text x="60" y="128" textAnchor="middle" fill="#fff" fontSize="10.5" fontWeight="500" fontFamily="Arial, sans-serif">{sublabel}</text>}
    </svg>
  )
}

/* ================= facility board ================= */
const FACILITY = {
  pump: (
    <>
      <rect x="34" y="26" width="22" height="48" rx="2" fill={C.ink} />
      <rect x="38" y="32" width="14" height="10" fill="#fff" />
      <path d="M56 44 h9 v-16 q0 -4 4 -4 q4 0 4 4 v26 q0 18 -12 18" {...stroke} strokeWidth="4.5" />
      <path d="M40 60 v10 M50 60 v10" {...stroke} strokeWidth="3.4" />
    </>
  ),
  wrench: (
    <>
      <circle cx="31" cy="69" r="8" {...stroke} />
      <path d="M36 64 L64 36" {...stroke} strokeWidth="8" />
      <path d="M59 31 l4 5 5 4" {...stroke} strokeWidth="4.5" />
    </>
  ),
  forkKnife: (
    <>
      <path d="M36 30 V38 M42 30 V38 M48 30 V38 M36 38 q6 8 12 0" {...stroke} />
      <path d="M42 46 V72" {...stroke} />
      <path d="M62 30 q9 8 7 20 l-5 12" {...stroke} />
      <path d="M63 50 V72" {...stroke} />
    </>
  ),
  police: (
    <>
      <circle cx="50" cy="34" r="5.5" fill={C.ink} />
      <path d="M43 27 h14" {...stroke} />
      <path d="M44 42 h12 v13 h-12 Z" fill={C.ink} />
      <path d="M44 44 L35 56 M56 44 L65 56" {...stroke} />
      <path d="M46 55 L44 72 M54 55 L56 72" {...stroke} />
    </>
  ),
  bus: (<><rect x="20" y="34" width="62" height="30" rx="8" fill={C.ink} /><path d="M20 49 h62" stroke={C.white} strokeWidth="2.6" /><circle cx="34" cy="66" r="5" fill={C.ink} /><circle cx="68" cy="66" r="5" fill={C.ink} /></>),
  cup: (
    <>
      <path d="M32 38 h26 v16 a13 13 0 0 1 -26 0 Z" fill={C.ink} />
      <path d="M58 41 a7 7 0 1 1 0 10" {...stroke} />
      <path d="M38 60 h24 v10 h-24 Z" fill={C.ink} />
    </>
  ),
  bed: (
    <>
      <path d="M28 66 h44 M32 66 v6 M68 66 v6 M28 50 v20" {...stroke} />
      <circle cx="37" cy="53" r="4.4" fill={C.ink} />
      <path d="M46 49 h20 v13 h-20 Z" fill={C.ink} />
    </>
  ),
  hospitalH: (
    <>
      <rect x="28" y="22" width="44" height="27" rx="2" {...stroke} />
      <text x="50" y="43" textAnchor="middle" fill={C.red} fontSize="19" fontWeight="800" fontFamily="Arial, sans-serif">H</text>
      <path d="M30 62 h44 M34 62 v7 M70 62 v7 M30 50 v19" {...stroke} />
      <circle cx="38" cy="54" r="3.8" fill={C.ink} />
      <path d="M46 51 h18 v11 h-18 Z" fill={C.ink} />
    </>
  ),
  factory: (<path d="M28 72 V52 h7 v-9 h7 v9 l13 -8 v8 h17 v20 Z" fill={C.ink} />),
  train: (
    <>
      <rect x="37" y="24" width="26" height="40" rx="8" fill={C.ink} />
      <rect x="43" y="32" width="14" height="10" fill="#fff" />
      <circle cx="44" cy="57" r="2.4" fill="#fff" />
      <circle cx="56" cy="57" r="2.4" fill="#fff" />
      <path d="M28 72 l10 -8 M72 72 l-10 -8" {...stroke} strokeWidth="4" />
    </>
  ),
  footBridge: (
    <>
      <path d="M22 70 h11 v-8 h11 v-8 h11 v-8 h11 v-8 h12" {...stroke} strokeWidth="5.5" />
      <circle cx="70" cy="30" r="4" fill={C.ink} />
      <path d="M70 34 v8 M66 38 l8 2" {...stroke} strokeWidth="3.6" />
    </>
  ),
  parking: (
    <>
      <text x="50" y="52" textAnchor="middle" fill={C.ink} fontSize="44" fontWeight="800" fontFamily="Arial, sans-serif">P</text>
      <g transform="translate(20,44) scale(0.52)">
        <path d="M20 62 v-5 q0 -8 9 -10 l5 -8 q2 -3 5 -3 h13 q4 0 6 3 l5 8 q9 2 9 10 v5 h-4 a5.5 5.5 0 1 1 -11 0 h-21 a5.5 5.5 0 1 1 -11 0 Z" fill="#fff" stroke={C.ink} strokeWidth="3" />
      </g>
    </>
  ),
  taxi: (<><g>{GLYPHS.car}</g><rect x="40" y="40" width="20" height="5.5" fill={C.ink} /><text x="50" y="43.6" textAnchor="middle" fill="#fff" fontSize="4.6" fontWeight="700" fontFamily="Arial, sans-serif">TAXI</text></>),
  uTurn: (
    <>
      <path d="M36 70 V44 Q36 30 50 30 Q64 30 64 44 V56" {...wS} strokeWidth="7.5" />
      <Head x={64} y={62} dir="down" size={10} color={C.white} />
    </>
  ),
}

function FacilityBoard({ icon, label, meters, arrow }) {
  const size = !label ? 12 : label.length <= 8 ? 13.5 : label.length <= 12 ? 11.5 : 9.5
  return (
    <svg viewBox="0 0 120 150" className="sign-svg" role="img" aria-label={`${label} facility signboard`}>
      <rect x="6" y="6" width="108" height="138" rx="8" fill={C.blue} stroke="#fff" strokeWidth="3" />
      <rect x="12" y="12" width="96" height="126" rx="5" fill="none" stroke="#fff" strokeWidth="1.4" opacity="0.75" />
      <rect x="22" y="16" width="76" height="66" rx="4" fill="#fff" />
      <g transform="translate(26,19) scale(0.68)">{FACILITY[icon]}</g>
      {arrow === 'left' && <polyline points="80,95 50,95 56,88 50,95 56,102" fill="none" stroke="#fff" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />}
      <text x="60" y="115" textAnchor="middle" fill="#fff" fontSize={size} fontWeight="600" fontFamily="Arial, sans-serif">{label}</text>
      {meters && <text x="60" y="133" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700" fontFamily="Arial, sans-serif">{meters}</text>}
    </svg>
  )
}

/* ================= route markers, hazard & object markers ================= */
function RouteMarker({ kind }) {
  switch (kind) {
    case 'ne':
      return (
        <svg viewBox="0 0 100 120" className="sign-svg" role="img" aria-label="Expressway route marker NE 00">
          <path d="M50 8 q26 8 26 32 q0 30 -26 44 q-26 -14 -26 -44 q0 -24 26 -32 Z" fill={C.blue} stroke="#fff" strokeWidth="4" />
          <text x="50" y="48" textAnchor="middle" fill="#fff" fontSize="26" fontWeight="800" fontFamily="Arial, sans-serif">NE</text>
          <text x="50" y="78" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="800" fontFamily="Arial, sans-serif">00</text>
        </svg>
      )
    case 'nh':
      return (
        <svg viewBox="0 0 100 120" className="sign-svg" role="img" aria-label="National highway route marker NH 00">
          <path d="M50 8 q26 8 26 32 q0 30 -26 44 q-26 -14 -26 -44 q0 -24 26 -32 Z" fill={C.yellow} stroke={C.green} strokeWidth="5" />
          <text x="50" y="46" textAnchor="middle" fill={C.ink} fontSize="25" fontWeight="800" fontFamily="Arial, sans-serif">NH</text>
          <text x="50" y="76" textAnchor="middle" fill={C.ink} fontSize="24" fontWeight="800" fontFamily="Arial, sans-serif">00</text>
        </svg>
      )
    case 'sh':
      return (
        <svg viewBox="0 0 100 120" className="sign-svg" role="img" aria-label="State highway route marker SH 00">
          <path d="M50 8 q26 8 26 32 q0 30 -26 44 q-26 -14 -26 -44 q0 -24 26 -32 Z" fill="#fff" stroke={C.green} strokeWidth="5" />
          <text x="50" y="36" textAnchor="middle" fill={C.green} fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">STATE</text>
          <text x="50" y="54" textAnchor="middle" fill={C.green} fontSize="19" fontWeight="800" fontFamily="Arial, sans-serif">SH</text>
          <text x="50" y="78" textAnchor="middle" fill={C.green} fontSize="20" fontWeight="800" fontFamily="Arial, sans-serif">00</text>
        </svg>
      )
    case 'ah':
      return (
        <svg viewBox="0 0 100 120" className="sign-svg" role="img" aria-label="Asian highway route marker AH 45">
          <rect x="18" y="12" width="64" height="96" rx="14" fill={C.green} stroke="#fff" strokeWidth="5" />
          <text x="50" y="50" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="800" fontFamily="Arial, sans-serif">AH</text>
          <text x="50" y="86" textAnchor="middle" fill="#fff" fontSize="26" fontWeight="800" fontFamily="Arial, sans-serif">45</text>
        </svg>
      )
    case 'chevron':
      return (
        <svg viewBox="0 0 100 120" className="sign-svg" role="img" aria-label="Black and yellow chevron board">
          <rect x="14" y="10" width="72" height="100" rx="6" fill={C.yellow} stroke="#fff" strokeWidth="3" />
          <path d="M38 30 L66 60 L38 90" fill="none" stroke={C.ink} strokeWidth="13" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      )
    case 'hazard':
      return (
        <svg viewBox="0 0 100 130" className="sign-svg" role="img" aria-label="Yellow and black hazard marker on post">
          <rect x="24" y="10" width="52" height="74" fill={C.yellow} stroke="#fff" strokeWidth="3" />
          <g clipPath="url(#hazclip1)" cliprule="nonzero">
            <clipPath id="hazclip1"><rect x="24" y="10" width="52" height="74" /></clipPath>
            <path d="M10 10 L52 90 L68 90 L26 10 Z" fill={C.ink} />
            <path d="M44 10 L86 90" stroke={C.ink} strokeWidth="14" />
            <path d="M28 90 L70 10" stroke={C.yellow} strokeWidth="10" />
          </g>
          <rect x="44" y="84" width="12" height="34" fill={C.steelDark} />
          <rect x="32" y="118" width="36" height="6" rx="2" fill={C.steelDark} />
        </svg>
      )
    case 'hazard2way':
      return (
        <svg viewBox="0 0 100 130" className="sign-svg" role="img" aria-label="Two-way hazard marker with chevrons on post">
          <rect x="26" y="10" width="48" height="74" fill={C.yellow} stroke="#fff" strokeWidth="3" />
          <path d="M26 0 L62 36 L26 74 Z" fill={C.ink} transform="translate(16,29)" />
          <path d="M74 0 L38 36 L74 74 Z" fill={C.ink} transform="translate(0,29)" />
          <rect x="44" y="84" width="12" height="34" fill={C.steelDark} />
          <rect x="32" y="118" width="36" height="6" rx="2" fill={C.steelDark} />
        </svg>
      )
    case 'object':
      return (
        <svg viewBox="0 0 100 120" className="sign-svg" role="img" aria-label="Red object marker triangle">
          <path d="M50 14 L86 78 H14 Z" fill="#fff" stroke="#fff" strokeWidth="10" strokeLinejoin="round" />
          <path d="M50 14 L86 78 H14 Z" fill="none" stroke={C.red} strokeWidth="7" strokeLinejoin="round" />
          <circle cx="50" cy="38" r="5" fill={C.red} />
          <circle cx="38" cy="58" r="5" fill={C.red} />
          <circle cx="62" cy="58" r="5" fill={C.red} />
        </svg>
      )
    default:
      return null
  }
}

/* ================= boards (green / blue / white rows) ================= */
function BoardArrow({ type, color = '#fff', sw = 10, x = 50, y = 50, s = 1 }) {
  const hs = { ...stroke, fill: 'none', stroke: color, strokeWidth: sw }
  const g = (() => {
    switch (type) {
      case 'up':
        return (<><path d="M50 88 V30" {...hs} /><Head x={50} y={26} dir="up" size={17} color={color} /></>)
      case 'left':
        return (<><path d="M88 50 H30" {...hs} /><Head x={26} y={50} dir="left" size={17} color={color} /></>)
      case 'right':
        return (<><path d="M12 50 H70" {...hs} /><Head x={74} y={50} dir="right" size={17} color={color} /></>)
      case 'chevron':
        return <path d="M35 24 L62 50 L35 76" fill="none" stroke={color} strokeWidth={sw + 2} strokeLinejoin="round" strokeLinecap="round" />
      default:
        return null
    }
  })()
  return <g transform={`translate(${x - 50},${y - 50}) scale(${s}) translate(50,50) scale(${1 / s || 1}) translate(-50, -50) scale(${s})`}>{g}</g>
}

export function BoardRows({ rows, color = C.green, compact = false, W = 620 }) {
  const n = rows.length
  const rowH = compact ? 64 : 92
  const H = 24 + n * rowH + 14
  const fill = color === 'blue' ? C.blue : color === 'white' ? '#fff' : C.green
  const txt = color === 'white' ? C.ink : '#fff'
  const ah = compact ? 26 : (r) => (r.hi ? rowH / 2 + 4 : rowH / 2)
  return (
    <g>
      <rect x="4" y="4" width={W - 8} height={H - 8} rx="10" fill={fill} />
      <rect x="11" y="11" width={W - 22} height={H - 22} rx="6" fill="none" stroke="#fff" strokeWidth="2.5" />
      {rows.map((r, i) => {
        const y = 24 + i * rowH
        const hasHi = !!r.hi
        return (
          <g key={i}>
            {i > 0 && <path d={`M14 ${y} H${W - 14}`} stroke="#fff" strokeWidth="2" />}
            {hasHi && (
              <text x={38} y={y + 26} fill={txt} fontSize={compact ? 15 : 19} fontWeight="500" fontFamily="'Noto Sans', 'Kokila', 'Mangal', sans-serif" opacity="0.96">
                {r.hi}
              </text>
            )}
            <text x={38} y={y + (hasHi ? 54 : rowH / 2 + 10)} fill={txt} fontSize={compact ? (hasHi ? 19 : 22) : 26} fontWeight="700" letterSpacing="0.4" fontFamily="'Barlow Semi Condensed', 'Arial Narrow', Arial, sans-serif">
              {r.en}
            </text>
            {r.dist && (
              <text x={W - 140} y={y + rowH / 2 + 12} textAnchor="end" fill={txt} fontSize={compact ? 26 : 32} fontWeight="700" fontFamily="Arial, sans-serif">
                {r.dist}
              </text>
            )}
            {r.arrow && (
              <g transform={`translate(${W - 88},${y + rowH / 2}) scale(0.5) translate(-50,-50)`}>
                <BoardArrow type={r.arrow} color={txt} sw={12} />
              </g>
            )}
          </g>
        )
      })}
      <rect x="0" y="0" width={W} height={H} rx="12" fill="none" stroke="#cfd6de" strokeWidth="1" />
    </g>
  )
}

function BoardScene({ rows, color, compact = true, posts = 2, alt }) {
  const W = 620
  const rowH = compact ? 64 : 92
  const boardH = 24 + rows.length * rowH + 14
  const scaled = 560 / W
  const bw = 560
  const bh = boardH * scaled
  const topY = posts ? 24 : 24
  const totalH = topY + bh + (posts ? 78 : 16)
  const cx = [0.22, 0.78].map((f) => 40 + f * (bw - 40))
  return (
    <svg viewBox={`0 0 ${bwidth(bw)} ${bwidth(totalH)}`} className="sign-svg" role="img" aria-label={alt}>
      {rows.length > 0 && (
        <g transform={`translate(${(bwidth(bw) - bw) / 2},${topY}) scale(${scaled})`}>
          <BoardRows rows={rows} color={color} compact={compact} />
        </g>
      )}
      {posts >= 1 && <rect x={cx[0] - 5} y={topY + bh} width="10" height={totalH - topY - bh - 4} fill={C.steel} />}
      {posts >= 2 && <rect x={cx[1] - 5} y={topY + bh} width="10" height={totalH - topY - bh - 4} fill={C.steel} />}
      <rect x={cx[0] - 14} y={topY + bh + totalH - topY - bh - 8} width="28" height="6" rx="3" fill={C.steelDark} />
      <rect x={cx[1] - 14} y={topY + bh + totalH - topY - bh - 8} width="28" height="6" rx="3" fill={C.steelDark} />
    </svg>
  )
}
function bwidth(v) { return v }

/* ================= gantry & cantilever scenes ================= */
function GantryScene() {
  return (
    <svg viewBox="0 0 820 360" className="sign-svg" role="img" aria-label="Overhead gantry sign structure carrying a four-destination green highway board">
      {/* steel work base */}
      <path d="M96 340 V96 q0 -10 10 -10 h6" fill="none" stroke={C.steel} strokeWidth="17" strokeLinecap="round" />
      <path d="M724 340 V96 q0 -10 -10 -10 h-6" fill="none" stroke={C.steel} strokeWidth="17" strokeLinecap="round" />
      <path d="M100 96 H722" stroke={C.steel} strokeWidth="10" />
      <rect x="78" y="340" width="36" height="12" rx="4" fill={C.steelDark} />
      <rect x="706" y="340" width="36" height="12" rx="4" fill={C.steelDark} />
      {/* main four-destination board */}
      <g transform="translate(120,36) scale(0.93)">
        <BoardRows
          rows={[
            { hi: 'कोलकाता', en: 'Kolkata', dist: '1080', arrow: 'up' },
            { hi: 'वाराणसी', en: 'Varanasi', dist: '411', arrow: 'up' },
          ]}
        />
      </g>
      {/* second-row boards */}
      <g transform="translate(150,252) scale(0.40)">
        <BoardRows rows={[{ hi: 'इलाहाबाद', en: 'Allahabad', dist: '282', arrow: 'up' }]} compact />
      </g>
      <g transform="translate(424,252) scale(0.40)">
        <BoardRows rows={[{ hi: 'कानपुर', en: 'Kanpur', dist: '86', arrow: 'up' }]} compact />
      </g>
      {/* ground */}
      <rect x="0" y="352" width="820" height="8" fill="#e6ebf1" />
      <path d="M0 356 H820" stroke="#d3dae2" strokeWidth="3" strokeDasharray="34 26" />
    </svg>
  )
}

function CantileverScene() {
  return (
    <svg viewBox="0 0 780 320" className="sign-svg" role="img" aria-label="Cantilever sign structure carrying a blue location board">
      {/* vertical post + arm */}
      <path d="M86 296 V86 q0 -16 16 -16" fill="none" stroke={C.steel} strokeWidth="15" strokeLinecap="round" />
      <path d="M92 296 h20" stroke={C.steel} strokeWidth="12" />
      <rect x="62" y="300" width="66" height="12" rx="4" fill={C.steelDark} />
      <path d="M100 92 H560" stroke={C.steel} strokeWidth="10" />
      {/* board hung from arm */}
      <g transform="translate(150,116) scale(0.72)">
        <BoardRows rows={[{ hi: 'जिला न्यायालय', en: 'District Courts', arrow: 'up' }]} compact />
      </g>
      {/* ground line */}
      <rect x="0" y="306" width="780" height="8" fill="#e6ebf1" />
    </svg>
  )
}

function FlagTypeScene() {
  return (
    <svg viewBox="0 0 640 240" className="sign-svg" role="img" aria-label="Flag type green direction board pointing right on two posts">
      <g transform="translate(60,30) scale(0.72)">
        <path d="M6 6 h560 l72 76 l-72 76 h-560 l48 -76 Z" fill={C.green} stroke="#fff" strokeWidth="8" strokeLinejoin="round" />
        <text x="150" y="92" fill="#fff" fontSize="58" fontWeight="700" fontFamily="'Noto Sans', 'Kokila', 'Mangal', sans-serif">कोडेवाड़ा</text>
        <text x="105" y="136" fill="#fff" fontSize="40" fontWeight="700" fontFamily="Arial, sans-serif">Kodewada</text>
        <path d="M540 30 L470 82 L540 134" fill="none" stroke="#fff" strokeWidth="22" strokeLinejoin="round" strokeLinecap="round" />
      </g>
      <rect x="150" y="186" width="9" height="44" fill={C.steel} />
      <rect x="540" y="186" width="9" height="44" fill={C.steel} />
    </svg>
  )
}

function CustomBoardScene() {
  return (
    <svg viewBox="0 0 640 370" className="sign-svg" role="img" aria-label="Custom arrow-shaped blue direction board built to client drawing">
      <path d="M40 60 H480 L560 155 L480 250 H40 L80 155 Z" fill={C.blueDark} stroke="#fff" strokeWidth="6" strokeLinejoin="round" />
      <rect x="120" y="92" width="230" height="3.5" fill="#fff" opacity="0.85" />
      <text x="205" y="126" textAnchor="middle" fill="#fff" fontSize="30" fontWeight="700" fontFamily="Arial, sans-serif">Residence</text>
      <text x="230" y="176" textAnchor="middle" fill="#fff" fontSize="17" fontWeight="600" fontFamily="Arial, sans-serif">Regional Office</text>
      <text x="390" y="176" textAnchor="middle" fill="#fff" fontSize="17" fontWeight="600" fontFamily="Arial, sans-serif">Inspection House</text>
      <rect x="96" y="198" width="330" height="32" rx="5" fill={C.yellow} />
      <text x="261" y="221" textAnchor="middle" fill={C.ink} fontSize="15" fontWeight="700" fontFamily="Arial, sans-serif">Enquiry Helpline Board</text>
      <rect x="150" y="250" width="10" height="100" fill={C.steel} />
      <rect x="440" y="250" width="10" height="100" fill={C.steel} />
      <rect x="130" y="350" width="50" height="8" rx="3" fill={C.steelDark} />
      <rect x="420" y="350" width="50" height="8" rx="3" fill={C.steelDark} />
      <rect x="0" y="360" width="640" height="8" fill="#e6ebf1" />
    </svg>
  )
}

/* ================= master dispatcher ================= */
function RegNum({ v }) {
  return (
    <g>
      <circle cx="50" cy="50" r="40" fill="#fff" stroke={C.red} strokeWidth="9" />
      <text x="50" y="63.5" textAnchor="middle" fill={C.ink} fontSize="36" fontWeight="800" fontFamily="Arial, sans-serif">{v}</text>
    </g>
  )
}

export default function SignSvg({ art, className = '', style }) {
  if (!art) return null
  const { frame } = art

  /* full-bleed scenes & boards return complete SVGs immediately */
  switch (frame) {
    case 'gantry':
      return <GantryScene />
    case 'cantilever':
      return <CantileverScene />
    case 'flagBoard':
      return <FlagTypeScene />
    case 'customBoard':
      return <CustomBoardScene />
    case 'board':
      return (
        <BoardScene
          rows={art.rows}
          color={art.color}
          compact={art.compact !== false}
          posts={art.posts === 0 ? 0 : 2}
          alt={art.alt}
        />
      )
    case 'special':
      return <SpecialBoard g={art.g} label={art.label} sublabel={art.sublabel} />
    case 'facility':
      return <FacilityBoard icon={art.icon} label={art.label} meters={art.meters} arrow={art.arrow} />
    case 'marker':
      return <RouteMarker kind={art.kind} />
    default:
      break
  }

  /* circular / triangular sign faces */
  let face = null
  if (frame === 'caution') {
    face = (
      <g>
        <path d="M50 6 L96 92 L4 92 Z" fill="#fff" stroke={C.red} strokeWidth="9" strokeLinejoin="round" />
        {CAUTION[art.glyph] || null}
      </g>
    )
    return <Svg100 face={face} art={art} />
  }
  switch (frame) {
    case 'stop':
      face = <Octagon />
      break
    case 'giveway':
      face = <GiveWay />
      break
    case 'noEntry':
      face = <NoEntry />
      break
    case 'noParking':
      face = <NoParking />
      break
    case 'noStopping':
      face = (
        <g>
          <circle cx="50" cy="50" r="40" fill={C.blue} />
          <circle cx="50" cy="50" r="36" fill="none" stroke={C.red} strokeWidth="6" />
          <path d="M32 32 L68 68 M68 32 L32 68" stroke={C.red} strokeWidth="7.5" strokeLinecap="round" />
        </g>
      )
      break
    case 'noStanding':
      face = (
        <g>
          <circle cx="50" cy="50" r="40" fill={C.blue} />
          <circle cx="50" cy="50" r="36" fill="none" stroke={C.red} strokeWidth="6" />
          <path d="M32 32 L68 68" stroke={C.red} strokeWidth="7.5" strokeLinecap="round" />
        </g>
      )
      break
    case 'restrictionEnds':
      face = (
        <g>
          <circle cx="50" cy="50" r="39" fill="#fff" stroke={C.steelDark} strokeWidth="6" />
          <path d="M30 70 L70 30" stroke={C.ink} strokeWidth="7" strokeLinecap="round" />
        </g>
      )
      break
    case 'limit':
      face = <RegNum v={art.value} />
      break
    case 'prohibit':
      face = <Prohibit glyph={art.glyph} ban={art.ban} />
      break
    case 'comp':
      face = <Compulsory glyph={art.glyph} />
      break
    default:
      return null
  }
  return <Svg100 face={face} art={art} />
}

function Svg100({ face, art }) {
  return (
    <svg viewBox="0 0 100 100" className={`sign-svg ${classNameSafe(art.className)}`} style={art.style} role="img" aria-label={art.alt || 'Road sign'}>
      {face}
    </svg>
  )
}
function classNameSafe(cn) {
  return cn || ''
}

export { C as SIGN_COLORS, CAUTION, GLYPHS, BoardArrow, FACILITY }
