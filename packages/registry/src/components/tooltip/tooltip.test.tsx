import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

describe("Tooltip", () => {
  it("renders the trigger element", () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );
    expect(screen.getByText("Hover me")).toBeInTheDocument();
  });

  it("shows content when open is true", () => {
    render(
      <TooltipProvider>
        <Tooltip open>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );
    // Radix renders the text twice: once visible and once in a hidden aria span
    expect(screen.getAllByText("Tooltip text").length).toBeGreaterThan(0);
  });

  it("does not show visible content when closed by default", () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent>Hidden tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );
    // When closed, no tooltip content should be in the DOM
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });
});
