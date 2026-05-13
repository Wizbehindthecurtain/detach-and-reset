# Corporate Landing Page — Design Spec

**Date:** 2026-05-13
**Status:** Draft — pending user review
**Project:** detach-and-reset
**Route:** `/enterprise`

## Purpose

A second front door for **detach-and-reset**, targeting **PE sponsors who own roofing roll-ups** (and the portfolio-company executives at those portcos). The site repositions the same solar detach & reset service as an *operating-level solution for a portfolio-scale problem*, rather than the one-job-at-a-time framing used on the roofer page.

**Conversion target:** a 30-minute portfolio-fit call with TJ Nardini (COO).

## Audience

- PE sponsors / operating partners at firms actively rolling up roofing companies in Florida and adjacent states
- Portfolio-company CEOs / COOs at those roll-up platforms
- Procurement / vendor-management leaders at the platform tier

What they're scanning for: market thesis, multi-state operating capability, vendor reliability at scale, executive-team credibility, terms of partnership.

## URL Structure

Same domain, additional route: **`detachandreset.com/enterprise`**.

Roofer site at `/` remains unchanged. Migration to subdomain (`enterprise.detachandreset.com`) or a separate corporate domain (e.g. `4ienergypartners.com`) is a Vercel-config + middleware change later — not in scope for v1.

## Aesthetic — Quiet Luxury

Locked in conversation 2026-05-13 after rejecting three earlier options (editorial-monolith, brutalist-monolith, quiet-luxury). Quiet Luxury was the explicit pick.

| Layer | Choice |
|---|---|
| Display | Cormorant Garamond — italic and roman variants |
| Body | Outfit Light (200/300 weights) — never bold |
| Mono | IBM Plex Mono — for spec-line metadata only |
| Surface | Warm paper `#EDE6D5` (ground), Ivory `#F8F3E8` (hero) |
| Text | Deep ink `#1A1612` |
| Muted text | `#4A4338` |
| Accent | Brass `#9C7B3F` — sparingly, as italic emphasis or hairline marks |
| Hairlines | `rgba(26,22,18,0.18)` |

**Strictly excluded** from this page:

- Safety-orange `#FF6A13` (contractor-brand color, stays on roofer page only)
- Bold body weights
- Boxed cards, icon grids, pill badges
- Brutalist display fonts (Anton / Big Shoulders / Bebas)
- "SaaS landing-page" component patterns

**Voice register:** measured, third-person, refined. Key phrases get *italic* emphasis. Composition leans on whitespace, hairline dividers, centered classical proportions, editorial restraint. Reads like a Brunello Cucinelli annual report or Hermès commercial-division brief.

## Page Composition

**Eleven sections, one inline CTA.** Section VI (Trinity Solar callout) was added 2026-05-13 after the user clarified the Trinity relationship is more central than the original draft had it.

### I. Hero — Operating brief

Centered Cormorant headline + Outfit-light lede + brass-hairline frame.

- **H1:** *"The solar problem, **solved** at portfolio scale."* — italic emphasis on `solved`
- **Lede:** "A single operating partnership for solar detach & reset across every portfolio company — Florida + 14 other states, manufacturer-aligned, fully insured."
- **Photo:** FL aerial (existing `/public/jobs/hero-solar-aerial.jpg`) with warm cream-tint overlay ~15% opacity so the saturated colors harmonize with the paper field.
- **Treatment:** centered, restrained, photographic.

### II. Market thesis — The math

Two-column editorial layout.

- **Left column:** macro thesis paragraph in Outfit Light — Florida solar adoption growth, re-roof velocity acceleration (FL HB 683 + storm-season pressure), the overlap that creates the operating problem.
- **Right column:** three pull-stats in Cormorant italic display weights:
  - FL solar homes (count)
  - Annual FL re-roof volume
  - Overlap percentage
