import * as SelectPrimitive from "@radix-ui/react-select";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

export const Select = SelectPrimitive.Root;
export const SelectGroup = SelectPrimitive.Group;
export const SelectValue = SelectPrimitive.Value;

// ── Trigger ───────────────────────────────────────────────────────────────────
export const SelectTrigger = forwardRef<
  ElementRef<typeof SelectPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={[
      "flex h-10 w-full items-center justify-between gap-2 px-3.5 py-2.5",
      "rounded-lg border bg-white",
      "text-sm font-normal leading-none",
      "border-[var(--border)] shadow-[0_1px_2px_rgba(10,37,64,0.04)]",
      "hover:border-[var(--color-neutral-400)]",
      "transition-all duration-150",
      "focus:outline-none focus:ring-2 focus:ring-[var(--ring)]/30 focus:border-[var(--ring)]",
      "focus:shadow-[0_0_0_3px_rgba(0,212,184,0.12)]",
      "disabled:cursor-not-allowed disabled:opacity-40 disabled:bg-[var(--muted)]",
      "data-[placeholder]:text-[var(--muted-foreground)]",
      "[&[data-state=open]]:border-[var(--ring)] [&[data-state=open]]:ring-2 [&[data-state=open]]:ring-[var(--ring)]/30",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
    style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="shrink-0 opacity-50"
      >
        <path
          d="M4 6l4 4 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

// ── Content ───────────────────────────────────────────────────────────────────
export const SelectContent = forwardRef<
  ElementRef<typeof SelectPrimitive.Content>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={[
        "relative z-50 min-w-[8rem] overflow-hidden",
        "rounded-xl border bg-white",
        "shadow-[0_8px_30px_rgba(10,37,64,0.12),0_2px_6px_rgba(10,37,64,0.06)]",
        "animate-in fade-in-0 zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
        "duration-100",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1 w-[var(--radix-select-trigger-width)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ borderColor: "var(--border)" }}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

// ── Label ─────────────────────────────────────────────────────────────────────
export const SelectLabel = forwardRef<
  ElementRef<typeof SelectPrimitive.Label>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={["px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider", className]
      .filter(Boolean)
      .join(" ")}
    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

// ── Item ──────────────────────────────────────────────────────────────────────
export const SelectItem = forwardRef<
  ElementRef<typeof SelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={[
      "relative flex w-full cursor-pointer select-none items-center",
      "rounded-lg px-2.5 py-2 text-sm outline-none gap-2",
      "transition-colors duration-100",
      "hover:bg-[var(--muted)]",
      "focus:bg-[var(--muted)]",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-40",
      "data-[highlighted]:bg-[var(--muted)]",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
    style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
    {...props}
  >
    <span className="absolute right-2.5 flex size-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M2 6l3 3 5-5"
            stroke="var(--cta)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

// ── Separator ─────────────────────────────────────────────────────────────────
export const SelectSeparator = forwardRef<
  ElementRef<typeof SelectPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={["-mx-1 my-1 h-px", className].filter(Boolean).join(" ")}
    style={{ background: "var(--border)" }}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
