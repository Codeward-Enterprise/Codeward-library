# @codeward/hooks

React hooks for Codeward UI. All hooks are marked `"use client"` and work in Next.js App Router.

## Installation

```sh
npm install @codeward/hooks
# or
pnpm add @codeward/hooks
```

Requires React 19 as a peer dependency.

## Hooks

### `useDebounce`

Delays updating a value until after a specified delay.

```tsx
import { useDebounce } from "@codeward/hooks";

const debouncedSearch = useDebounce(searchTerm, 300);
```

### `useMediaQuery`

Reactively tracks a CSS media query.

```tsx
import { useMediaQuery } from "@codeward/hooks";

const isMobile = useMediaQuery("(max-width: 768px)");
const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
```

### `useLocalStorage`

Persists state in `localStorage` with the same API as `useState`.

```tsx
import { useLocalStorage } from "@codeward/hooks";

const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "light");
```

### `useClickOutside`

Calls a handler when the user clicks outside a referenced element.

```tsx
import { useRef } from "react";
import { useClickOutside } from "@codeward/hooks";

const ref = useRef<HTMLDivElement>(null);
useClickOutside(ref, () => setOpen(false));
```

## License

MIT © Vitor Medina
