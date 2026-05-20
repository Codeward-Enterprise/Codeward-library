# @codeforward/utils

Shared utilities for Codeward UI — class merging, Brazilian formatters, and validators.

## Installation

```sh
npm install @codeforward/utils
# or
pnpm add @codeforward/utils
```

## Usage

### `cn()` — class name merging

Combines `clsx` and `tailwind-merge` to safely merge Tailwind classes without conflicts.

```ts
import { cn } from "@codeforward/utils";

cn("px-4 py-2", "px-6");           // "py-2 px-6"
cn("text-sm", condition && "font-bold");
```

### Brazilian formatters

```ts
import { formatCPF, formatCNPJ, formatPhone, formatCurrency } from "@codeforward/utils";

formatCPF("12345678901");          // "123.456.789-01"
formatCNPJ("12345678000195");      // "12.345.678/0001-95"
formatPhone("11987654321");        // "(11) 98765-4321"
formatCurrency(1990.5);            // "R$ 1.990,50"
```

### Validators

```ts
import { isCPF, isCNPJ, isEmail, isPhone, isCEP } from "@codeforward/utils";

isCPF("123.456.789-01");           // true | false
isCNPJ("12.345.678/0001-95");      // true | false
isEmail("vitor@codeward.dev");     // true
isPhone("(11) 98765-4321");        // true
isCEP("01310-100");                // true
```

## License

MIT © Vitor Medina
