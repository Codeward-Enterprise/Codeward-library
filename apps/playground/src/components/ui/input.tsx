import { type InputHTMLAttributes, type ReactNode, forwardRef, useId } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: boolean;
  errorMessage?: string;
  /** SVG or any ReactNode rendered as a left-side icon */
  icon?: ReactNode;
  /** "dark" = borderless navy background, designed for dark surfaces (Rocketseat-style) */
  variant?: "default" | "dark";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      label,
      hint,
      error,
      errorMessage,
      icon,
      variant = "default",
      id: externalId,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const id = externalId ?? generatedId;
    const descId = `${id}-desc`;
    const hasDesc = !!(hint || errorMessage);
    const isDark = variant === "dark";

    return (
      <div className="flex flex-col gap-1.5 w-full" style={{ fontFamily: "var(--font-sans)" }}>
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium leading-none"
            style={{
              color: isDark ? "var(--color-neutral-300)" : "var(--foreground)",
            }}
          >
            {label}
          </label>
        )}

        {/* Visual container — owns the background, border, and focus ring */}
        <div
          className={[
            "relative flex items-center gap-3 h-12 px-3.5 rounded-lg",
            "transition-all duration-150",
            isDark
              ? [
                  "bg-[var(--color-navy-800)]",
                  error
                    ? "ring-2 ring-[var(--color-error-500)]"
                    : "focus-within:ring-2 focus-within:ring-[var(--ring)]",
                ].join(" ")
              : [
                  "bg-white border shadow-[0_1px_2px_rgba(10,37,64,0.04)]",
                  error
                    ? [
                        "border-[var(--color-error-500)] bg-[var(--color-error-50)]",
                        "focus-within:ring-2 focus-within:ring-[var(--color-error-500)]/25",
                      ].join(" ")
                    : [
                        "border-[var(--border)]",
                        "hover:border-[var(--color-neutral-400)]",
                        "focus-within:ring-2 focus-within:ring-[var(--ring)]/30",
                        "focus-within:border-[var(--ring)]",
                        "focus-within:shadow-[0_0_0_3px_rgba(0,212,184,0.12)]",
                      ].join(" "),
                ].join(" "),
          ].join(" ")}
        >
          {icon && (
            <span
              className="shrink-0 flex items-center"
              style={{
                color: error
                  ? "var(--color-error-500)"
                  : isDark
                    ? "var(--color-neutral-400)"
                    : "var(--muted-foreground)",
              }}
              aria-hidden="true"
            >
              {icon}
            </span>
          )}

          <input
            id={id}
            type={type}
            ref={ref}
            aria-invalid={error || undefined}
            aria-describedby={hasDesc ? descId : undefined}
            className={[
              "flex-1 min-w-0 h-full",
              "bg-transparent border-none outline-none",
              "text-sm font-normal leading-none",
              "disabled:cursor-not-allowed disabled:opacity-40",
              isDark
                ? "text-[#F6F9FC] placeholder:text-[var(--color-neutral-400)]"
                : error
                  ? "text-[var(--foreground)] placeholder:text-[var(--color-error-500)] placeholder:opacity-50"
                  : "text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]",
              className,
            ]
              .filter(Boolean)
              .join(" ")}
            style={{ fontFamily: "var(--font-sans)" }}
            {...props}
          />
        </div>

        {hasDesc && (
          <p
            id={descId}
            className="flex items-center gap-1.5 text-xs leading-none"
            style={{
              color: error
                ? "var(--color-error-500)"
                : isDark
                  ? "var(--color-neutral-400)"
                  : "var(--muted-foreground)",
            }}
          >
            {error && (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
                className="shrink-0"
              >
                <circle cx="6" cy="6" r="5.5" stroke="currentColor" />
                <path d="M6 4v3M6 8.5v.5" stroke="currentColor" strokeLinecap="round" />
              </svg>
            )}
            {error ? (errorMessage ?? hint) : hint}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