- **Footnote:** sourced citation in mono caps at the bottom.
- **Open input:** FL solar/re-roof overlap stat — to be researched via SEIA + FL OIR data before build. Placeholder in v1 draft, real number before launch.

### III. The friction — Why your GMs turn the job down

Single-column centered prose, ~3 sentences max. Italic key phrases as visual rhythm.

> "Solar on the roof has become the #1 reason regional GMs turn down profitable re-roof jobs. The math is simple: *warranty void risk · electrical liability · slow callbacks from the homeowner's original installer*. Every turned-down job is portfolio-level revenue your platform leaves on the table."

No icons, no cards. Prose with italic emphasis is the visual texture.

### IV. Operating model — One MSA. Every portco. Every state.

Three-step horizontal flow with Roman numerals.

- **i. Platform-level MSA** — One master agreement covers the entire portfolio. Standard pricing schedule, standard SLA, standard insurance posture. Cormorant headline + 2-line Outfit description.
- **ii. Per-portco activation** — Each portfolio company is added by signed addendum. Onboarding takes one operating call.
- **iii. Scheduling SLA** — Detach scheduled to your roof start, not ours. 3–7 business-day window depending on roofing schedule.

Brass hairlines between steps. Diagrammatic, no boxed cards.

### V. Track record — Field-validated, two years in

Four big-number stats edge-to-edge with brass hairlines between each:

| 468 | 50+ | 15 | $5M |
|:---:|:---:|:---:|:---:|
| Systems · 24 months | Top-500 partners | States licensed | GL coverage |

Numbers in Cormorant Garamond display weight ~80–96px on desktop, scaling down on mobile. Italic suffix on `+` and `M` per Quiet Luxury treatment.

**Treatment:** big-number prestige row. Numbers are the design.

### VI. Anchor relationship — Trinity Solar

**Standalone pull-quote-style block.** Added 2026-05-13 after user clarified Trinity is the #1 partner.

Centered Cormorant italic block, brass hairline framing top and bottom:

> *"Anchor relationship — Trinity Solar."*
> *"120 projects per year. Fifteen states. We are their R&R sub."*

This is one of the two or three things a reader should remember from the page. The math (120/yr × 2yrs = 240 of the 468 cumulative installs) makes the rest of the track-record number self-explanatory.

### VII. Capability spread — Every roof, every system

Two paired blocks side-by-side, both as centered Cormorant italic lists with brass bullets.

- **Left block — Roof types:** asphalt · metal · tile · flat · commercial · ground-mount
- **Right block — System brands:** Tesla · Enphase · SolarEdge · SunPower · SMA · Sol-Ark · Generac · Franklin WH · CertainTeed *(integrated shingle)*

Below: one callout — CertainTeed church integrated-solar project as a "we do hard projects" italic pull line.

### VIII. Certifications + partner ecosystem

The eight licensed partner logos from the roofer site (`/public/partners/*`), but on the ivory/paper field instead of bone tiles. Brass hairline dividers between logos, wider spacing. Mono caps category labels (`Installer · Distributor · Microinverter · ESS · Roofing · Solar Shingle`) in muted brass.

No corner brackets — too contractor.

### IX. Leadership — Who you'd be sitting across from

Four-up portrait row. **No bios in v1** — name + title + photo only.

| Name | Title |
|---|---|
| **Francis O'Reilly** | CEO / Director |
| **Sean O'Reilly** | CSO |
| **TJ Nardini** | COO |
| **Josh Shiflett** | VP–Electrical *(FL license qualifier · EC13013240)* |

Each portrait: warm-toned, near-square aspect. Cormorant name (medium weight), italic role tag below. Generous spacing between portraits. **Photos** sourced from `4ienergy.com/about`, **re-hosted** in `/public/enterprise/team/` to avoid hotlinking + ensure availability.

### X. Portfolio review — Book the call (CTA)

**Two-state section: form first, iframe on success.**

**Form state (initial):**

