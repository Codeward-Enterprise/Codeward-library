#!/usr/bin/env node
import { Command } from "commander";
import { addCommand } from "./commands/add";
import { listCommand } from "./commands/list";

const program = new Command();

program.name("codeward").description("Codeward UI component CLI").version("0.0.0");

program
  .command("list")
  .alias("ls")
  .description("List all available components")
  .action(() => listCommand());

program
  .command("add <components...>")
  .description("Add one or more components to your project")
  .action(async (components: string[]) => {
    await addCommand(components);
  });

program.parseAsync(process.argv).catch((err: unknown) => {
  console.error(err);
  process.exit(1);
});
