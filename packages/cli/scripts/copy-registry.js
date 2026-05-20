#!/usr/bin/env node
// Runs after tsup build — bundles registry files into dist/registry/
// so the CLI works when installed globally from npm.
const { cpSync, mkdirSync, rmSync } = require("node:fs");
const { join } = require("node:path");

const root = join(__dirname, "..", "..", "registry");
const dest = join(__dirname, "..", "dist", "registry");

rmSync(dest, { recursive: true, force: true });
mkdirSync(dest, { recursive: true });

cpSync(join(root, "registry.json"), join(dest, "registry.json"));
cpSync(join(root, "src", "components"), join(dest, "src", "components"), {
  recursive: true,
  filter: (src) => !src.endsWith(".test.tsx") && !src.endsWith(".test.ts"),
});

console.log("✓ Registry bundled into dist/registry/");
