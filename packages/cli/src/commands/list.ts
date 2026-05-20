import pc from "picocolors";
import { loadRegistry } from "../utils/registry";

export function listCommand(): void {
  const registry = loadRegistry();

  console.log(`\n${pc.bold(pc.cyan("Codeward UI"))} — available components\n`);

  for (const component of registry.components) {
    console.log(
      `  ${pc.green("◆")} ${pc.bold(component.name.padEnd(16))} ${pc.dim(component.description)}`,
    );
  }

  console.log(
    `\n${pc.dim(`Run ${pc.white("codeward add <component>")} to add a component to your project.`)}\n`,
  );
}
