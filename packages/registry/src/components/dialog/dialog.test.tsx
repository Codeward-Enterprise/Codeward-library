import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

describe("Dialog", () => {
  it("does not show content when closed by default", () => {
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>My Dialog</DialogTitle>
        </DialogContent>
      </Dialog>,
    );
    expect(screen.queryByText("My Dialog")).not.toBeInTheDocument();
  });

  it("renders content when open is true", () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogTitle>Open Dialog</DialogTitle>
        </DialogContent>
      </Dialog>,
    );
    expect(screen.getByText("Open Dialog")).toBeInTheDocument();
  });

  it("renders header, title, description and footer", () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm action</DialogTitle>
            <DialogDescription>This cannot be undone.</DialogDescription>
          </DialogHeader>
          <DialogFooter>Footer actions</DialogFooter>
        </DialogContent>
      </Dialog>,
    );
    expect(screen.getByText("Confirm action")).toBeInTheDocument();
    expect(screen.getByText("This cannot be undone.")).toBeInTheDocument();
    expect(screen.getByText("Footer actions")).toBeInTheDocument();
  });

  it("renders a close button when open", () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogTitle>Dialog</DialogTitle>
        </DialogContent>
      </Dialog>,
    );
    expect(screen.getByLabelText("Fechar")).toBeInTheDocument();
  });
});
