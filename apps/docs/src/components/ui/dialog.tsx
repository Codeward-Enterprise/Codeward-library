import * as DialogPrimitive from "@radix-ui/react-dialog";
import { type ComponentPropsWithoutRef, type ElementRef, type HTMLAttributes, forwardRef } from "react";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
export const DialogPortal = DialogPrimitive.Portal;

// ── Overlay ───────────────────────────────────────────────────────────────────
export const DialogOverlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={[
      "fixed inset-0 z-50",
      "bg-black/60 backdrop-blur-[2px]",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

// ── Content ───────────────────────────────────────────────────────────────────
export const DialogContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={[
        "fixed left-1/2 top-1/2 z-50",
        "-translate-x-1/2 -translate-y-1/2",
        "w-full max-w-lg",
        "rounded-2xl border bg-white p-6",
        "shadow-[0_8px_40px_rgba(10,37,64,0.18),0_2px_8px_rgba(10,37,64,0.08)]",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
        "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        "duration-150",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ borderColor: "var(--border)" }}
      {...props}
    >
      {children}
      {/* Close button */}
      <DialogPrimitive.Close
        className={[
          "absolute right-4 top-4",
          "flex items-center justify-center",
          "size-8 rounded-lg",
          "text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
          "hover:bg-[var(--muted)]",
          "transition-colors duration-100",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
          "disabled:pointer-events-none",
        ].join(" ")}
        aria-label="Fechar"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

// ── Header ────────────────────────────────────────────────────────────────────
export const DialogHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={["flex flex-col gap-1.5 mb-5 pr-8", className].filter(Boolean).join(" ")}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

// ── Footer ────────────────────────────────────────────────────────────────────
export const DialogFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={["flex items-center justify-end gap-2 mt-6 pt-4 border-t", className]
      .filter(Boolean)
      .join(" ")}
    style={{ borderColor: "var(--border)" }}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

// ── Title ─────────────────────────────────────────────────────────────────────
export const DialogTitle = forwardRef<
  ElementRef<typeof DialogPrimitive.Title>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={["text-base font-semibold leading-snug tracking-tight", className]
      .filter(Boolean)
      .join(" ")}
    style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

// ── Description ───────────────────────────────────────────────────────────────
export const DialogDescription = forwardRef<
  ElementRef<typeof DialogPrimitive.Description>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={["text-sm leading-relaxed", className].filter(Boolean).join(" ")}
    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
