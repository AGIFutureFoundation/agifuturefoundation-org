# agifuturefoundation.org

Static website for **AGI Future Foundation PBC** — Architecting Global AGI Prosperity.

Full rebuild of the Kylon app (https://agi-future-foundation.kylon.app) as a static
site: problem/solution framework, three-tier architecture, the venture family,
fifteen diligence-grade articles (content 1:1), eight self-hosted video explainers,
and the invest form — in the unified AGIF family design (`BRAND.md`).

## Stack
- Pure HTML + CSS + JS — no build step
- Served by **GitHub Pages** (branch `main`, path `/`), custom domain `www.agifuturefoundation.org`

## Structure
- `index.html` — the hub (all sections + venture family + invest form)
- `articles/<slug>/index.html` — the 15 deep dives
- `heroes/`, `posters/`, `videos/` — media mirrored from the Kylon app
  (8 homepage explainers + 7 article-embedded films, all self-hosted MP4)
- `styles.css` / `script.js` — shared family design (accent `#4f8cff`)
- `CNAME` — `www.agifuturefoundation.org`

## Notes
- The invest form composes an email to `invest@agifuturefoundation.org` via the
  visitor's mail client (no backend on static hosting).
- The seven articles whose source ledes carried a raw `**SEO meta description:**`
  placeholder now use clean, complete descriptions; the leftover note paragraphs
  were removed from the bodies. All other content is 1:1 with the Kylon app.

## Subdomain architecture

Venture landings live at `<name>.agifuturefoundation.org`, each served by its own
repo's GitHub Pages, with a CNAME at Hostinger pointing to
`agifuturefoundation.github.io`:

- `.x` companies: `cognition.x`, `smartciti.x`
- Ventures: `worldforge`, `biodao`

Apex DNS is managed at Hostinger; the apex `A` records should point to GitHub
Pages (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`)
so the apex serves/redirects to `www`, and `www` stays a CNAME to
`agifuturefoundation.github.io`.
