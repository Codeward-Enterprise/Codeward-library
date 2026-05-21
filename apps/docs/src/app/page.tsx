import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--background)", fontFamily: "var(--font-sans)" }}
    >
      {/* Header */}
      <header
        className="border-b px-6 h-14 flex items-center justify-between sticky top-0 z-50"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--home-header-bg)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className="text-base font-semibold tracking-tight"
            style={{ color: "var(--primary)" }}
          >
            Codeward UI
          </span>
          <span
            className="text-xs px-1.5 py-0.5 rounded font-medium"
            style={{
              backgroundColor: "rgba(0,212,184,0.1)",
              color: "var(--cta)",
              border: "1px solid rgba(0,212,184,0.2)",
            }}
          >
            v2
          </span>
        </div>
        <nav
          className="flex items-center gap-6 text-sm"
          style={{ color: "var(--muted-foreground)" }}
        >
          <Link
            href="/docs/getting-started"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            Docs
          </Link>
          <Link
            href="/docs/components/button"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            Componentes
          </Link>
          <a
            href="https://github.com/Codeward-Enterprise/Codeward-library"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            GitHub
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
        <div
          className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border mb-6"
          style={{
            color: "var(--cta)",
            borderColor: "rgba(0,212,184,0.3)",
            backgroundColor: "rgba(0,212,184,0.05)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--cta)" }} />
          Open Source · Zero dependências externas · shadcn-style
        </div>

        <h1
          className="text-5xl sm:text-6xl font-medium tracking-tight mb-4 max-w-3xl"
          style={{ color: "var(--foreground)", lineHeight: 1.1 }}
        >
          Componentes React para <span style={{ color: "var(--primary)" }}>produtos modernos</span>
        </h1>

        <p
          className="text-xl max-w-xl mb-10"
          style={{ color: "var(--muted-foreground)", lineHeight: 1.6 }}
        >
          Biblioteca no estilo shadcn/ui. Tokens e utilitários são pacotes npm. Componentes são
          copiados via CLI — você possui o código-fonte.
        </p>

        <div className="flex items-center gap-3 flex-wrap justify-center mb-16">
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center gap-2 h-11 px-6 rounded-lg text-sm font-medium transition-all"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
              boxShadow: "0 1px 3px rgba(10,37,64,0.35)",
            }}
          >
            Começar agora
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M3 7h8M8 4l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="/docs/components/button"
            className="inline-flex items-center gap-2 h-11 px-6 rounded-lg text-sm font-medium border transition-all hover:border-[var(--primary)] hover:text-[var(--primary)]"
            style={{
              borderColor: "var(--border)",
              color: "var(--foreground)",
            }}
          >
            Ver componentes
          </Link>
        </div>

        {/* Quick install */}
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-xl border text-sm mb-16"
          style={{
            backgroundColor: "var(--color-navy-900)",
            borderColor: "var(--color-navy-700)",
            color: "var(--color-navy-300)",
            fontFamily: "var(--font-mono)",
          }}
        >
          <span style={{ color: "var(--cta)" }}>$</span>
          <span>npx @codeforward/cli add button</span>
          <span style={{ color: "var(--color-navy-600)", marginLeft: "8px" }}>
            # copia button.tsx para o seu projeto
          </span>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full">
          {[
            {
              icon: "⬡",
              title: "Zero dependências",
              desc: "Componentes construídos com React puro + Tailwind. Sem Radix UI, sem CVA.",
            },
            {
              icon: "⌨",
              title: "Acessível",
              desc: "ARIA roles completos, navegação por teclado e foco gerenciado em todos os componentes.",
            },
            {
              icon: "✦",
              title: "Você possui o código",
              desc: "O CLI copia o .tsx para seu projeto. Modifique como quiser — sem abstrações escondidas.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="text-left p-5 rounded-xl border"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--background)" }}
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="text-sm font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                {f.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Component list */}
      <section className="border-t px-6 py-16" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-center text-sm font-medium uppercase tracking-widest mb-8"
            style={{ color: "var(--muted-foreground)" }}
          >
            14 componentes disponíveis
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "accordion",
              "avatar",
              "badge",
              "button",
              "card",
              "checkbox",
              "dialog",
              "input",
              "select",
              "switch",
              "table",
              "tabs",
              "toast",
              "tooltip",
            ].map((c) => (
              <Link
                key={c}
                href={`/docs/components/${c}`}
                className="px-3 py-1.5 rounded-lg border text-xs font-medium transition-all hover:border-[var(--primary)] hover:text-[var(--primary)]"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--muted-foreground)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {c}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer
        className="border-t px-6 py-6 text-center text-xs"
        style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
      >
        Codeward UI · Open Source
      </footer>
    </div>
  );
}
