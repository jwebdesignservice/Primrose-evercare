# AGENT-BRIEF.md — Primrose Ever Care

This file steers the nightly agent. Update it to change what gets worked on tonight.
The agent reads this at the start of every run.

---

## Project Overview
Domiciliary home care website for Primrose Ever Care LTD (client: Aminah Carew). Serving Medway and North Kent. CQC registering. Contract signed, site live and paid.

## Tech Stack
- Framework: Next.js (App Router) — pages at `src/app/`
- Styling: Tailwind CSS, Cormorant Garamond font (headings)
- Colours: Pink (#E8A4A0 → #D4887F) + soft blue (#4A7FA5)
- Hosting: Vercel (jwebdesignservice account)
- Repo: github.com/jwebdesignservice/Primrose-evercare (branch: main)
- Local: C:\Users\Jack\Desktop\AI Website\htdocs\Websites\primrose-ever-care

## Key Files
- `src/app/` — all page routes (about, contact, services, areas-we-cover, complaints, cookies-policy, privacy-policy, safeguarding)
- `src/components/` — all page components + shared (Navbar, Footer, CookieBanner)
- `src/app/contact/page.tsx` — contact page
- `src/components/ContactForm.tsx` — the form component to wire up
- `GOTCHAS.md` — bugs and wrong assumptions, read before starting

## Tonight's Task
**ONE task only.**
Wire the contact form to send emails using Resend.

Steps:
1. `npm install resend`
2. Create `src/app/api/contact/route.ts` as a Next.js API route handler
3. Use Resend to email form submissions to `enquires@primroseevercare.co.uk`
4. Fields: name, email, phone, message
5. Return JSON success/error response
6. Update `ContactForm.tsx` to POST to the API route on submit (replace the current thank-you logic)

Note: Use a test Resend API key if no production key available — document this in GOTCHAS.md.

Definition of done:
- API route exists at `/api/contact`
- Form submits without errors
- Build passes: `npm run build`
- Changes committed to `nightly/YYYY-MM-DD` branch
- Changes NOT merged to main (operators merge in the morning)

## Do NOT Touch
- `src/app/page.tsx` (homepage) — client approved, do not modify
- `src/components/Navbar.tsx` colours/typography — approved by client
- `MEMORY.md` — contains sensitive credentials
- Never commit to main — always `nightly/YYYY-MM-DD`

## Nightly Agent Rules (hard policy — no exceptions)
- Always create a fresh `nightly/YYYY-MM-DD` branch from latest `main` before touching anything
- NEVER commit to main. NEVER merge to main. NEVER deploy.
- Do not spawn subagents — do all work inline.
- Iteration loop: make changes → `npm run build` → pass=commit, fail=`git checkout . && git clean -fd` then try a DIFFERENT approach
- Max 5 iterations, 45-minute budget. If nothing ships, post failure to Discord channel 1485697827324825611 then STOP.
- Branch stays isolated until operators approve in the morning.

## STOP Instruction
After committing and pushing the nightly branch, STOP. Do not continue.
If you encounter an unrecoverable error, post to Discord channel 1485697827324825611: `❌ Primrose Nightly FAILED — [DATE] / Error: [what] / Last step: [what]` then STOP.

## Flow Exception (2026-03-23)
About page was built directly by George outside the Oracle → Paperclip flow. Kept as one-off exception.
All remaining work must go through correct flow: brief → Oracle → George → Paperclip task → specialist agent.

## Known Issues
- Resend API key not yet set in Vercel env vars — needed before emails go live
- Contact form shows thank-you screen but does NOT send emails (this is tonight's task)

## Recently Completed
- 2026-03-23: Services page built and live
- 2026-03-23: About page built and live
- 2026-03-23: Cookies Policy + Cookie Banner built and live
- 2026-03-23: Areas We Cover page built and live
- 2026-03-23: Complaints Procedure page built and live
- 2026-03-23: Privacy Policy page built and live
- 2026-03-23: Safeguarding Policy page built and live

## Context
- Homepage ✅ Contact ✅ Services ✅ About ✅ Cookies Policy ✅ Cookie Banner ✅ Areas We Cover ✅ Complaints ✅ Privacy Policy ✅ Safeguarding ✅ — all on main
- Remaining: contact form email integration only (JWE-2)
g: contact form email integration only (JWE-2)
