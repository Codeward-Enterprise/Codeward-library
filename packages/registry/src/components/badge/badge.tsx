import { type VariantProps, cva } from "class-variance-authority";
import type { HTMLAttributes } from "react";

const badgeVariants = cva(
  [
    "inline-flex items-center gap-1.5",
    "rounded-full",
    "font-medium leading-none tracking-[0.02em]",
    "border",
    "transition-colors duration-150",
    "whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        // ── Primary — Navy 700 ───────────────────────────────────────────
        primary: [
          "bg-[var(--primary)] text-[var(--primary-foreground)]",
          "border-[var(--color-navy-800)]",
        ],
        // ── CTA — Mint 500 (use sparingly) ───────────────────────────────
        cta: [
          "bg-[var(--cta)] text-[var(--cta-foreground)]",
          "border-[var(--cta-hover)]",
          "shadow-[0_0_8px_rgba(0,212,184,0.3)]",
        ],
        // ── Secondary — neutral fill ─────────────────────────────────────
        secondary: ["bg-[var(--muted)] text-[var(--muted-foreground)]", "border-[var(--border)]"],
        // ── Outline — transparent, neutral border ────────────────────────
        outline: ["bg-transparent", "border-[var(--border)]", "text-[var(--foreground)]"],
        // ── Outline Navy ─────────────────────────────────────────────────
        "outline-primary": ["bg-transparent", "border-[var(--primary)]", "text-[var(--primary)]"],
        // ── Status variants ──────────────────────────────────────────────
        success: [
          "bg-[var(--color-success-50)] text-[var(--color-success-700)]",
          "border-[#BBF7D0]",
        ],
        warning: [
          "bg-[var(--color-warning-50)] text-[var(--color-warning-700)]",
          "border-[#FDE68A]",
        ],
        destructive: [
          "bg-[var(--color-error-50)] text-[var(--color-error-700)]",
          "border-[#FECACA]",
        ],
      },
      size: {
        sm: "px-1.5 py-0.5 text-[10px] gap-1",
        md: "px-2.5 py-[3px] text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /** Adds a small status dot before the label */
  dot?: boolean;
}

export function Badge({ className, variant, size, dot, children, ...props }: BadgeProps) {
  return (
    <span
      className={badgeVariants({ variant, size, className })}
      style={{ fontFamily: "var(--font-sans)" }}
      {...props}
    >
      {dot && (
        <span
          className="shrink-0 rounded-full bg-current opacity-80"
          style={{
            width: size === "lg" ? "6px" : "5px",
            height: size === "lg" ? "6px" : "5px",
          }}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}

export { badgeVariants };
