import { defineConfig } from "tsup";

export default defineConfig({
  entry: { index: "src/index.ts" },
  format: ["cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  onSuccess: "node scripts/copy-registry.js",
});
