// All hex values sourced from the official Codeward Brandbook
export const colors = {
  navy: {
    50: "#F0F4F9",
    100: "#D9E2EE",
    200: "#BBCCDF",
    300: "#8DA8CC",
    400: "#5E80A8",
    500: "#2D5685",
    600: "#1C3D62",
    700: "#0A2540", // Deep Navy — primary brand color
    800: "#061929",
    900: "#04111F",
  },
  mint: {
    50: "#E6FCF8",
    100: "#B3F5E9",
    200: "#7EEDDB",
    300: "#4DE7CC",
    400: "#27DEC2",
    500: "#00D4B8", // Mint Accent — CTA and highlights only
    600: "#00A593",
    700: "#007A6F",
    800: "#005048",
    900: "#003330",
  },
  neutral: {
    0: "#FFFFFF", // Pure White
    50: "#F6F9FC", // Light Surface
    200: "#E2E8F0",
    300: "#C8D3DD",
    400: "#98A7B5",
    500: "#5F6B7A", // Neutral 500
    700: "#374151",
    900: "#1A1A1A", // Almost Black
    950: "#0D0D0D",
  },
  success: {
    50: "#F0FDF4",
    500: "#22C55E",
    700: "#15803D",
  },
  warning: {
    50: "#FFFBEB",
    500: "#F59E0B",
    700: "#B45309",
  },
  error: {
    50: "#FEF2F2",
    500: "#EF4444",
    700: "#B91C1C",
  },
  white: "#FFFFFF",
  black: "#000000",
} as const;

// Semantic aliases — map to raw scale values above
export const semanticColors = {
  // Brand
  primary: colors.navy[700],
  primaryHover: colors.navy[600],
  primaryForeground: colors.white,

  // CTA — Mint is used sparingly (10% rule from brandbook)
  cta: colors.mint[500],
  ctaHover: colors.mint[600],
  ctaForeground: colors.navy[700],

  // Surface
  background: colors.white,
  foreground: colors.neutral[900],
  muted: colors.neutral[50],
  mutedForeground: colors.neutral[500],

  // Borders & inputs
  border: colors.neutral[200],
  input: colors.neutral[200],
  ring: colors.mint[500],

  // Feedback
  destructive: colors.error[500],
  destructiveForeground: colors.white,
} as const;
