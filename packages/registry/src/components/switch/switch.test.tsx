import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Switch } from "./switch";

describe("Switch", () => {
  it("renders a switch element", () => {
    render(<Switch />);
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  it("renders label linked to switch", () => {
    render(<Switch label="Enable notifications" />);
    expect(screen.getByLabelText("Enable notifications")).toBeInTheDocument();
  });

  it("renders description text", () => {
    render(<Switch label="Dark mode" description="Reduces eye strain at night" />);
    expect(screen.getByText("Reduces eye strain at night")).toBeInTheDocument();
  });

  it("is unchecked by default", () => {
    render(<Switch />);
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "false");
  });

  it("renders in checked state when defaultChecked", () => {
    render(<Switch defaultChecked />);
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "true");
  });

  it("renders disabled state", () => {
    render(<Switch disabled />);
    expect(screen.getByRole("switch")).toBeDisabled();
  });
});
