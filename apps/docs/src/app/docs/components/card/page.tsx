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

export const metadata: Metadata = { title: "Card" };

const props = [
  {
    name: "variant",
    type: '"default" | "dark"',
    default: '"default"',
    description: "Variante visual — dark usa fundo Navy",
  },
  { name: "className", type: "string", description: "Classes CSS adicionais" },
  { name: "children", type: "ReactNode", required: true, description: "Conteúdo do card" },
];

export default function CardPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-2">
        <p
          className="text-sm"
          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
        >
          codeward add card
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Card
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Container de conteúdo composto por sub-componentes:{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>CardHeader</code>,{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>CardContent</code>,{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>CardFooter</code> e{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>CardHighlight</code> (Navy 700 — 60% da
          regra de cor).
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Instalação
        </h2>
        <CodeBlock language="bash" code="codeward add card" />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Exemplos
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
  CardContent, CardDivider, CardFooter, CardHighlight
} from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Resumo do sprint</CardTitle>
    <CardDescription>Sprint 14 · 12 a 18 de maio</CardDescription>
  </CardHeader>
  <CardContent>
    <p>12 PRs merged.</p>
  </CardContent>
  <CardDivider />
  <CardFooter>
    <Button size="sm">Ver sprint</Button>
  </CardFooter>
</Card>

{/* Variante highlight (Navy 700) */}
<CardHighlight>
  <CardHeader>
    <CardTitle style={{ color: "white" }}>MVP em 8 semanas</CardTitle>
  </CardHeader>
  <CardFooter>
    <Button variant="cta">Iniciar projeto</Button>
  </CardFooter>
</CardHighlight>`}
        />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Props — Card
        </h2>
        <PropTable props={props} />
        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          <code style={{ fontFamily: "var(--font-mono)" }}>CardHighlight</code>,{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>CardHeader</code>,{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>CardContent</code>,{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>CardFooter</code>,{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>CardTitle</code>,{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>CardDescription</code> e{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>CardDivider</code> aceitam{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>className</code> e todos os atributos
          HTML nativos.
        </p>
      </section>
    </div>
  );
}
