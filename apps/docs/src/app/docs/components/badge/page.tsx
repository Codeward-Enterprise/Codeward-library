import type { Metadata } from "next";
import { CodeBlock } from "@/components/docs/code-block";
import { PropTable } from "@/components/docs/prop-table";
import { Preview } from "@/components/docs/preview";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "Badge" };

const props = [
  { name: "variant", type: '"primary" | "cta" | "secondary" | "outline" | "outline-primary" | "success" | "warning" | "destructive"', default: '"secondary"', description: "Estilo visual do badge" },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Tamanho do badge" },
  { name: "dot", type: "boolean", default: "false", description: "Exibe um indicador circular de status ao lado do texto" },
  { name: "className", type: "string", description: "Classes CSS adicionais" },
  { name: "children", type: "ReactNode", required: true, description: "Conteúdo do badge" },
];

export default function BadgePage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-2">
        <p className="text-sm" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}>
          codeward add badge
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Badge
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Pequena etiqueta para status, categorias e notificações. A prop{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>dot</code> adiciona um indicador
          circular animado ideal para status em tempo real.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>Instalação</h2>
        <CodeBlock language="bash" code="codeward add badge" />
        <CodeBlock language="bash" code="npm install class-variance-authority" />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>Variantes</h2>
        <Preview>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="cta">CTA</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="outline-primary">Outline Primary</Badge>
          <Badge variant="success">Entregue</Badge>
          <Badge variant="warning">Pendente</Badge>
          <Badge variant="destructive">Bloqueado</Badge>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`<Badge variant="primary">Primary</Badge>
<Badge variant="cta">CTA</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="outline-primary">Outline Primary</Badge>
<Badge variant="success">Entregue</Badge>
<Badge variant="warning">Pendente</Badge>
<Badge variant="destructive">Bloqueado</Badge>`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>Com dot (status)</h2>
        <Preview>
          <Badge variant="success" dot>Online</Badge>
          <Badge variant="warning" dot>Processando</Badge>
          <Badge variant="destructive" dot>Erro crítico</Badge>
          <Badge variant="secondary" dot>Offline</Badge>
          <Badge variant="cta" dot>Novo</Badge>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`<Badge variant="success" dot>Online</Badge>
<Badge variant="warning" dot>Processando</Badge>
<Badge variant="destructive" dot>Erro crítico</Badge>
<Badge variant="secondary" dot>Offline</Badge>
<Badge variant="cta" dot>Novo</Badge>`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>Tamanhos</h2>
        <Preview>
          <Badge size="sm" variant="primary">Small</Badge>
          <Badge size="md" variant="primary">Medium</Badge>
          <Badge size="lg" variant="primary">Large</Badge>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`<Badge size="sm" variant="primary">Small</Badge>
<Badge size="md" variant="primary">Medium</Badge>
<Badge size="lg" variant="primary">Large</Badge>`}
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
