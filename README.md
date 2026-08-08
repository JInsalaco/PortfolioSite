# Joseph Insalaco — Portfolio Site

[![Tests](https://github.com/JInsalaco/PortfolioSite/actions/workflows/test.yml/badge.svg)](https://github.com/JInsalaco/PortfolioSite/actions/workflows/test.yml)
[![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev)

**Live at [josephinsalaco.com](https://www.josephinsalaco.com/)**

A single-page portfolio site built with React 19, TypeScript and Vite, styled with Tailwind CSS
and shadcn/ui, tested with Vitest, and continuously deployed to AWS Amplify.

---

## Tech stack

| Area | Choice | Why |
| --- | --- | --- |
| UI | **React 19** + **TypeScript** (strict) | Type safety across a small but real component tree |
| Build | **Vite** | Sub-second dev startup and ~700ms production builds |
| Styling | **Tailwind CSS** + **shadcn/ui** | Utility-first styling; shadcn components are owned in-repo rather than pulled from a black-box library |
| Primitives | **Radix UI** | Accessible dialog/menu/avatar behaviour without reimplementing focus traps and ARIA wiring |
| Routing | **React Router 7** | Client-side routing with a catch-all redirect |
| Testing | **Vitest** + **React Testing Library** | Shares Vite's module resolution, so tests resolve imports exactly as the app does |
| Quality | **ESLint 9** (flat config) + **tsc** | Enforced in CI on every push and pull request |
| Hosting | **AWS Amplify** | Builds straight from this repo on push to `main` |

## Features

- **Light/dark theming** via a small React context provider that persists the choice to
  `localStorage` and reflects it as a class on `<html>`, so Tailwind's `dark:` variants apply.
- **Responsive navigation** — inline links on desktop, a Radix-backed slide-out sheet on mobile.
- **Accessible by default** — every icon-only control carries an `aria-label`, external links
  use `rel="noopener noreferrer"`, and dialogs get proper titles.
- **Resume, skills and project sections** driven by typed data structures rather than
  hand-duplicated markup.
- A couple of **easter-egg components** (`src/components/Fun`) — including a "No" button that
  runs away from your cursor.

## Getting started

Requires **Node >= 22.12** (Vite's minimum).

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

## Project structure

```
src/
├── components/
│   ├── HomePage/       # Page sections: Welcome, About, Skills, Portfolio, ContactInfo
│   ├── Resume/         # Embedded resume view
│   ├── Fun/            # Easter-egg components
│   ├── ui/             # shadcn/ui primitives (Button, Card, Sheet, Avatar, ...)
│   ├── Header.tsx      # Navigation + theme toggle
│   └── theme-provider.tsx
├── lib/                # Shared helpers (`cn` class merger)
├── App.tsx             # Routes
└── index.tsx           # Entry point
```

Tests live beside the code they cover as `*.test.tsx`.

## Testing

25 tests across 9 files, run with [Vitest](https://vitest.dev) and React Testing Library:

```bash
npm run test:run
```

Coverage focuses on behaviour a user can observe rather than implementation details:

- **Routing** — `/`, `/resume`, and the catch-all redirect for unknown paths
- **Theme provider** — default theme, `localStorage` hydration and persistence, class toggling
- **Header** — navigation links, theme toggle, and the mobile sheet menu opening
- **Content sections** — that every section renders and each contact/project link points where
  it claims to (including `target`/`rel` on external links)
- **Interactions** — driven through `@testing-library/user-event` so clicks and hovers go
  through realistic event sequences
- **Utilities** — Tailwind class merging and conditional-class edge cases

## Continuous integration

[`.github/workflows/test.yml`](.github/workflows/test.yml) runs lint, type-check, the test suite
and a production build on every push and pull request to `main` and `develop`. It does not
deploy — hosting is handled separately by Amplify.

## Deployment

Hosted on **AWS Amplify**, which builds directly from this repository on push.

Build settings live in [`amplify.yml`](amplify.yml); when that file is present it takes
precedence over the build settings stored in the Amplify Console. It pins Node to 22 (Vite
requires >= 22.12) and publishes the `build/` directory.

As a single-page app, Amplify needs a rewrite rule so client-side routes such as `/resume`
resolve when loaded directly instead of returning 404. That rule is configured in the Amplify
Console under **Hosting → Rewrites and redirects**:

| Source | Target | Type |
| --- | --- | --- |
| `/<*>` | `/index.html` | 200 (Rewrite) |

## Engineering notes

A few decisions worth calling out:

**Migrated from Create React App to Vite.** CRA has been unmaintained since 2023 and pinned the
project to Jest 27, whose module resolver predates package `exports` maps. That broke any test
importing a modern dependency — both Radix UI and React Router 7 failed to resolve at import
time, each needing its own `moduleNameMapper` shim. Moving to Vite and Vitest removed the root
cause rather than accumulating workarounds, cut the reported `npm audit` vulnerabilities from 76
to 0, and dropped build times to well under a second.

**Vite outputs to `build/`, not the default `dist/`.** Overriding `build.outDir` in
`vite.config.ts` kept the existing hosting configuration valid across the migration.

**Dependencies were pruned aggressively.** Removing packages left behind by an earlier
blog/backend iteration (Tiptap, Firebase, axios and others) eliminated 156 transitive packages.

**Strict TypeScript, enforced in CI.** `strict` is on alongside `noUnusedLocals` and
`noUnusedParameters`, and `npm run build` type-checks before it bundles, so a type error fails
the build rather than shipping.
