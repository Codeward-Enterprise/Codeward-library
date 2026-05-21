import { CodeBlock } from "@/components/docs/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "CLI — codeward add" };

export default function CliPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-2">
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          CLI
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          O <code style={{ fontFamily: "var(--font-mono)" }}>@codeforward/cli</code> copia
          componentes diretamente para o seu projeto. Você recebe o código-fonte e pode modificar
          livremente.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Instalação
        </h2>
        <CodeBlock language="bash" code={"npm install -g @codeforward/cli"} />
        <p style={{ color: "var(--muted-foreground)" }}>
          Ou use sem instalar via <code style={{ fontFamily: "var(--font-mono)" }}>npx</code>:
        </p>
        <CodeBlock language="bash" code={"npx @codeforward/cli add button"} />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-6">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Comandos
        </h2>

        {/* list */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <code
              className="text-sm font-medium px-2 py-1 rounded"
              style={{
                backgroundColor: "var(--code-badge-bg)",
                color: "var(--primary)",
                fontFamily: "var(--font-mono)",
              }}
            >
              codeward list
            </code>
            <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              — aliases: <code style={{ fontFamily: "var(--font-mono)" }}>ls</code>
            </span>
          </div>
          <p style={{ color: "var(--muted-foreground)" }}>
            Lista todos os componentes disponíveis na registry com uma breve descrição.
          </p>
          <CodeBlock language="bash" code={"codeward list"} />
          <div
            className="rounded-xl p-4 border font-mono text-sm"
            style={{
              backgroundColor: "#0D1929",
              borderColor: "var(--color-navy-800)",
              color: "#E2E8F0",
              fontFamily: "var(--font-mono)",
            }}
          >
            <pre style={{ margin: 0 }}>{`Available components:

  accordion   Expandable content sections
  avatar      User avatar with image fallback
  badge       Small status label
  button      Primary action button
  card        Content container
  checkbox    Accessible checkbox with label
  dialog      Modal dialog
  input       Text input with label and validation
  select      Dropdown select
  switch      Toggle switch
  table       Data table
  tabs        Tab navigation
  toast       Non-blocking notification
  tooltip     Floating label on hover`}</pre>
          </div>
        </div>

        <hr style={{ borderColor: "var(--border)" }} />

        {/* add */}
        <div className="space-y-3">
          <code
            className="text-sm font-medium px-2 py-1 rounded"
            style={{
              backgroundColor: "var(--color-navy-50)",
              color: "var(--primary)",
              fontFamily: "var(--font-mono)",
            }}
          >
            codeward add {"<componente...>"}
          </code>
          <p style={{ color: "var(--muted-foreground)" }}>
            Copia um ou mais componentes para o diretório{" "}
            <code style={{ fontFamily: "var(--font-mono)" }}>src/components/ui/</code> do projeto
            atual. Se a pasta não existir, ela é criada automaticamente.
          </p>
          <CodeBlock
            language="bash"
            code={
              "# um componente\ncodeward add button\n\n# múltiplos de uma vez\ncodeward add button badge input card avatar"
            }
          />
          <div
            className="rounded-xl p-4 border font-mono text-sm"
            style={{
              backgroundColor: "#0D1929",
              borderColor: "var(--color-navy-800)",
              color: "#E2E8F0",
              fontFamily: "var(--font-mono)",
            }}
          >
            <pre style={{ margin: 0 }}>{"✓ button.tsx → src/components/ui/button.tsx"}</pre>
          </div>
        </div>
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Como funciona
        </h2>
        <div className="space-y-3" style={{ color: "var(--muted-foreground)" }}>
          <p>
            O CLI lê a{" "}
            <strong style={{ color: "var(--foreground)", fontWeight: 500 }}>registry</strong>{" "}
            embutida no pacote (em{" "}
            <code style={{ fontFamily: "var(--font-mono)" }}>dist/registry/</code>) e copia os
            arquivos <code style={{ fontFamily: "var(--font-mono)" }}>.tsx</code> para o seu
            projeto.
          </p>
          <p>
            Você recebe o código-fonte completo. Isso significa que você pode{" "}
            <strong style={{ color: "var(--foreground)", fontWeight: 500 }}>
              modificar, remover ou estender
            </strong>{" "}
            qualquer componente sem precisar fazer fork da biblioteca.
          </p>
          <p>
            Os pacotes base (
            <code style={{ fontFamily: "var(--font-mono)" }}>@codeforward/tokens</code>,{" "}
            <code style={{ fontFamily: "var(--font-mono)" }}>@codeforward/utils</code>) continuam
            como dependências npm normais — você recebe atualizações via{" "}
            <code style={{ fontFamily: "var(--font-mono)" }}>npm update</code>.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Dependências por componente
        </h2>
        <p style={{ color: "var(--muted-foreground)" }}>
          Todos os componentes dependem apenas de{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>react</code> e{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>@codeforward/utils</code>. Nenhuma
          biblioteca externa como Radix UI ou CVA é necessária.
        </p>
      </section>
    </div>
  );
}
