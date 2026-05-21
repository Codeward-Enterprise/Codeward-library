import { CodeBlock } from "@/components/docs/code-block";
import { Preview } from "@/components/docs/preview";
import { PropTable } from "@/components/docs/prop-table";
import { Checkbox } from "@/components/ui/checkbox";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Checkbox — Codeward UI" };

const checkboxProps = [
  {
    name: "label",
    type: "string",
    default: "—",
    description: "Label exibida ao lado do checkbox. Clicar na label também alterna o estado.",
  },
  {
    name: "description",
    type: "string",
    default: "—",
    description: "Texto auxiliar exibido abaixo da label.",
  },
  {
    name: "checked",
    type: "boolean",
    default: "—",
    description: "Estado controlado. Use com onCheckedChange.",
  },
  {
    name: "defaultChecked",
    type: "boolean",
    default: "false",
    description: "Estado inicial no modo não-controlado.",
  },
  {
    name: "onCheckedChange",
    type: "(checked: boolean) => void",
    default: "—",
    description: "Callback chamado ao alternar o estado.",
  },
  { name: "disabled", type: "boolean", default: "false", description: "Desabilita o checkbox." },
  {
    name: "id",
    type: "string",
    default: "—",
    description: "ID do elemento — gerado automaticamente se omitido.",
  },
];

export default function CheckboxPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-3">
        <p
          className="text-sm"
          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
        >
          npx @codeforward/cli add checkbox
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Checkbox
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Checkbox com label e descrição integrados. Suporta modo controlado e não-controlado.
          Totalmente acessível — construído com{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>role="checkbox"</code> e{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>aria-checked</code>.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Instalação
        </h2>
        <CodeBlock language="bash" code="npx @codeforward/cli add checkbox" />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Uso básico
        </h2>
        <Preview>
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Checkbox label="Aceito os termos de uso" />
            <Checkbox
              label="Receber notificações por e-mail"
              description="Você receberá atualizações sobre sua conta e novidades."
            />
            <Checkbox label="Opção marcada por padrão" defaultChecked />
          </div>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`import { Checkbox } from "@/components/ui/checkbox";

<Checkbox label="Aceito os termos de uso" />

<Checkbox
  label="Receber notificações por e-mail"
  description="Você receberá atualizações sobre sua conta e novidades."
/>

<Checkbox label="Opção marcada por padrão" defaultChecked />`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Estado desabilitado
        </h2>
        <Preview>
          <div className="flex flex-col gap-4">
            <Checkbox label="Opção desabilitada" disabled />
            <Checkbox label="Marcado e desabilitado" defaultChecked disabled />
          </div>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`<Checkbox label="Opção desabilitada" disabled />
<Checkbox label="Marcado e desabilitado" defaultChecked disabled />`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Modo controlado
        </h2>
        <CodeBlock
          language="tsx"
          code={`"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export function NewsletterForm() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div>
      <Checkbox
        label="Aceito receber comunicações de marketing"
        checked={agreed}
        onCheckedChange={setAgreed}
      />
      <button disabled={!agreed}>Inscrever-se</button>
    </div>
  );
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Em um formulário
        </h2>
        <CodeBlock
          language="tsx"
          code={`{/* Múltiplos checkboxes — preferências */}
<div className="space-y-3">
  <p className="text-sm font-medium">Notificações</p>
  <Checkbox
    label="Atualizações do produto"
    description="Novidades, melhorias e lançamentos."
  />
  <Checkbox
    label="Dicas e tutoriais"
    description="Como usar melhor a plataforma."
  />
  <Checkbox
    label="Relatórios semanais"
    description="Resumo de atividades toda segunda-feira."
  />
</div>`}
        />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Props
        </h2>
        <PropTable props={checkboxProps} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Acessibilidade
        </h2>
        <div
          className="rounded-xl border p-4 space-y-3 text-sm"
          style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
        >
          {[
            ["Space", "Alterna o estado do checkbox em foco"],
            ["Tab", "Move o foco para o próximo elemento interativo"],
            ["Shift + Tab", "Move o foco para o elemento anterior"],
          ].map(([key, action]) => (
            <div key={key} className="flex items-center gap-4">
              <code
                className="px-2 py-0.5 rounded text-xs shrink-0"
                style={{
                  backgroundColor: "var(--muted)",
                  color: "var(--foreground)",
                  fontFamily: "var(--font-mono)",
                  border: "1px solid var(--border)",
                }}
              >
                {key}
              </code>
              <span>{action}</span>
            </div>
          ))}
        </div>
        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          O componente usa <code style={{ fontFamily: "var(--font-mono)" }}>role="checkbox"</code> e{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>aria-checked</code>. A label é associada
          ao checkbox via <code style={{ fontFamily: "var(--font-mono)" }}>htmlFor</code> com ID
          gerado automaticamente.
        </p>
      </section>
    </div>
  );
}
