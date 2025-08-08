### GPT-5 TODOs for `drjalali.com`

A prioritized checklist focused on fixing root causes first.

### High priority (root-cause fixes)
- [ ] SEO image paths: use an existing asset or add a proper OG image
  - Update OpenGraph/Twitter images in `src/app/layout.tsx` to an existing file (e.g., `/images/professional/dr-jalali-professional.png`) or add a 1200×630 JPG at `public/images/`.
  - Align `image` in `src/components/JsonLd.tsx` to the same finalized URL.

- [ ] Sitemap lists non-existent routes
  - `src/app/sitemap.ts` currently lists `/publications`, `/research`, etc., but these are sections on the home page. Keep only `/` unless we add real routes.

- [ ] Tailwind “secondary” palette usage mismatch
  - Option A: add a `secondary` color palette in `tailwind.config.js`.
  - Option B: replace `bg-secondary-*` usages in `src/components/PublicationsDatabase.tsx` with `accent` (recommended for speed).

- [ ] Remove or move heavy unused dependencies
  - Audit and remove/move: `playwright`, `puppeteer`, `task-master-ai`, `next-optimized-images`.
  - If truly needed for tooling, move to `devDependencies`; otherwise uninstall. Remove `next-optimized-images.config.js` if unused.
  - Suggested commands:
    - Remove: `npm uninstall playwright puppeteer task-master-ai next-optimized-images`
    - OR move: `npm i -D playwright puppeteer task-master-ai` and then remove from `dependencies`.

- [ ] Fonts: migrate to `next/font` and remove CSS imports
  - Replace Google Fonts `@import` lines in `src/app/globals.css` with `next/font/google` in `src/app/layout.tsx` for Inter and Playfair Display to improve CLS/LCP.

- [ ] Replace placeholders/secrets before shipping
  - `NEXT_PUBLIC_GA_ID` for analytics in `src/components/Analytics.tsx`.
  - `NEXT_PUBLIC_GOOGLE_VERIFICATION` in `src/app/layout.tsx` or remove placeholder to avoid publishing fake codes.
  - `JsonLd`: replace Google Scholar ID and verify `sameAs` URLs.
  - `ContactForm`: set real Google Forms `formResponse` URL and `entry.*` IDs.

- [ ] Z-index layering
  - Avoid overlap between `Navigation` and `ScrollProgress`. Set `ScrollProgress` container to a lower z-index (e.g., `z-40`) while keeping navbar at `z-50`.

- [ ] Single source of truth for `CNAME`
  - Keep only one `CNAME` that ends up in `out/CNAME` after `next build`. Prefer placing it under `public/` and remove the duplicate.

### Performance and UX
- [ ] Defer non-critical client components
  - Dynamically import or idle-mount `src/components/FloatingNav.tsx`.
  - Throttle/debounce scroll listeners in `ScrollProgress` and `FloatingNav`.

- [ ] Optimize hero/professional images for static export
  - Pre-optimize assets in `public/` (WebP/JPG), ensure appropriate `sizes`, and keep `images.unoptimized: true` for static export.

- [ ] Publications database loading
  - Consider dynamic import for `src/components/PublicationsDatabase.tsx` or move it to a dedicated route to reduce initial JS.

### Contact form hardening
- [ ] Add spam protection and better UX
  - Honeypot field, client-side validation, and inline success/error states (replace `alert`).
  - Optional: proxy via a serverless API route for better reliability and spam filtering.

### Build/Deploy hygiene
- [ ] Confirm static export pipeline
  - Ensure deployment serves the `out/` directory; `start` is not used for static export.
  - Verify `CNAME` is present in `out/` after build.

### Code hygiene
- [ ] Remove unused import in `src/components/Hero.tsx` (`next/image`).
- [ ] Consider replacing scroll-to `button`s with anchor links where semantically appropriate for in-page navigation.

### Data management
- [ ] Extract publications data
  - Move the large array from `src/components/PublicationsDatabase.tsx` to a JSON file and lazy-load at runtime or generate at build time.

### Monitoring/Analytics
- [ ] Validate analytics configuration
  - Ensure GA (or an alternative like Plausible) is correctly configured and privacy requirements are met.

---

### Suggested implementation order
1) OG/Twitter image + sitemap + Tailwind palette fix
2) Remove/move heavy deps; delete unused configs
3) `next/font` migration
4) Placeholder cleanup (env vars, JsonLd, ContactForm)
5) Z-index layering + CNAME source of truth
6) Performance tweaks (defer components, throttle scroll, image assets)
7) Contact form hardening
8) Publications data extraction/dynamic import