- Section header: Cormorant Garamond *"Portfolio review."* — italic accent
- Three fields with hairline brass underlines (Quiet Luxury form chrome — no boxed inputs):
  - **Your name** *(required)* — Cormorant label, Outfit input
  - **Firm or platform** *(required)* — same treatment
  - **Portfolio scope** *(optional textarea)* — hint: "# portcos · primary geographies · current solar-encountered job volume"
- Submit button: "Continue to scheduling" — brass-bordered restrained button, Outfit medium weight, uppercase tracking

**On submit:**

1. Client-side zod validation
2. POST to `/api/portfolio-review`
3. Server validates with same zod schema
4. Server sends Resend email to TJ + Operations (see Data Flow below)
5. Form fades out (300ms ease), iframe fades in

**Iframe state:**

- Headline above iframe: *"Welcome, [Firm]. Pick a 30-minute window below."*
- TJ's Google Calendar Appointment Schedule iframe at `h-[720px] sm:h-[680px] lg:h-[660px]`
- Lazy-loaded
- Fallback: if `NEXT_PUBLIC_TJ_BOOKING_URL` is unset, render a "Calendar will appear here. In the meantime, email [Operations@4i.energy]." message

### XI. Footer

Centered single-row layout — *not* three-column like the roofer footer. Single text block in Outfit Light with brass divider dots between elements:

> FL · EC13013240 · Licensed + insured in 15 states · Operations@4i.energy · A 4i Energy Partners company · © 2026

No mono spec-strip. No big column blocks. No `[ SMS · TBD ]` pill (SMS-photos is a roofer-page feature, not relevant here). Restrained.

## Architecture

```
app/
├── (existing roofer files unchanged)
├── enterprise/
│   ├── layout.tsx              — loads Cormorant + Outfit; paper-bg theme
│   ├── page.tsx                — composes the 11 enterprise sections
│   └── opengraph-image.tsx     — separate OG card (ivory ground, Cormorant)
├── api/
│   └── portfolio-review/
│       └── route.ts            — POST → Resend → TJ + Operations

components/
├── (existing shared + sections components unchanged)
└── enterprise/
    ├── EnterpriseHero.tsx
    ├── MarketThesis.tsx
    ├── TheFriction.tsx
    ├── OperatingModel.tsx
    ├── TrackRecord.tsx
    ├── TrinityCallout.tsx
    ├── CapabilitySpread.tsx
    ├── CertificationsEcosystem.tsx
    ├── Leadership.tsx
    ├── PortfolioReview.tsx       — form + iframe (Client Component)
    └── EnterpriseFooter.tsx

lib/
├── utils.ts                      — unchanged (`cn()` helper)
├── env.ts                        — restored, lightweight (Resend + notify emails)
├── resend.ts                     — restored, lightweight (portfolio-review email helper)
└── portfolio-review-schema.ts   — zod schema for the form

public/
├── (existing assets unchanged)
└── enterprise/
    └── team/
        ├── francis-oreilly.png
        ├── sean-oreilly.png
        ├── tj-nardini.png
        └── josh-shiflett.png
```

## Tokens — Additions to `globals.css`

```css
@theme inline {
  /* New tokens for /enterprise — coexist with existing brand tokens */
  --color-paper: #EDE6D5;
  --color-ivory: #F8F3E8;
  --color-deep-ink: #1A1612;
  --color-brass: #9C7B3F;
  --color-muted-warm: #4A4338;

  --font-cormorant: var(--font-cormorant-src);
  --font-outfit: var(--font-outfit-src);
}
```

Tokens are global but only consumed by `/enterprise/*` routes. The roofer site's existing tokens (navy, safety, bone, etc.) are untouched.

## Fonts — Added via `next/font/google`

Loaded inside `app/enterprise/layout.tsx`:

| Family | Weights | Variable |
|---|---|---|
| Cormorant Garamond | 300, 400, 500, 600 — roman + italic | `--font-cormorant-src` |
| Outfit | 200, 300, 400, 500 | `--font-outfit-src` |
| IBM Plex Mono | already loaded by root layout — reused | (existing) |

