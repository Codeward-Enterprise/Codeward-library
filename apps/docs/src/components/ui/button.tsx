import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import { type ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  [
    // Layout & typography
    "relative inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-medium text-sm leading-none tracking-[0.01em]",
    // Interaction
    "cursor-pointer select-none",
    "transition-all duration-150 ease-out",
    // Focus — Mint ring always visible on keyboard nav
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "focus-visible:ring-[var(--ring)]",
    // Disabled
    "disabled:pointer-events-none disabled:opacity-40",
    // Icon sizing inside button
    "[&_svg]:shrink-0 [&_svg]:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        // ── Primary — Navy 700 ─────────────────────────────────────────────
        primary: [
          "bg-[var(--primary)] text-[var(--primary-foreground)]",
          "border border-[#04111F]",
          // Subtle top highlight + drop shadow = depth
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_1px_3px_rgba(4,17,31,0.35),0_1px_2px_rgba(4,17,31,0.2)]",
          "hover:bg-[var(--primary-hover)]",
          "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_4px_10px_rgba(4,17,31,0.4),0_2px_4px_rgba(4,17,31,0.25)]",
          "active:scale-[0.97] active:shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]",
        ],
        // ── CTA — Mint 500 (use sparingly — one per view) ─────────────────
        cta: [
          "bg-[var(--cta)] text-[var(--cta-foreground)]",
          "border border-[var(--cta-hover)]",
          // Mint glow — distinctive brand signature
          "shadow-[0_1px_3px_rgba(0,212,184,0.25),0_0_0_0_rgba(0,212,184,0)]",
          "hover:bg-[var(--cta-hover)]",
          "hover:shadow-[0_4px_20px_rgba(0,212,184,0.45),0_2px_6px_rgba(0,212,184,0.2)]",
          "active:scale-[0.97] active:shadow-[0_1px_4px_rgba(0,212,184,0.3)]",
          "focus-visible:ring-[var(--primary)]",
        ],
        // ── Secondary — Light neutral surface ────────────────────────────
        secondary: [
          "bg-[var(--muted)] text-[var(--foreground)]",
          "border border-[var(--border)]",
          "shadow-[0_1px_2px_rgba(10,37,64,0.06)]",
          "hover:bg-[#EAF0F6] hover:border-[#C8D3DD]",
          "hover:shadow-[0_2px_6px_rgba(10,37,64,0.1)]",
          "active:scale-[0.97]",
        ],
        // ── Outline — Navy border, transparent fill ───────────────────────
        outline: [
          "bg-transparent text-[var(--primary)]",
          "border-2 border-[var(--primary)]",
          "hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]",
          "hover:shadow-[0_2px_6px_rgba(10,37,64,0.2)]",
          "active:scale-[0.97]",
        ],
        // ── Ghost — minimal, no border ────────────────────────────────────
        ghost: [
          "bg-transparent text-[var(--muted-foreground)]",
          "border border-transparent",
          "hover:bg-[var(--muted)] hover:text-[var(--foreground)]",
          "active:scale-[0.97]",
        ],
        // ── Link — inline text action ─────────────────────────────────────
        link: [
          "bg-transparent text-[var(--primary)]",
          "border border-transparent",
          "underline-offset-4 hover:underline",
          "!h-auto !p-0 !shadow-none",
        ],
        // ── Destructive — error/danger action ────────────────────────────
        destructive: [
          "bg-[var(--destructive)] text-[var(--destructive-foreground)]",
          "border border-[#B91C1C]",
          "shadow-[0_1px_2px_rgba(185,28,28,0.2)]",
          "hover:bg-[#DC2626]",
          "hover:shadow-[0_4px_12px_rgba(185,28,28,0.35)]",
          "active:scale-[0.97]",
          "focus-visible:ring-[var(--destructive)]",
        ],
      },
      size: {
        xs: "h-7 px-2.5 text-xs rounded-md gap-1.5 [&_svg]:size-3",
        sm: "h-8 px-3.5 text-xs rounded-lg gap-1.5 [&_svg]:size-3.5",
        md: "h-10 px-5 rounded-lg [&_svg]:size-4",
        lg: "h-12 px-6 text-base rounded-xl gap-2.5 [&_svg]:size-5",
        xl: "h-14 px-8 text-base rounded-xl gap-3 [&_svg]:size-5",
        icon: "size-10 rounded-lg [&_svg]:size-4",
        "icon-sm": "size-8 rounded-md [&_svg]:size-3.5",
        "icon-lg": "size-12 rounded-xl [&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={buttonVariants({ variant, size, className })} {...props} />;
  },
);

Button.displayName = "Button";

export { buttonVariants };
