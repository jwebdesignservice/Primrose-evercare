# GOTCHAS.md — Primrose Ever Care

Read this before touching anything. Format: [YYYY-MM-DD] What I tried → what went wrong → what actually works

---

- [2026-03-23] Two folders exist: `Primrose-Ever-Care` (capital) and `primrose-ever-care` (lowercase) — use `primrose-ever-care` (lowercase). The lowercase one is the active repo.
- [2026-03-23] Framework: Next.js with Tailwind. Run `npm run dev` to test locally, `vercel --prod` to deploy.
- [2026-03-23] Contact form currently shows thank-you screen but does NOT send emails — needs Resend/EmailJS/Formspree integration before going live.
- [2026-03-23] Live URL: https://primrose-ever-care.vercel.app — deployed via Vercel (jwebdesignservice account).
- [2026-03-23] Client is Aminah Carew — care business, CQC registering. Legal pages are REQUIRED by regulation, not optional.
- [2026-03-23] Colours: pink/soft blue from logo. Typography: Cormorant Garamond for headings.
- [2026-03-23] Never commit direct to main without running build first (`npm run build`). Build failures block Vercel deploy.

## [2026-03-23] App router is at src/app not app
**Tried:** Creating pages at /app/[page]/page.tsx
**Problem:** Project uses src/ directory. Pages must be at src/app/[page]/page.tsx
**Fix:** Always create under src/app/

## [2026-03-23] git checkout . doesn't remove new files
**Tried:** git checkout . to revert failed iteration
**Problem:** Only reverts tracked files. New untracked files (new components, pages) remain and can cause build conflicts
**Fix:** git checkout . && git clean -fd � removes untracked files and directories too

## [2026-03-23] Branch collision on re-run
**Tried:** git checkout -b nightly/YYYY-MM-DD on a date that already has a branch
**Problem:** Fails with "branch already exists" � hard stop
**Fix:** git checkout nightly/YYYY-MM-DD && git reset --hard main if branch exists

## [2026-03-23] Footer links still point to /#about not /about
**Tried:** Updating Navbar links
**Problem:** Footer has its own separate quickLinks array � both Navbar.tsx AND Footer.tsx need updating
**Fix:** Always update both files when adding/changing page routes

## [2026-03-23] Resend requires RESEND_API_KEY in Vercel env vars
**Tried:** Building Resend integration without production key
**Problem:** Build passes, but form submissions silently fail at runtime without the env var
**Fix:** Add RESEND_API_KEY to Vercel project env vars before going live. Use test mode during dev.

## [2026-03-24] Resend throws at module init if env var is missing — breaks Next.js build
**Tried:** `const resend = new Resend(process.env.RESEND_API_KEY)` at module level in API route
**Problem:** Next.js runs the route module during `npm run build` to collect page data. Resend throws `Missing API key` immediately → build fails.
**Fix:** Lazy-initialize inside the handler: `const resend = new Resend(process.env.RESEND_API_KEY ?? 'MISSING_KEY')`. Build passes; at runtime without the env var, Resend returns an auth error which we catch and return as a user-facing message.

## [2026-03-25] Next.js metadata: use title template + metadataBase in layout.tsx
**Context:** SEO metadata pass across all pages.
**Fix:** In `layout.tsx`, set `title: { default: 'Primrose Ever Care', template: '%s | Primrose Ever Care' }` so individual pages only need the short title (e.g. 'About Us') and the suffix appends automatically. Also set `metadataBase: new URL('https://primrose-ever-care.vercel.app')` so relative OG image paths (e.g. `/images/hero.jpg`) resolve to absolute URLs for social crawlers — without this, OG images may not render in social previews.

## [2026-03-26] ContactForm Field component: label not associated with input
**Context:** Accessibility audit — screen readers couldn't associate form labels with inputs.
**Problem:** The `Field` component rendered `<label>` as a sibling of the input, not wrapping it, and had no `htmlFor`/`id` pair. Screen readers would read the label text without connecting it to the input.
**Fix:** Changed `Field` to wrap `children` inside the `<label>` element (implicit association). The label text is wrapped in a `<span>` to maintain layout. This works for all input types — no IDs required.

## [2026-03-26] Step indicator icons need aria-hidden when inside labelled containers
**Context:** Step progress dots in ContactForm use `<CheckCircle>` icon when a step is complete.
**Fix:** Mark icon as `aria-hidden="true"` when it's inside a div that already has `aria-label`. Add `role="status"` + `aria-live="polite"` on the outer step indicator container so screen readers announce step changes.