## Dependencies — Reinstall

- **`resend`** — re-added (uninstalled in Slice 9 iframe pivot, needed again for portfolio-review form)
- **`zod`** — re-added (uninstalled in Slice 9 pivot, needed for shared schema)
- `googleapis` — stays gone (iframe handles booking)

## Environment Variables — Reintroduce

```
# Restored for portfolio-review email
RESEND_API_KEY=
NOTIFY_TJ_EMAIL=tj.nardini@4i.energy
NOTIFY_OPERATIONS_EMAIL=Operations@4i.energy
QUOTE_FROM_EMAIL=portfolio-review@detachandreset.com

# Public — read in the browser by PortfolioReview iframe
NEXT_PUBLIC_TJ_BOOKING_URL=
```

`NEXT_PUBLIC_TJ_BOOKING_URL` is `NEXT_PUBLIC_` because the iframe URL is rendered client-side.

## CTA Data Flow

```
[User fills form] → [zod client validate] → POST /api/portfolio-review
                                                 ↓
                                       [zod server validate]
                                                 ↓
                                      [Resend email TJ + Ops]
                                                 ↓
                                          { ok: true }
                                                 ↓
                              [Form fades out, iframe fades in]
                                                 ↓
                              [User books in iframe → Google sends invite]
```

**Error handling:**

- Resend failure → log server-side, return `{ ok: true }` anyway (user always sees success — matches existing roofer-page pattern)
- Validation failure → server returns 400 with `fieldErrors`, form displays inline mono error messages, no iframe reveal
- `NEXT_PUBLIC_TJ_BOOKING_URL` unset → iframe state shows fallback message instead

**Email content (Resend):**

- **From:** `portfolio-review@detachandreset.com`
- **To:** `tj.nardini@4i.energy`
- **Cc:** `Operations@4i.energy`
- **Subject:** `Portfolio review requested: [Firm]`
- **Body (plain text):**
  ```
  Firm:    {firm}
  Contact: {name}

  Portfolio scope:
  {scope or "(none provided)"}

  Form submitted from /enterprise.
  Booking iframe revealed to user; calendar invite (when booked) will arrive separately.
  ```

## Open Inputs — Required Before Launch

| # | Item | Who provides |
|---|---|---|
| 1 | TJ's Google Appointment Schedule URL (`NEXT_PUBLIC_TJ_BOOKING_URL`) | User → TJ |
| 2 | FL solar / FL re-roof overlap stat (section II) | Claude — research SEIA + FL OIR before build |
| 3 | Resend domain verification for `portfolio-review@detachandreset.com` FROM address | User |
| 4 | Confirm `Operations@4i.energy` inbox is monitored *(already in production via roofer footer)* | User |
| 5 | (Optional) List of the 15 states for legal audit trail — *spec text says "15 states"; specific list not on page* | User |

None of these block spec approval. Items 1, 3 are launch-day prerequisites. Item 2 is build-time work I'll do.

## Out of Scope for v1

- Subdomain or separate corporate domain (path-based for v1)
- FAQ section (intentionally cut — Operating Model + Friction sections preempt most-asked questions)
- RecentJobs photo gallery (intentionally cut — Quiet Luxury aesthetic favors a single editorial Hero photo)
- Bios for the Leadership row (name + title + photo only for v1; bios added when user writes them)
- Map / coverage visualization for the 15 states (stated as a number; map is a v2 ask if desired)
- Updating the roofer-site footer to mention "Florida + 14 other states" (flagged for later)

## Risks / Watch-outs

