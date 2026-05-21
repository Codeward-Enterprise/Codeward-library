import { CodeBlock } from "@/components/docs/code-block";
import { PropTable } from "@/components/docs/prop-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardDivider,
  CardFooter,
  CardHeader,
  CardHighlight,
  CardTitle,
} from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Card — Codeward UI" };

const cardProps = [
  {
    name: "variant",
    type: '"default" | "dark"',
    default: '"default"',
    description:
      "default: fundo branco com sombra sutil. dark: fundo escuro (#252528) para superfícies escuras.",
  },
  { name: "className", type: "string", default: "—", description: "Classes CSS adicionais." },
];

export default function CardPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-3">
        <p
          className="text-sm"
          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
        >
          npx @codeforward/cli add card
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Card
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Container de conteúdo composto por sub-componentes:{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>CardHeader</code>,{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>CardContent</code>,{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>CardFooter</code> e{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>CardHighlight</code> — fundo Navy 700
          para seções de destaque.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Instalação
        </h2>
        <CodeBlock language="bash" code="npx @codeforward/cli add card" />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Uso básico
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Resumo do sprint</CardTitle>
              <CardDescription>Sprint 14 · 12 a 18 de maio</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm" style={{ color: "var(--foreground)" }}>
                12 PRs merged. Deploy confirmado para sexta às 18h.
              </p>
            </CardContent>
            <CardDivider />
            <CardFooter>
              <Button size="sm" variant="primary">
                Ver sprint
              </Button>
              <Button size="sm" variant="ghost">
                Dispensar
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardDescription>MRR Atual</CardDescription>
              <h2
                className="text-3xl font-medium"
                style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
              >
                R$ 48.200
              </h2>
            </CardHeader>
            <CardContent>
              <Badge variant="success" dot>
                +12,4% este mês
              </Badge>
            </CardContent>
            <CardDivider />
            <CardFooter>
              <Button size="sm" variant="outline">
                Ver relatório
              </Button>
            </CardFooter>
          </Card>

          <CardHighlight>
            <CardHeader>
              <Badge variant="cta" dot className="w-fit">
                Disponível agora
              </Badge>
              <CardTitle style={{ color: "white" }}>MVP em 8 semanas</CardTitle>
              <CardDescription style={{ color: "var(--color-navy-300)" }}>
                Do discovery ao deploy.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {["Code review em todo PR", "Status diário", "Construímos para escalar"].map(
                  (item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: "var(--color-navy-100)" }}
                    >
                      <span style={{ color: "var(--cta)" }}>✓</span> {item}
                    </li>
                  ),
                )}
              </ul>
            </CardContent>
            <CardFooter style={{ borderColor: "var(--color-navy-600)" }}>
              <Button variant="cta" size="sm">
                Iniciar projeto
              </Button>
            </CardFooter>
          </CardHighlight>
        </div>

        <CodeBlock
          language="tsx"
          code={`import {
  Card, CardHeader, CardTitle, CardDescription,
  CardContent, CardDivider, CardFooter,
} from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Resumo do sprint</CardTitle>
    <CardDescription>Sprint 14 · 12 a 18 de maio</CardDescription>
  </CardHeader>
  <CardContent>
    <p>12 PRs merged. Deploy confirmado para sexta às 18h.</p>
  </CardContent>
  <CardDivider />
  <CardFooter>
    <Button size="sm">Ver sprint</Button>
    <Button size="sm" variant="ghost">Dispensar</Button>
  </CardFooter>
</Card>`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          CardHighlight
        </h2>
        <p style={{ color: "var(--muted-foreground)" }}>
          Use <code style={{ fontFamily: "var(--font-mono)" }}>CardHighlight</code> para seções de
          destaque com fundo Navy 700 — seguindo a regra dos 60% da paleta de marca.
        </p>
        <CodeBlock
          language="tsx"
          code={`import { CardHighlight, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

<CardHighlight>
  <CardHeader>
    <Badge variant="cta" dot className="w-fit">Disponível agora</Badge>
    <CardTitle style={{ color: "white" }}>MVP em 8 semanas</CardTitle>
    <CardDescription style={{ color: "var(--color-navy-300)" }}>
      Do discovery ao deploy.
    </CardDescription>
  </CardHeader>
  <CardContent>
    {/* conteúdo com cor text-white ou navy-100 */}
  </CardContent>
  <CardFooter style={{ borderColor: "var(--color-navy-600)" }}>
    <Button variant="cta">Iniciar projeto</Button>
  </CardFooter>
</CardHighlight>`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Variante dark
        </h2>
        <CodeBlock
          language="tsx"
          code={`{/* Superfície escura (#252528) — para uso em fundos escuros */}
<Card variant="dark">
  <CardHeader>
    <CardTitle style={{ color: "white" }}>Título</CardTitle>
  </CardHeader>
  <CardContent>...</CardContent>
</Card>`}
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
                ["Card", "Root — container principal com borda, sombra e border-radius."],
                ["CardHighlight", "Variante Navy 700 para seções de destaque — sem prop variant."],
                [
                  "CardHeader",
                  "Área de título com padding px-6 pt-6. Adicione CardTitle e CardDescription aqui.",
                ],
                ["CardTitle", "Título do card — renderizado como <h3>, tamanho base/medium."],
                ["CardDescription", "Descrição do card — tamanho sm, cor muted-foreground."],
                ["CardContent", "Área principal do conteúdo — padding px-6 py-5."],
                ["CardDivider", "Separador horizontal entre seções — margem mx-6."],
                ["CardFooter", "Área de ações — padding px-6 pb-6, border-top automático."],
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
          Props — Card
        </h2>
        <PropTable props={cardProps} />
        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          Todos os sub-componentes aceitam{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>className</code> e os atributos HTML
          nativos do elemento que renderizam.
        </p>
      </section>
    </div>
  );
}
