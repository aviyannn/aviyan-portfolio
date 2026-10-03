# aviyandhital.com.np

My personal site, built with React, TypeScript, and Vite.

## Develop

```bash
npm install
npm run dev     # local preview at http://localhost:5173
npm run build   # type-check and build to dist/
npm run lint
```

Most content (experience, builds, interests, links) lives in `src/data.ts`.

## Deploy

Deploys are automatic. Every push to `main` (including merging a pull request) runs
`.github/workflows/deploy.yml`, which lints, builds, and publishes `dist/` to the
`gh-pages` branch. GitHub Pages serves that branch at aviyandhital.com.np, usually
within a minute or two. Progress shows in the repo's **Actions** tab, where a deploy
can also be re-run by hand ("Run workflow").

`public/CNAME` keeps the custom domain attached on every deploy.

`npm run deploy` still works as a manual fallback from your machine.
