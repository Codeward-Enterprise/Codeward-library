import { CodeBlock } from "@/components/docs/code-block";
import { PropTable } from "@/components/docs/prop-table";
import { Switch } from "@/components/ui/switch";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Switch" };

const props = [
  { name: "label", type: "string", description: "Label associada ao switch" },
  { name: "description", type: "string", description: "Texto auxiliar exibido abaixo da label" },
  { name: "id", type: "string", description: "ID do elemento — gerado automaticamente se omitido" },
  { name: "checked", type: "boolean", description: "Estado controlado" },
  { name: "defaultChecked", type: "boolean", description: "Estado inicial (não controlado)" },
  {
    name: "onCheckedChange",
    type: "(checked: boolean) => void",
    description: "Callback ao mudar o estado",
  },
  { name: "disabled", type: "boolean", default: "false", description: "Desabilita o switch" },
];

export default function SwitchPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-2">
        <p
          className="text-sm"
          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
        >
          codeward add switch
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Switch
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Toggle para valores booleanos. Usa Mint 500 quando ativado — seguindo a regra dos 10% da
          paleta. Construído sobre{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>@radix-ui/react-switch</code>.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Instalação
        </h2>
        <CodeBlock language="bash" code="codeward add switch" />
        <CodeBlock language="bash" code="npm install @radix-ui/react-switch" />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Exemplos
        </h2>
        <div
          className="rounded-xl border p-6 space-y-4"
          style={{ backgroundColor: "var(--background)", borderColor: "var(--border)" }}
        >
          <Switch label="Notificações por e-mail" />
          <Switch label="Modo escuro" description="Altera o tema da interface." defaultChecked />
          <Switch label="Opção desabilitada" disabled />
        </div>
        <CodeBlock
          language="tsx"
          code={`<Switch label="Notificações por e-mail" />

<Switch
  label="Modo escuro"
  description="Altera o tema da interface."
  defaultChecked
/>

{/* Controlado */}
<Switch
  label="Ativar integração"
  checked={active}
  onCheckedChange={setActive}
/>`}
        />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Props
        </h2>
        <PropTable props={props} />
      </section>
    </div>
  );
}
