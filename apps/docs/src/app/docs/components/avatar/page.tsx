import type { Metadata } from "next";
import { CodeBlock } from "@/components/docs/code-block";
import { PropTable } from "@/components/docs/prop-table";
import { Preview } from "@/components/docs/preview";
import { Avatar, AvatarGroup } from "@/components/ui/avatar";

export const metadata: Metadata = { title: "Avatar" };

const props = [
  { name: "src", type: "string", description: "URL da imagem do avatar" },
  { name: "alt", type: "string", description: "Texto alternativo para a imagem" },
  { name: "fallback", type: "string", description: "Texto personalizado para o fallback (padrão: iniciais extraídas do alt)" },
  { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl"', default: '"md"', description: "Tamanho do avatar" },
  { name: "className", type: "string", description: "Classes CSS adicionais" },
];

export default function AvatarPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-2">
        <p className="text-sm" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}>
          codeward add avatar
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Avatar
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Avatar com imagem e fallback inteligente. Quando a imagem falha ou não é fornecida,
          exibe as iniciais extraídas do <code style={{ fontFamily: "var(--font-mono)" }}>alt</code>{" "}
          com uma cor gerada deterministicamente a partir do nome.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>Instalação</h2>
        <CodeBlock language="bash" code="codeward add avatar" />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>Tamanhos</h2>
        <Preview>
          <Avatar alt="Vitor Medina" size="xs" />
          <Avatar alt="Vitor Medina" size="sm" />
          <Avatar alt="Vitor Medina" size="md" />
          <Avatar alt="Vitor Medina" size="lg" />
          <Avatar alt="Vitor Medina" size="xl" />
        </Preview>
        <CodeBlock
          language="tsx"
          code={`<Avatar alt="Vitor Medina" size="xs" />
<Avatar alt="Vitor Medina" size="sm" />
<Avatar alt="Vitor Medina" size="md" />
<Avatar alt="Vitor Medina" size="lg" />
<Avatar alt="Vitor Medina" size="xl" />`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>Cores deterministicas</h2>
        <p style={{ color: "var(--muted-foreground)" }}>
          A cor do fallback é gerada a partir do hash do nome — o mesmo nome sempre gera a mesma cor.
        </p>
        <Preview>
          <Avatar alt="Alice Souza" />
          <Avatar alt="Bruno Lima" />
          <Avatar alt="Carla Ferreira" />
          <Avatar alt="Diego Alves" />
          <Avatar alt="Erica Santos" />
        </Preview>
        <CodeBlock
          language="tsx"
          code={`<Avatar alt="Alice Souza" />
<Avatar alt="Bruno Lima" />
<Avatar alt="Carla Ferreira" />
<Avatar alt="Diego Alves" />
<Avatar alt="Erica Santos" />`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>AvatarGroup</h2>
        <p style={{ color: "var(--muted-foreground)" }}>
          Agrupa avatares com sobreposição. A prop{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>max</code> controla quantos são exibidos
          — o restante aparece como <code style={{ fontFamily: "var(--font-mono)" }}>+N</code>.
        </p>
        <Preview>
          <AvatarGroup max={4}>
            <Avatar alt="Alice Souza" />
            <Avatar alt="Bruno Lima" />
            <Avatar alt="Carla Ferreira" />
            <Avatar alt="Diego Alves" />
            <Avatar alt="Erica Santos" />
            <Avatar alt="Fabio Costa" />
          </AvatarGroup>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`<AvatarGroup max={4}>
  <Avatar alt="Alice Souza" />
  <Avatar alt="Bruno Lima" />
  <Avatar alt="Carla Ferreira" />
  <Avatar alt="Diego Alves" />
  <Avatar alt="Erica Santos" />
  <Avatar alt="Fabio Costa" />
</AvatarGroup>`}
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
