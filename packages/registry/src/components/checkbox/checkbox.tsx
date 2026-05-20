import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { type ComponentPropsWithoutRef, type ElementRef, type HTMLAttributes, forwardRef, useId } from "react";

export interface CheckboxProps extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: string;
  description?: string;
}

export const Checkbox = forwardRef<ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, label, description, id: externalId, ...props }, ref) => {
    const generatedId = useId();
    const id = externalId ?? generatedId;

    return (
      <div className="flex gap-3" style={{ fontFamily: "var(--font-sans)" }}>
        <CheckboxPrimitive.Root
          ref={ref}
          id={id}
          className={[
            "shrink-0 size-[18px] mt-[1px]",
            "rounded-[4px] border-2",
            "transition-all duration-150",
            // Unchecked
            "border-[var(--border)] bg-white",
            "hover:border-[var(--color-neutral-400)]",
            // Checked
            "data-[state=checked]:bg-[var(--primary)] data-[state=checked]:border-[var(--primary)]",
            // Focus
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-1",
            // Disabled
            "disabled:cursor-not-allowed disabled:opacity-40",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          {...props}
        >
          <CheckboxPrimitive.Indicator className="flex items-center justify-center text-white">
            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" aria-hidden="true">
              <path d="M1 4l3 3 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>

        {(label || description) && (
          <div className="flex flex-col gap-0.5">
            {label && (
              <label
                htmlFor={id}
                className="text-sm font-medium leading-none cursor-pointer"
                style={{ color: "var(--foreground)" }}
              >
                {label}
              </label>
            )}
            {description && (
              <p className="text-xs leading-snug" style={{ color: "var(--muted-foreground)" }}>
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    );
  },
);
Checkbox.displayName = "Checkbox";
