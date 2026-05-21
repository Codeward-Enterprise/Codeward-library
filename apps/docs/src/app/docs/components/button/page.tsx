import { CodeBlock } from "@/components/docs/code-block";
import { Preview } from "@/components/docs/preview";
import { PropTable } from "@/components/docs/prop-table";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Button" };

const props = [
  {
    name: "variant",
    type: '"primary" | "cta" | "secondary" | "outline" | "ghost" | "link" | "destructive"',
    default: '"primary"',
    description: "Estilo visual do botão",
  },
  {
    name: "size",
    type: '"xs" | "sm" | "md" | "lg" | "xl" | "icon" | "icon-sm" | "icon-lg"',
    default: '"md"',
    description: "Tamanho do botão",
  },
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description: "Renderiza como elemento filho usando Radix Slot",
  },
  { name: "disabled", type: "boolean", default: "false", description: "Desabilita o botão" },
  { name: "className", type: "string", description: "Classes CSS adicionais" },
];

export default function ButtonPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-2">
        <p
          className="text-sm"
          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
        >
          codeward add button
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Button
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Botão de ação com 7 variantes visuais e 8 tamanhos. Use{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>variant="cta"</code> (Mint) apenas uma
          vez por tela — na ação mais importante.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Instalação
        </h2>
        <CodeBlock language="bash" code="codeward add button" />
        <CodeBlock
          language="bash"
          code="npm install @radix-ui/react-slot class-variance-authority"
        />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Variantes
        </h2>
        <Preview>
          <Button variant="primary">Primary</Button>
          <Button variant="cta">CTA</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`<Button variant="primary">Primary</Button>
<Button variant="cta">CTA</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>`}
        />
      </section>

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
          <Button disabled>Disabled</Button>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`<Button size="xs">XSmall</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">XLarge</Button>
<Button disabled>Disabled</Button>`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Em fundo Navy
        </h2>
        <Preview dark>
          <Button variant="cta">Iniciar projeto</Button>
          <Button variant="outline" className="!border-[rgba(255,255,255,0.2)] !text-white">
            Saber mais
          </Button>
          <Button variant="ghost" className="!text-[var(--color-navy-300)]">
            Cancelar
          </Button>
        </Preview>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          asChild
        </h2>
        <p style={{ color: "var(--muted-foreground)" }}>
          Use <code style={{ fontFamily: "var(--font-mono)" }}>asChild</code> para renderizar o
          botão como um link ou qualquer outro elemento mantendo todos os estilos.
        </p>
        <CodeBlock
          language="tsx"
          code={`import Link from "next/link";

<Button asChild variant="primary">
  <Link href="/dashboard">Acessar dashboard</Link>
</Button>`}
        />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Props
        </h2>
        <PropTable props={props} />
      </section>
    </div>
  );
}
