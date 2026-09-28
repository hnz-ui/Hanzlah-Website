# Portfolio

A single-page personal site. Next.js (App Router) + Tailwind v4, statically
rendered, no client-side JavaScript.

## Editing the content

**Everything on the page comes from [`content.ts`](./content.ts).** Name,
tagline, bio, projects, roles, skills, social links — change them there and the
whole site updates. You shouldn't need to touch the components for normal edits.

Two things to set before launch:

- `site.url` — your real domain, once it's connected. It's used for Open Graph
  tags when someone shares the link.
- `resumeHref` — drop a PDF at `public/resume.pdf`, or set this to `null` to
  hide the résumé links.

## Running it locally

Node lives in a non-standard place on this laptop, so the PATH line is needed:

```bash
export PATH="$HOME/.local/node/node-v22.23.2-darwin-arm64/bin:$PATH"
cd ~/Documents/portfolio
npm run dev
```

Then open http://localhost:3000.

To check the real production output: `npm run build && npm start`.

## Deploying

1. Create an empty repo on GitHub (no README, no .gitignore — this folder has both).
2. Push:
   ```bash
   git remote add origin git@github.com:<you>/<repo>.git
   git branch -M main
   git push -u origin main
   ```
3. On vercel.com → Add New → Project → import the repo. Next.js is detected
   automatically; no settings to change. Deploy.
4. Project → Settings → Domains → add your domain, then add the DNS records
   Vercel shows you at your registrar.

Every push to `main` redeploys.

## Notes on the design

- Design tokens (colors, rules) live at the top of `app/globals.css` and adapt
  to the visitor's light/dark preference.
- Scroll motion is pure CSS (`animation-timeline: view()`), behind an
  `@supports` guard. Browsers that don't support it show the content
  immediately — there's no state in which the page can end up blank.
