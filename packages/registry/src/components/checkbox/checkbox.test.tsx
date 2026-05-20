import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Checkbox } from "./checkbox";

describe("Checkbox", () => {
  it("renders a checkbox element", () => {
    render(<Checkbox />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("renders label linked to checkbox", () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByLabelText("Accept terms")).toBeInTheDocument();
  });

  it("renders description text", () => {
    render(<Checkbox label="Subscribe" description="Receive weekly updates" />);
    expect(screen.getByText("Receive weekly updates")).toBeInTheDocument();
  });

  it("is unchecked by default", () => {
    render(<Checkbox />);
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("renders disabled state", () => {
    render(<Checkbox disabled label="Disabled option" />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });
});
