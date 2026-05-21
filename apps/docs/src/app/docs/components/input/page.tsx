import { CodeBlock } from "@/components/docs/code-block";
import { Preview } from "@/components/docs/preview";
import { PropTable } from "@/components/docs/prop-table";
import { Input } from "@/components/ui/input";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Input — Codeward UI" };

const inputProps = [
  {
    name: "label",
    type: "string",
    default: "—",
    description: "Label exibida acima do campo. Associada via htmlFor gerado automaticamente.",
  },
  {
    name: "hint",
    type: "string",
    default: "—",
    description: "Texto auxiliar exibido abaixo do campo quando não há erro.",
  },
  {
    name: "error",
    type: "boolean",
    default: "false",
    description: "Ativa o estado de erro: borda vermelha, fundo claro e ícone de alerta.",
  },
  {
    name: "errorMessage",
    type: "string",
    default: "—",
    description: "Mensagem de erro exibida abaixo do campo quando error=true. Substitui hint.",
  },
  {
    name: "icon",
    type: "ReactNode",
    default: "—",
    description: "SVG ou ReactNode renderizado à esquerda do campo.",
  },
  {
    name: "variant",
    type: '"default" | "dark"',
    default: '"default"',
    description:
      "default: fundo branco com borda e sombra. dark: fundo Navy 800 sem borda, para fundos escuros.",
  },
  { name: "disabled", type: "boolean", default: "false", description: "Desabilita o campo." },
];

export default function InputPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-3">
        <p
          className="text-sm"
          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
        >
          npx @codeforward/cli add input
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Input
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Campo de texto com label, hint, estado de erro e variante escura integrados. O focus ring
          usa Mint 500 — a cor de anel da marca. Suporta ícone à esquerda e encaminha ref para o
          elemento <code style={{ fontFamily: "var(--font-mono)" }}>input</code> nativo.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Instalação
        </h2>
        <CodeBlock language="bash" code="npx @codeforward/cli add input" />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Uso básico
        </h2>
        <Preview>
          <div className="grid sm:grid-cols-2 gap-5 w-full">
            <Input label="E-mail" placeholder="vitor@codeward.com.br" />
            <Input
              label="Subdomínio"
              placeholder="minha-empresa"
              hint="Aparece na URL. Não pode ser alterado."
            />
          </div>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`import { Input } from "@/components/ui/input";

<Input label="E-mail" placeholder="vitor@codeward.com.br" />

<Input
  label="Subdomínio"
  placeholder="minha-empresa"
  hint="Aparece na URL. Não pode ser alterado."
/>`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Estado de erro
        </h2>
        <Preview>
          <div className="grid sm:grid-cols-2 gap-5 w-full">
            <Input
              label="CNPJ"
              placeholder="00.000.000/0000-00"
              error
              errorMessage="CNPJ inválido."
            />
            <Input
              label="E-mail"
              defaultValue="email-errado"
              error
              errorMessage="Formato de e-mail inválido."
            />
          </div>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`<Input
  label="CNPJ"
  placeholder="00.000.000/0000-00"
  error
  errorMessage="CNPJ inválido."
/>

{/* error sem errorMessage usa hint como mensagem */}
<Input
  label="E-mail"
  hint="Use seu e-mail corporativo."
  error
/>`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Com ícone
        </h2>
        <Preview>
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Input
              label="Busca"
              placeholder="Pesquisar projetos..."
              icon={
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M10 10l3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              }
            />
            <Input
              label="URL"
              placeholder="https://exemplo.com"
              icon={
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M1 8h14M8 1c-2 2-3 4-3 7s1 5 3 7M8 1c2 2 3 4 3 7s-1 5-3 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              }
            />
          </div>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`<Input
  label="Busca"
  placeholder="Pesquisar projetos..."
  icon={<SearchIcon />}
/>

<Input
  label="URL"
  placeholder="https://exemplo.com"
  icon={<GlobeIcon />}
/>`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Estado desabilitado
        </h2>
        <Preview>
          <div className="w-full max-w-sm">
            <Input
              label="Plano atual"
              defaultValue="Pro — R$ 497/mês"
              disabled
              hint="Para trocar, acesse Faturamento."
            />
          </div>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`<Input
  label="Plano atual"
  defaultValue="Pro — R$ 497/mês"
  disabled
  hint="Para trocar, acesse Faturamento."
/>`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Variante dark
        </h2>
        <p style={{ color: "var(--muted-foreground)" }}>
          Use <code style={{ fontFamily: "var(--font-mono)" }}>variant="dark"</code> em fundos Navy
          — o campo usa fundo Navy 800 sem borda, integrado ao background escuro.
        </p>
        <Preview dark>
          <div className="w-full max-w-sm">
            <Input variant="dark" label="E-mail" placeholder="vitor@codeward.com.br" />
          </div>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`<Input
  variant="dark"
  label="E-mail"
  placeholder="vitor@codeward.com.br"
/>`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Modo controlado com forwardRef
        </h2>
        <CodeBlock
          language="tsx"
          code={`"use client";

import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";

export function SearchInput() {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <Input
        ref={inputRef}
        label="Busca"
        placeholder="Digite para pesquisar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>Pesquisando: {query}</p>
    </div>
  );
}`}
        />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Props
        </h2>
        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          Além das props listadas, aceita todos os atributos de{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>HTMLInputElement</code> (
          <code style={{ fontFamily: "var(--font-mono)" }}>type</code>,{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>value</code>,{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>onChange</code>,{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>placeholder</code>, etc.).
        </p>
        <PropTable props={inputProps} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Acessibilidade
        </h2>
        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          A label é associada ao input via{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>htmlFor</code>. Em estado de erro, o
          input recebe <code style={{ fontFamily: "var(--font-mono)" }}>aria-invalid="true"</code> e{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>aria-describedby</code> apontando para a
          mensagem de erro — lida por leitores de tela automaticamente.
        </p>
      </section>
    </div>
  );
}
