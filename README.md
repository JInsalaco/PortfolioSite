# [Joseph Insalaco Portfolio Project](https://www.josephinsalaco.com/)

A static portfolio site showcasing my background and personal projects.

Built with:

- React 19 + TypeScript
- Vite (build tooling and dev server)
- Tailwind CSS + shadcn/ui (Radix primitives)
- React Router
- Vitest + React Testing Library
- Deployed to Azure Static Web Apps

## Getting started

```bash
npm install
```

```bash
npm start
```

The dev server runs at http://localhost:3000.

## Scripts

| Script | Description |
| --- | --- |
| `npm start` / `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check, then build to `build/` |
| `npm run preview` | Serve the production build locally |
| `npm test` | Run Vitest in watch mode |
| `npm run test:run` | Run the tests once (used by CI) |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Type-check without emitting |

Requires Node >= 22.12 (Vite's minimum).

## Testing

Tests use [Vitest](https://vitest.dev) with React Testing Library. Test files live next to the
code they cover as `*.test.tsx`.

```bash
npm run test:run
```

Vitest is configured in `vite.config.ts` — it shares Vite's module resolution, so tests
resolve imports exactly the way the app does.

## Deployment

Pushes to `main` are deployed to Azure Static Web Apps by
`.github/workflows/azure-static-web-apps-gentle-field-065fe101e.yml`.

The workflow builds the app itself (rather than delegating to Azure's Oryx builder) so the Node
version is pinned explicitly, then uploads the prebuilt `build/` directory with
`skip_app_build: true`.

`public/staticwebapp.config.json` sets the SPA navigation fallback, so client-side routes such
as `/resume` resolve correctly when loaded directly.
