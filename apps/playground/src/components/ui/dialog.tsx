"use client";

import { cn } from "@codeforward/utils";
import {
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
  cloneElement,
  createContext,
  forwardRef,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

// ── Context ───────────────────────────────────────────────────────────────────

interface DialogCtx {
  open: boolean;
  setOpen: (v: boolean) => void;
}

const Ctx = createContext<DialogCtx>({ open: false, setOpen: () => {} });

// ── Root ──────────────────────────────────────────────────────────────────────

export interface DialogProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}

export function Dialog({ open: controlled, defaultOpen = false, onOpenChange, children }: DialogProps) {
  const [internal, setInternal] = useState(defaultOpen);
  const open = controlled ?? internal;
  const setOpen = useCallback(
    (v: boolean) => {
      if (controlled === undefined) setInternal(v);
      onOpenChange?.(v);
    },
    [controlled, onOpenChange],
  );
  return <Ctx.Provider value={{ open, setOpen }}>{children}</Ctx.Provider>;
}

// ── Trigger ───────────────────────────────────────────────────────────────────

export interface DialogTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children: ReactNode;
}

export function DialogTrigger({ children, asChild, ...props }: DialogTriggerProps) {
  const { setOpen } = useContext(Ctx);
  if (asChild && isValidElement(children)) {
    return cloneElement(children as ReactElement<{ onClick?: () => void }>, { onClick: () => setOpen(true) });
  }
  return (
    <button type="button" onClick={() => setOpen(true)} {...props}>
      {children}
    </button>
  );
}

// ── Close ─────────────────────────────────────────────────────────────────────

export interface DialogCloseProps extends HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children?: ReactNode;
}

export function DialogClose({ children, asChild, ...props }: DialogCloseProps) {
  const { setOpen } = useContext(Ctx);
  if (asChild && isValidElement(children)) {
    return cloneElement(children as ReactElement<{ onClick?: () => void }>, { onClick: () => setOpen(false) });
  }
  return (
    <button type="button" onClick={() => setOpen(false)} {...props}>
      {children}
    </button>
  );
}

// ── Content ───────────────────────────────────────────────────────────────────

export interface DialogContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ className, children, ...props }, ref) => {
    const { open, setOpen } = useContext(Ctx);
    const overlayRef = useRef<HTMLDivElement>(null);

    // Lock scroll when open
    useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      return () => { document.body.style.overflow = ""; };
    }, [open]);

    // Esc to close
    useEffect(() => {
      if (!open) return;
      const handler = (e: globalThis.KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
      document.addEventListener("keydown", handler);
      return () => document.removeEventListener("keydown", handler);
    }, [open, setOpen]);

    if (!open) return null;

    return createPortal(
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        {/* Panel */}
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          className={cn(
            "relative z-10 w-full max-w-lg mx-4",
            "rounded-2xl border bg-white p-6",
            "shadow-[0_8px_40px_rgba(10,37,64,0.18),0_2px_8px_rgba(10,37,64,0.08)]",
            "animate-in fade-in-0 zoom-in-95 duration-150",
            className,
          )}
          style={{ borderColor: "var(--border)" }}
          {...props}
        >
          {children}
          {/* Built-in close button */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className={[
              "absolute right-4 top-4 flex items-center justify-center size-8 rounded-lg",
              "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]",
              "transition-colors duration-100",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
            ].join(" ")}
            aria-label="Fechar"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>,
      document.body,
    );
  },
);
DialogContent.displayName = "DialogContent";

// ── Portal / Overlay (compat exports) ────────────────────────────────────────
export const DialogPortal = ({ children }: { children: ReactNode }) => <>{children}</>;
export const DialogOverlay = () => null;

// ── Header ────────────────────────────────────────────────────────────────────

export const DialogHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col gap-1.5 mb-5 pr-8", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

// ── Footer ────────────────────────────────────────────────────────────────────

export const DialogFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex items-center justify-end gap-2 mt-6 pt-4 border-t", className)}
    style={{ borderColor: "var(--border)" }}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

// ── Title ─────────────────────────────────────────────────────────────────────

export const DialogTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn("text-base font-semibold leading-snug tracking-tight", className)}
      style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
      {...props}
    />
  ),
);
DialogTitle.displayName = "DialogTitle";

// ── Description ───────────────────────────────────────────────────────────────

export const DialogDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm leading-relaxed", className)}
      style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
      {...props}
    />
  ),
);
DialogDescription.displayName = "DialogDescription";
