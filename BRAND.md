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
| cognitionx | `#6366f1` | Cognition indigo — modular minds |
| smartcitix | `#06b6d4` | City cyan — smart infrastructure |
| biodao | `#0ea5e9` | WAVE ocean — listening |
| agifellowship.church | `#d4af37` | Fellowship gold — the sacred |
| agi.lease | `#ff6b35` | Accelerator orange — velocity |
| mentib.us | `#8b5cf6` | Mentib violet |
| perilux.pro | `#f59e0b` | Perilux amber |
| fellowship.chat | `#10b981` | Fellowship chat green |
| robotics | `#f97316` | Venture home accent |
| diagnosticx | `#22d3ee` | Venture home accent |
| metropolis | `#a78bfa` | Venture home accent |
| insidr | `#94a3b8` | Venture home accent |
| shield | `#fbbf24` | Venture home accent |
| locatorx | `#34d399` | Venture home accent |
| trueforge | `#f472b6` | Venture home accent |
| sentinel | `#ef4444` | Venture home accent |
| genomic | `#4ade80` | Venture home accent |
| plaudguard | `#60a5fa` | Venture home accent |
| dyva | `#c084fc` | Venture home accent |
| wave | `#0ea5e9` | Venture home accent |
| sneeze | `#7dd3fc` | Venture home accent |
| rubidium | `#a5b4fc` | Venture home accent |
| artemis | `#f0abfc` | Venture home accent |
| vrs | `#5eead4` | Venture home accent |
| rmap | `#fdba74` | Venture home accent |
| statabase | `#fca5a5` | Venture home accent |
| ombi | `#d8b4fe` | Venture home accent |

## The family bar (unified footer)
Every site carries a `family-bar` above its footer bottom line:
"Part of the AGI Future Foundation family · WorldForge · SmartCiti.X ·
AGI Fellowship · AGI Accelerator · WAVE" — linking the live family properties.
The Foundation itself carries the hub variant with the GitHub link.

## Subdomain architecture
One rule for the whole 66-W3 network: `<kebab-name>.agifuturefoundation.org` —
kebab-case, **no dot forms** (`cognitionx`, not `cognition.x`; `locatorx`,
`diagnosticx`). All hostnames CNAME to `agifuturefoundation.github.io`
(GitHub Pages — not Vercel). The full registry lives on the hub
(`#subdomains`): 24 named subdomains across 33 series slots.

### Registry (all 24 serving — status: LIVE)
Every named subdomain serves a venture home page (family template, own Pages
repo `<name>-site`). 9 series slots stay open for future ventures.

- **Core family**: `www` (hub) · `cognitionx` · `smartcitix` · `biodao` · `worldforge`
- **Ventures in development (12)**: `robotics` · `diagnosticx` · `metropolis` ·
  `insidr` · `shield` · `locatorx` · `trueforge` · `sentinel` · `genomic` ·
  `plaudguard` · `dyva` · `wave`
- **RP1 metaverse ecosystem (7, reserved homes)**: `sneeze` (open browser engine,
  Apache 2.0) · `rubidium` (open metaverse browser) · `artemis` (RP1's native
  browser) · `vrs` (Universal Map — 1:1 Earth) · `rmap` (Remote Model Access
  Protocol) · `statabase` (planetary-scale database) · `ombi` (Open Metaverse
  Browser Initiative — omb.wiki). RP1 is by Metaversal / 8-P; standards via the
  Metaverse Standards Forum.

New ventures: pick a kebab-case name, claim the subdomain in the hub
registry table, point its CNAME at `agifuturefoundation.github.io`.


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
