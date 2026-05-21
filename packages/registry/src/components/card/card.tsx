import { type HTMLAttributes, forwardRef } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** "dark" — neutral dark surface (#252528) for use on dark canvases */
  variant?: "default" | "dark";
}

// ── Card ─────────────────────────────────────────────────────────────────────
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", style, ...props }, ref) => (
    <div
      ref={ref}
      className={[
        "relative flex flex-col overflow-hidden rounded-2xl border",
        variant === "dark"
          ? "shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
          : "bg-white shadow-[0_1px_3px_rgba(10,37,64,0.06),0_4px_12px_rgba(10,37,64,0.04)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        borderColor: variant === "dark" ? "#333337" : "var(--border)",
        background: variant === "dark" ? "#252528" : undefined,
        ...style,
      }}
      {...props}
    />
  ),
);
Card.displayName = "Card";

// ── CardHighlight ─────────────────────────────────────────────────────────────
// Navy 700 background — for hero, metric and feature sections (60% rule)
export const CardHighlight = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={[
        "relative flex flex-col overflow-hidden",
        "rounded-2xl",
        // Gradient from Navy 700 → Navy 900 for depth
        "bg-gradient-to-br from-[#0A2540] to-[#04111F]",
        // Subtle mint accent border
        "border border-[#1C3D62]",
        "shadow-[0_4px_16px_rgba(4,17,31,0.4),0_1px_4px_rgba(4,17,31,0.3)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  ),
);
CardHighlight.displayName = "CardHighlight";

// ── CardHeader ────────────────────────────────────────────────────────────────
export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={["flex flex-col gap-1.5 px-6 pt-6 pb-0", className].filter(Boolean).join(" ")}
      {...props}
    />
  ),
);
CardHeader.displayName = "CardHeader";

// ── CardTitle ─────────────────────────────────────────────────────────────────
export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={["text-base font-medium leading-tight tracking-tight", className]
        .filter(Boolean)
        .join(" ")}
      style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
      {...props}
    />
  ),
);
CardTitle.displayName = "CardTitle";

// ── CardDescription ───────────────────────────────────────────────────────────
export const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={["text-sm font-normal leading-relaxed", className].filter(Boolean).join(" ")}
    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

// ── CardContent ───────────────────────────────────────────────────────────────
export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={["px-6 py-5", className].filter(Boolean).join(" ")} {...props} />
  ),
);
CardContent.displayName = "CardContent";

// ── CardFooter ────────────────────────────────────────────────────────────────
export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, style, ...props }, ref) => (
    <div
      ref={ref}
      className={[
        "flex items-center gap-2 px-6 pb-6 pt-0",
        // Separator line above footer actions
        "border-t mt-auto",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ borderColor: "var(--border)", paddingTop: "1.25rem", ...style }}
      {...props}
    />
  ),
);
CardFooter.displayName = "CardFooter";

// ── CardDivider ───────────────────────────────────────────────────────────────
export const CardDivider = forwardRef<HTMLHRElement, HTMLAttributes<HTMLHRElement>>(
  ({ className, ...props }, ref) => (
    <hr
      ref={ref}
      className={["border-0 border-t mx-6", className].filter(Boolean).join(" ")}
      style={{ borderColor: "var(--border)" }}
      {...props}
    />
  ),
);
CardDivider.displayName = "CardDivider";
