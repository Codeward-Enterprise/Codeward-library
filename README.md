# Codeward UI

Reusable component library for Codeward SaaS products. Hybrid architecture inspired by shadcn/ui:
design tokens and utilities are published as npm packages; components are distributed via CLI that
copies source directly into the consumer project.

## Architecture

```
codeward-ui/
├── apps/
│   ├── docs/            Storybook 8 (component documentation)
│   └── playground/      Next.js 15 (live testing environment)
├── packages/
│   ├── tokens/          @codeforward/tokens — CSS vars + JS constants
│   ├── utils/           @codeforward/utils — cn(), BR formatters, validators
│   ├── hooks/           @codeforward/hooks — useDebounce, useMediaQuery, etc.
│   ├── icons/           @codeforward/icons — brand mark & wordmark SVG components
│   ├── registry/        Component source (copied via CLI, not imported)
│   └── cli/             @codeforward/cli — `codeward add <component>`
```

**Stack:** Next.js 15 · React 19 · TypeScript strict · Tailwind CSS · Radix UI · CVA · tsup · Biome · Vitest · Changesets

## Prerequisites

- Node.js >= 20
- pnpm >= 9 (`npm install -g pnpm@9`)

## Development Setup

```bash
pnpm install
pnpm build          # build all packages
pnpm dev            # run playground + storybook in watch mode
pnpm test           # run all tests
pnpm check          # lint + format
```

### Individual workspaces

```bash
pnpm --filter @codeforward/tokens build
pnpm --filter @codeforward/utils test
pnpm --filter playground dev
pnpm --filter docs storybook
```

## Using in Consumer Projects

### 1. Install the npm packages

Install directly from npm (no authentication needed):



```bash
pnpm add @codeforward/tokens @codeforward/utils @codeforward/hooks @codeforward/icons @codeforward/cli
```

### 2. Import the design tokens

In your global CSS file:

```css
@import "@codeforward/tokens/styles";

@theme {
  --color-primary: var(--primary);
  --color-accent: var(--accent);
  /* ... see playground/src/app/globals.css for full example */
}
```

### 3. Add components via CLI

```bash
# List available components
npx codeward list

# Add one or more components
npx codeward add button
npx codeward add button input card badge
```

Components are copied to `src/components/ui/` (or `components/ui/` if no `src/` directory).
They are plain TypeScript files you own and can modify freely.

## Contributing

### Adding a new component

1. Create `packages/registry/src/components/<name>/<name>.tsx`
2. Add an entry to `packages/registry/registry.json`
3. Add a Storybook story at `apps/docs/src/stories/<Name>.stories.tsx`
4. Test in the playground by copying the file to `apps/playground/src/components/ui/`
5. Run `pnpm test` and `pnpm check` before opening a PR

### Component conventions

- Use [CVA](https://cva.style) for variants
- Use Radix UI primitives for interactive elements
- Use `cn()` from `@codeforward/utils` for class merging
- All props must be TypeScript-typed with exported interfaces

## Publishing

We use [Changesets](https://github.com/changesets/changesets) for versioning.

### Creating a changeset

After making changes to a publishable package:

```bash
pnpm changeset       # describe the change and select affected packages
git add .changeset/
git commit -m "chore: add changeset"
```

### Release workflow

Push to `main` → GitHub Actions runs `release.yml` → Changesets either:
- Opens a "Version packages" PR (if there are pending changesets), or
- Publishes to GitHub Packages (if the version PR is merged)

Packages are scoped to `@codeforward` and published to npmjs.org (requires `NPM_TOKEN` secret in GitHub Actions).

## Brand Tokens

| Token | Value | Usage |
|---|---|---|
| Navy 700 (primary) | `#0A2540` | Primary actions, text |
| Mint 500 (accent) | `#00D4B8` | Focus rings, highlights |
| Inter | sans-serif, 400/500 | Body and UI text |
| JetBrains Mono | monospace, 400/500 | Code and technical content |
