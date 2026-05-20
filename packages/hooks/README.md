# @codeforward/hooks

React hooks for Codeward UI. All hooks are marked `"use client"` and work in Next.js App Router.

## Installation

```sh
npm install @codeforward/hooks
# or
pnpm add @codeforward/hooks
```

Requires React 19 as a peer dependency.

## Hooks

### `useDebounce`

Delays updating a value until after a specified delay.

```tsx
import { useDebounce } from "@codeforward/hooks";

const debouncedSearch = useDebounce(searchTerm, 300);
```

### `useMediaQuery`

Reactively tracks a CSS media query.

```tsx
import { useMediaQuery } from "@codeforward/hooks";

const isMobile = useMediaQuery("(max-width: 768px)");
const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
```

### `useLocalStorage`

Persists state in `localStorage` with the same API as `useState`.

```tsx
import { useLocalStorage } from "@codeforward/hooks";

const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "light");
```

### `useClickOutside`

Calls a handler when the user clicks outside a referenced element.

```tsx
import { useRef } from "react";
import { useClickOutside } from "@codeforward/hooks";

const ref = useRef<HTMLDivElement>(null);
useClickOutside(ref, () => setOpen(false));
```

## License

MIT © Vitor Medina
