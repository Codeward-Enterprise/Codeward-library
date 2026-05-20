import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

export const TooltipContent = forwardRef<
  ElementRef<typeof TooltipPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 6, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={[
        "z-50 overflow-hidden",
        "rounded-lg px-3 py-1.5",
        "bg-[var(--color-navy-800)] text-[#F6F9FC]",
        "text-xs font-medium leading-none",
        "shadow-[0_4px_16px_rgba(4,17,31,0.3)]",
        "border border-[var(--color-navy-600)]",
        "animate-in fade-in-0 zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        "duration-100",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ fontFamily: "var(--font-sans)" }}
      {...props}
    />
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
