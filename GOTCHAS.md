# GOTCHAS.md — Primrose Ever Care

Read this before touching anything.

---

- [2026-03-23] Two folders exist: `Primrose-Ever-Care` (capital) and `primrose-ever-care` (lowercase) — use `primrose-ever-care` (lowercase). The lowercase one is the active repo.
- [2026-03-23] Framework: Next.js with Tailwind. Run `npm run dev` to test locally, `vercel --prod` to deploy.
- [2026-03-23] Contact form currently shows thank-you screen but does NOT send emails — needs Resend/EmailJS/Formspree integration before going live.
- [2026-03-23] Live URL: https://primrose-ever-care.vercel.app — deployed via Vercel (jwebdesignservice account).
- [2026-03-23] Client is Aminah Carew — care business, CQC registering. Legal pages are REQUIRED by regulation, not optional.
- [2026-03-23] Colours: pink/soft blue from logo. Typography: Cormorant Garamond for headings.
- [2026-03-23] Never commit direct to main without running build first (`npm run build`). Build failures block Vercel deploy.
