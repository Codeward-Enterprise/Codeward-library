import { CodeBlock } from "@/components/docs/code-block";
import { Preview } from "@/components/docs/preview";
import { PropTable } from "@/components/docs/prop-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Tabs — Codeward UI" };

const tabsProps = [
  {
    name: "defaultValue",
    type: "string",
    default: '""',
    description: "Aba ativa por padrão no modo não-controlado.",
  },
  { name: "value", type: "string", default: "—", description: "Aba ativa no modo controlado." },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    default: "—",
    description: "Callback chamado quando a aba ativa muda.",
  },
];

const triggerProps = [
  {
    name: "value",
    type: "string",
    default: "—",
    description: "Identificador da aba — deve corresponder ao value de TabsContent.",
    required: true,
  },
  { name: "disabled", type: "boolean", default: "false", description: "Desabilita a aba." },
];

const contentProps = [
  {
    name: "value",
    type: "string",
    default: "—",
    description: "Identificador do painel — deve corresponder ao value de TabsTrigger.",
    required: true,
  },
];

export default function TabsPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-3">
        <p
          className="text-sm"
          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
        >
          npx @codeforward/cli add tabs
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Tabs
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Navegação por abas para conteúdo agrupado. Suporta modo controlado, aba desabilitada e
          navegação completa por teclado — construído com React Context e ARIA tablist/tab/tabpanel
          pattern.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Instalação
        </h2>
        <CodeBlock language="bash" code="npx @codeforward/cli add tabs" />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Uso básico
        </h2>
        <Preview>
          <div className="w-full">
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Visão geral</TabsTrigger>
                <TabsTrigger value="metrics">Métricas</TabsTrigger>
                <TabsTrigger value="settings">Configurações</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                  Sprint 14 em andamento. 8 de 12 tarefas concluídas. Deploy previsto para sexta.
                </p>
              </TabsContent>
              <TabsContent value="metrics">
                <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                  Velocity média: 32 story points/sprint. Lead time: 2.4 dias.
                </p>
              </TabsContent>
              <TabsContent value="settings">
                <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                  Configurações do projeto — notificações e integrações.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Visão geral</TabsTrigger>
    <TabsTrigger value="metrics">Métricas</TabsTrigger>
    <TabsTrigger value="settings">Configurações</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    Conteúdo da aba Visão geral
  </TabsContent>
  <TabsContent value="metrics">
    Conteúdo da aba Métricas
  </TabsContent>
  <TabsContent value="settings">
    Conteúdo da aba Configurações
  </TabsContent>
</Tabs>`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Aba desabilitada
        </h2>
        <Preview>
          <div className="w-full">
            <Tabs defaultValue="active">
              <TabsList>
                <TabsTrigger value="active">Disponível</TabsTrigger>
                <TabsTrigger value="locked" disabled>
                  Em breve
                </TabsTrigger>
                <TabsTrigger value="other">Outra</TabsTrigger>
              </TabsList>
              <TabsContent value="active">
                <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                  Esta aba está disponível.
                </p>
              </TabsContent>
              <TabsContent value="other">
                <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                  Outra aba disponível.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`<Tabs defaultValue="active">
  <TabsList>
    <TabsTrigger value="active">Disponível</TabsTrigger>
    <TabsTrigger value="locked" disabled>Em breve</TabsTrigger>
    <TabsTrigger value="other">Outra</TabsTrigger>
  </TabsList>
  ...
</Tabs>`}
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function ControlledTabs() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Visão geral</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">...</TabsContent>
        <TabsContent value="analytics">...</TabsContent>
      </Tabs>
      <p>Aba ativa: {activeTab}</p>
    </div>
  );
}`}
        />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

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
                ["Tabs", "Root — gerencia o estado da aba ativa via Context."],
                ["TabsList", 'Container das abas — role="tablist", fundo muted com borda.'],
                [
                  "TabsTrigger",
                  'Botão de aba — role="tab", aria-selected, data-state. Navegação por teclado com ←/→.',
                ],
                [
                  "TabsContent",
                  'Painel de conteúdo — role="tabpanel", só renderiza quando a aba está ativa.',
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
          Props — Tabs
        </h2>
        <PropTable props={tabsProps} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Props — TabsTrigger
        </h2>
        <PropTable props={triggerProps} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Props — TabsContent
        </h2>
        <PropTable props={contentProps} />
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
            ["← / →", "Navega entre abas (foco + ativação automática)"],
            ["↑ / ↓", "Navega entre abas (alternativa)"],
            ["Home", "Move o foco para a primeira aba"],
            ["End", "Move o foco para a última aba"],
            ["Tab", "Move o foco do tablist para o tabpanel ativo"],
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
