import { CodeBlock } from "@/components/docs/code-block";
import { Preview } from "@/components/docs/preview";
import { PropTable } from "@/components/docs/prop-table";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Badge — Codeward UI" };

const badgeProps = [
  {
    name: "variant",
    type: '"primary" | "cta" | "secondary" | "outline" | "outline-primary" | "success" | "warning" | "destructive"',
    default: '"primary"',
    description: "Estilo visual do badge.",
  },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Tamanho do badge." },
  {
    name: "dot",
    type: "boolean",
    default: "false",
    description: "Exibe um ponto colorido antes do texto — ideal para status em tempo real.",
  },
  { name: "className", type: "string", default: "—", description: "Classes CSS adicionais." },
];

export default function BadgePage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-3">
        <p
          className="text-sm"
          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
        >
          npx @codeforward/cli add badge
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Badge
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Etiqueta compacta para status, categorias e contadores. 8 variantes de cor, 3 tamanhos e
          suporte a ponto indicador — componente puramente visual sem estado interno.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Instalação
        </h2>
        <CodeBlock language="bash" code="npx @codeforward/cli add badge" />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Variantes
        </h2>
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
          code={`import { Badge } from "@/components/ui/badge";

<Badge variant="primary">Primary</Badge>
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
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Com ponto indicador
        </h2>
        <p style={{ color: "var(--muted-foreground)" }}>
          Use <code style={{ fontFamily: "var(--font-mono)" }}>dot</code> para adicionar um
          indicador de status antes do texto.
        </p>
        <Preview>
          <Badge variant="success" dot>
            Online
          </Badge>
          <Badge variant="warning" dot>
            Processando
          </Badge>
          <Badge variant="destructive" dot>
            Erro crítico
          </Badge>
          <Badge variant="secondary" dot>
            Offline
          </Badge>
          <Badge variant="cta" dot>
            Novo
          </Badge>
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
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Tamanhos
        </h2>
        <Preview>
          <Badge size="sm" variant="primary">
            Small
          </Badge>
          <Badge size="md" variant="primary">
            Medium
          </Badge>
          <Badge size="lg" variant="primary">
            Large
          </Badge>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`<Badge size="sm" variant="primary">Small</Badge>
<Badge size="md" variant="primary">Medium</Badge>
<Badge size="lg" variant="primary">Large</Badge>`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Casos de uso comuns
        </h2>
        <CodeBlock
          language="tsx"
          code={`{/* Status de pedido */}
<Badge variant="warning" dot>Em processamento</Badge>
<Badge variant="success" dot>Entregue</Badge>
<Badge variant="destructive" dot>Cancelado</Badge>

{/* Tags de categoria */}
<Badge variant="outline-primary">React</Badge>
<Badge variant="outline-primary">TypeScript</Badge>

{/* Contador de notificações */}
<Badge variant="cta" size="sm">14</Badge>

{/* Lançamento */}
<Badge variant="cta" size="sm">Novo</Badge>
<Badge variant="secondary" size="sm">Beta</Badge>`}
        />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Props
        </h2>
        <PropTable props={badgeProps} />
      </section>
    </div>
  );
}
