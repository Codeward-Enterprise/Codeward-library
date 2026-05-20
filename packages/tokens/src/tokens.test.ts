import { describe, expect, it } from "vitest";
import { colors, radii, semanticColors, spacing, typography } from "./index";

describe("colors", () => {
  it("primary brand color is Navy 700", () => {
    expect(colors.navy[700]).toBe("#0A2540");
  });

  it("accent brand color is Mint 500", () => {
    expect(colors.mint[500]).toBe("#00D4B8");
  });

  it("semantic primary maps to Navy 700", () => {
    expect(semanticColors.primary).toBe(colors.navy[700]);
  });

  it("semantic cta maps to Mint 500", () => {
    expect(semanticColors.cta).toBe(colors.mint[500]);
  });
});

describe("typography", () => {
  it("sans font includes Inter", () => {
    expect(typography.fontFamily.sans).toContain("Inter");
  });

  it("mono font includes JetBrains Mono", () => {
    expect(typography.fontFamily.mono).toContain("JetBrains Mono");
  });

  it("only exposes regular and medium weights", () => {
    expect(Object.keys(typography.fontWeight)).toEqual(["regular", "medium"]);
    expect(typography.fontWeight.regular).toBe(400);
    expect(typography.fontWeight.medium).toBe(500);
  });
});

describe("spacing", () => {
  it("base unit is 4px", () => {
    expect(spacing[1]).toBe("4px");
    expect(spacing[2]).toBe("8px");
  });
});

describe("radii", () => {
  it("full radius is 9999px", () => {
    expect(radii.full).toBe("9999px");
  });
});
