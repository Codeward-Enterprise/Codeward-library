import { CodeBlock } from "@/components/docs/code-block";
import { Preview } from "@/components/docs/preview";
import { PropTable } from "@/components/docs/prop-table";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Button — Codeward UI" };

const props = [
  {
    name: "variant",
    type: '"primary" | "cta" | "secondary" | "outline" | "ghost" | "link" | "destructive"',
    default: '"primary"',
    description: "Estilo visual do botão. Use cta apenas uma vez por tela — na ação principal.",
  },
  {
    name: "size",
    type: '"xs" | "sm" | "md" | "lg" | "xl" | "icon" | "icon-sm" | "icon-lg"',
    default: '"md"',
    description: "Tamanho do botão. Variantes icon são para botões somente com ícone.",
  },
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description: "Renderiza como elemento filho (ex: <a> ou Link do Next.js) mantendo os estilos.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Desabilita o botão. Remove eventos e aplica opacidade.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Classes CSS adicionais. Mescladas com as classes padrão via cn().",
  },
];

export default function ButtonPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      {/* Header */}
      <div className="space-y-3">
        <p
          className="text-sm"
          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
        >
          npx @codeforward/cli add button
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Button
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Botão de ação com 7 variantes visuais e 8 tamanhos. Suporta ícones, estados de
          desabilitado e renderização como link via{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>asChild</code>.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      {/* Instalação */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Instalação
        </h2>
        <CodeBlock language="bash" code="npx @codeforward/cli add button" />
        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          Nenhuma dependência adicional necessária. O componente usa apenas{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>@codeforward/utils</code> (já instalado)
          e React.
        </p>
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      {/* Uso básico */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Uso básico
        </h2>
        <Preview>
          <Button variant="primary">Salvar alterações</Button>
          <Button variant="secondary">Cancelar</Button>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`import { Button } from "@/components/ui/button";

<Button variant="primary">Salvar alterações</Button>
<Button variant="secondary">Cancelar</Button>`}
        />
      </section>

      {/* Variantes */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Variantes
        </h2>
        <p style={{ color: "var(--muted-foreground)" }}>
          Use <code style={{ fontFamily: "var(--font-mono)" }}>variant="cta"</code> (Mint) apenas
          uma vez por tela — na ação mais importante da interface.
        </p>
        <Preview>
          <Button variant="primary">Primary</Button>
          <Button variant="cta">CTA</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`<Button variant="primary">Primary</Button>
<Button variant="cta">CTA</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>`}
        />
      </section>

      {/* Tamanhos */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Tamanhos
        </h2>
        <Preview>
          <Button size="xs">XSmall</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">XLarge</Button>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`<Button size="xs">XSmall</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">XLarge</Button>`}
        />
      </section>

      {/* Com ícone */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Com ícone
        </h2>
        <Preview>
          <Button variant="primary">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M8 2v12M2 8h12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Novo projeto
          </Button>
          <Button size="icon" variant="outline" aria-label="Adicionar">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M8 2v12M2 8h12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Button>
          <Button size="icon-sm" variant="ghost" aria-label="Adicionar">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M7 1v12M1 7h12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Button>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`{/* Botão com ícone à esquerda */}
<Button variant="primary">
  <PlusIcon />
  Novo projeto
</Button>

{/* Botão somente ícone */}
<Button size="icon" variant="outline">
  <PlusIcon />
</Button>

{/* Tamanhos de ícone */}
<Button size="icon-sm" variant="ghost"><PlusIcon /></Button>
<Button size="icon" variant="ghost"><PlusIcon /></Button>
<Button size="icon-lg" variant="ghost"><PlusIcon /></Button>`}
        />
      </section>

      {/* Estado desabilitado */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Estado desabilitado
        </h2>
        <Preview>
          <Button disabled>Desabilitado</Button>
          <Button variant="cta" disabled>
            Indisponível
          </Button>
          <Button variant="outline" disabled>
            Bloqueado
          </Button>
        </Preview>
        <CodeBlock language="tsx" code="<Button disabled>Desabilitado</Button>" />
      </section>

      {/* Em fundo escuro */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Em fundo Navy
        </h2>
        <p style={{ color: "var(--muted-foreground)" }}>
          Em fundos escuros (Navy), use{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>variant="cta"</code> como ação principal
          e adapte os demais com classes customizadas.
        </p>
        <Preview dark>
          <Button variant="cta">Iniciar projeto</Button>
          <Button
            variant="outline"
            className="!border-[rgba(255,255,255,0.2)] !text-white hover:!bg-white/10"
          >
            Saber mais
          </Button>
          <Button variant="ghost" className="!text-[var(--color-navy-300)]">
            Cancelar
          </Button>
        </Preview>
      </section>

      {/* asChild */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          asChild — renderizar como link
        </h2>
        <p style={{ color: "var(--muted-foreground)" }}>
          Use <code style={{ fontFamily: "var(--font-mono)" }}>asChild</code> para renderizar o
          botão como outro elemento HTML (ex:{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>&lt;a&gt;</code> ou{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>Link</code> do Next.js) mantendo todos os
          estilos e variantes.
        </p>
        <CodeBlock
          language="tsx"
          code={`import Link from "next/link";
import { Button } from "@/components/ui/button";

{/* Renderiza como <a> com estilos de Button */}
<Button asChild variant="primary">
  <Link href="/dashboard">Acessar dashboard</Link>
</Button>

{/* Variante link — parece um link de texto */}
<Button asChild variant="link">
  <Link href="/termos">Ver termos de uso</Link>
</Button>`}
        />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      {/* Props */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Props
        </h2>
        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          Além das props listadas, aceita todos os atributos de{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>HTMLButtonElement</code> (
          <code style={{ fontFamily: "var(--font-mono)" }}>onClick</code>,{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>type</code>,{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>form</code>, etc.).
        </p>
        <PropTable props={props} />
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
            ["Enter / Space", "Ativa o botão"],
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
          O componente renderiza um{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>&lt;button&gt;</code> nativo por padrão,
          com suporte completo a foco, teclado e leitores de tela. O estado{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>disabled</code> usa o atributo HTML
          nativo, que remove automaticamente o elemento da ordem de tabulação.
        </p>
      </section>
    </div>
  );
}
