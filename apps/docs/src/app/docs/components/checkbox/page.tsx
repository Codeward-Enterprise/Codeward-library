import type { Metadata } from "next";
import { CodeBlock } from "@/components/docs/code-block";
import { PropTable } from "@/components/docs/prop-table";
import { Checkbox } from "@/components/ui/checkbox";

export const metadata: Metadata = { title: "Checkbox" };

const props = [
  { name: "label", type: "string", description: "Label associada ao checkbox" },
  { name: "description", type: "string", description: "Texto auxiliar exibido abaixo da label" },
  { name: "id", type: "string", description: "ID do elemento — gerado automaticamente se omitido" },
  { name: "checked", type: "boolean", description: "Estado controlado" },
  { name: "defaultChecked", type: "boolean", description: "Estado inicial (não controlado)" },
  { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Callback ao mudar o estado" },
  { name: "disabled", type: "boolean", default: "false", description: "Desabilita o checkbox" },
];

export default function CheckboxPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-2">
        <p className="text-sm" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}>
          codeward add checkbox
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Checkbox
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Checkbox acessível com suporte a label e descrição integrados. Construído sobre{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>@radix-ui/react-checkbox</code>.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>Instalação</h2>
        <CodeBlock language="bash" code="codeward add checkbox" />
        <CodeBlock language="bash" code="npm install @radix-ui/react-checkbox" />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>Exemplos</h2>
        <div className="rounded-xl border p-6 space-y-4" style={{ backgroundColor: "var(--background)", borderColor: "var(--border)" }}>
          <Checkbox label="Aceito os termos de uso" />
          <Checkbox label="Receber notificações" description="Você receberá e-mails sobre atualizações da conta." />
          <Checkbox label="Opção desabilitada" disabled />
          <Checkbox label="Opção marcada e desabilitada" defaultChecked disabled />
        </div>
        <CodeBlock
          language="tsx"
          code={`<Checkbox label="Aceito os termos de uso" />

<Checkbox
  label="Receber notificações"
  description="Você receberá e-mails sobre atualizações da conta."
/>

<Checkbox label="Opção desabilitada" disabled />

{/* Controlado */}
<Checkbox
  label="Notificações"
  checked={enabled}
  onCheckedChange={(checked) => setEnabled(checked)}
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
