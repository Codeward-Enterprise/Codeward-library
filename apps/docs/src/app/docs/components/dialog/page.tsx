import { CodeBlock } from "@/components/docs/code-block";
import { Preview } from "@/components/docs/preview";
import { PropTable } from "@/components/docs/prop-table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Dialog — Codeward UI" };

const rootProps = [
  {
    name: "open",
    type: "boolean",
    default: "—",
    description: "Controla o estado aberto/fechado (modo controlado).",
  },
  {
    name: "defaultOpen",
    type: "boolean",
    default: "false",
    description: "Estado inicial no modo não-controlado.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    default: "—",
    description: "Callback chamado ao abrir ou fechar.",
  },
];

export default function DialogPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      {/* Header */}
      <div className="space-y-3">
        <p
          className="text-sm"
          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
        >
          npx @codeforward/cli add dialog
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Dialog
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Modal para interações focadas. Overlay com blur, animação de entrada, botão de fechar
          automático, bloqueio de scroll e fechamento por Escape — construído em React puro com{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>createPortal</code>.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      {/* Instalação */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Instalação
        </h2>
        <CodeBlock language="bash" code="npx @codeforward/cli add dialog" />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      {/* Uso básico */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Uso básico
        </h2>
        <Preview>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Abrir modal</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Título do modal</DialogTitle>
                <DialogDescription>
                  Descrição breve do que o usuário precisa fazer ou confirmar.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="ghost">Cancelar</Button>
                </DialogClose>
                <Button variant="primary">Confirmar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`import {
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogTitle, DialogDescription,
  DialogFooter, DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Abrir modal</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Título do modal</DialogTitle>
      <DialogDescription>
        Descrição breve do que o usuário precisa fazer ou confirmar.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="ghost">Cancelar</Button>
      </DialogClose>
      <Button variant="primary">Confirmar</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        />
      </section>

      {/* Confirmação destrutiva */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Confirmação destrutiva
        </h2>
        <Preview>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive">Excluir projeto</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Excluir projeto?</DialogTitle>
                <DialogDescription>
                  Esta ação não pode ser desfeita. Todos os dados do projeto serão removidos
                  permanentemente dos nossos servidores.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="ghost">Cancelar</Button>
                </DialogClose>
                <Button variant="destructive">Sim, excluir</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">Excluir projeto</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Excluir projeto?</DialogTitle>
      <DialogDescription>
        Esta ação não pode ser desfeita. Todos os dados do projeto
        serão removidos permanentemente.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="ghost">Cancelar</Button>
      </DialogClose>
      <Button variant="destructive">Sim, excluir</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        />
      </section>

      {/* Formulário */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Com formulário
        </h2>
        <CodeBlock
          language="tsx"
          code={`"use client";

import { useState } from "react";
import {
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function RenameDialog() {
  const [name, setName] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Renomear</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Renomear projeto</DialogTitle>
          <DialogDescription>
            Digite o novo nome do projeto abaixo.
          </DialogDescription>
        </DialogHeader>

        <div className="py-2">
          <Input
            placeholder="Nome do projeto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancelar</Button>
          </DialogClose>
          <Button
            variant="primary"
            disabled={!name.trim()}
            onClick={() => console.log("renamed to:", name)}
          >
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`}
        />
      </section>

      {/* Modo controlado */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Modo controlado
        </h2>
        <p style={{ color: "var(--muted-foreground)" }}>
          Controle o estado do dialog programaticamente com{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>open</code> e{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>onOpenChange</code>:
        </p>
        <CodeBlock
          language="tsx"
          code={`"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function ControlledDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Abrir</button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog controlado</DialogTitle>
          </DialogHeader>
          <p>Estado gerenciado externamente.</p>
        </DialogContent>
      </Dialog>
    </>
  );
}`}
        />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      {/* Sub-componentes */}
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
                ["Dialog", "Root — gerencia o estado aberto/fechado via Context."],
                ["DialogTrigger", "Elemento que abre o dialog. Use asChild para passar um Button."],
                [
                  "DialogContent",
                  "Container do modal — renderizado via createPortal no body. Inclui overlay, animação e botão × automático.",
                ],
                [
                  "DialogHeader",
                  "Área de título e descrição — adiciona padding e espaçamento corretos.",
                ],
                [
                  "DialogTitle",
                  "Título do modal. Obrigatório para acessibilidade (aria-labelledby).",
                ],
                ["DialogDescription", "Descrição opcional do modal."],
                ["DialogFooter", "Área de ações — alinha botões à direita com gap."],
                ["DialogClose", "Fecha o dialog. Use asChild para passar um Button."],
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

      {/* Props */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Props — Dialog (root)
        </h2>
        <PropTable props={rootProps} />
      </section>

      {/* Acessibilidade */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Acessibilidade
        </h2>
        <div
          className="rounded-xl border p-4 space-y-3 text-sm"
          style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
        >
          {[
            ["Escape", "Fecha o dialog"],
            ["Tab / Shift+Tab", "Navega entre elementos dentro do modal"],
            ["Enter / Space", "Ativa botões dentro do modal"],
            ["Click no overlay", "Fecha o dialog"],
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
          O modal usa <code style={{ fontFamily: "var(--font-mono)" }}>role="dialog"</code> e{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>aria-modal="true"</code>. O scroll do
          body é bloqueado automaticamente quando aberto. O foco é retornado ao elemento trigger ao
          fechar.
        </p>
      </section>
    </div>
  );
}
