// Brandbook: only weights 400 (Regular) and 500 (Medium) are permitted.
// Weights 600+ are explicitly against brand guidelines.
export const typography = {
  fontFamily: {
    sans: "'Inter', system-ui, -apple-system, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace",
  },
  fontWeight: {
    regular: 400, // Body, descriptions, long paragraphs
    medium: 500, // Headings, logotype, CTAs, labels
  },
  // Brandbook type scale
  fontSize: {
    xs: ["0.75rem", { lineHeight: "1rem" }], // 12px
    sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px — Caption
    base: ["1rem", { lineHeight: "1.6rem" }], // 16px — Body
    lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
    xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
    "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
    "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
    "4xl": ["2rem", { lineHeight: "2.5rem" }], // 32px — Heading
    "5xl": ["3rem", { lineHeight: "1.1" }], // 48px — Display
  },
  letterSpacing: {
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  lineHeight: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.6",
    loose: "2",
  },
} as const;
