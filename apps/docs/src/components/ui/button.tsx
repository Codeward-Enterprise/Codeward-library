"use client";

import { cn } from "@codeforward/utils";
import { type ButtonHTMLAttributes, type ReactElement, cloneElement, forwardRef, isValidElement } from "react";

const variantClasses: Record<string, string> = {
  primary: [
    "bg-[var(--primary)] text-[var(--primary-foreground)]",
    "border border-[#04111F]",
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_1px_3px_rgba(4,17,31,0.35),0_1px_2px_rgba(4,17,31,0.2)]",
    "hover:bg-[var(--primary-hover)]",
    "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_4px_10px_rgba(4,17,31,0.4),0_2px_4px_rgba(4,17,31,0.25)]",
    "active:scale-[0.97] active:shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]",
  ].join(" "),
  cta: [
    "bg-[var(--cta)] text-[var(--cta-foreground)]",
    "border border-[var(--cta-hover)]",
    "shadow-[0_1px_3px_rgba(0,212,184,0.25)]",
    "hover:bg-[var(--cta-hover)]",
    "hover:shadow-[0_4px_20px_rgba(0,212,184,0.45),0_2px_6px_rgba(0,212,184,0.2)]",
    "active:scale-[0.97] active:shadow-[0_1px_4px_rgba(0,212,184,0.3)]",
    "focus-visible:ring-[var(--primary)]",
  ].join(" "),
  secondary: [
    "bg-[var(--muted)] text-[var(--foreground)]",
    "border border-[var(--border)]",
    "shadow-[0_1px_2px_rgba(10,37,64,0.06)]",
    "hover:bg-[#EAF0F6] hover:border-[#C8D3DD]",
    "hover:shadow-[0_2px_6px_rgba(10,37,64,0.1)]",
    "active:scale-[0.97]",
  ].join(" "),
  outline: [
    "bg-transparent text-[var(--primary)]",
    "border-2 border-[var(--primary)]",
    "hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]",
    "hover:shadow-[0_2px_6px_rgba(10,37,64,0.2)]",
    "active:scale-[0.97]",
  ].join(" "),
  ghost: [
    "bg-transparent text-[var(--muted-foreground)]",
    "border border-transparent",
    "hover:bg-[var(--muted)] hover:text-[var(--foreground)]",
    "active:scale-[0.97]",
  ].join(" "),
  link: [
    "bg-transparent text-[var(--primary)]",
    "border border-transparent",
    "underline-offset-4 hover:underline",
    "!h-auto !p-0 !shadow-none",
  ].join(" "),
  destructive: [
    "bg-[var(--destructive)] text-[var(--destructive-foreground)]",
    "border border-[#B91C1C]",
    "shadow-[0_1px_2px_rgba(185,28,28,0.2)]",
    "hover:bg-[#DC2626]",
    "hover:shadow-[0_4px_12px_rgba(185,28,28,0.35)]",
    "active:scale-[0.97]",
    "focus-visible:ring-[var(--destructive)]",
  ].join(" "),
};

const sizeClasses: Record<string, string> = {
  xs: "h-7 px-2.5 text-xs rounded-md gap-1.5 [&_svg]:size-3",
  sm: "h-8 px-3.5 text-xs rounded-lg gap-1.5 [&_svg]:size-3.5",
  md: "h-10 px-5 rounded-lg [&_svg]:size-4",
  lg: "h-12 px-6 text-base rounded-xl gap-2.5 [&_svg]:size-5",
  xl: "h-14 px-8 text-base rounded-xl gap-3 [&_svg]:size-5",
  icon: "size-10 rounded-lg [&_svg]:size-4",
  "icon-sm": "size-8 rounded-md [&_svg]:size-3.5",
  "icon-lg": "size-12 rounded-xl [&_svg]:size-5",
};

const base = [
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap",
  "font-medium text-sm leading-none tracking-[0.01em]",
  "cursor-pointer select-none",
  "transition-all duration-150 ease-out",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--ring)]",
  "disabled:pointer-events-none disabled:opacity-40",
  "[&_svg]:shrink-0 [&_svg]:pointer-events-none",
].join(" ");

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild, children, ...props }, ref) => {
    const classes = cn(base, variantClasses[variant], sizeClasses[size], className);
    if (asChild && isValidElement(children)) {
      const child = children as ReactElement<{ className?: string }>;
      return cloneElement(child, { ...props, className: cn(classes, child.props.className) });
    }
    return (
      <button ref={ref} className={classes} style={{ fontFamily: "var(--font-sans)" }} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
