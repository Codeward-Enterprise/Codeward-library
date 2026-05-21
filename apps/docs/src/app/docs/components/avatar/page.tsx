import { CodeBlock } from "@/components/docs/code-block";
import { Preview } from "@/components/docs/preview";
import { PropTable } from "@/components/docs/prop-table";
import { Avatar, AvatarGroup } from "@/components/ui/avatar";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Avatar — Codeward UI" };

const avatarProps = [
  {
    name: "src",
    type: "string",
    default: "—",
    description: "URL da imagem. Se omitida ou falhar ao carregar, exibe as iniciais.",
  },
  {
    name: "alt",
    type: "string",
    default: '""',
    description: "Texto alternativo da imagem — usado também para gerar as iniciais.",
  },
  {
    name: "fallback",
    type: "string",
    default: "—",
    description: "Texto personalizado para as iniciais (até 2 chars). Tem prioridade sobre alt.",
  },
  {
    name: "size",
    type: '"xs" | "sm" | "md" | "lg" | "xl"',
    default: '"md"',
    description: "Tamanho do avatar: xs=24px, sm=32px, md=40px, lg=48px, xl=64px.",
  },
  { name: "className", type: "string", default: "—", description: "Classes CSS adicionais." },
];

const groupProps = [
  {
    name: "max",
    type: "number",
    default: "—",
    description: "Número máximo de avatares visíveis. O excedente aparece como +N.",
  },
  {
    name: "size",
    type: '"xs" | "sm" | "md" | "lg" | "xl"',
    default: '"md"',
    description: "Tamanho aplicado ao badge de overflow (+N).",
  },
];

export default function AvatarPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-3">
        <p
          className="text-sm"
          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
        >
          npx @codeforward/cli add avatar
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Avatar
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Representação visual de usuários com imagem e fallback de iniciais. Cores de fallback são
          determinísticas — o mesmo nome sempre gera a mesma cor da paleta de marca. Inclui
          AvatarGroup com sobreposição e indicador de overflow.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Instalação
        </h2>
        <CodeBlock language="bash" code="npx @codeforward/cli add avatar" />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Tamanhos
        </h2>
        <Preview>
          <Avatar alt="Vitor Medina" size="xs" />
          <Avatar alt="Vitor Medina" size="sm" />
          <Avatar alt="Vitor Medina" size="md" />
          <Avatar alt="Vitor Medina" size="lg" />
          <Avatar alt="Vitor Medina" size="xl" />
        </Preview>
        <CodeBlock
          language="tsx"
          code={`import { Avatar } from "@/components/ui/avatar";

<Avatar alt="Vitor Medina" size="xs" />  {/* 24px */}
<Avatar alt="Vitor Medina" size="sm" />  {/* 32px */}
<Avatar alt="Vitor Medina" size="md" />  {/* 40px — padrão */}
<Avatar alt="Vitor Medina" size="lg" />  {/* 48px */}
<Avatar alt="Vitor Medina" size="xl" />  {/* 64px */}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Cores determinísticas
        </h2>
        <p style={{ color: "var(--muted-foreground)" }}>
          A cor do fallback é gerada a partir do hash do nome — o mesmo nome sempre gera a mesma cor
          da paleta de marca, garantindo consistência entre sessões.
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
          code={`<Avatar alt="Alice Souza" />    {/* exibe "AS" */}
<Avatar alt="Bruno Lima" />     {/* exibe "BL" */}
<Avatar alt="Carla Ferreira" /> {/* exibe "CF" */}
<Avatar alt="Diego Alves" />    {/* exibe "DA" */}
<Avatar alt="Erica Santos" />   {/* exibe "ES" */}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          AvatarGroup
        </h2>
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
          code={`import { Avatar, AvatarGroup } from "@/components/ui/avatar";

<AvatarGroup max={4}>
  <Avatar alt="Alice Souza" />
  <Avatar alt="Bruno Lima" />
  <Avatar alt="Carla Ferreira" />
  <Avatar alt="Diego Alves" />
  <Avatar alt="Erica Santos" />
  <Avatar alt="Fabio Costa" />
  {/* Exibe 4 avatares + "+2" */}
</AvatarGroup>`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Com imagem e fallback
        </h2>
        <CodeBlock
          language="tsx"
          code={`{/* Imagem do GitHub */}
<Avatar src="https://github.com/username.png" alt="Username" />

{/* Fallback personalizado */}
<Avatar fallback="AB" />

{/* Fallback automático das iniciais */}
<Avatar alt="Ana Beatriz Costa" />  {/* exibe "AB" */}

{/* Imagem com fallback automático se falhar */}
<Avatar
  src="https://example.com/foto.jpg"
  alt="João Pedro"
/>`}
        />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Props — Avatar
        </h2>
        <PropTable props={avatarProps} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Props — AvatarGroup
        </h2>
        <PropTable props={groupProps} />
      </section>
    </div>
  );
}
