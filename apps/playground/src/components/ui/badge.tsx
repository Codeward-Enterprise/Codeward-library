import { cn } from "@codeforward/utils";
import type { HTMLAttributes } from "react";

const variantClasses: Record<string, string> = {
  primary: "bg-[var(--primary)] text-[var(--primary-foreground)] border-[var(--color-navy-800)]",
  cta: "bg-[var(--cta)] text-[var(--cta-foreground)] border-[var(--cta-hover)] shadow-[0_0_8px_rgba(0,212,184,0.3)]",
  secondary: "bg-[var(--muted)] text-[var(--muted-foreground)] border-[var(--border)]",
  outline: "bg-transparent border-[var(--border)] text-[var(--foreground)]",
  "outline-primary": "bg-transparent border-[var(--primary)] text-[var(--primary)]",
  success: "bg-[var(--color-success-50)] text-[var(--color-success-700)] border-[#BBF7D0]",
  warning: "bg-[var(--color-warning-50)] text-[var(--color-warning-700)] border-[#FDE68A]",
  destructive: "bg-[var(--color-error-50)] text-[var(--color-error-700)] border-[#FECACA]",
};

const sizeClasses: Record<string, string> = {
  sm: "px-1.5 py-0.5 text-[10px] gap-1",
  md: "px-2.5 py-[3px] text-xs",
  lg: "px-3 py-1 text-sm",
};

const dotSize: Record<string, string> = { sm: "5px", md: "5px", lg: "6px" };

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
  dot?: boolean;
}

export function Badge({
  className,
  variant = "primary",
  size = "md",
  dot,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium leading-none tracking-[0.02em] border transition-colors duration-150 whitespace-nowrap",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      style={{ fontFamily: "var(--font-sans)" }}
      {...props}
    >
      {dot && (
        <span
          className="shrink-0 rounded-full bg-current opacity-80"
          style={{ width: dotSize[size ?? "md"], height: dotSize[size ?? "md"] }}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
