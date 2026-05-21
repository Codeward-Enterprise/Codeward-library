import type { Metadata } from "next";
import { CodeBlock } from "@/components/docs/code-block";
import { PropTable } from "@/components/docs/prop-table";
import { Preview } from "@/components/docs/preview";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = { title: "Input" };

const props = [
  { name: "label", type: "string", description: "Label exibida acima do campo" },
  { name: "hint", type: "string", description: "Texto auxiliar exibido abaixo do campo" },
  { name: "error", type: "boolean", default: "false", description: "Ativa o estado de erro (borda vermelha + ícone)" },
  { name: "errorMessage", type: "string", description: "Mensagem de erro exibida abaixo do campo quando error=true" },
  { name: "icon", type: "ReactNode", description: "Ícone exibido à esquerda do campo" },
  { name: "variant", type: '"default" | "dark"', default: '"default"', description: "Variante de tema — use dark em fundos Navy" },
  { name: "disabled", type: "boolean", default: "false", description: "Desabilita o campo" },
];

export default function InputPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-2">
        <p className="text-sm" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}>
          codeward add input
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Input
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Campo de texto com suporte a label, hint, estados de erro e variante escura. O focus
          ring usa Mint 500 (cor de anel da marca).
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>Instalação</h2>
        <CodeBlock language="bash" code="codeward add input" />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>Exemplos</h2>
        <div
          className="rounded-xl border p-6 grid sm:grid-cols-2 gap-5"
          style={{ backgroundColor: "var(--background)", borderColor: "var(--border)" }}
        >
          <Input label="E-mail" placeholder="vitor@codeward.com.br" />
          <Input label="Subdomínio" placeholder="minha-empresa" hint="Aparece na URL. Não pode ser alterado." />
          <Input label="CNPJ" placeholder="00.000.000/0000-00" error errorMessage="CNPJ inválido." />
          <Input label="Plano atual" defaultValue="Pro — R$ 497/mês" disabled hint="Para trocar, acesse Faturamento." />
        </div>
        <CodeBlock
          language="tsx"
          code={`<Input label="E-mail" placeholder="vitor@codeward.com.br" />

<Input
  label="Subdomínio"
  placeholder="minha-empresa"
  hint="Aparece na URL. Não pode ser alterado."
/>

<Input
  label="CNPJ"
  placeholder="00.000.000/0000-00"
  error
  errorMessage="CNPJ inválido."
/>

<Input
  label="Plano atual"
  defaultValue="Pro — R$ 497/mês"
  disabled
  hint="Para trocar, acesse Faturamento."
/>`}
        />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>Props</h2>
        <PropTable props={props} />
      </section>
    </div>
  );
}
