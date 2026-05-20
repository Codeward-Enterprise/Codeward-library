import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Badge } from "./badge";

describe("Badge", () => {
  it("renders text content", () => {
    render(<Badge>Active</Badge>);
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("applies variant class", () => {
    const { container } = render(<Badge variant="success">Done</Badge>);
    expect(container.firstChild).toHaveClass("bg-[var(--color-success-50)]");
  });
});
