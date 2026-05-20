# @codeforward/icons

Brand icons and marks for Codeward as React SVG components.

## Installation

```sh
npm install @codeforward/icons
# or
pnpm add @codeforward/icons
```

Requires React 19 as a peer dependency.

## Usage

### `CodewardMark`

The standalone logomark (the shield/mark without the wordmark).

```tsx
import { CodewardMark } from "@codeforward/icons";

<CodewardMark size={32} />
<CodewardMark size={24} className="text-primary" />
```

### `CodewardIcon`

The full brand icon, supports `mark` and `wordmark` variants.

```tsx
import { CodewardIcon } from "@codeforward/icons";

<CodewardIcon variant="mark" size={40} />
<CodewardIcon variant="wordmark" size={120} />
```

### Props

Both components extend `SVGProps<SVGSVGElement>` and accept:

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `number` | `24` | Width and height in pixels |
| `variant` | `"mark" \| "wordmark"` | `"mark"` | Icon variant (`CodewardIcon` only) |

## License

MIT © Vitor Medina
