"use client";

import { cn } from "@codeforward/utils";
import { type HTMLAttributes, forwardRef, useId, useState } from "react";

export interface CheckboxProps extends Omit<HTMLAttributes<HTMLButtonElement>, "onChange"> {
  label?: string;
  description?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
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
          role="checkbox"
          aria-checked={isChecked}
          aria-describedby={descId}
          disabled={disabled}
          onClick={toggle}
          className={cn(
            "flex shrink-0 items-center justify-center mt-[2px]",
            "w-[18px] h-[18px] rounded-[4px] border-2",
            "transition-all duration-150 cursor-pointer",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-1",
            "disabled:opacity-40 disabled:cursor-not-allowed",
          )}
          style={{
            backgroundColor: isChecked ? "var(--primary)" : "white",
            borderColor: isChecked ? "var(--primary)" : "var(--border)",
          }}
          {...props}
        >
          {isChecked && (
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M2 6l3 3 5-5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
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

Checkbox.displayName = "Checkbox";
