import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import ora from "ora";
import pc from "picocolors";
import { detectOutputDir } from "../utils/paths";
import { findComponent, loadRegistry } from "../utils/registry";

export async function addCommand(names: string[]): Promise<void> {
  const registry = loadRegistry();
  const cwd = process.cwd();
  const outputDir = detectOutputDir(cwd);

  for (const name of names) {
    const component = findComponent(registry, name);

    if (!component) {
      console.error(
        `\n${pc.red("✘")} Component ${pc.bold(name)} not found in registry.\n` +
          `  Run ${pc.cyan("codeward list")} to see available components.\n`,
      );
      continue;
    }

    const spinner = ora(`Adding ${pc.bold(component.name)}...`).start();

    try {
      mkdirSync(outputDir, { recursive: true });

      // __dirname = dist/ → dist/registry/ (bundled by scripts/copy-registry.js)
      const registryRoot = join(__dirname, "registry");

      for (const file of component.files) {
        const src = join(registryRoot, file);
        const fileName = file.split("/").pop() ?? file;
        const dest = join(outputDir, fileName);

        if (!existsSync(src)) {
          throw new Error(`Source file not found: ${src}`);
        }

        copyFileSync(src, dest);
      }

      spinner.succeed(`Added ${pc.bold(component.name)} → ${pc.dim(outputDir)}`);

      const peers = Object.entries(component.peerDependencies);
      if (peers.length > 0) {
        const peerList = peers.map(([pkg, ver]) => `${pkg}@${ver}`).join(" ");
        console.log(
          `\n  ${pc.yellow("→")} Install peer dependencies:\n` +
            `  ${pc.cyan(`pnpm add ${peerList}`)}\n`,
        );
      }
    } catch (err) {
      spinner.fail(`Failed to add ${pc.bold(component.name)}`);
      if (err instanceof Error) console.error(pc.dim(`  ${err.message}`));
    }
  }
}
