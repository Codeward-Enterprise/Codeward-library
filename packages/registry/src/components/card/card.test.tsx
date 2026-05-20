import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Card,
  CardContent,
  CardDescription,
  CardDivider,
  CardFooter,
  CardHeader,
  CardHighlight,
  CardTitle,
} from "./card";

describe("Card", () => {
  it("renders children", () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("renders all sub-components together", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("renders CardHighlight variant", () => {
    render(<CardHighlight>Highlight</CardHighlight>);
    expect(screen.getByText("Highlight")).toBeInTheDocument();
  });

  it("renders CardDivider as an hr element", () => {
    const { container } = render(<CardDivider />);
    expect(container.querySelector("hr")).toBeInTheDocument();
  });

  it("renders CardTitle as an h3", () => {
    render(<CardTitle>My title</CardTitle>);
    expect(screen.getByRole("heading", { level: 3, name: "My title" })).toBeInTheDocument();
  });
});
