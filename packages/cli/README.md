# @codeward/cli

The official CLI for adding Codeward UI components to your project.

Components are copied as `.tsx` source files directly into your codebase — you own the code and can modify it freely (shadcn-style).

## Usage

No installation needed. Run with `npx` or `pnpm dlx`:

```sh
npx codeward add button
pnpm dlx @codeward/cli add button card input
```

Or install globally:

```sh
npm install -g @codeward/cli
codeward add button
```

## Commands

### `codeward list`

Lists all available components:

```sh
codeward list
# alias: codeward ls
```

### `codeward add <component...>`

Copies one or more components into your project:

```sh
codeward add button
codeward add card input badge dialog
```

The CLI auto-detects your project structure:
- If `src/` exists → copies to `src/components/ui/`
- Otherwise → copies to `components/ui/`

After adding a component, the CLI prints the peer dependencies you need to install.

## Available components

| Component | Description |
|---|---|
| `button` | Accessible button with 7 variants and 8 sizes |
| `input` | Form input with label, hint, error state and icon slot |
| `card` | Card container with header, content and footer |
| `badge` | Inline status badge with semantic variants |
| `dialog` | Accessible modal dialog via Radix UI |
| `checkbox` | Accessible checkbox with optional label |
| `switch` | Toggle switch with Mint 500 active state |
| `tooltip` | Accessible tooltip via Radix UI |
| `select` | Accessible select dropdown via Radix UI |
| `avatar` | Avatar with initials fallback and AvatarGroup |
| `tabs` | Tab navigation via Radix UI |
| `accordion` | Collapsible sections via Radix UI |
| `table` | Semantic table for data listings |
| `toast` | Temporary notification via Radix UI |

## Prerequisites

Your project needs:
- React 19
- Tailwind CSS 4
- `@codeward/tokens` with the CSS variables imported

## License

MIT © Vitor Medina
