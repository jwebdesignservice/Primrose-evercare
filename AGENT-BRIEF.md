# AGENT-BRIEF — Primrose Ever Care

## What This Project Is
Domiciliary home care website for Primrose Ever Care LTD (Aminah Carew). Serving Medway area (Rochester, Chatham, Gillingham, Strood, Rainham). Next.js + Tailwind + Vercel. Live at https://primrose-ever-care.vercel.app.

## Current Priority
Areas We Cover page — next in queue.

## Context
- Homepage ✅ Contact ✅ Services ✅ About ✅ Cookies Policy ✅ Cookie consent banner ✅ — all live on main
- AreasSection (homepage section) updated to North Kent (Dartford, Gravesend, Medway Towns, Maidstone, Swale)
- Services: 9 total (Personal Care, Dementia Care, Companionship, Medication Support, Meal Preparation, Household Tasks, Mobility Assistance, Respite Care, Live-in Care)
- Areas We Cover (dedicated page) — NOT built yet ← next task
- Legal pages (Privacy Policy, Complaints Procedure, Safeguarding Policy) — NOT built yet
- Contact form — exists but not wired to email
- Contract signed with client — project is live and paid

## Flow Exception (2026-03-23)
About page (`/about`) was built directly by George outside the Oracle → Paperclip flow. Output kept as a one-off exception. All remaining work must go through the correct flow: Oracle briefs → George creates Paperclip task → specialist agent builds.

## Nightly Agent Rules (hard policy — no exceptions)

- Always create a fresh `nightly/YYYY-MM-DD` branch from latest `main` before touching anything
- NEVER commit to main. NEVER merge to main. NEVER deploy.
- Use the iteration loop: make changes → `npm run build` → pass = commit, fail = revert + try different approach
- Max 5 iterations, 45-minute budget. If nothing ships, document in GOTCHAS.md and report failure.
- Branch stays isolated until operators approve in the morning via synthesis handover.

## Off-Limits
- Do not modify the homepage without operator approval — client has seen and approved it
- Do not change the colour palette or typography without approval
- Do not deploy to production without running `npm run build` first
- Do not modify contact form submission logic yet (email integration is a separate task)

## Tech Stack
- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- Deploy: Vercel (jwebdesignservice account)
- Fonts: Cormorant Garamond
- Colours: Pink/soft blue from logo

## Read Before Starting
- GOTCHAS.md ← always
- DEV-IN-PROGRESS.md (if exists)
