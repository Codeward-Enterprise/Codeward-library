# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm install                              # install all workspace deps
pnpm build                               # build all packages via turbo
pnpm dev                                 # run playground + packages in watch mode
pnpm test                                # run all tests (vitest)
pnpm check                               # biome lint + format (auto-fix)

# Filtered by workspace
pnpm --filter @codeforward/tokens build
pnpm --filter @codeforward/utils test
pnpm --filter playground dev             # Next.js dev server
pnpm --filter docs storybook             # Storybook dev server

# CLI smoke-test (after building @codeforward/cli)
node packages/cli/dist/index.js list
node packages/cli/dist/index.js add button
```

## Architecture

**Hybrid model (shadcn-style):** `@codeforward/tokens`, `@codeforward/utils`, `@codeforward/hooks`, `@codeforward/icons`, `@codeforward/cli` are published as npm packages to **npmjs.org** (public registry). Components in `packages/registry/` are distributed via `@codeforward/cli` — the CLI copies `.tsx` source files directly into the consumer project. Consumers own and can modify the component files.

**Monorepo:** pnpm workspaces + Turborepo. Build pipeline: `packages/*` must build before `apps/*` (enforced via `"dependsOn": ["^build"]` in `turbo.json`).

### Packages

| Package | Purpose | Build output |
|---|---|---|
| `packages/tokens` | Color, typography, spacing, radii tokens | `dist/index.{mjs,js,d.ts}` + `dist/tokens.css` |
| `packages/utils` | `cn()`, BR formatters, validators | `dist/index.{mjs,js,d.ts}` |
| `packages/hooks` | React client hooks | `dist/index.{mjs,js,d.ts}` |
| `packages/icons` | `CodewardMark` + `CodewardIcon` SVG components | `dist/index.{mjs,js,d.ts}` |
| `packages/registry` | Component sources + `registry.json` manifest | `tsc --noEmit` (no dist) |
| `packages/cli` | `codeward add <component>` CLI | `dist/index.js` (CJS only) |

### Brand tokens

- **Primary (Navy 700):** `#0A2540` → CSS: `var(--primary)` / JS: `colors.navy[700]`
- **Accent (Mint 500):** `#00D4B8` → CSS: `var(--accent)` / JS: `colors.mint[500]`
- **Fonts:** Inter (sans, weights 400/500), JetBrains Mono (mono, weights 400/500)

`tokens.css` is auto-generated during `@codeforward/tokens build` from the JS token values defined in `src/`. Edit `src/colors.ts`, `src/typography.ts`, etc. — never edit `dist/tokens.css` directly.

### Components (registry pattern)

Each component in `packages/registry/src/components/<name>/` is self-contained. Conventions:
- Variants via CVA (`class-variance-authority`)
- Interactive primitives via Radix UI (e.g., `@radix-ui/react-slot` for `Button`)
- Tailwind CSS classes using CSS variable names from `tokens.css` (e.g., `bg-primary`, `text-foreground`)
- Exported TypeScript interface: `<Name>Props`

To add a new component:
1. Create `packages/registry/src/components/<name>/<name>.tsx`
2. Add entry to `packages/registry/registry.json`
3. Add tests at `packages/registry/src/components/<name>/<name>.test.tsx`
4. Copy to `apps/docs/src/components/ui/` and add `apps/docs/src/stories/<Name>.stories.tsx`
5. Copy to `apps/playground/src/components/ui/` and add a section to `apps/playground/src/app/page.tsx`

### CLI path resolution

The CLI (`packages/cli/dist/index.js`) resolves registry files relative to `__dirname`:
`__dirname` = `.../packages/cli/dist/` → `dist/registry/` (bundled by `scripts/copy-registry.js` as a post-build step).
`scripts/copy-registry.js` copies `packages/registry/registry.json` and component sources into `packages/cli/dist/registry/`, excluding test files.

### Testing setup

- **Hooks, registry:** vitest with `happy-dom` environment + `@testing-library/react`
- **Registry tests** use `globals: true` in vitest config and `@testing-library/jest-dom` setup
- **Tokens, utils:** vitest with `node` environment

### Build tooling

- **tsup:** used for all npm packages (ESM + CJS + `.d.ts`). Config in each package's `tsup.config.ts`
- **Biome:** linting + formatting (replaces ESLint + Prettier). Config at root `biome.json`
- **Turborepo:** task caching and pipeline. Config at root `turbo.json`
- **Changesets:** semver versioning. Config at `.changeset/config.json`

### Storybook note

The spec calls for Storybook 9, but Storybook 9 was in alpha at setup time. Storybook 8.6.x is currently installed. Upgrade to 9 stable when available.

### Publishing

Packages publish to **npmjs.org** (`https://registry.npmjs.org`) under the `@codeforward` scope.
Authentication: `NPM_TOKEN` secret in GitHub Actions (generate at npmjs.com → Access Tokens → Granular token with read/write for @codeforward packages).
CI release pipeline: push to `main` triggers the Changesets action, which either opens a "Version PR" or publishes if one is already merged.
npm provenance is enabled via `NPM_CONFIG_PROVENANCE=true` in the release workflow — published packages show a verified provenance badge on npmjs.com.
