import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Avatar, AvatarGroup } from "./avatar";

describe("Avatar", () => {
  it("renders initials from alt text", () => {
    render(<Avatar alt="Vitor Medina" />);
    expect(screen.getByText("VM")).toBeInTheDocument();
  });

  it("renders explicit fallback text", () => {
    render(<Avatar alt="Vitor Medina" fallback="VM" />);
    expect(screen.getByText("VM")).toBeInTheDocument();
  });

  it("renders '?' for empty alt", () => {
    render(<Avatar alt="" />);
    expect(screen.getByText("?")).toBeInTheDocument();
  });

  it("renders img when src is provided", () => {
    render(<Avatar src="https://example.com/avatar.jpg" alt="User" />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "https://example.com/avatar.jpg");
  });

  it("falls back to initials when image fails to load", async () => {
    render(<Avatar src="https://broken.example.com/img.jpg" alt="Vitor Medina" />);
    const img = screen.getByRole("img");
    img.dispatchEvent(new Event("error"));
    expect(await screen.findByText("VM")).toBeInTheDocument();
  });
});

describe("AvatarGroup", () => {
  it("renders all children when no max", () => {
    render(
      <AvatarGroup>
        <Avatar alt="Alice Lima" />
        <Avatar alt="Bob Silva" />
        <Avatar alt="Carol Dias" />
      </AvatarGroup>,
    );
    expect(screen.getByText("AL")).toBeInTheDocument();
    expect(screen.getByText("BS")).toBeInTheDocument();
    expect(screen.getByText("CD")).toBeInTheDocument();
  });

  it("shows overflow count when max is exceeded", () => {
    render(
      <AvatarGroup max={2}>
        <Avatar alt="Alice Lima" />
        <Avatar alt="Bob Silva" />
        <Avatar alt="Carol Dias" />
      </AvatarGroup>,
    );
    expect(screen.getByText("+1")).toBeInTheDocument();
  });

  it("does not show overflow when within max", () => {
    render(
      <AvatarGroup max={3}>
        <Avatar alt="Alice Lima" />
        <Avatar alt="Bob Silva" />
        <Avatar alt="Carol Dias" />
      </AvatarGroup>,
    );
    expect(screen.queryByText(/\+/)).not.toBeInTheDocument();
  });
});
