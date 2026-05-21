import { CodewardMark } from "@codeforward/icons";
import Link from "next/link";

export function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-[57px] flex items-center px-6 border-b"
      style={{ background: "var(--primary)", borderColor: "var(--color-navy-600)" }}
    >
      <div className="flex items-center gap-3 flex-1">
        <Link href="/docs/getting-started" className="flex items-center gap-2.5">
          <CodewardMark size={22} style={{ color: "var(--cta)" }} />
          <span
            className="text-sm font-medium"
            style={{ color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-sans)" }}
          >
            Codeward UI
          </span>
        </Link>
        <span
          className="text-xs px-1.5 py-0.5 rounded font-mono border"
          style={{
            color: "var(--cta)",
            backgroundColor: "rgba(0,212,184,0.08)",
            borderColor: "rgba(0,212,184,0.2)",
            fontFamily: "var(--font-mono)",
          }}
        >
          v2.0.0
        </span>
      </div>
      <nav className="flex items-center gap-1">
        <Link
          href="/docs/getting-started"
          className="text-sm px-3 py-1.5 rounded-md transition-colors"
          style={{ color: "var(--color-navy-300)", fontFamily: "var(--font-sans)" }}
        >
          Docs
        </Link>
        <Link
          href="/docs/components/button"
          className="text-sm px-3 py-1.5 rounded-md transition-colors"
          style={{ color: "var(--color-navy-300)", fontFamily: "var(--font-sans)" }}
        >
          Componentes
        </Link>
        <a
          href="https://github.com/Codeward-Enterprise/Codeward-library"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm px-3 py-1.5 rounded-md transition-colors"
          style={{ color: "var(--color-navy-300)", fontFamily: "var(--font-sans)" }}
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
