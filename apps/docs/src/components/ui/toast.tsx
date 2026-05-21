"use client";

import { cn } from "@codeforward/utils";
import {
  type HTMLAttributes,
  type ReactNode,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

// ── Variant config ────────────────────────────────────────────────────────────

type ToastVariant = "default" | "success" | "warning" | "destructive";

const variantClasses: Record<ToastVariant, string> = {
  default: "bg-[var(--color-navy-800)] border-[var(--color-navy-600)]",
  success: "bg-[var(--color-navy-800)] border-[rgba(34,197,94,0.4)]",
  warning: "bg-[var(--color-navy-800)] border-[rgba(245,158,11,0.4)]",
  destructive: "bg-[var(--color-navy-800)] border-[rgba(239,68,68,0.4)]",
};

const iconMap: Record<ToastVariant, ReactNode> = {
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

// ── Provider / Viewport ───────────────────────────────────────────────────────
// These are kept for API compatibility but are no-ops — the Toast component
// manages its own portal and doesn't need a Provider context.

export const ToastProvider = ({ children }: { children: ReactNode }) => <>{children}</>;

export const ToastViewport = forwardRef<HTMLOListElement, HTMLAttributes<HTMLOListElement>>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "fixed bottom-4 right-4 z-[100] flex flex-col gap-2 w-full max-w-sm outline-none",
        className,
      )}
      {...props}
    />
  ),
);
ToastViewport.displayName = "ToastViewport";

// ── Toast ─────────────────────────────────────────────────────────────────────

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  variant?: ToastVariant | undefined;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  duration?: number;
}

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      className,
      variant = "default",
      open = true,
      onOpenChange,
      duration = 5000,
      children,
      ...props
    },
    ref,
  ) => {
    const [visible, setVisible] = useState(open);
    const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    useEffect(() => {
      setVisible(open);
    }, [open]);

    useEffect(() => {
      if (visible && duration > 0) {
        timer.current = setTimeout(() => {
          setVisible(false);
          onOpenChange?.(false);
        }, duration);
      }
      return () => clearTimeout(timer.current);
    }, [visible, duration, onOpenChange]);

    if (!visible) return null;

    return createPortal(
      <div
        ref={ref}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        className={cn(
          "fixed bottom-4 right-4 z-[100]",
          "flex w-full max-w-sm items-start gap-3",
          "rounded-xl border p-4",
          "shadow-[0_8px_30px_rgba(0,0,0,0.16),0_2px_8px_rgba(0,0,0,0.08)]",
          "animate-in slide-in-from-bottom-4 fade-in-0 duration-200",
          variantClasses[variant],
          className,
        )}
        {...props}
      >
        {iconMap[variant]}
        <div className="flex-1 min-w-0">{children}</div>
        <button
          type="button"
          onClick={() => {
            setVisible(false);
            onOpenChange?.(false);
          }}
          className="shrink-0 rounded-md p-1 opacity-50 hover:opacity-100 transition-opacity duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
          aria-label="Fechar"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M11 3L3 11M3 3l8 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>,
      document.body,
    );
  },
);
Toast.displayName = "Toast";

// ── Title / Description / Action / Close ─────────────────────────────────────

export const ToastTitle = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-sm font-semibold leading-snug", className)}
      style={{ color: "#F6F9FC", fontFamily: "var(--font-sans)" }}
      {...props}
    />
  ),
);
ToastTitle.displayName = "ToastTitle";

export const ToastDescription = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-xs leading-relaxed mt-0.5 opacity-80", className)}
      style={{ color: "#F6F9FC", fontFamily: "var(--font-sans)" }}
      {...props}
    />
  ),
);
ToastDescription.displayName = "ToastDescription";

export const ToastAction = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cn(
        "inline-flex items-center justify-center px-2.5 py-1 rounded-md text-xs font-medium",
        "border border-white/20 hover:border-white/40 transition-colors duration-100 cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
        className,
      )}
      style={{ color: "#F6F9FC", fontFamily: "var(--font-sans)" }}
      {...props}
    />
  ),
);
ToastAction.displayName = "ToastAction";

export const ToastClose = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cn(
        "shrink-0 rounded-md p-1 opacity-50 hover:opacity-100 transition-opacity duration-100",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
        className,
      )}
      aria-label="Fechar"
      {...props}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M11 3L3 11M3 3l8 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  ),
);
ToastClose.displayName = "ToastClose";
