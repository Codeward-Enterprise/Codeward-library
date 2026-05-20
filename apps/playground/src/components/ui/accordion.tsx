import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

export const Accordion = AccordionPrimitive.Root;

// ── Item ──────────────────────────────────────────────────────────────────────
export const AccordionItem = forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={["border-b last:border-b-0", className].filter(Boolean).join(" ")}
    style={{ borderColor: "var(--border)" }}
    {...props}
  />
));
AccordionItem.displayName = AccordionPrimitive.Item.displayName;

// ── Trigger ───────────────────────────────────────────────────────────────────
export const AccordionTrigger = forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={[
        "flex flex-1 items-center justify-between",
        "py-4 px-1 gap-4",
        "text-sm font-medium text-left",
        "cursor-pointer select-none",
        "transition-all duration-150",
        "hover:text-[var(--primary)]",
        "[&[data-state=open]>svg]:rotate-180",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] rounded-md",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
      {...props}
    >
      {children}
      {/* Chevron */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="shrink-0 transition-transform duration-200"
        style={{ color: "var(--muted-foreground)" }}
      >
        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

// ── Content ───────────────────────────────────────────────────────────────────
export const AccordionContent = forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={[
      "overflow-hidden text-sm",
      "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
    {...props}
  >
    <div className="pb-4 px-1 leading-relaxed">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