| Risk | Mitigation |
|---|---|
| Wix CDN photo URLs change or break | Re-host all 4 team photos in `/public/enterprise/team/`; never hotlink |
| Resend re-introduction reverses Slice 9 cleanup | Document the why in commit message; keep the implementation light — no service-account / GCal API revival |
| Trinity Solar mention is partner-specific | User confirmed 2026-05-13 (~120/yr across 15 states). If Trinity ever asks for de-naming, section degrades to "anchor relationship — top-tier national solar installer" |
| TJ's calendar URL pending | Section X renders a fallback message until URL is provided; doesn't block deploy |
| "15 states" claim — specific states not enumerated | User confirmed orally; consider listing the 15 in a separate non-public legal note if needed |
| Brass color (`#9C7B3F`) on ivory may fall under WCAG AA in body text | Use for labels, hairlines, and italic accents only — not for body prose. Body text stays in deep-ink (`#1A1612`) on paper (`#EDE6D5`) which is high-contrast safe |

## Testing / Verification

- `npx tsc --noEmit` → zero errors
- `npx eslint .` → zero warnings
- Mobile breakpoints: 375px (iPhone SE) through 1280px+ desktop
- Real-device check on iOS Safari — Cormorant Garamond italics in particular have rendered inconsistently across iOS versions historically
- WCAG AA contrast check on all text/background pairs
- Form: client validation, server validation, error fallback, success transition
- iframe: lazy-load, fallback when URL unset
- OG card on `/enterprise/opengraph-image` route: warm-paper ivory render, Cormorant headline visible
- `robots.ts` + `sitemap.ts` — add `/enterprise` entry to sitemap

## Reused vs. New

| Reused unchanged | New for `/enterprise` |
|---|---|
| `components/shared/Logo.tsx` | Everything in `components/enterprise/*` |
| `components/shared/CornerBrackets.tsx` *(used very sparingly if at all)* | `lib/portfolio-review-schema.ts` |
| `/public/partners/*` (all 8 logos) | `lib/resend.ts`, `lib/env.ts` (restored from Slice 9 deletion) |
| `/public/jobs/hero-solar-aerial.jpg` (FL aerial) | `/public/enterprise/team/*` (4 portraits) |
| `globals.css` brand tokens (navy/safety/bone untouched) | `globals.css` token additions for paper/ivory/brass |
| `lib/utils.ts` (`cn()` helper) | Fonts: Cormorant Garamond + Outfit |
| Existing roofer site at `/` | New route at `/enterprise` |

## Implementation Order (Plan Preview)

Detailed plan to be written by `superpowers:writing-plans` skill after this spec is approved. Rough order:

1. Restore `lib/env.ts`, `lib/resend.ts`, `lib/portfolio-review-schema.ts` + `resend` + `zod` deps
2. Add tokens to `globals.css`; add fonts in `app/enterprise/layout.tsx`
3. Download + commit team photos to `/public/enterprise/team/`
4. Build sections in order (Hero → Footer), wire `app/enterprise/page.tsx`
5. Build CTA section + API route + email helper
6. Build `app/enterprise/opengraph-image.tsx`
7. Add `/enterprise` to `sitemap.ts`
8. Typecheck + lint
9. Commit + push
10. Vercel deployment + env-var configuration

---

## Approval Checklist (for user review)

- [ ] Audience reading is right — PE roll-up sponsors + portco execs
- [ ] Quiet Luxury aesthetic locked: Cormorant Garamond + Outfit + brass, no safety-orange
- [ ] 11 sections + 1 inline CTA composition approved
- [ ] Trinity Solar gets its own section (VI), not a buried mention
- [ ] Track record stats: 468 / 50+ / 15 / $5M
- [ ] Leadership row: 4 executives, photo + name + title only (no bios v1)
- [ ] CTA routes to TJ via Google Appointment Schedule
- [ ] Qualification form: 3 fields (Name + Firm + Portfolio scope), emails TJ + Operations
- [ ] URL: same domain, path-based `/enterprise`
- [ ] Dependencies reinstalled: `resend`, `zod`
- [ ] Out-of-scope items acknowledged (no FAQ, no photo gallery, no bios, no map, no subdomain v1)
