import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useDebounce } from "./useDebounce";
import { useLocalStorage } from "./useLocalStorage";

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
