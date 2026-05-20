import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

describe("Tabs", () => {
  function renderTabs() {
    return render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>,
    );
  }

  it("renders all tab triggers", () => {
    renderTabs();
    expect(screen.getByRole("tab", { name: "Tab 1" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Tab 2" })).toBeInTheDocument();
  });

  it("activates the default tab", () => {
    renderTabs();
    expect(screen.getByRole("tab", { name: "Tab 1" })).toHaveAttribute("data-state", "active");
  });

  it("shows content of the active tab", () => {
    renderTabs();
    expect(screen.getByText("Content 1")).toBeInTheDocument();
  });

  it("renders disabled tab", () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Active</TabsTrigger>
          <TabsTrigger value="tab2" disabled>
            Disabled
          </TabsTrigger>
        </TabsList>
      </Tabs>,
    );
    expect(screen.getByRole("tab", { name: "Disabled" })).toBeDisabled();
  });
});
