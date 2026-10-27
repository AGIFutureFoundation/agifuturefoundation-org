# agifuturefoundation.org

Static website for **AGI Future Foundation PBC** — Architecting Global AGI Prosperity.

Content migrated from the previous Hostinger-hosted site (problem/solution framework,
architecture, articles index, video explainers, and invest form).

## Stack
- Pure HTML + CSS + JS — no build step
- Deploy-ready for Vercel (auto-detected as a static project)

## Deploy to Vercel
```bash
vercel          # first deploy
vercel --prod   # promote to production
```
Then in the Vercel dashboard add the custom domain `agifuturefoundation.org`
(Settings → Domains). DNS is managed at Hostinger — when the deployment is live,
the apex `A` record should point to `76.76.21.21` and `www` to `cname.vercel-dns.com`.

## Subdomain architecture

Each venture has a reserved home, all pointing to Vercel (`cname.vercel-dns.com`).
When a project expands, deploy its repo on Vercel and add the subdomain in the
project settings — it goes live instantly, no DNS changes needed.

- `.x` companies: `cognition.x`, `smartciti.x`, `locator.x`, `diagnostic.x` —
  plus a `*.x` wildcard so any future .X company works automatically
- Project subdomains: `worldforge`, `metropolis`, `rubidium`, `robotics`,
  `shield`, `insidr`, `wave`, `trueforge`, `sentinel`, `genomic`,
  `plaudguard`, `dyva`

DNS is managed at Hostinger (apex A record is intentionally still on
Hostinger until the new Vercel deployment is confirmed live — then flip
`@` to `76.76.21.21` and `www` to `cname.vercel-dns.com`).

## TODO
- [ ] Wire the contact/invest form to a backend (Formspree, Vercel Function, etc.)
- [ ] Fill in `data-youtube-id` attributes on the eight explainer embeds
- [ ] Replace `#` placeholders in the footer social links with real profile URLs
- [ ] Add full article pages as they are written
