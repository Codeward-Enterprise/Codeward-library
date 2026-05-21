"use client";

import { cn } from "@codeforward/utils";
import { type HTMLAttributes, forwardRef, useId, useState } from "react";

export interface SwitchProps extends Omit<HTMLAttributes<HTMLButtonElement>, "onChange"> {
  label?: string;
  description?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      className,
      label,
      description,
      id: idProp,
      checked: controlledChecked,
      defaultChecked = false,
      disabled = false,
      onCheckedChange,
      ...props
    },
    ref,
  ) => {
    const uid = useId();
    const id = idProp ?? uid;
    const descId = description ? `${id}-desc` : undefined;
    const [internal, setInternal] = useState(defaultChecked);
    const isChecked = controlledChecked ?? internal;

    const toggle = () => {
      if (disabled) return;
      const next = !isChecked;
      if (controlledChecked === undefined) setInternal(next);
      onCheckedChange?.(next);
    };

    return (
      <div className={cn("flex items-start gap-3", className)}>
        <button
          ref={ref}
          id={id}
          type="button"
          role="switch"
          aria-checked={isChecked}
          aria-describedby={descId}
          disabled={disabled}
          onClick={toggle}
          className={cn(
            "relative inline-flex shrink-0 mt-[2px]",
            "h-6 w-11 cursor-pointer rounded-full border-2 border-transparent",
            "transition-colors duration-200 ease-in-out",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2",
            "disabled:opacity-40 disabled:cursor-not-allowed",
          )}
          style={{
            backgroundColor: isChecked ? "var(--cta)" : "var(--color-neutral-300)",
          }}
          {...props}
        >
          <span
            className="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.2)] transition-transform duration-200 ease-in-out"
            style={{ transform: isChecked ? "translateX(20px)" : "translateX(0px)" }}
            aria-hidden="true"
          />
        </button>

        {(label || description) && (
          <div className="flex flex-col gap-0.5">
            {label && (
              <label
                htmlFor={id}
                onClick={toggle}
                className="text-sm font-medium cursor-pointer select-none"
                style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
              >
                {label}
              </label>
            )}
            {description && (
              <p
                id={descId}
                className="text-xs leading-relaxed"
                style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
              >
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
