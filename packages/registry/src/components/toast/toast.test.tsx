import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Toast, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "./toast";

function renderToast(variant?: "default" | "success" | "warning" | "destructive") {
  return render(
    <ToastProvider>
      <Toast open variant={variant}>
        <ToastTitle>Notification title</ToastTitle>
        <ToastDescription>Something happened.</ToastDescription>
      </Toast>
      <ToastViewport />
    </ToastProvider>,
  );
}

describe("Toast", () => {
  it("renders title and description", () => {
    renderToast();
    expect(screen.getByText("Notification title")).toBeInTheDocument();
    expect(screen.getByText("Something happened.")).toBeInTheDocument();
  });

  it("renders default variant without error", () => {
    renderToast("default");
    expect(screen.getByText("Notification title")).toBeInTheDocument();
  });

  it("renders success variant", () => {
    renderToast("success");
    expect(screen.getByText("Notification title")).toBeInTheDocument();
  });

  it("renders warning variant", () => {
    renderToast("warning");
    expect(screen.getByText("Notification title")).toBeInTheDocument();
  });

  it("renders destructive variant", () => {
    renderToast("destructive");
    expect(screen.getByText("Notification title")).toBeInTheDocument();
  });

  it("does not render when open is false", () => {
    render(
      <ToastProvider>
        <Toast open={false}>
          <ToastTitle>Hidden</ToastTitle>
        </Toast>
        <ToastViewport />
      </ToastProvider>,
    );
    expect(screen.queryByText("Hidden")).not.toBeInTheDocument();
  });
});
