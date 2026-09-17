# cover-page

Personal portfolio / cover letter site for **Avay Kumar Das** — Senior iOS Engineer.
Live at [avaykumar.dev](https://avaykumar.dev).

React 19 + TypeScript + Vite + Tailwind CSS v4. Single page, hash-anchor navigation, dark theme.

## Develop

```bash
nvm use 22      # Node 22+
npm install
npm run dev     # http://localhost:5173
```

```bash
npm run build   # type-check + production build into dist/
npm run preview # serve the built output
npm run lint    # type-check only
```

## Editing content

**All site content lives in [`src/data/resume.ts`](src/data/resume.ts).** Add a job, a skill, or an
app there and the components pick it up — you should never need to edit JSX to update the résumé.

To add shipped apps, push entries into the `apps` array:

```ts
export const apps: App[] = [
  {
    name: 'App name',
    role: 'iOS Engineer',
    blurb: 'One or two sentences on what you built.',
    image: '/apps/app-name.png',   // put the file in public/apps/
    href: 'https://apps.apple.com/...',
  },
]
```

While the array is empty the Work section renders a "coming soon" placeholder.

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which
builds and publishes `dist/` to GitHub Pages.

One-time setup in the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The custom domain is pinned by [`public/CNAME`](public/CNAME), so `vite.config.ts` keeps `base` at
`/`. If you ever drop the custom domain, set `base: '/cover-page/'` and delete the CNAME.

### DNS for avaykumar.dev

Apex `A` records:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

And a `CNAME` for `www` → `AvayKD0129.github.io`. Enable **Enforce HTTPS** in Settings → Pages once
the certificate is issued (can take up to an hour after DNS propagates).
