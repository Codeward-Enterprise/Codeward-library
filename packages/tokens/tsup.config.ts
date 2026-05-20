import { mkdirSync, writeFileSync } from "node:fs";
import { defineConfig } from "tsup";
import { colors, radii, semanticColors, shadows, spacing, typography } from "./src/index";

function generateCss(): string {
  const vars: string[] = [":root {"];

  // Navy scale
  for (const [shade, value] of Object.entries(colors.navy)) {
    vars.push(`  --color-navy-${shade}: ${value};`);
  }
  // Mint scale
  for (const [shade, value] of Object.entries(colors.mint)) {
    vars.push(`  --color-mint-${shade}: ${value};`);
  }
  // Neutral scale
  for (const [shade, value] of Object.entries(colors.neutral)) {
    vars.push(`  --color-neutral-${shade}: ${value};`);
  }
  // Semantic status
  for (const [name, scale] of Object.entries({
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
  })) {
    for (const [shade, value] of Object.entries(scale as Record<string, string>)) {
      vars.push(`  --color-${name}-${shade}: ${value};`);
    }
  }
  vars.push(`  --color-white: ${colors.white};`);
  vars.push(`  --color-black: ${colors.black};`);

  vars.push("");
  vars.push("  /* Semantic aliases */");
  for (const [token, value] of Object.entries(semanticColors as Record<string, string>)) {
    const kebab = token.replace(/([A-Z])/g, "-$1").toLowerCase();
    vars.push(`  --${kebab}: ${value};`);
  }

  vars.push("");
  vars.push("  /* Typography */");
  vars.push(`  --font-sans: ${typography.fontFamily.sans};`);
  vars.push(`  --font-mono: ${typography.fontFamily.mono};`);
  vars.push(`  --font-weight-regular: ${typography.fontWeight.regular};`);
  vars.push(`  --font-weight-medium: ${typography.fontWeight.medium};`);

  vars.push("");
  vars.push("  /* Spacing */");
  for (const [scale, value] of Object.entries(spacing as Record<string, string>)) {
    vars.push(`  --spacing-${scale}: ${value};`);
  }

  vars.push("");
  vars.push("  /* Border radius */");
  for (const [name, value] of Object.entries(radii as Record<string, string>)) {
    const key = name === "DEFAULT" ? "radius" : `radius-${name}`;
    vars.push(`  --${key}: ${value};`);
  }

  vars.push("");
  vars.push("  /* Shadows */");
  for (const [name, value] of Object.entries(shadows as Record<string, string>)) {
    vars.push(`  --shadow-${name}: ${value};`);
  }

  vars.push("}");
  return `${vars.join("\n")}\n`;
}

export default defineConfig({
  entry: { index: "src/index.ts" },
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  onSuccess() {
    mkdirSync("dist", { recursive: true });
    writeFileSync("dist/tokens.css", generateCss(), "utf-8");
    console.log("✓ Generated dist/tokens.css");
  },
});
