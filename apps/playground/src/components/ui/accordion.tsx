"use client";

import { cn } from "@codeforward/utils";
import {
  type HTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
  createContext,
  useContext,
  useId,
  useRef,
  useState,
} from "react";

// ── Context ───────────────────────────────────────────────────────────────────

interface AccordionCtx {
  type: "single" | "multiple";
  collapsible: boolean;
  openItems: string[];
  toggle: (value: string) => void;
}

const Ctx = createContext<AccordionCtx>({
  type: "single",
  collapsible: true,
  openItems: [],
  toggle: () => {},
});

// ── Root ──────────────────────────────────────────────────────────────────────

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  collapsible?: boolean;
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
}

export function Accordion({
  type = "single",
  collapsible = false,
  defaultValue,
  value,
  onValueChange,
  className,
  children,
  ...props
}: AccordionProps) {
  const init = defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : [];
  const [internal, setInternal] = useState<string[]>(init);
  const openItems = value != null ? (Array.isArray(value) ? value : [value]) : internal;

  const toggle = (item: string) => {
    let next: string[];
    if (type === "multiple") {
      next = openItems.includes(item) ? openItems.filter((v) => v !== item) : [...openItems, item];
    } else {
      next = openItems.includes(item) && collapsible ? [] : [item];
    }
    if (value == null) setInternal(next);
    onValueChange?.(type === "single" ? (next[0] ?? "") : next);
  };

  return (
    <Ctx.Provider value={{ type, collapsible, openItems, toggle }}>
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </Ctx.Provider>
  );
}

// ── Item ──────────────────────────────────────────────────────────────────────

interface ItemCtx {
  value: string;
  isOpen: boolean;
  triggerId: string;
  panelId: string;
}

const ItemCtx = createContext<ItemCtx>({ value: "", isOpen: false, triggerId: "", panelId: "" });

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function AccordionItem({ value, className, children, ...props }: AccordionItemProps) {
  const { openItems } = useContext(Ctx);
  const uid = useId();
  const triggerId = `accordion-trigger-${uid}`;
  const panelId = `accordion-panel-${uid}`;
  const isOpen = openItems.includes(value);

  return (
    <ItemCtx.Provider value={{ value, isOpen, triggerId, panelId }}>
      <div
        className={cn("border-b last:border-b-0", className)}
        style={{ borderColor: "var(--border)" }}
        {...props}
      >
        {children}
      </div>
    </ItemCtx.Provider>
  );
}

// ── Trigger ───────────────────────────────────────────────────────────────────

export interface AccordionTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function AccordionTrigger({ className, children, ...props }: AccordionTriggerProps) {
  const { toggle } = useContext(Ctx);
  const { value, isOpen, triggerId, panelId } = useContext(ItemCtx);
  const ref = useRef<HTMLButtonElement>(null);

  const handleKey = (e: KeyboardEvent) => {
    const root = ref.current?.closest("[data-accordion-root]");
    const triggers = root
      ? Array.from(root.querySelectorAll<HTMLElement>("[data-accordion-trigger]"))
      : [];
    const idx = triggers.indexOf(ref.current!);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      triggers[idx + 1]?.focus();
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      triggers[idx - 1]?.focus();
    }
    if (e.key === "Home") {
      e.preventDefault();
      triggers[0]?.focus();
    }
    if (e.key === "End") {
      e.preventDefault();
      triggers[triggers.length - 1]?.focus();
    }
  };

  return (
    <h3 className="flex">
      <button
        ref={ref}
        id={triggerId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        data-accordion-trigger
        data-state={isOpen ? "open" : "closed"}
        onClick={() => toggle(value)}
        onKeyDown={handleKey}
        className={cn(
          "flex flex-1 items-center justify-between py-4 px-1 gap-4",
          "text-sm font-medium text-left cursor-pointer select-none",
          "transition-all duration-150 hover:text-[var(--primary)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] rounded-md",
          className,
        )}
        style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
        {...(props as HTMLAttributes<HTMLButtonElement>)}
      >
        {children}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="shrink-0 transition-transform duration-200"
          style={{
            color: "var(--muted-foreground)",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </h3>
  );
}

// ── Content ───────────────────────────────────────────────────────────────────

export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function AccordionContent({ className, children, ...props }: AccordionContentProps) {
  const { isOpen, triggerId, panelId } = useContext(ItemCtx);

  return (
    <div
      id={panelId}
      role="region"
      aria-labelledby={triggerId}
      hidden={!isOpen}
      className={cn("overflow-hidden text-sm", className)}
      style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
      {...props}
    >
      <div className="pb-4 px-1 leading-relaxed">{children}</div>
    </div>
  );
}
