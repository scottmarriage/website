# Astro Portfolio

A fast, zero-cost-to-host portfolio for front-end + data demos.

## Tech

- Astro + React islands
- TailwindCSS (dark theme)
- MDX/TSX content collections

## Quickstart

```bash
npm i
npm run dev
```

Then open http://localhost:4321

## Content

- Projects: add TSX files in `content/projects/`.
- Skills Showcase: add TSX files in `content/demos/`.
- Posts: add MDX files in `content/posts/`.

## CI/CD (GitHub Actions)

- **CI**: install → lint → typecheck → test → build.
- **Deploy to Vercel**: optional production deploy on push to `main`.

### Configure Vercel secrets

GitHub → Repo → Settings → **Secrets and variables → Actions**:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
