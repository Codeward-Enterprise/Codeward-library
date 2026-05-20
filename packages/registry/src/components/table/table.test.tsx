import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

describe("Table", () => {
  function renderTable() {
    return render(
      <Table>
        <TableCaption>User list</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Vitor</TableCell>
            <TableCell>vitor@example.com</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total: 1</TableCell>
          </TableRow>
        </TableFooter>
      </Table>,
    );
  }

  it("renders a table element", () => {
    renderTable();
    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  it("renders column headers", () => {
    renderTable();
    expect(screen.getByRole("columnheader", { name: "Name" })).toBeInTheDocument();
    expect(screen.getByRole("columnheader", { name: "Email" })).toBeInTheDocument();
  });

  it("renders cell data", () => {
    renderTable();
    expect(screen.getByRole("cell", { name: "Vitor" })).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "vitor@example.com" })).toBeInTheDocument();
  });

  it("renders caption text", () => {
    renderTable();
    expect(screen.getByText("User list")).toBeInTheDocument();
  });

  it("renders footer content", () => {
    renderTable();
    expect(screen.getByText("Total: 1")).toBeInTheDocument();
  });
});
