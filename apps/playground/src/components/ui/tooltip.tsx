"use client";

import { cn } from "@codeforward/utils";
import {
  type HTMLAttributes,
  type ReactNode,
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

// ── TooltipProvider ───────────────────────────────────────────────────────────

export const TooltipProvider = ({ children }: { children: ReactNode }) => <>{children}</>;

// ── Tooltip ───────────────────────────────────────────────────────────────────

interface TooltipCtx {
  open: boolean;
}
const TooltipCtx = createContext<TooltipCtx>({ open: false });

export interface TooltipProps {
  children: ReactNode;
  delayDuration?: number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Tooltip({ children, open = false, delayDuration: _delay }: TooltipProps) {
  return <TooltipCtx.Provider value={{ open }}>{children}</TooltipCtx.Provider>;
}

// ── TooltipTrigger ────────────────────────────────────────────────────────────

export interface TooltipTriggerProps extends HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  children: ReactNode;
}

export function TooltipTrigger({ children, asChild, ...props }: TooltipTriggerProps) {
  return asChild ? <>{children}</> : <span {...props}>{children}</span>;
}

// ── TooltipContent ────────────────────────────────────────────────────────────

export interface TooltipContentProps extends HTMLAttributes<HTMLDivElement> {
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
  children: ReactNode;
}

export const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ className, children, ...props }, ref) => {
    const { open } = useContext(TooltipCtx);
    if (!open) return null;
    return (
      <div
        ref={ref}
        role="tooltip"
        className={cn(
          "absolute z-50 px-3 py-1.5 rounded-lg text-xs font-medium",
          "shadow-[0_4px_12px_rgba(0,0,0,0.15)]",
          "animate-in fade-in-0 zoom-in-95 duration-100",
          className,
        )}
        style={{
          backgroundColor: "var(--primary)",
          color: "white",
          fontFamily: "var(--font-sans)",
          whiteSpace: "nowrap",
        }}
        {...props}
      >
        {children}
      </div>
    );
  },
);
TooltipContent.displayName = "TooltipContent";

// ── Compound Tooltip (recommended API) ───────────────────────────────────────
// Self-contained tooltip that handles hover state, portal and positioning.

export interface SimpleTooltipProps {
  content: ReactNode;
  children: ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
  delayDuration?: number;
  className?: string;
}

export function SimpleTooltip({
  content,
  children,
  side = "top",
  sideOffset = 6,
  delayDuration = 200,
  className,
}: SimpleTooltipProps) {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLSpanElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const show = useCallback(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (!triggerRef.current) return;
      const rect = triggerRef.current.getBoundingClientRect();
      const scroll = { x: window.scrollX, y: window.scrollY };
      let top = 0;
      let left = 0;
      if (side === "top") {
        top = rect.top + scroll.y - sideOffset - 8;
        left = rect.left + scroll.x + rect.width / 2;
      }
      if (side === "bottom") {
        top = rect.bottom + scroll.y + sideOffset;
        left = rect.left + scroll.x + rect.width / 2;
      }
      if (side === "left") {
        top = rect.top + scroll.y + rect.height / 2;
        left = rect.left + scroll.x - sideOffset - 8;
      }
      if (side === "right") {
        top = rect.top + scroll.y + rect.height / 2;
        left = rect.right + scroll.x + sideOffset;
      }
      setPos({ top, left });
      setVisible(true);
    }, delayDuration);
  }, [side, sideOffset, delayDuration]);

  const hide = useCallback(() => {
    clearTimeout(timer.current);
    setVisible(false);
  }, []);

  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <>
      <span
        ref={triggerRef}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
        className="inline-flex"
        aria-describedby={visible ? "tooltip-content" : undefined}
      >
        {children}
      </span>
      {visible &&
        createPortal(
          <div
            id="tooltip-content"
            role="tooltip"
            className={cn(
              "fixed z-[200] px-3 py-1.5 rounded-lg text-xs font-medium pointer-events-none",
              "shadow-[0_4px_12px_rgba(0,0,0,0.15)]",
              side === "top" || side === "bottom" ? "-translate-x-1/2" : "-translate-y-1/2",
              side === "top" ? "-translate-y-full" : "",
              className,
            )}
            style={{
              top: pos.top,
              left: pos.left,
              backgroundColor: "var(--primary)",
              color: "white",
              fontFamily: "var(--font-sans)",
              whiteSpace: "nowrap",
            }}
          >
            {content}
          </div>,
          document.body,
        )}
    </>
  );
}
