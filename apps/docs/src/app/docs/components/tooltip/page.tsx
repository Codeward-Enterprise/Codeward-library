import { CodeBlock } from "@/components/docs/code-block";
import { Preview } from "@/components/docs/preview";
import { PropTable } from "@/components/docs/prop-table";
import { Button } from "@/components/ui/button";
import { SimpleTooltip } from "@/components/ui/tooltip";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Tooltip — Codeward UI" };

const simpleTooltipProps = [
  {
    name: "content",
    type: "ReactNode",
    default: "—",
    description: "Conteúdo exibido no tooltip.",
    required: true,
  },
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description: "Elemento que dispara o tooltip.",
    required: true,
  },
  {
    name: "side",
    type: '"top" | "bottom" | "left" | "right"',
    default: '"top"',
    description: "Lado em que o tooltip aparece.",
  },
  {
    name: "sideOffset",
    type: "number",
    default: "6",
    description: "Distância em pixels entre o trigger e o tooltip.",
  },
  {
    name: "delayDuration",
    type: "number",
    default: "200",
    description: "Delay em ms antes de mostrar o tooltip.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Classes CSS adicionais para o balão do tooltip.",
  },
];

export default function TooltipPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-3">
        <p
          className="text-sm"
          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
        >
          npx @codeforward/cli add tooltip
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Tooltip
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Label flutuante exibida ao passar o mouse ou focar no elemento. Renderizado via{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>createPortal</code> para evitar problemas
          de overflow e z-index. Dois modos de uso:{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>SimpleTooltip</code> (recomendado) e a
          API composta com Tooltip + TooltipTrigger + TooltipContent.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Instalação
        </h2>
        <CodeBlock language="bash" code="npx @codeforward/cli add tooltip" />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          SimpleTooltip (recomendado)
        </h2>
        <p style={{ color: "var(--muted-foreground)" }}>
          Use <code style={{ fontFamily: "var(--font-mono)" }}>SimpleTooltip</code> para o caso de
          uso mais comum — hover e foco gerenciados automaticamente, com portal e posicionamento
          embutidos.
        </p>
        <Preview>
          <SimpleTooltip content="Salvar documento">
            <Button variant="outline">Hover aqui</Button>
          </SimpleTooltip>
          <SimpleTooltip content="Excluir permanentemente" side="bottom">
            <Button variant="destructive">Bottom</Button>
          </SimpleTooltip>
          <SimpleTooltip content="Editar" side="right">
            <Button variant="ghost">Right</Button>
          </SimpleTooltip>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`import { SimpleTooltip } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

{/* Tooltip simples — acima (padrão) */}
<SimpleTooltip content="Salvar documento">
  <Button variant="ghost" size="icon">
    <SaveIcon />
  </Button>
</SimpleTooltip>

{/* Posições */}
<SimpleTooltip content="Excluir" side="bottom">
  <Button variant="destructive">Excluir</Button>
</SimpleTooltip>

<SimpleTooltip content="Editar" side="right">
  <Button variant="outline">Editar</Button>
</SimpleTooltip>`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Posições disponíveis
        </h2>
        <Preview>
          <SimpleTooltip content="Acima" side="top">
            <Button variant="outline" size="sm">
              top
            </Button>
          </SimpleTooltip>
          <SimpleTooltip content="Abaixo" side="bottom">
            <Button variant="outline" size="sm">
              bottom
            </Button>
          </SimpleTooltip>
          <SimpleTooltip content="Esquerda" side="left">
            <Button variant="outline" size="sm">
              left
            </Button>
          </SimpleTooltip>
          <SimpleTooltip content="Direita" side="right">
            <Button variant="outline" size="sm">
              right
            </Button>
          </SimpleTooltip>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`<SimpleTooltip content="Acima" side="top">...</SimpleTooltip>
<SimpleTooltip content="Abaixo" side="bottom">...</SimpleTooltip>
<SimpleTooltip content="Esquerda" side="left">...</SimpleTooltip>
<SimpleTooltip content="Direita" side="right">...</SimpleTooltip>`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Delay personalizado
        </h2>
        <CodeBlock
          language="tsx"
          code={`{/* Aparece sem delay */}
<SimpleTooltip content="Ação rápida" delayDuration={0}>
  <Button>Imediato</Button>
</SimpleTooltip>

{/* Delay maior para evitar disparos acidentais */}
<SimpleTooltip content="Informação" delayDuration={500}>
  <Button>Devagar</Button>
</SimpleTooltip>`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          API composta (avançado)
        </h2>
        <p style={{ color: "var(--muted-foreground)" }}>
          Use a API composta quando precisar de controle total sobre o estado{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>open</code>.
        </p>
        <CodeBlock
          language="tsx"
          code={`"use client";

import { useState } from "react";
import {
  Tooltip, TooltipTrigger, TooltipContent,
} from "@/components/ui/tooltip";

export function ControlledTooltip() {
  const [open, setOpen] = useState(false);

  return (
    <Tooltip open={open} onOpenChange={setOpen}>
      <TooltipTrigger asChild>
        <Button
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          Hover
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        Tooltip controlado externamente
      </TooltipContent>
    </Tooltip>
  );
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Casos de uso comuns
        </h2>
        <CodeBlock
          language="tsx"
          code={`{/* Botão icon-only — acessibilidade obrigatória */}
<SimpleTooltip content="Fechar painel">
  <Button variant="ghost" size="icon" aria-label="Fechar painel">
    <XIcon />
  </Button>
</SimpleTooltip>

{/* Texto truncado com tooltip de conteúdo completo */}
<SimpleTooltip content="Nome completo do arquivo: relatorio-anual-2025-q4-final.pdf">
  <span className="truncate max-w-[120px] cursor-default">
    relatorio-anual-2025-q4-final.pdf
  </span>
</SimpleTooltip>

{/* Atalho de teclado */}
<SimpleTooltip content={<span>Salvar <kbd className="opacity-60">⌘S</kbd></span>}>
  <Button>Salvar</Button>
</SimpleTooltip>`}
        />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Props — SimpleTooltip
        </h2>
        <PropTable props={simpleTooltipProps} />
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
            ["Hover no trigger", "Abre o tooltip após delayDuration"],
            ["Focus no trigger (Tab)", "Abre o tooltip imediatamente"],
            ["Blur / Mouse leave", "Fecha o tooltip"],
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
          O tooltip usa <code style={{ fontFamily: "var(--font-mono)" }}>role="tooltip"</code>. O
          trigger recebe <code style={{ fontFamily: "var(--font-mono)" }}>aria-describedby</code>{" "}
          apontando para o tooltip quando visível. Para botões icon-only, adicione também{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>aria-label</code> ao trigger.
        </p>
      </section>
    </div>
  );
}
