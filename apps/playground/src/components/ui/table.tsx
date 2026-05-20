import {
  type HTMLAttributes,
  type TdHTMLAttributes,
  type ThHTMLAttributes,
  forwardRef,
} from "react";

// ── Root ──────────────────────────────────────────────────────────────────────
export const Table = forwardRef<HTMLTableElement, HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div
      className="w-full overflow-auto rounded-xl border"
      style={{ borderColor: "var(--border)" }}
    >
      <table
        ref={ref}
        className={["w-full caption-bottom text-sm border-collapse", className]
          .filter(Boolean)
          .join(" ")}
        style={{ fontFamily: "var(--font-sans)" }}
        {...props}
      />
    </div>
  ),
);
Table.displayName = "Table";

// ── Header ────────────────────────────────────────────────────────────────────
export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={["border-b", className].filter(Boolean).join(" ")}
    style={{ borderColor: "var(--border)", background: "var(--muted)" }}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

// ── Body ──────────────────────────────────────────────────────────────────────
export const TableBody = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={["[&_tr:last-child]:border-0", className].filter(Boolean).join(" ")}
    style={{ background: "var(--background)" }}
    {...props}
  />
));
TableBody.displayName = "TableBody";

// ── Footer ────────────────────────────────────────────────────────────────────
export const TableFooter = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={["border-t font-medium", className].filter(Boolean).join(" ")}
    style={{ borderColor: "var(--border)", background: "var(--muted)", color: "var(--foreground)" }}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

// ── Row ───────────────────────────────────────────────────────────────────────
export const TableRow = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={[
        "border-b transition-colors duration-100",
        "hover:bg-[var(--muted)]",
        "data-[state=selected]:bg-[var(--muted)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ borderColor: "var(--border)" }}
      {...props}
    />
  ),
);
TableRow.displayName = "TableRow";

// ── Head ──────────────────────────────────────────────────────────────────────
export const TableHead = forwardRef<HTMLTableCellElement, ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={[
        "h-11 px-4 text-left align-middle",
        "text-xs font-semibold uppercase tracking-wider",
        "whitespace-nowrap",
        "[&:has([role=checkbox])]:pr-0",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ color: "var(--muted-foreground)" }}
      {...props}
    />
  ),
);
TableHead.displayName = "TableHead";

// ── Cell ──────────────────────────────────────────────────────────────────────
export const TableCell = forwardRef<HTMLTableCellElement, TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td
      ref={ref}
      className={["px-4 py-3 align-middle", "[&:has([role=checkbox])]:pr-0", className]
        .filter(Boolean)
        .join(" ")}
      style={{ color: "var(--foreground)" }}
      {...props}
    />
  ),
);
TableCell.displayName = "TableCell";

// ── Caption ───────────────────────────────────────────────────────────────────
export const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={["mt-4 text-xs text-left px-1", className].filter(Boolean).join(" ")}
    style={{ color: "var(--muted-foreground)" }}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";
