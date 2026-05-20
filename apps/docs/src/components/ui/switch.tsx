import * as SwitchPrimitive from "@radix-ui/react-switch";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef, useId } from "react";

export interface SwitchProps extends ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  label?: string;
  description?: string;
}

export const Switch = forwardRef<ElementRef<typeof SwitchPrimitive.Root>, SwitchProps>(
  ({ className, label, description, id: externalId, ...props }, ref) => {
    const generatedId = useId();
    const id = externalId ?? generatedId;

    return (
      <div className="flex items-start gap-3" style={{ fontFamily: "var(--font-sans)" }}>
        <SwitchPrimitive.Root
          ref={ref}
          id={id}
          className={[
            "peer relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full",
            "border-2 border-transparent",
            "transition-colors duration-200 ease-out",
            // Unchecked
            "bg-[var(--border)]",
            // Checked — Mint 500
            "data-[state=checked]:bg-[var(--cta)]",
            // Focus
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2",
            // Disabled
            "disabled:cursor-not-allowed disabled:opacity-40",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          {...props}
        >
          <SwitchPrimitive.Thumb
            className={[
              "pointer-events-none block size-5 rounded-full bg-white",
              "shadow-[0_1px_3px_rgba(0,0,0,0.2)]",
              "transition-transform duration-200 ease-out",
              "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
            ].join(" ")}
          />
        </SwitchPrimitive.Root>

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
Switch.displayName = "Switch";
