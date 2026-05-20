import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./button";

describe("Button", () => {
  it("renders with default variant", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  it("is disabled when disabled prop is set", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("renders as child element via asChild", () => {
    render(
      <Button asChild>
        <a href="/test">Link</a>
      </Button>,
    );
    expect(screen.getByRole("link", { name: "Link" })).toBeInTheDocument();
  });
});
