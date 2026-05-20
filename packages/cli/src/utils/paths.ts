import { existsSync } from "node:fs";
import { join } from "node:path";

export function detectOutputDir(cwd: string): string {
  if (existsSync(join(cwd, "src"))) return join(cwd, "src", "components", "ui");
  return join(cwd, "components", "ui");
}

export function registryPath(): string {
  return join(__dirname, "registry", "registry.json");
}
