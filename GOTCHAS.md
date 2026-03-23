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
