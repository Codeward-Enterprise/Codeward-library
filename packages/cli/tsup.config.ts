import { readFileSync } from "node:fs";
import { join } from "node:path";
import { defineConfig } from "tsup";

const { version } = JSON.parse(
  readFileSync(join(__dirname, "package.json"), "utf-8"),
) as { version: string };

export default defineConfig({
  entry: { index: "src/index.ts" },
  format: ["cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  define: {
    __CLI_VERSION__: JSON.stringify(version),
  },
  onSuccess: "node scripts/copy-registry.js",
});
