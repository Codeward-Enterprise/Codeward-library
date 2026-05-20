import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

describe("Accordion", () => {
  function renderAccordion(defaultValue?: string) {
    return render(
      <Accordion type="single" defaultValue={defaultValue} collapsible>
        <AccordionItem value="item1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item2">
          <AccordionTrigger>Section 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
  }

  it("renders all triggers", () => {
    renderAccordion();
    expect(screen.getByText("Section 1")).toBeInTheDocument();
    expect(screen.getByText("Section 2")).toBeInTheDocument();
  });

  it("shows content of the default open item", () => {
    renderAccordion("item1");
    expect(screen.getByText("Content 1")).toBeInTheDocument();
  });

  it("all items are collapsed by default without defaultValue", () => {
    renderAccordion();
    const triggers = screen.getAllByRole("button");
    for (const trigger of triggers) {
      expect(trigger).toHaveAttribute("data-state", "closed");
    }
  });

  it("renders multiple items in a type=multiple accordion", () => {
    render(
      <Accordion type="multiple" defaultValue={["item1", "item2"]}>
        <AccordionItem value="item1">
          <AccordionTrigger>A</AccordionTrigger>
          <AccordionContent>Content A</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item2">
          <AccordionTrigger>B</AccordionTrigger>
          <AccordionContent>Content B</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    expect(screen.getByText("Content A")).toBeInTheDocument();
    expect(screen.getByText("Content B")).toBeInTheDocument();
  });
});
