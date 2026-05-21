import { CodeBlock } from "@/components/docs/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Getting Started — Codeward UI" };

export default function GettingStartedPage() {
  return (
    <div className="space-y-12" style={{ fontFamily: "var(--font-sans)" }}>
      {/* Hero */}
      <div className="space-y-3">
        <div
          className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1 rounded-full border"
          style={{
            color: "var(--cta)",
            borderColor: "rgba(0,212,184,0.3)",
            backgroundColor: "rgba(0,212,184,0.05)",
          }}
        >
          Open Source · shadcn-style · Zero dependências
        </div>
        <h1
          className="text-4xl font-medium tracking-tight"
          style={{ color: "var(--foreground)", lineHeight: 1.15 }}
        >
          Getting Started
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Codeward UI é uma biblioteca de componentes React no estilo shadcn/ui.{" "}
          <strong style={{ color: "var(--foreground)", fontWeight: 500 }}>
            Tokens, utilitários e hooks são pacotes npm.
          </strong>{" "}
          Componentes são copiados diretamente para o seu projeto via CLI — você é dono do código e
          pode modificar como quiser.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      {/* Pré-requisitos */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Pré-requisitos
        </h2>
        <div
          className="rounded-xl border p-4 space-y-2 text-sm"
          style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
        >
          {[
            ["Node.js", "18 ou superior"],
            ["React", "19 (recomendado) ou 18"],
            ["Tailwind CSS", "v4 — necessário para as classes dos componentes"],
            ["Next.js", "13+ com App Router (recomendado) ou qualquer framework React"],
          ].map(([req, val]) => (
            <div key={req} className="flex items-center gap-3">
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: "var(--cta)" }}
              />
              <span>
                <strong style={{ color: "var(--foreground)" }}>{req}</strong> — {val}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Step 1 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span
            className="flex items-center justify-center w-7 h-7 rounded-full text-sm font-medium shrink-0"
            style={{ backgroundColor: "var(--primary)", color: "white" }}
          >
            1
          </span>
          <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
            Instalar os pacotes base
          </h2>
        </div>
        <p style={{ color: "var(--muted-foreground)" }}>
          Os tokens de design, utilitários e hooks são publicados no npm. Instale-os no seu projeto:
        </p>
        <CodeBlock
          language="bash"
          code="npm install @codeforward/tokens @codeforward/utils @codeforward/hooks @codeforward/icons"
        />
        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          Com pnpm ou yarn:
        </p>
        <CodeBlock
          language="bash"
          code={`pnpm add @codeforward/tokens @codeforward/utils @codeforward/hooks @codeforward/icons
# ou
yarn add @codeforward/tokens @codeforward/utils @codeforward/hooks @codeforward/icons`}
        />
        <div
          className="rounded-lg border p-3 text-sm"
          style={{
            borderColor: "rgba(0,212,184,0.3)",
            backgroundColor: "rgba(0,212,184,0.04)",
            color: "var(--muted-foreground)",
          }}
        >
          <strong style={{ color: "var(--foreground)" }}>Nota:</strong> os componentes copiados pelo
          CLI não têm dependências externas além de{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>@codeforward/utils</code> e React. Você
          não precisa instalar Radix UI, CVA ou qualquer outra biblioteca.
        </div>
      </section>

      {/* Step 2 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span
            className="flex items-center justify-center w-7 h-7 rounded-full text-sm font-medium shrink-0"
            style={{ backgroundColor: "var(--primary)", color: "white" }}
          >
            2
          </span>
          <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
            Configurar os tokens CSS
          </h2>
        </div>
        <p style={{ color: "var(--muted-foreground)" }}>
          Importe o CSS de tokens no arquivo global de estilos. Ele injeta todas as variáveis CSS de
          cor, tipografia e espaçamento usadas pelos componentes.
        </p>
        <CodeBlock
          filename="src/app/globals.css"
          language="css"
          code={`@import "@codeforward/tokens/styles";
@import "tailwindcss";

@theme {
  --color-primary: var(--primary);
  --color-cta: var(--cta);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-border: var(--border);
  --color-ring: var(--ring);
}

:root {
  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}`}
        />
        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          Para Next.js, certifique-se de que o{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>globals.css</code> está importado no{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>layout.tsx</code>:
        </p>
        <CodeBlock
          filename="src/app/layout.tsx"
          language="tsx"
          code={`import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}`}
        />
      </section>

      {/* Step 3 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span
            className="flex items-center justify-center w-7 h-7 rounded-full text-sm font-medium shrink-0"
            style={{ backgroundColor: "var(--primary)", color: "white" }}
          >
            3
          </span>
          <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
            Instalar o CLI
          </h2>
        </div>
        <p style={{ color: "var(--muted-foreground)" }}>
          O CLI <code style={{ fontFamily: "var(--font-mono)" }}>codeward</code> copia componentes
          para o seu projeto. Não é necessário instalar globalmente — use{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>npx</code>.
        </p>
        <CodeBlock
          language="bash"
          code={`# sem instalar (recomendado):
npx @codeforward/cli add button

# ou instalar globalmente:
npm install -g @codeforward/cli
codeward add button`}
        />
      </section>

      {/* Step 4 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span
            className="flex items-center justify-center w-7 h-7 rounded-full text-sm font-medium shrink-0"
            style={{ backgroundColor: "var(--primary)", color: "white" }}
          >
            4
          </span>
          <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
            Adicionar componentes
          </h2>
        </div>
        <p style={{ color: "var(--muted-foreground)" }}>
          Use o CLI para copiar componentes diretamente para{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>src/components/ui/</code>. O código-fonte
          fica no seu projeto — é seu para modificar.
        </p>
        <CodeBlock
          language="bash"
          code={`# ver todos os componentes disponíveis
npx @codeforward/cli list

# adicionar um componente
npx @codeforward/cli add button

# adicionar vários de uma vez
npx @codeforward/cli add button badge input card dialog`}
        />
        <p style={{ color: "var(--muted-foreground)" }}>
          O CLI copia o arquivo <code style={{ fontFamily: "var(--font-mono)" }}>.tsx</code> para a
          pasta de destino:
        </p>
        <CodeBlock
          language="bash"
          code={`✓ button.tsx → src/components/ui/button.tsx

Nenhuma dependência adicional necessária.`}
        />
      </section>

      {/* Step 5 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span
            className="flex items-center justify-center w-7 h-7 rounded-full text-sm font-medium shrink-0"
            style={{ backgroundColor: "var(--primary)", color: "white" }}
          >
            5
          </span>
          <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
            Usar o componente
          </h2>
        </div>
        <p style={{ color: "var(--muted-foreground)" }}>
          Importe e use diretamente — o componente já está no seu projeto:
        </p>
        <CodeBlock
          filename="src/app/page.tsx"
          language="tsx"
          code={`import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex gap-3">
      <Button variant="primary">Começar agora</Button>
      <Button variant="cta">Fale com a gente</Button>
      <Button variant="outline">Saber mais</Button>
    </div>
  );
}`}
        />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      {/* Architecture */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Arquitetura
        </h2>
        <p style={{ color: "var(--muted-foreground)" }}>
          A biblioteca usa um modelo híbrido: alguns pacotes são distribuídos via npm, os
          componentes são distribuídos via CLI como código-fonte.
        </p>
        <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "var(--border)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "var(--muted)" }}>
                {["Pacote", "Distribuição", "Descrição"].map((h) => (
                  <th
                    key={h}
                    className="text-left px-4 py-3 text-xs font-medium uppercase tracking-widest border-b"
                    style={{ color: "var(--muted-foreground)", borderColor: "var(--border)" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "@codeforward/tokens",
                  "npm",
                  "Tokens de cor, tipografia e espaçamento. Gera tokens.css com variáveis CSS.",
                ],
                [
                  "@codeforward/utils",
                  "npm",
                  "cn() para merge de classes Tailwind + formatadores brasileiros (CPF, CNPJ, telefone).",
                ],
                [
                  "@codeforward/hooks",
                  "npm",
                  "useDebounce, useLocalStorage, useMediaQuery, useClickOutside e mais.",
                ],
                [
                  "@codeforward/icons",
                  "npm",
                  "CodewardMark e CodewardIcon como componentes React SVG.",
                ],
                [
                  "@codeforward/cli",
                  "npm (global / npx)",
                  "CLI para listar e adicionar componentes ao projeto.",
                ],
                [
                  "Componentes (14)",
                  "via CLI (código-fonte)",
                  "Copiados para src/components/ui/ — você controla e pode modificar.",
                ],
              ].map(([pkg, dist, desc], i) => (
                <tr
                  key={pkg as string}
                  style={{ backgroundColor: i % 2 === 0 ? "var(--background)" : "var(--muted)" }}
                >
                  <td className="px-4 py-3 border-b" style={{ borderColor: "var(--border)" }}>
                    <code
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.8rem",
                        color: "var(--primary)",
                      }}
                    >
                      {pkg}
                    </code>
                  </td>
                  <td
                    className="px-4 py-3 border-b text-xs"
                    style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
                  >
                    {dist}
                  </td>
                  <td
                    className="px-4 py-3 border-b"
                    style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
                  >
                    {desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      {/* FAQ */}
      <section className="space-y-6">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Dúvidas frequentes
        </h2>
        <div className="space-y-5">
          {[
            {
              q: "Preciso instalar o Tailwind CSS?",
              a: 'Sim. Os componentes usam classes Tailwind diretamente. Tailwind v4 é necessário. Certifique-se de que o CSS dos tokens está importado antes do @import "tailwindcss".',
            },
            {
              q: "Posso personalizar os componentes?",
              a: "Sim — é o objetivo principal. O código fica no seu projeto. Edite variantes, estilos, comportamento à vontade.",
            },
            {
              q: "Os componentes funcionam com React 18?",
              a: "Sim. Os componentes são compatíveis com React 18 e 19. Testados com Next.js 15.",
            },
            {
              q: "Onde fica o código após npx @codeforward/cli add?",
              a: "Por padrão em src/components/ui/<nome>.tsx. Você pode configurar o diretório de destino.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="space-y-1">
              <p className="font-medium text-sm" style={{ color: "var(--foreground)" }}>
                {q}
              </p>
              <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                {a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
