import * as TabsPrimitive from "@radix-ui/react-tabs";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

export const Tabs = TabsPrimitive.Root;

// ── List ──────────────────────────────────────────────────────────────────────
export const TabsList = forwardRef<
  ElementRef<typeof TabsPrimitive.List>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={[
      "inline-flex items-center gap-1",
      "rounded-lg p-1",
      "bg-[var(--muted)]",
      "border border-[var(--border)]",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

// ── Trigger ───────────────────────────────────────────────────────────────────
export const TabsTrigger = forwardRef<
  ElementRef<typeof TabsPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={[
      "inline-flex items-center justify-center gap-1.5",
      "px-3.5 py-1.5 rounded-md",
      "text-sm font-medium leading-none",
      "transition-all duration-150",
      "cursor-pointer select-none",
      // Inactive
      "text-[var(--muted-foreground)]",
      "hover:text-[var(--foreground)]",
      // Active
      "data-[state=active]:bg-white",
      "data-[state=active]:text-[var(--foreground)]",
      "data-[state=active]:shadow-[0_1px_3px_rgba(10,37,64,0.08)]",
      // Disabled
      "disabled:pointer-events-none disabled:opacity-40",
      // Focus
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
    style={{ fontFamily: "var(--font-sans)" }}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

// ── Content ───────────────────────────────────────────────────────────────────
export const TabsContent = forwardRef<
  ElementRef<typeof TabsPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={[
      "mt-4",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] rounded-lg",
      "data-[state=inactive]:hidden",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
