// Elevation scale using Navy 700 as shadow color for brand coherence
export const shadows = {
  none: "none",
  xs: "0 1px 2px 0 rgb(10 37 64 / 0.05)",
  sm: "0 1px 3px 0 rgb(10 37 64 / 0.08), 0 1px 2px -1px rgb(10 37 64 / 0.08)",
  md: "0 4px 6px -1px rgb(10 37 64 / 0.08), 0 2px 4px -2px rgb(10 37 64 / 0.08)",
  lg: "0 10px 15px -3px rgb(10 37 64 / 0.08), 0 4px 6px -4px rgb(10 37 64 / 0.08)",
  xl: "0 20px 25px -5px rgb(10 37 64 / 0.10), 0 8px 10px -6px rgb(10 37 64 / 0.10)",
  "2xl": "0 25px 50px -12px rgb(10 37 64 / 0.18)",
  inner: "inset 0 2px 4px 0 rgb(10 37 64 / 0.05)",
  // Mint glow — for focus rings and CTA highlights
  mint: "0 0 0 3px rgb(0 212 184 / 0.25)",
} as const;
