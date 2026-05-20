import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useClickOutside } from "./useClickOutside";
import { useDebounce } from "./useDebounce";
import { useLocalStorage } from "./useLocalStorage";
import { useMediaQuery } from "./useMediaQuery";

describe("useDebounce()", () => {
  it("returns initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("hello", 300));
    expect(result.current).toBe("hello");
  });

  it("updates value after delay", async () => {
    vi.useFakeTimers();
    const { result, rerender } = renderHook(({ value }) => useDebounce(value, 300), {
      initialProps: { value: "initial" },
    });

    rerender({ value: "updated" });
    expect(result.current).toBe("initial");

    await act(async () => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current).toBe("updated");
    vi.useRealTimers();
  });
});

describe("useLocalStorage()", () => {
  it("returns initial value when key is absent", () => {
    const { result } = renderHook(() => useLocalStorage("test-key", "default"));
    expect(result.current[0]).toBe("default");
  });

  it("persists and retrieves a value", () => {
    const { result } = renderHook(() => useLocalStorage("test-persist", 0));
    act(() => result.current[1](42));
    expect(result.current[0]).toBe(42);
  });
});

describe("useMediaQuery()", () => {
  it("returns false when matchMedia does not match", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
    });

    const { result } = renderHook(() => useMediaQuery("(max-width: 768px)"));
    expect(result.current).toBe(false);
  });

  it("returns true when matchMedia matches", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: true,
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
    });

    const { result } = renderHook(() => useMediaQuery("(min-width: 1024px)"));
    expect(result.current).toBe(true);
  });
});

describe("useClickOutside()", () => {
  it("calls handler when clicking outside the referenced element", () => {
    const handler = vi.fn();
    const div = document.createElement("div");
    document.body.appendChild(div);

    const ref = { current: div };
    renderHook(() => useClickOutside(ref, handler));

    const outside = document.createElement("button");
    document.body.appendChild(outside);

    act(() => {
      outside.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
    });

    expect(handler).toHaveBeenCalledOnce();

    document.body.removeChild(div);
    document.body.removeChild(outside);
  });

  it("does not call handler when clicking inside the referenced element", () => {
    const handler = vi.fn();
    const div = document.createElement("div");
    document.body.appendChild(div);

    const ref = { current: div };
    renderHook(() => useClickOutside(ref, handler));

    act(() => {
      div.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
    });

    expect(handler).not.toHaveBeenCalled();

    document.body.removeChild(div);
  });
});
