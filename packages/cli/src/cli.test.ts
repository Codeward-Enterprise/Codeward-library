import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { detectOutputDir } from "./utils/paths";
import { type Registry, findComponent } from "./utils/registry";

const mockRegistry: Registry = {
  components: [
    {
      name: "button",
      description: "Accessible button with 7 variants and 8 sizes",
      files: ["src/components/button/button.tsx"],
      dependencies: [],
      peerDependencies: { react: "^19.0.0", "@radix-ui/react-slot": "^1.0.0" },
    },
    {
      name: "card",
      description: "Card container",
      files: ["src/components/card/card.tsx"],
      dependencies: [],
      peerDependencies: { react: "^19.0.0" },
    },
    {
      name: "input",
      description: "Form input",
      files: ["src/components/input/input.tsx"],
      dependencies: [],
      peerDependencies: { react: "^19.0.0" },
    },
  ],
};

describe("findComponent()", () => {
  it("finds a component by exact lowercase name", () => {
    const result = findComponent(mockRegistry, "button");
    expect(result?.name).toBe("button");
  });

  it("is case-insensitive", () => {
    expect(findComponent(mockRegistry, "Button")?.name).toBe("button");
    expect(findComponent(mockRegistry, "CARD")?.name).toBe("card");
    expect(findComponent(mockRegistry, "Input")?.name).toBe("input");
  });

  it("returns undefined for a component that does not exist", () => {
    expect(findComponent(mockRegistry, "nonexistent")).toBeUndefined();
  });

  it("returns undefined for an empty registry", () => {
    expect(findComponent({ components: [] }, "button")).toBeUndefined();
  });

  it("returns the correct component data", () => {
    const result = findComponent(mockRegistry, "button");
    expect(result?.files).toContain("src/components/button/button.tsx");
    expect(result?.peerDependencies).toHaveProperty("react");
  });
});

describe("detectOutputDir()", () => {
  it("returns src/components/ui when the project has a src/ folder", () => {
    // packages/cli itself has a src/ directory
    const cliRoot = join(__dirname, "..");
    const result = detectOutputDir(cliRoot);
    expect(result).toBe(join(cliRoot, "src", "components", "ui"));
  });

  it("returns components/ui when there is no src/ folder", () => {
    const result = detectOutputDir(tmpdir());
    expect(result).toBe(join(tmpdir(), "components", "ui"));
  });
});
