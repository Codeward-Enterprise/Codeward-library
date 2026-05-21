"use client";

import { cn } from "@codeforward/utils";
import {
  type HTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
  createContext,
  forwardRef,
  useContext,
  useRef,
  useState,
} from "react";

interface TabsCtx {
  active: string;
  setActive: (v: string) => void;
}

const Ctx = createContext<TabsCtx>({ active: "", setActive: () => {} });

// ── Root ──────────────────────────────────────────────────────────────────────

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export function Tabs({
  defaultValue = "",
  value,
  onValueChange,
  className,
  children,
  ...props
}: TabsProps) {
  const [internal, setInternal] = useState(defaultValue);
  const active = value ?? internal;
  const setActive = (v: string) => {
    if (value === undefined) setInternal(v);
    onValueChange?.(v);
  };
  return (
    <Ctx.Provider value={{ active, setActive }}>
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </Ctx.Provider>
  );
}

// ── List ──────────────────────────────────────────────────────────────────────

export const TabsList = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="tablist"
      className={cn(
        "inline-flex items-center gap-1 rounded-lg p-1",
        "bg-[var(--muted)] border border-[var(--border)]",
        className,
      )}
      {...props}
    />
  ),
);
TabsList.displayName = "TabsList";

// ── Trigger ───────────────────────────────────────────────────────────────────

export interface TabsTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
  children: ReactNode;
  disabled?: boolean;
}

export function TabsTrigger({
  value,
  className,
  children,
  disabled = false,
  ...props
}: TabsTriggerProps) {
  const { active, setActive } = useContext(Ctx);
  const isActive = active === value;
  const ref = useRef<HTMLButtonElement>(null);

  const handleKey = (e: KeyboardEvent) => {
    const list = ref.current?.closest("[role=tablist]");
    const triggers = list
      ? Array.from(list.querySelectorAll<HTMLElement>("[role=tab]:not([disabled])"))
      : [];
    const idx = triggers.indexOf(ref.current!);
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = triggers[(idx + 1) % triggers.length];
      next?.focus();
      (next as HTMLButtonElement)?.click();
    }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prev = triggers[(idx - 1 + triggers.length) % triggers.length];
      prev?.focus();
      (prev as HTMLButtonElement)?.click();
    }
    if (e.key === "Home") {
      e.preventDefault();
      triggers[0]?.focus();
      (triggers[0] as HTMLButtonElement)?.click();
    }
    if (e.key === "End") {
      e.preventDefault();
      triggers[triggers.length - 1]?.focus();
      (triggers[triggers.length - 1] as HTMLButtonElement)?.click();
    }
  };

  return (
    <button
      ref={ref}
      type="button"
      role="tab"
      aria-selected={isActive}
      data-state={isActive ? "active" : "inactive"}
      disabled={disabled}
      onClick={() => !disabled && setActive(value)}
      onKeyDown={handleKey}
      className={cn(
        "inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-md",
        "text-sm font-medium leading-none transition-all duration-150 cursor-pointer select-none",
        isActive
          ? "bg-white text-[var(--foreground)] shadow-[0_1px_3px_rgba(10,37,64,0.08)]"
          : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
        "disabled:pointer-events-none disabled:opacity-40",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
        className,
      )}
      style={{ fontFamily: "var(--font-sans)" }}
      {...(props as HTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}

// ── Content ───────────────────────────────────────────────────────────────────

export interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  children: ReactNode;
}

export function TabsContent({ value, className, children, ...props }: TabsContentProps) {
  const { active } = useContext(Ctx);
  if (active !== value) return null;
  return (
    <div
      role="tabpanel"
      tabIndex={0}
      className={cn(
        "mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] rounded-lg",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
