import { useEffect } from 'react'
import { site } from '../config/site'

export default function usePageMeta({ title, description, image } = {}) {
  useEffect(() => {
    const t = title ? `${title} — ${site.name}` : site.name
    document.title = t
    const metas = [
      ['meta[name="description"]', 'content', description],
      ['meta[property="og:title"]', 'content', t],
      ['meta[property="og:description"]', 'content', description],
      ['meta[property="og:image"]', 'content', image],
      ['meta[name="twitter:description"]', 'content', description],
    ]
    metas.forEach(([sel, attr, val]) => {
      const el = document.querySelector(sel)
      if (el && val) el.setAttribute(attr, val)
    })
  }, [title, description, image])
}
