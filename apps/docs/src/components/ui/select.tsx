"use client";

import { cn } from "@codeforward/utils";
import {
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

// ── Context ───────────────────────────────────────────────────────────────────

interface SelectCtx {
  value: string;
  open: boolean;
  disabled: boolean;
  listboxId: string;
  select: (value: string, label: string) => void;
  setOpen: (v: boolean) => void;
  selectedLabel: string;
}

const Ctx = createContext<SelectCtx>({
  value: "", open: false, disabled: false, listboxId: "",
  select: () => {}, setOpen: () => {}, selectedLabel: "",
});

// ── Root ──────────────────────────────────────────────────────────────────────

export interface SelectProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  open?: boolean;
  children: ReactNode;
}

export function Select({ value: controlled, defaultValue = "", onValueChange, disabled = false, open: controlledOpen, children }: SelectProps) {
  const [internal, setInternal] = useState(defaultValue);
  const [selectedLabel, setSelectedLabel] = useState("");
  const [openInternal, setOpenInternal] = useState(false);
  const open = controlledOpen ?? openInternal;
  const value = controlled ?? internal;
  const listboxId = useId();

  const setOpen = useCallback((v: boolean) => {
    if (controlledOpen === undefined) setOpenInternal(v);
  }, [controlledOpen]);

  const select = useCallback(
    (v: string, label: string) => {
      if (controlled === undefined) setInternal(v);
      setSelectedLabel(label);
      onValueChange?.(v);
      setOpen(false);
    },
    [controlled, onValueChange, setOpen],
  );

  return (
    <Ctx.Provider value={{ value, open, disabled, listboxId, select, setOpen, selectedLabel }}>
      <div className="relative inline-block">{children}</div>
    </Ctx.Provider>
  );
}

export const SelectGroup = ({ children }: { children: ReactNode }) => <div>{children}</div>;
export const SelectValue = ({ placeholder }: { placeholder?: string }) => {
  const { selectedLabel } = useContext(Ctx);
  return <span>{selectedLabel || placeholder}</span>;
};

// ── Trigger ───────────────────────────────────────────────────────────────────

export const SelectTrigger = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    const { open, setOpen, disabled, listboxId } = useContext(Ctx);
    return (
      <button
        ref={ref}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        disabled={disabled}
        onClick={() => setOpen(!open)}
        className={cn(
          "inline-flex items-center justify-between gap-2",
          "h-10 px-3 rounded-lg border text-sm",
          "bg-[var(--background)] text-[var(--foreground)]",
          "border-[var(--border)]",
          "transition-all duration-150 cursor-pointer select-none",
          "hover:border-[var(--primary)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
          "disabled:opacity-40 disabled:cursor-not-allowed",
          "min-w-[160px]",
          className,
        )}
        style={{ fontFamily: "var(--font-sans)" }}
        {...props}
      >
        {children}
        <svg
          width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"
          className="shrink-0 transition-transform duration-150"
          style={{
            color: "var(--muted-foreground)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    );
  },
);
SelectTrigger.displayName = "SelectTrigger";

// ── Content ───────────────────────────────────────────────────────────────────

export const SelectContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { open, setOpen, listboxId } = useContext(Ctx);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close on outside click
    useEffect(() => {
      if (!open) return;
      const handler = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }, [open, setOpen]);

    if (!open) return null;

    return (
      <div ref={containerRef} className="absolute left-0 top-full mt-1 z-50 w-full min-w-[160px]">
        <div
          ref={ref}
          id={listboxId}
          role="listbox"
          className={cn(
            "rounded-xl border py-1",
            "bg-white",
            "shadow-[0_8px_30px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.06)]",
            "animate-in fade-in-0 zoom-in-95 duration-100",
            className,
          )}
          style={{ borderColor: "var(--border)" }}
          {...props}
        >
          {children}
        </div>
      </div>
    );
  },
);
SelectContent.displayName = "SelectContent";

// ── Label ─────────────────────────────────────────────────────────────────────

export const SelectLabel = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("px-3 py-1.5 text-xs font-medium uppercase tracking-wider", className)}
    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
    {...props}
  />
);

// ── Item ──────────────────────────────────────────────────────────────────────

export interface SelectItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  disabled?: boolean;
  children: ReactNode;
}

export function SelectItem({ value, disabled = false, className, children, ...props }: SelectItemProps) {
  const { value: selected, select } = useContext(Ctx);
  const isSelected = selected === value;
  const labelText = typeof children === "string" ? children : "";

  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!disabled) select(value, labelText);
    }
  };

  return (
    <div
      role="option"
      aria-selected={isSelected}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={() => !disabled && select(value, labelText)}
      onKeyDown={handleKey}
      className={cn(
        "relative flex items-center gap-2 px-3 py-2 text-sm cursor-pointer select-none",
        "transition-colors duration-100",
        isSelected
          ? "bg-[var(--color-navy-50)] text-[var(--primary)] font-medium"
          : "text-[var(--foreground)] hover:bg-[var(--muted)]",
        disabled && "opacity-40 cursor-not-allowed pointer-events-none",
        className,
      )}
      style={{ fontFamily: "var(--font-sans)" }}
      {...props}
    >
      <span className="flex-1">{children}</span>
      {isSelected && (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M2 7l4 4 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
}

// ── Separator ─────────────────────────────────────────────────────────────────

export const SelectSeparator = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("my-1 h-px", className)}
    style={{ backgroundColor: "var(--border)" }}
    {...props}
  />
);
