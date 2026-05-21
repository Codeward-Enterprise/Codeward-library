import { CodeBlock } from "@/components/docs/code-block";
import { Preview } from "@/components/docs/preview";
import { PropTable } from "@/components/docs/prop-table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Select — Codeward UI" };

const selectProps = [
  {
    name: "value",
    type: "string",
    default: "—",
    description: "Valor selecionado (modo controlado).",
  },
  {
    name: "defaultValue",
    type: "string",
    default: '""',
    description: "Valor inicial no modo não-controlado.",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    default: "—",
    description: "Callback chamado quando o valor muda.",
  },
  {
    name: "open",
    type: "boolean",
    default: "—",
    description: "Controla se o dropdown está aberto (modo controlado).",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Desabilita o select inteiro.",
  },
];

export default function SelectPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-3">
        <p
          className="text-sm"
          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
        >
          npx @codeforward/cli add select
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Select
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Dropdown de seleção com suporte a grupos, labels, separadores e estados. Totalmente
          acessível por teclado — construído com ARIA combobox/listbox pattern.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Instalação
        </h2>
        <CodeBlock language="bash" code="npx @codeforward/cli add select" />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Uso básico
        </h2>
        <Preview>
          <Select defaultValue="react">
            <SelectTrigger>
              <SelectValue placeholder="Escolha um framework" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="vue">Vue</SelectItem>
              <SelectItem value="svelte">Svelte</SelectItem>
              <SelectItem value="angular">Angular</SelectItem>
            </SelectContent>
          </Select>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`import {
  Select, SelectTrigger, SelectValue,
  SelectContent, SelectItem,
} from "@/components/ui/select";

<Select defaultValue="react">
  <SelectTrigger>
    <SelectValue placeholder="Escolha um framework" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="react">React</SelectItem>
    <SelectItem value="vue">Vue</SelectItem>
    <SelectItem value="svelte">Svelte</SelectItem>
    <SelectItem value="angular">Angular</SelectItem>
  </SelectContent>
</Select>`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Com grupos e separadores
        </h2>
        <Preview>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione um plano" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Planos gratuitos</SelectLabel>
                <SelectItem value="free">Free — 0/mês</SelectItem>
                <SelectItem value="starter">Starter — R$49/mês</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Planos pagos</SelectLabel>
                <SelectItem value="pro">Pro — R$149/mês</SelectItem>
                <SelectItem value="enterprise">Enterprise — sob consulta</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Selecione um plano" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Planos gratuitos</SelectLabel>
      <SelectItem value="free">Free — 0/mês</SelectItem>
      <SelectItem value="starter">Starter — R$49/mês</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Planos pagos</SelectLabel>
      <SelectItem value="pro">Pro — R$149/mês</SelectItem>
      <SelectItem value="enterprise">Enterprise — sob consulta</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Estado desabilitado
        </h2>
        <Preview>
          <Select disabled>
            <SelectTrigger>
              <SelectValue placeholder="Indisponível" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="a">Opção A</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="a">Disponível</SelectItem>
              <SelectItem value="b" disabled>
                Desabilitada
              </SelectItem>
              <SelectItem value="c">Disponível</SelectItem>
            </SelectContent>
          </Select>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`{/* Select inteiro desabilitado */}
<Select disabled>
  <SelectTrigger><SelectValue placeholder="Indisponível" /></SelectTrigger>
  ...
</Select>

{/* Item específico desabilitado */}
<SelectItem value="b" disabled>Opção indisponível</SelectItem>`}
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
import {
  Select, SelectTrigger, SelectValue,
  SelectContent, SelectItem,
} from "@/components/ui/select";

export function ControlledSelect() {
  const [value, setValue] = useState("react");

  return (
    <div>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="vue">Vue</SelectItem>
          <SelectItem value="svelte">Svelte</SelectItem>
        </SelectContent>
      </Select>
      <p>Selecionado: {value}</p>
    </div>
  );
}`}
        />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Props — Select (root)
        </h2>
        <PropTable props={selectProps} />
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
            ["Enter / Space", "Abre o dropdown"],
            ["↑ / ↓", "Navega entre opções"],
            ["Enter", "Seleciona a opção em foco"],
            ["Escape", "Fecha sem selecionar"],
            ["Tab", "Fecha e move o foco"],
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
      </section>
    </div>
  );
}
