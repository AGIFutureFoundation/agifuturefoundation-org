# AGIF Unified Brand Guide

One family, one design system — every site in the AGI Future Foundation
ecosystem shares the same skeleton, so a visitor always knows where they are.

## Core tokens (all sites)
- **Typography**: Inter / system stack
- **Layout**: 1100px container, 14px radius cards, 300/3600 TTL-fast DNS ethos
- **Dark theme base**: `#0b0e14` background, `#e8ecf3` text, `#9aa4b5` muted
- **Header/footer pattern**: sticky blurred header, family bar, muted footer

## Per-venture accent palette
| Site | Accent | Meaning |
|---|---|---|
| agifuturefoundation.org | `#4f8cff` | Foundation blue — the apex |
| worldforge | `#34d399` | Forge green — Earth, growth |
| smartciti.x | `#06b6d4` | City cyan — smart infrastructure |
| agifellowship.church | `#d4af37` | Fellowship gold — the sacred |
| agi.lease | `#ff6b35` | Accelerator orange — velocity |
| bioacoustics.cloud | `#0ea5e9` | WAVE ocean — listening |
| mentib.us | `#8b5cf6` | Mentib violet |
| perilux.pro | `#f59e0b` | Perilux amber |
| fellowship.chat | `#10b981` | Fellowship chat green |

## The family bar (unified footer)
Every site carries a `family-bar` above its footer bottom line:
"Part of the AGI Future Foundation family · WorldForge · SmartCiti.X ·
AGI Fellowship · AGI Accelerator · WAVE" — linking the live family properties.
The Foundation itself carries the hub variant with the GitHub link.

## Subdomain architecture
`<name>.agifuturefoundation.org` — `.x` companies under a `*.x` wildcard;
project subdomains explicit. All point to `cname.vercel-dns.com`.

## Agentic infrastructure (shared)
- **Mail**: catch-all on family domains; Email API tokens (api.mail.hostinger.com)
  let agents send/read programmatically — `x@agifuturefoundation.org` is the hub.
- **Payments**: x402 HTTP-native micropayments (Metropolis-SmartCiti on Monad).
- **Identity**: ERC-8004 agent identity with 2-of-3 passkey steward governance.

## Rules
1. Never break email records (MX/SPF/DKIM/DMARC) when touching DNS.
2. Every venture card: subdomain link first, GitHub second.
3. New sites: copy the shared `styles.css`/`script.js`, set the accent token,
   add the family bar, add the README deploy block.
