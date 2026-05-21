import { CodeBlock } from "@/components/docs/code-block";
import { Preview } from "@/components/docs/preview";
import { PropTable } from "@/components/docs/prop-table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Accordion — Codeward UI" };

const accordionProps = [
  {
    name: "type",
    type: '"single" | "multiple"',
    default: '"single"',
    description: "single: um item aberto por vez. multiple: vários abertos simultaneamente.",
  },
  {
    name: "collapsible",
    type: "boolean",
    default: "false",
    description: "Permite fechar o item aberto clicando novamente (somente type=single).",
  },
  {
    name: "defaultValue",
    type: "string | string[]",
    default: "—",
    description: "Item(s) aberto(s) por padrão no modo não-controlado.",
  },
  {
    name: "value",
    type: "string | string[]",
    default: "—",
    description: "Item(s) aberto(s) no modo controlado.",
  },
  {
    name: "onValueChange",
    type: "(value: string | string[]) => void",
    default: "—",
    description: "Callback chamado quando o estado muda.",
  },
];

const itemProps = [
  {
    name: "value",
    type: "string",
    default: "—",
    description: "Identificador único do item. Obrigatório.",
    required: true,
  },
];

export default function AccordionPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-3">
        <p
          className="text-sm"
          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
        >
          npx @codeforward/cli add accordion
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Accordion
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Seções colapsáveis com animação de chevron. Suporta modo single e multiple, navegação por
          teclado completa e estado controlado — construído com React Context e ARIA disclosure
          pattern.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Instalação
        </h2>
        <CodeBlock language="bash" code="npx @codeforward/cli add accordion" />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Uso básico
        </h2>
        <Preview>
          <div className="w-full max-w-xl">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Como funciona o modelo de componentes?</AccordionTrigger>
                <AccordionContent>
                  Os componentes são copiados diretamente para o seu projeto via CLI. Você recebe o
                  código-fonte e pode modificar livremente — sem necessidade de fork ou ejeção.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Preciso instalar dependências externas?</AccordionTrigger>
                <AccordionContent>
                  Não. Os componentes usam apenas React e @codeforward/utils. Nenhuma biblioteca
                  externa como Radix UI ou CVA é necessária.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Os componentes funcionam com React 18?</AccordionTrigger>
                <AccordionContent>
                  Sim. Compatíveis com React 18 e 19. Testados com Next.js 15 e App Router.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`import {
  Accordion, AccordionItem,
  AccordionTrigger, AccordionContent,
} from "@/components/ui/accordion";

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Como funciona o modelo de componentes?</AccordionTrigger>
    <AccordionContent>
      Os componentes são copiados diretamente para o seu projeto via CLI.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Preciso instalar dependências externas?</AccordionTrigger>
    <AccordionContent>
      Não. Os componentes usam apenas React e @codeforward/utils.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Múltiplos abertos
        </h2>
        <p style={{ color: "var(--muted-foreground)" }}>
          Use <code style={{ fontFamily: "var(--font-mono)" }}>type="multiple"</code> para permitir
          vários itens abertos ao mesmo tempo.
        </p>
        <Preview>
          <div className="w-full max-w-xl">
            <Accordion type="multiple" defaultValue={["m-1", "m-3"]}>
              <AccordionItem value="m-1">
                <AccordionTrigger>Tokens de design</AccordionTrigger>
                <AccordionContent>
                  Cores, tipografia e espaçamento definidos como variáveis CSS. Distribuídos via
                  @codeforward/tokens.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="m-2">
                <AccordionTrigger>Utilitários</AccordionTrigger>
                <AccordionContent>
                  cn() para merge de classes Tailwind e formatadores brasileiros (CPF, CNPJ,
                  telefone).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="m-3">
                <AccordionTrigger>Hooks</AccordionTrigger>
                <AccordionContent>
                  useDebounce, useLocalStorage, useMediaQuery, useClickOutside e mais.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`{/* Múltiplos itens abertos simultaneamente */}
<Accordion type="multiple" defaultValue={["item-1", "item-3"]}>
  <AccordionItem value="item-1">
    <AccordionTrigger>Tokens de design</AccordionTrigger>
    <AccordionContent>Cores, tipografia e espaçamento...</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Utilitários</AccordionTrigger>
    <AccordionContent>cn() e formatadores...</AccordionContent>
  </AccordionItem>
</Accordion>`}
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
  Accordion, AccordionItem,
  AccordionTrigger, AccordionContent,
} from "@/components/ui/accordion";

export function ControlledAccordion() {
  const [value, setValue] = useState("item-1");

  return (
    <Accordion type="single" collapsible value={value} onValueChange={setValue}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Seção 1</AccordionTrigger>
        <AccordionContent>Conteúdo da seção 1.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Seção 2</AccordionTrigger>
        <AccordionContent>Conteúdo da seção 2.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`}
        />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Props — Accordion
        </h2>
        <PropTable props={accordionProps} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Props — AccordionItem
        </h2>
        <PropTable props={itemProps} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Sub-componentes
        </h2>
        <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "var(--border)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "var(--muted)" }}>
                {["Componente", "Descrição"].map((h) => (
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
                  "Accordion",
                  "Root — gerencia o estado open/closed e tipo (single/multiple) via Context.",
                ],
                ["AccordionItem", "Container de cada item — requer prop value única."],
                [
                  "AccordionTrigger",
                  "Botão de toggle com chevron animado. Renderizado dentro de <h3> para semântica correta.",
                ],
                [
                  "AccordionContent",
                  "Painel de conteúdo — oculto com hidden quando fechado. Acessível via aria-labelledby.",
                ],
              ].map(([comp, desc], i) => (
                <tr
                  key={comp as string}
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
                      {comp}
                    </code>
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

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Acessibilidade
        </h2>
        <div
          className="rounded-xl border p-4 space-y-3 text-sm"
          style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
        >
          {[
            ["Enter / Space", "Abre ou fecha o item em foco"],
            ["↑ / ↓", "Move o foco entre os triggers"],
            ["Home", "Move o foco para o primeiro trigger"],
            ["End", "Move o foco para o último trigger"],
            ["Tab", "Move o foco para o próximo elemento interativo"],
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
          Cada trigger usa <code style={{ fontFamily: "var(--font-mono)" }}>aria-expanded</code> e{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>aria-controls</code>. O painel usa{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>role="region"</code> e{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>aria-labelledby</code> apontando para o
          trigger.
        </p>
      </section>
    </div>
  );
}
