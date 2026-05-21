import { CodeBlock } from "@/components/docs/code-block";
import { Preview } from "@/components/docs/preview";
import { PropTable } from "@/components/docs/prop-table";
import { ToastDemo } from "@/components/docs/toast-demo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Toast — Codeward UI" };

const toastProps = [
  {
    name: "variant",
    type: '"default" | "success" | "warning" | "destructive"',
    default: '"default"',
    description: "Estilo visual — cada variante exibe um ícone automático.",
  },
  {
    name: "open",
    type: "boolean",
    default: "true",
    description: "Controla a visibilidade do toast.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    default: "—",
    description: "Callback chamado ao fechar o toast.",
  },
  {
    name: "duration",
    type: "number",
    default: "5000",
    description: "Tempo em ms antes do fechamento automático. Use 0 para desabilitar.",
  },
];

export default function ToastPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-3">
        <p
          className="text-sm"
          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
        >
          npx @codeforward/cli add toast
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Toast
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Notificação não-bloqueante com fechamento automático. 4 variantes com ícone automático.
          Renderizado via <code style={{ fontFamily: "var(--font-mono)" }}>createPortal</code> no{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>document.body</code> — sempre acima de
          outros elementos, incluindo modais.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Instalação
        </h2>
        <CodeBlock language="bash" code="npx @codeforward/cli add toast" />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Demo interativo
        </h2>
        <p style={{ color: "var(--muted-foreground)" }}>
          Clique para ver cada variante. O toast fecha automaticamente após 3 segundos.
        </p>
        <Preview>
          <ToastDemo />
        </Preview>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Uso básico
        </h2>
        <CodeBlock
          language="tsx"
          code={`"use client";

import { useState } from "react";
import { Toast, ToastTitle, ToastDescription } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";

export function SaveButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Salvar</Button>

      <Toast open={open} onOpenChange={setOpen} variant="success">
        <ToastTitle>Salvo com sucesso</ToastTitle>
        <ToastDescription>As alterações foram aplicadas.</ToastDescription>
      </Toast>
    </>
  );
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Variantes
        </h2>
        <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "var(--border)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "var(--muted)" }}>
                {["Variante", "Ícone", "Uso recomendado"].map((h) => (
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
                ["default", "Info (Mint)", "Informações gerais e notificações neutras"],
                [
                  "success",
                  "Checkmark (verde)",
                  "Ação concluída com sucesso — salvo, enviado, etc.",
                ],
                [
                  "warning",
                  "Triângulo (laranja)",
                  "Atenção necessária — ação irreversível, prazo próximo",
                ],
                ["destructive", "X (vermelho)", "Erro ou falha — operação não concluída"],
              ].map(([variant, icon, use], i) => (
                <tr
                  key={variant as string}
                  style={{ backgroundColor: i % 2 === 0 ? "var(--background)" : "var(--muted)" }}
                >
                  <td className="px-4 py-3 border-b" style={{ borderColor: "var(--border)" }}>
                    <code style={{ fontFamily: "var(--font-mono)", color: "var(--primary)" }}>
                      {variant}
                    </code>
                  </td>
                  <td
                    className="px-4 py-3 border-b"
                    style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
                  >
                    {icon}
                  </td>
                  <td
                    className="px-4 py-3 border-b"
                    style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
                  >
                    {use}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CodeBlock
          language="tsx"
          code={`<Toast variant="default" open={open} onOpenChange={setOpen}>
  <ToastTitle>Novo comentário</ToastTitle>
  <ToastDescription>Alice comentou no seu PR.</ToastDescription>
</Toast>

<Toast variant="success" open={open} onOpenChange={setOpen}>
  <ToastTitle>Deploy concluído</ToastTitle>
  <ToastDescription>v2.4.1 em produção.</ToastDescription>
</Toast>

<Toast variant="warning" open={open} onOpenChange={setOpen}>
  <ToastTitle>Armazenamento quase cheio</ToastTitle>
  <ToastDescription>Você usou 90% do espaço disponível.</ToastDescription>
</Toast>

<Toast variant="destructive" open={open} onOpenChange={setOpen}>
  <ToastTitle>Falha no pagamento</ToastTitle>
  <ToastDescription>Verifique os dados do cartão.</ToastDescription>
</Toast>`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Com botão de ação
        </h2>
        <CodeBlock
          language="tsx"
          code={`import { Toast, ToastTitle, ToastDescription, ToastAction } from "@/components/ui/toast";

<Toast variant="default" open={open} onOpenChange={setOpen}>
  <ToastTitle>Arquivo excluído</ToastTitle>
  <ToastDescription>relatorio-q2.pdf foi removido.</ToastDescription>
  <ToastAction onClick={handleUndo}>Desfazer</ToastAction>
</Toast>`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Duração personalizada
        </h2>
        <CodeBlock
          language="tsx"
          code={`{/* Fecha em 8 segundos */}
<Toast open={open} onOpenChange={setOpen} duration={8000}>
  ...
</Toast>

{/* Não fecha automaticamente */}
<Toast open={open} onOpenChange={setOpen} duration={0}>
  ...
</Toast>`}
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
                ["Toast", "Root — gerencia visibilidade, timer de auto-fechamento e portal."],
                ["ToastTitle", "Título em negrito — text-sm font-semibold."],
                ["ToastDescription", "Descrição auxiliar — text-xs, opacity-80."],
                ["ToastAction", "Botão de ação dentro do toast — bordado, estilo ghost."],
                ["ToastClose", "Botão X de fechar — incluído automaticamente no Toast root."],
                ["ToastProvider", "No-op mantido para compatibilidade de API."],
                [
                  "ToastViewport",
                  "Container de posicionamento alternativo — não necessário com portal.",
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
          Props — Toast
        </h2>
        <PropTable props={toastProps} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Acessibilidade
        </h2>
        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          O toast usa <code style={{ fontFamily: "var(--font-mono)" }}>role="alert"</code>,{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>aria-live="assertive"</code> e{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>aria-atomic="true"</code> — o conteúdo é
          anunciado imediatamente por leitores de tela quando aparece. Use{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>duration={0}</code> para mensagens que
          requerem ação do usuário, para que não desapareçam antes de serem lidas.
        </p>
      </section>
    </div>
  );
}
