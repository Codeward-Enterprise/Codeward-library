import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CodewardIcon } from "./CodewardIcon";
import { CodewardMark } from "./CodewardMark";

describe("CodewardMark", () => {
  it("renders an svg element", () => {
    const { container } = render(<CodewardMark />);
    expect(container.querySelector("svg")).not.toBeNull();
  });

  it("has the Codeward aria-label", () => {
    const { container } = render(<CodewardMark />);
    expect(container.querySelector("svg")?.getAttribute("aria-label")).toBe("Codeward");
  });

  it("applies the size prop to width and height", () => {
    const { container } = render(<CodewardMark size={48} />);
    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("width")).toBe("48");
    expect(svg?.getAttribute("height")).toBe("48");
  });

  it("defaults to size 32", () => {
    const { container } = render(<CodewardMark />);
    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("width")).toBe("32");
    expect(svg?.getAttribute("height")).toBe("32");
  });

  it("forwards additional svg props", () => {
    const { container } = render(<CodewardMark className="text-primary" />);
    expect(container.querySelector("svg")?.getAttribute("class")).toBe("text-primary");
  });
});

describe("CodewardIcon", () => {
  it("renders an svg element", () => {
    const { container } = render(<CodewardIcon />);
    expect(container.querySelector("svg")).not.toBeNull();
  });

  it("applies a custom size", () => {
    const { container } = render(<CodewardIcon size={64} />);
    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("width")).toBe("64");
    expect(svg?.getAttribute("height")).toBe("64");
  });

  it("forwards additional svg props", () => {
    const { container } = render(<CodewardIcon className="my-icon" />);
    expect(container.querySelector("svg")?.getAttribute("class")).toBe("my-icon");
  });
});
