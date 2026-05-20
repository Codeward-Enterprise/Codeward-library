import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

const accordionItems = (
  <>
    <AccordionItem value="item1">
      <AccordionTrigger>Section 1</AccordionTrigger>
      <AccordionContent>Content 1</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item2">
      <AccordionTrigger>Section 2</AccordionTrigger>
      <AccordionContent>Content 2</AccordionContent>
    </AccordionItem>
  </>
);

describe("Accordion", () => {
  it("renders all triggers", () => {
    render(
      <Accordion type="single" collapsible>
        {accordionItems}
      </Accordion>,
    );
    expect(screen.getByText("Section 1")).toBeInTheDocument();
    expect(screen.getByText("Section 2")).toBeInTheDocument();
  });

  it("shows content of the default open item", () => {
    render(
      <Accordion type="single" defaultValue="item1" collapsible>
        {accordionItems}
      </Accordion>,
    );
    expect(screen.getByText("Content 1")).toBeInTheDocument();
  });

  it("all items are collapsed by default without defaultValue", () => {
    render(
      <Accordion type="single" collapsible>
        {accordionItems}
      </Accordion>,
    );
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
