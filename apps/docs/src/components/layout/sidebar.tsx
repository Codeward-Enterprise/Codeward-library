"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  {
    section: "Introdução",
    items: [{ label: "Getting Started", href: "/docs/getting-started" }],
  },
  {
    section: "Design Tokens",
    items: [{ label: "Cores, Tipografia & Espaçamento", href: "/docs/tokens" }],
  },
  {
    section: "Componentes",
    items: [
      { label: "Accordion", href: "/docs/components/accordion" },
      { label: "Avatar", href: "/docs/components/avatar" },
      { label: "Badge", href: "/docs/components/badge" },
      { label: "Button", href: "/docs/components/button" },
      { label: "Card", href: "/docs/components/card" },
      { label: "Checkbox", href: "/docs/components/checkbox" },
      { label: "Dialog", href: "/docs/components/dialog" },
      { label: "Input", href: "/docs/components/input" },
      { label: "Select", href: "/docs/components/select" },
      { label: "Switch", href: "/docs/components/switch" },
      { label: "Table", href: "/docs/components/table" },
      { label: "Tabs", href: "/docs/components/tabs" },
      { label: "Toast", href: "/docs/components/toast" },
      { label: "Tooltip", href: "/docs/components/tooltip" },
    ],
  },
  {
    section: "CLI",
    items: [{ label: "codeward add", href: "/docs/cli" }],
  },
  {
    section: "Pacotes",
    items: [
      { label: "Utils", href: "/docs/utils" },
      { label: "Hooks", href: "/docs/hooks" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="fixed top-[57px] left-0 h-[calc(100vh-57px)] overflow-y-auto border-r w-[var(--docs-sidebar-width)] hidden lg:block"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--background)" }}
    >
      <nav className="py-6 px-4 space-y-6">
        {nav.map((group) => (
          <div key={group.section}>
            <p
              className="text-[11px] font-medium uppercase tracking-widest mb-2 px-2"
              style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
            >
              {group.section}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-md px-2 py-1.5 text-sm transition-colors"
                      style={{
                        fontFamily: "var(--font-sans)",
                        color: active ? "var(--nav-active)" : "var(--foreground)",
                        backgroundColor: active ? "var(--nav-active-bg)" : "transparent",
                        fontWeight: active ? 500 : 400,
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
