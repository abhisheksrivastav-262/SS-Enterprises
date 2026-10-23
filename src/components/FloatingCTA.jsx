import { site, waLink, enquireMessage, telLink } from '../config/site'

export default function FloatingCTA() {
  const wa = waLink(enquireMessage('General signage enquiry'))
  const call = telLink()
  return (
    <>
      {wa && (
        <a
          className="float-wa"
          href={wa}
          target="_blank"
          rel="noreferrer"
          aria-label={`WhatsApp us at ${site.phone}`}
          title="Chat on WhatsApp"
        >
          <svg viewBox="0 0 32 32" aria-hidden="true" fill="currentColor">
            <path d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3Zm0 2.4a10.6 10.6 0 1 1-5.4 19.7l-.5-.3-3.7 1 1-3.6-.3-.5A10.6 10.6 0 0 1 16 5.4Zm-4.6 5c-.3 0-.7 0-1 .2-.4.2-1.3.9-1.5 2s.2 2.4 1.4 3.8c1.2 1.5 4.2 4.8 9.4 6.2 1.2.3 2 .2 2.7-.1.7-.4 1.4-1.1 1.6-2 .2-.8.2-1.6 0-1.8-.2-.2-.5-.3-.8-.5a19 19 0 0 0-2.3-1c-.4-.1-.7 0-1 .4l-.9 1.3c-.2.3-.5.4-.8.2a11.5 11.5 0 0 1-3-1.9 12 12 0 0 1-2-2.7c-.2-.4 0-.6.2-.8l.7-.9c.2-.3.1-.6 0-.8l-.9-2.3c-.2-.6-.5-.6-.9-.6Z" />
          </svg>
        </a>
      )}
      {call && (
        <a className="float-call" href={call} aria-label={`Call us at ${site.phone}`} title="Call now">
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24a11.4 11.4 0 0 0 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1A17 17 0 0 1 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z" />
          </svg>
        </a>
      )}
      <a className="float-top" href="#top" aria-label="Back to top" title="Back to top">
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V6M6 12l6-6 6 6" />
        </svg>
      </a>
    </>
  )
}
