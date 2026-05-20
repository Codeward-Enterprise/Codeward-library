import * as ToastPrimitive from "@radix-ui/react-toast";
import { type VariantProps, cva } from "class-variance-authority";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

export const ToastProvider = ToastPrimitive.Provider;

// ── Viewport — fixed position where toasts appear ─────────────────────────────
export const ToastViewport = forwardRef<
  ElementRef<typeof ToastPrimitive.Viewport>,
  ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={[
      "fixed bottom-4 right-4 z-[100]",
      "flex flex-col gap-2",
      "w-full max-w-sm",
      "outline-none",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitive.Viewport.displayName;

// ── Toast variants ────────────────────────────────────────────────────────────
const toastVariants = cva(
  [
    "group relative flex w-full items-start gap-3",
    "rounded-xl border p-4",
    "shadow-[0_8px_30px_rgba(0,0,0,0.16),0_2px_8px_rgba(0,0,0,0.08)]",
    "transition-all duration-200",
    "data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom-4 data-[state=open]:fade-in-0",
    "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right-full data-[state=closed]:fade-out-0",
    "data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]",
    "data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out]",
    "data-[swipe=end]:animate-out data-[swipe=end]:slide-out-to-right-full",
  ],
  {
    variants: {
      variant: {
        default: ["bg-[var(--color-navy-800)] border-[var(--color-navy-600)]", "text-[#F6F9FC]"],
        success: [
          "bg-[var(--color-navy-800)] border-[var(--color-success-500)]/40",
          "text-[#F6F9FC]",
        ],
        warning: [
          "bg-[var(--color-navy-800)] border-[var(--color-warning-500)]/40",
          "text-[#F6F9FC]",
        ],
        destructive: [
          "bg-[var(--color-navy-800)] border-[var(--color-error-500)]/40",
          "text-[#F6F9FC]",
        ],
      },
    },
    defaultVariants: { variant: "default" },
  },
);

const iconMap = {
  default: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      style={{ color: "#00D4B8", flexShrink: 0, marginTop: "1px" }}
    >
      <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 5v4M9 12.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  success: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      style={{ color: "#22C55E", flexShrink: 0, marginTop: "1px" }}
    >
      <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5.5 9l3 3 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  warning: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      style={{ color: "#F59E0B", flexShrink: 0, marginTop: "1px" }}
    >
      <path
        d="M9 2L1.5 15h15L9 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 8v3M9 12.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  destructive: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      style={{ color: "#EF4444", flexShrink: 0, marginTop: "1px" }}
    >
      <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M11.5 6.5l-5 5M6.5 6.5l5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export interface ToastProps
  extends ComponentPropsWithoutRef<typeof ToastPrimitive.Root>,
    VariantProps<typeof toastVariants> {}

// ── Toast root ────────────────────────────────────────────────────────────────
export const Toast = forwardRef<ElementRef<typeof ToastPrimitive.Root>, ToastProps>(
  ({ className, variant = "default", children, ...props }, ref) => (
    <ToastPrimitive.Root ref={ref} className={toastVariants({ variant, className })} {...props}>
      {iconMap[variant ?? "default"]}
      <div className="flex-1 min-w-0">{children}</div>
    </ToastPrimitive.Root>
  ),
);
Toast.displayName = ToastPrimitive.Root.displayName;

// ── Title ─────────────────────────────────────────────────────────────────────
export const ToastTitle = forwardRef<
  ElementRef<typeof ToastPrimitive.Title>,
  ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title
    ref={ref}
    className={["text-sm font-semibold leading-snug", className].filter(Boolean).join(" ")}
    style={{ fontFamily: "var(--font-sans)" }}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitive.Title.displayName;

// ── Description ───────────────────────────────────────────────────────────────
export const ToastDescription = forwardRef<
  ElementRef<typeof ToastPrimitive.Description>,
  ComponentPropsWithoutRef<typeof ToastPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description
    ref={ref}
    className={["text-xs leading-relaxed mt-0.5 opacity-80", className].filter(Boolean).join(" ")}
    style={{ fontFamily: "var(--font-sans)" }}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitive.Description.displayName;

// ── Action ────────────────────────────────────────────────────────────────────
export const ToastAction = forwardRef<
  ElementRef<typeof ToastPrimitive.Action>,
  ComponentPropsWithoutRef<typeof ToastPrimitive.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Action
    ref={ref}
    className={[
      "inline-flex items-center justify-center",
      "px-2.5 py-1 rounded-md text-xs font-medium",
      "border border-white/20 hover:border-white/40",
      "transition-colors duration-100 cursor-pointer",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
    style={{ fontFamily: "var(--font-sans)", color: "#F6F9FC" }}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitive.Action.displayName;

// ── Close ─────────────────────────────────────────────────────────────────────
export const ToastClose = forwardRef<
  ElementRef<typeof ToastPrimitive.Close>,
  ComponentPropsWithoutRef<typeof ToastPrimitive.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Close
    ref={ref}
    toast-close=""
    className={[
      "shrink-0 rounded-md p-1",
      "opacity-50 hover:opacity-100",
      "transition-opacity duration-100",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
    aria-label="Fechar"
    {...props}
  >
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M11 3L3 11M3 3l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </ToastPrimitive.Close>
));
ToastClose.displayName = ToastPrimitive.Close.displayName;

export { toastVariants };
