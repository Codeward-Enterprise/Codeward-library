import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "./input";

describe("Input", () => {
  it("renders a text input", () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders label linked to input via htmlFor", () => {
    render(<Input label="Email" />);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("renders hint text", () => {
    render(<Input hint="Must be at least 8 characters" />);
    expect(screen.getByText("Must be at least 8 characters")).toBeInTheDocument();
  });

  it("renders error message when error is true", () => {
    render(<Input error errorMessage="Required field" />);
    expect(screen.getByText("Required field")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("renders disabled input", () => {
    render(<Input disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("renders with icon slot", () => {
    render(<Input icon={<svg data-testid="icon" />} />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("forwards ref to the input element", () => {
    const ref = { current: null };
    render(<Input ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
