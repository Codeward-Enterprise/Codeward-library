import { colors } from "@codeforward/tokens";
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
import { Input } from "@/components/ui/input";
import { CodewardMark } from "@codeforward/icons";

// ─── Showcase section wrapper ─────────────────────────────────────────────────
function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div>
        <h2
          className="text-xl font-medium"
          style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
        >
          {title}
        </h2>
        {description && (
          <p
            className="mt-1 text-sm"
            style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
          >
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}

// ─── Token chip ───────────────────────────────────────────────────────────────
function TokenChip({ label, hex }: { label: string; hex: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="h-12 w-full rounded-xl border"
        style={{ backgroundColor: hex, borderColor: "rgba(0,0,0,0.08)" }}
      />
      <div>
        <p
          className="text-xs font-medium"
          style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
        >
          {label}
        </p>
        <p
          className="text-[11px] font-mono"
          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
        >
          {hex}
        </p>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--muted)", fontFamily: "var(--font-sans)" }}
    >
      {/* ── Navigation ─────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 px-6 border-b"
        style={{ background: "var(--primary)", borderColor: "var(--color-navy-600)" }}
      >
        <div className="mx-auto max-w-6xl h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <CodewardMark size={24} style={{ color: "var(--cta)" }} />
            <span
              className="text-sm font-medium tracking-[0.01em]"
              style={{ color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-sans)" }}
            >
              Codeward UI
            </span>
            <span
              className="text-xs px-1.5 py-0.5 rounded font-mono"
              style={{
                color: "var(--cta)",
                backgroundColor: "rgba(0,212,184,0.1)",
                borderColor: "rgba(0,212,184,0.2)",
                border: "1px solid",
                fontFamily: "var(--font-mono)",
              }}
            >
              v0.1
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              style={{ color: "var(--color-navy-300)" }}
              className="hover:!text-white hover:!bg-[rgba(255,255,255,0.08)]"
            >
              Componentes
            </Button>
            <Button
              variant="ghost"
              size="sm"
              style={{ color: "var(--color-navy-300)" }}
              className="hover:!text-white hover:!bg-[rgba(255,255,255,0.08)]"
            >
              Tokens
            </Button>
            <Button variant="cta" size="sm">
              Instalar CLI
            </Button>
          </div>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <div
        className="border-b px-6 py-20"
        style={{
          background: "linear-gradient(180deg, var(--primary) 0%, #0D1E35 60%, var(--muted) 100%)",
          borderColor: "var(--border)",
        }}
      >
        <div className="mx-auto max-w-6xl text-center space-y-6">
          <Badge variant="cta" dot>
            Open for use in Codeward products
          </Badge>
          <h1
            className="text-5xl font-medium tracking-tight"
            style={{ color: "#FFFFFF", fontFamily: "var(--font-sans)", lineHeight: "1.1" }}
          >
            Componentes que
            <br />
            <span style={{ color: "var(--cta)" }}>entregam produto.</span>
          </h1>
          <p
            className="text-lg max-w-lg mx-auto"
            style={{ color: "var(--color-navy-300)", fontFamily: "var(--font-sans)" }}
          >
            Tokens e utils como pacote npm. Componentes que você copia, controla e ajusta por
            projeto.
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <Button variant="cta" size="lg">
              Começar agora
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="!border-[rgba(255,255,255,0.25)] !text-white hover:!bg-[rgba(255,255,255,0.1)] hover:!border-[rgba(255,255,255,0.4)]"
            >
              Ver documentação
            </Button>
          </div>
        </div>
      </div>

      {/* ── Main content ───────────────────────────────────────────────────── */}
      <main className="mx-auto max-w-6xl px-6 py-14 space-y-16">
        {/* ── Color Palette ────────────────────────────────────────────────── */}
        <Section
          title="Brand Palette"
          description="Navy 700 é o primário. Mint 500 é reservado para CTAs e destaques — regra dos 10%."
        >
          <div
            className="rounded-2xl p-6 border"
            style={{ backgroundColor: "white", borderColor: "var(--border)" }}
          >
            <div className="space-y-6">
              <div>
                <p
                  className="text-xs font-medium uppercase tracking-widest mb-3"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Navy — via @codeforward/tokens
                </p>
                <div className="grid grid-cols-6 gap-3">
                  {([50, 100, 300, 500, 700, 900] as const).map((shade) => (
                    <TokenChip key={shade} label={`Navy ${shade}`} hex={colors.navy[shade]} />
                  ))}
                </div>
              </div>
              <div>
                <p
                  className="text-xs font-medium uppercase tracking-widest mb-3"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Mint — via @codeforward/tokens
                </p>
                <div className="grid grid-cols-6 gap-3">
                  {([50, 100, 300, 500, 600, 800] as const).map((shade) => (
                    <TokenChip key={shade} label={`Mint ${shade}`} hex={colors.mint[shade]} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ── Button ───────────────────────────────────────────────────────── */}
        <Section
          title="Button"
          description="Use primary para ações principais. CTA (Mint) é usado uma vez por tela, na ação mais importante."
        >
          <div className="space-y-4">
            {/* On light */}
            <div
              className="rounded-2xl p-6 border space-y-5"
              style={{ backgroundColor: "white", borderColor: "var(--border)" }}
            >
              <p
                className="text-xs font-medium uppercase tracking-widest"
                style={{ color: "var(--muted-foreground)" }}
              >
                Variantes
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="cta">CTA</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="border-t pt-5" style={{ borderColor: "var(--border)" }}>
                <p
                  className="text-xs font-medium uppercase tracking-widest mb-4"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Tamanhos
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="xs">XSmall</Button>
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">XLarge</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>
            </div>

            {/* On dark */}
            <div
              className="rounded-2xl p-6 space-y-4"
              style={{
                background:
                  "linear-gradient(135deg, var(--primary) 0%, var(--color-navy-900) 100%)",
                border: "1px solid var(--color-navy-600)",
              }}
            >
              <p
                className="text-xs font-medium uppercase tracking-widest"
                style={{ color: "var(--color-navy-400)" }}
              >
                Em fundo Navy
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="cta">Iniciar projeto</Button>
                <Button
                  variant="outline"
                  className="!border-[rgba(255,255,255,0.2)] !text-white hover:!bg-[rgba(255,255,255,0.1)]"
                >
                  Saber mais
                </Button>
                <Button
                  variant="ghost"
                  className="!text-[var(--color-navy-300)] hover:!text-white hover:!bg-[rgba(255,255,255,0.08)]"
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* ── Badge ────────────────────────────────────────────────────────── */}
        <Section
          title="Badge"
          description="Prop dot adiciona indicador circular de estado ao lado do texto."
        >
          <div
            className="rounded-2xl p-6 border space-y-5"
            style={{ backgroundColor: "white", borderColor: "var(--border)" }}
          >
            <div>
              <p
                className="text-xs font-medium uppercase tracking-widest mb-4"
                style={{ color: "var(--muted-foreground)" }}
              >
                Variantes
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="primary">Primary</Badge>
                <Badge variant="cta">CTA</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="outline-primary">Outline Primary</Badge>
                <Badge variant="success">Entregue</Badge>
                <Badge variant="warning">Pendente</Badge>
                <Badge variant="destructive">Bloqueado</Badge>
              </div>
            </div>
            <div className="border-t pt-5" style={{ borderColor: "var(--border)" }}>
              <p
                className="text-xs font-medium uppercase tracking-widest mb-4"
                style={{ color: "var(--muted-foreground)" }}
              >
                Com dot
              </p>
              <div className="flex flex-wrap gap-3">
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
              </div>
            </div>
            <div className="border-t pt-5" style={{ borderColor: "var(--border)" }}>
              <p
                className="text-xs font-medium uppercase tracking-widest mb-4"
                style={{ color: "var(--muted-foreground)" }}
              >
                Tamanhos
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Badge size="sm" variant="primary">
                  Small
                </Badge>
                <Badge size="md" variant="primary">
                  Medium
                </Badge>
                <Badge size="lg" variant="primary">
                  Large
                </Badge>
              </div>
            </div>
          </div>
        </Section>

        {/* ── Input ────────────────────────────────────────────────────────── */}
        <Section
          title="Input"
          description="Label, hint e erro são props diretas. Focus ring em Mint 500."
        >
          <div
            className="rounded-2xl p-6 border"
            style={{ backgroundColor: "white", borderColor: "var(--border)" }}
          >
            <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
              <Input label="E-mail" placeholder="vitor@codeward.com.br" />
              <Input
                label="Subdomínio"
                placeholder="minha-empresa"
                hint="Aparece na URL do produto. Não pode ser alterado."
              />
              <Input
                label="CNPJ"
                placeholder="00.000.000/0000-00"
                error
                errorMessage="CNPJ inválido. Verifique os dígitos verificadores."
              />
              <Input
                label="Plano atual"
                defaultValue="Pro — R$ 497/mês"
                disabled
                hint="Para trocar, acesse Faturamento."
              />
            </div>
          </div>
        </Section>

        {/* ── Card ─────────────────────────────────────────────────────────── */}
        <Section
          title="Card"
          description="CardHighlight usa Navy 700 — para seções de destaque, métricas e CTAs (regra 60%)."
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Standard card */}
            <Card>
              <CardHeader>
                <CardTitle>Resumo do sprint</CardTitle>
                <CardDescription>Sprint 14 · 12 a 18 de maio</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm" style={{ color: "var(--foreground)" }}>
                  12 PRs merged. Deploy em produção confirmado para sexta às 18h.
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

            {/* Metric card */}
            <Card>
              <CardHeader>
                <CardDescription>MRR Atual</CardDescription>
                <h2
                  className="text-3xl font-medium tracking-tight"
                  style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
                >
                  R$ 48.200
                </h2>
              </CardHeader>
              <CardContent>
                <Badge variant="success" dot>
                  +12,4% este mês
                </Badge>
                <p className="mt-3 text-sm" style={{ color: "var(--muted-foreground)" }}>
                  4 novos clientes em maio.
                </p>
              </CardContent>
              <CardDivider />
              <CardFooter>
                <Button size="sm" variant="outline">
                  Ver relatório
                </Button>
              </CardFooter>
            </Card>

            {/* Highlight card (Navy) */}
            <CardHighlight>
              <CardHeader>
                <Badge variant="cta" dot className="w-fit">
                  Disponível agora
                </Badge>
                <CardTitle style={{ color: "white" }}>MVP em 8 semanas</CardTitle>
                <CardDescription style={{ color: "var(--color-navy-300)" }}>
                  Do discovery ao deploy em produção.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Code review em todo PR",
                    "Status diário. Sem surpresas",
                    "Construímos para escalar",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: "var(--color-navy-100)" }}
                    >
                      <span style={{ color: "var(--cta)" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter style={{ borderColor: "var(--color-navy-600)" }}>
                <Button variant="cta" size="sm">
                  Iniciar projeto
                </Button>
              </CardFooter>
            </CardHighlight>
          </div>
        </Section>

        {/* ── Typography ───────────────────────────────────────────────────── */}
        <Section
          title="Typography"
          description="Inter 500 para títulos e CTAs. Inter 400 para body e descrições. JetBrains Mono para código."
        >
          <div
            className="rounded-2xl p-6 border space-y-6"
            style={{ backgroundColor: "white", borderColor: "var(--border)" }}
          >
            {[
              {
                label: "Display — 48px / 500",
                size: "48px",
                weight: 500,
                text: "Construímos para escalar",
              },
              {
                label: "Heading — 32px / 500",
                size: "32px",
                weight: 500,
                text: "Entregamos seu MVP",
              },
              {
                label: "Body — 16px / 400",
                size: "16px",
                weight: 400,
                text: "Code review em todo PR. Status diário. Sem surpresas. Você sabe o que acontece.",
              },
              {
                label: "Caption — 14px / 400",
                size: "14px",
                weight: 400,
                text: "Atualizado há 2 horas · Sprint 14",
                opacity: 0.6,
              },
            ].map(({ label, size, weight, text, opacity }) => (
              <div key={label} className="space-y-1">
                <p
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontSize: size,
                    fontWeight: weight,
                    fontFamily: "var(--font-sans)",
                    color: `rgba(26,26,26,${opacity ?? 1})`,
                    lineHeight: 1.25,
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
            <div className="space-y-1">
              <p
                className="text-xs uppercase tracking-widest"
                style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
              >
                Mono — JetBrains Mono / 400
              </p>
              <p
                className="text-base"
                style={{ fontFamily: "var(--font-mono)", color: "var(--foreground)" }}
              >
                pnpm add @codeforward/tokens @codeforward/utils
              </p>
            </div>
          </div>
        </Section>
      </main>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer
        className="mt-8 border-t px-6 py-8"
        style={{ background: "var(--primary)", borderColor: "var(--color-navy-600)" }}
      >
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CodewardMark size={18} style={{ color: "var(--cta)" }} />
            <span
              className="text-sm"
              style={{ color: "var(--color-navy-400)", fontFamily: "var(--font-sans)" }}
            >
              Codeward UI · v0.1.0
            </span>
          </div>
          <p
            className="text-xs"
            style={{ color: "var(--color-navy-600)", fontFamily: "var(--font-mono)" }}
          >
            60% Navy · 30% Neutral · 10% Mint
          </p>
        </div>
      </footer>
    </div>
  );
}
