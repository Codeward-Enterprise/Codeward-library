import { readFileSync } from "node:fs";
import { join } from "node:path";

export interface RegistryComponent {
  name: string;
  description: string;
  files: string[];
  dependencies: string[];
  peerDependencies: Record<string, string>;
}

export interface Registry {
  components: RegistryComponent[];
}

export function loadRegistry(): Registry {
  // __dirname = dist/ → dist/registry/ (bundled by scripts/copy-registry.js)
  const registryFile = join(__dirname, "registry", "registry.json");
  const raw = readFileSync(registryFile, "utf-8");
  return JSON.parse(raw) as Registry;
}

export function findComponent(
  registry: Registry,
  name: string,
): RegistryComponent | undefined {
  return registry.components.find((c) => c.name === name.toLowerCase());
}
