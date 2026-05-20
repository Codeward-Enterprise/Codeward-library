# Contributing to Codeward UI

Thank you for your interest in contributing. This document covers everything you need to get started.

## Prerequisites

- Node.js 20+
- pnpm 9+

## Setup

```sh
git clone https://github.com/Codeward-Enterprise/Codeward-library.git
cd Codeward-library
pnpm install
pnpm build
```

## Development

```sh
pnpm dev          # starts playground (Next.js) + packages in watch mode
pnpm test         # run all tests
pnpm check        # Biome lint + format (auto-fix)
```

To work on a specific package:

```sh
pnpm --filter @codeward/tokens dev
pnpm --filter @codeward/utils test
pnpm --filter docs storybook
```

## Adding a component

1. Create `packages/registry/src/components/<name>/<name>.tsx`
2. Add an entry to `packages/registry/registry.json`
3. Add tests at `packages/registry/src/components/<name>/<name>.test.tsx`
4. Copy the file to `apps/docs/src/components/ui/` and add `apps/docs/src/stories/<Name>.stories.tsx`
5. Copy the file to `apps/playground/src/components/ui/` and add a section to `apps/playground/src/app/page.tsx`
6. Run `pnpm changeset` and select `@codeward/cli` as the changed package (the CLI bundles the registry)

## Component conventions

- Variants via **CVA** (`class-variance-authority`)
- Interactive primitives via **Radix UI** where applicable
- Tailwind CSS classes using **CSS variable names** from `tokens.css` (e.g., `bg-primary`, `text-foreground`)
- Export a TypeScript interface: `<Name>Props`
- Mark the file `"use client"` if it uses browser APIs or React event handlers

## Commit style

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add accordion component
fix: correct avatar initials for single-word names
chore: upgrade Radix UI dependencies
docs: add useMediaQuery example to hooks README
```

## Versioning

This project uses [Changesets](https://github.com/changesets/changesets).

```sh
pnpm changeset        # describe your change and select packages
pnpm version-packages # bump versions (done via CI on merge)
```

You only need to run `pnpm changeset` — CI handles the rest.

## Pull requests

- Open a PR against `main`
- Fill in the PR template
- All checks (build, test, lint) must pass
- At least one changeset is required for any change to a published package

## Code style

Biome handles formatting and linting. Run `pnpm check` before pushing. No manual ESLint or Prettier configuration needed.
