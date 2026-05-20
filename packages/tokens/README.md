# @codeforward/tokens

Design tokens for Codeward UI — colors, typography, spacing, radii and shadows as JavaScript constants and CSS custom properties.

## Installation

```sh
npm install @codeforward/tokens
# or
pnpm add @codeforward/tokens
```

## Usage

### CSS variables (recommended with Tailwind)

Import the generated stylesheet once at the root of your app:

```ts
import "@codeforward/tokens/styles";
```

This injects CSS custom properties such as `--primary`, `--accent`, `--font-sans`, `--spacing-4`, etc. that Tailwind utility classes reference.

### JavaScript / TypeScript

```ts
import { colors, semanticColors, typography, spacing, radii, shadows } from "@codeforward/tokens";

console.log(colors.navy[700]);   // "#0A2540"
console.log(colors.mint[500]);   // "#00D4B8"
console.log(typography.fontSans); // "Inter, sans-serif"
```

## Brand tokens

| Token | Value | Usage |
|---|---|---|
| `colors.navy[700]` | `#0A2540` | Primary — backgrounds, headings |
| `colors.mint[500]` | `#00D4B8` | Accent — CTAs, highlights |
| `typography.fontSans` | `Inter` | Body and UI text |
| `typography.fontMono` | `JetBrains Mono` | Code and monospaced text |

## License

MIT © Vitor Medina
