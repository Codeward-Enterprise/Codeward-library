import { CodeBlock } from "@/components/docs/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Getting Started" };

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
          Open Source · shadcn-style
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
            Tokens e utilitários são pacotes npm.
          </strong>{" "}
          Componentes são copiados diretamente para o seu projeto via CLI — você é dono do código.
        </p>
        <p className="text-sm" style={{ color: "var(--color-neutral-500)" }}>
          <em>
            React component library in the shadcn/ui style. Tokens and utilities are npm packages.
            Components are copied into your project — you own the source.
          </em>
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      {/* Step 1 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span
            className="flex items-center justify-center w-7 h-7 rounded-full text-sm font-medium"
            style={{ backgroundColor: "var(--primary)", color: "white" }}
          >
            1
          </span>
          <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
            Instalar os pacotes base
          </h2>
        </div>
        <p style={{ color: "var(--muted-foreground)" }}>
          Os tokens de design, utilitários e hooks são publicados no npm e devem ser instalados no
          seu projeto.
        </p>
        <CodeBlock
          language="bash"
          code={
            "npm install @codeforward/tokens @codeforward/utils @codeforward/hooks @codeforward/icons"
          }
        />
        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          Ou com pnpm / yarn:
        </p>
        <CodeBlock
          language="bash"
          code={
            "pnpm add @codeforward/tokens @codeforward/utils @codeforward/hooks @codeforward/icons"
          }
        />
      </section>

      {/* Step 2 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span
            className="flex items-center justify-center w-7 h-7 rounded-full text-sm font-medium"
            style={{ backgroundColor: "var(--primary)", color: "white" }}
          >
            2
          </span>
          <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
            Configurar os tokens CSS
          </h2>
        </div>
        <p style={{ color: "var(--muted-foreground)" }}>
          Importe o CSS de tokens no arquivo global de estilos do seu projeto. Isso injeta todas as
          variáveis CSS de cor, tipografia, espaçamento e sombras.
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
  /* adicione as demais conforme necessário */
}

:root {
  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}`}
        />
      </section>

      {/* Step 3 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span
            className="flex items-center justify-center w-7 h-7 rounded-full text-sm font-medium"
            style={{ backgroundColor: "var(--primary)", color: "white" }}
          >
            3
          </span>
          <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
            Instalar o CLI
          </h2>
        </div>
        <p style={{ color: "var(--muted-foreground)" }}>
          O CLI <code style={{ fontFamily: "var(--font-mono)" }}>codeforward</code> é usado para
          adicionar componentes ao seu projeto. Instale globalmente ou use via{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>npx</code>.
        </p>
        <CodeBlock
          language="bash"
          code={
            "npm install -g @codeforward/cli\n# ou sem instalar:\nnpx @codeforward/cli add button"
          }
        />
      </section>

      {/* Step 4 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span
            className="flex items-center justify-center w-7 h-7 rounded-full text-sm font-medium"
            style={{ backgroundColor: "var(--primary)", color: "white" }}
          >
            4
          </span>
          <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
            Adicionar componentes
          </h2>
        </div>
        <p style={{ color: "var(--muted-foreground)" }}>
          Use o CLI para copiar componentes diretamente para a pasta{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>src/components/ui/</code> do seu projeto.
          O CLI detecta automaticamente a estrutura de pastas.
        </p>
        <CodeBlock
          language="bash"
          code={
            "# listar componentes disponíveis\ncodeward list\n\n# adicionar um componente\ncodeward add button\n\n# adicionar múltiplos\ncodeward add button badge input card"
          }
        />
        <p style={{ color: "var(--muted-foreground)" }}>
          Após adicionar, o CLI mostra as dependências de peer que precisam ser instaladas:
        </p>
        <CodeBlock
          language="bash"
          code={
            "✓ button.tsx copiado para src/components/ui/button.tsx\n\nDependências necessárias:\nnpm install @radix-ui/react-slot class-variance-authority"
          }
        />
      </section>

      {/* Step 5 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span
            className="flex items-center justify-center w-7 h-7 rounded-full text-sm font-medium"
            style={{ backgroundColor: "var(--primary)", color: "white" }}
          >
            5
          </span>
          <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
            Usar o componente
          </h2>
        </div>
        <CodeBlock
          filename="src/app/page.tsx"
          language="tsx"
          code={`import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div>
      <Button variant="primary">Começar agora</Button>
      <Button variant="cta">Fale com a gente</Button>
    </div>
  );
}`}
        />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      {/* Architecture note */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Arquitetura
        </h2>
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
                ["@codeforward/tokens", "npm", "Tokens de cor, tipografia, espaçamento e sombras"],
                ["@codeforward/utils", "npm", "cn(), formatadores e validadores brasileiros"],
                [
                  "@codeforward/hooks",
                  "npm",
                  "useDebounce, useLocalStorage, useMediaQuery, useClickOutside",
                ],
                ["@codeforward/icons", "npm", "CodewardMark e CodewardIcon SVG"],
                ["@codeforward/cli", "npm (global)", "CLI para adicionar componentes ao projeto"],
                [
                  "Componentes",
                  "via CLI (código-fonte)",
                  "Copiados para src/components/ui/ — você controla",
                ],
              ].map(([pkg, dist, desc]) => (
                <tr key={pkg as string}>
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
                    className="px-4 py-3 border-b"
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
    </div>
  );
}
