import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardHighlight,
  CardTitle,
} from "../components/ui/card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" },
    docs: {
      description: {
        component:
          "Container de superfície para agrupar conteúdo relacionado. `Card` é para contextos claros. `CardHighlight` aplica a regra dos 60% Navy — use em seções hero, métricas e callouts.",
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Card — padrão",
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Resumo do projeto</CardTitle>
        <CardDescription>Atualizado há 2 horas</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm" style={{ color: "var(--foreground)" }}>
          O time entregou 12 PRs esta semana. Deploy confirmado para sexta.
        </p>
      </CardContent>
      <CardFooter>
        <Button size="sm" variant="primary">
          Ver detalhes
        </Button>
        <Button size="sm" variant="ghost">
          Dispensar
        </Button>
      </CardFooter>
    </Card>
  ),
  parameters: { backgrounds: { default: "light" } },
};

export const MetricCard: Story = {
  name: "Card — métricas",
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      {[
        {
          label: "MRR Atual",
          value: "R$ 48.200",
          change: "+12,4% vs. mês anterior",
          status: "success" as const,
        },
        {
          label: "Usuários ativos",
          value: "1.847",
          change: "+8,2% vs. mês anterior",
          status: "success" as const,
        },
        {
          label: "Churn rate",
          value: "2,3%",
          change: "+0,4pp vs. mês anterior",
          status: "warning" as const,
        },
      ].map((metric) => (
        <Card key={metric.label} className="w-56">
          <CardHeader>
            <CardDescription>{metric.label}</CardDescription>
            <CardTitle className="text-3xl">{metric.value}</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant={metric.status} dot size="sm">
              {metric.change}
            </Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  ),
  parameters: { backgrounds: { default: "light" } },
};

export const HighlightCard: Story = {
  name: "CardHighlight — Navy 60%",
  render: () => (
    <CardHighlight className="w-80">
      <CardHeader>
        <Badge variant="cta" size="sm" className="mb-2 self-start">
          Em destaque
        </Badge>
        <CardTitle style={{ color: "#F6F9FC" }}>MVP em 8 semanas</CardTitle>
        <CardDescription style={{ color: "#8DA8CC" }}>
          Do discovery ao deploy em produção.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            margin: 0,
            padding: 0,
            listStyle: "none",
          }}
        >
          {[
            "Code review em todo PR",
            "Status diário via Slack",
            "Deploy automatizado",
            "Sem custo de infra no 1° mês",
          ].map((item) => (
            <li
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#C8D3DD",
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
                style={{ flexShrink: 0 }}
              >
                <circle cx="7" cy="7" r="6.5" stroke="#00D4B8" />
                <path
                  d="M4.5 7l2 2 3-3"
                  stroke="#00D4B8"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter style={{ borderColor: "#1C3D62" }}>
        <Button variant="cta" size="sm">
          Iniciar projeto
        </Button>
        <Button variant="ghost" size="sm" style={{ color: "#8DA8CC" }}>
          Saiba mais
        </Button>
      </CardFooter>
    </CardHighlight>
  ),
};

export const PricingCards: Story = {
  name: "Exemplo — Pricing",
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "flex-start" }}>
      <Card className="w-56">
        <CardHeader>
          <CardTitle>Starter</CardTitle>
          <CardDescription>Para freelancers e times pequenos.</CardDescription>
        </CardHeader>
        <CardContent>
          <p
            style={{
              color: "var(--foreground)",
              fontFamily: "Inter, sans-serif",
              fontSize: "26px",
              fontWeight: 700,
              margin: 0,
            }}
          >
            R$ 97
            <span style={{ fontSize: "13px", fontWeight: 400, color: "var(--muted-foreground)" }}>
              /mês
            </span>
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" style={{ width: "100%" }}>
            Começar
          </Button>
        </CardFooter>
      </Card>

      <CardHighlight className="w-56">
        <CardHeader>
          <Badge variant="cta" size="sm" className="mb-2 self-start">
            Mais popular
          </Badge>
          <CardTitle style={{ color: "#F6F9FC" }}>Pro</CardTitle>
          <CardDescription style={{ color: "#8DA8CC" }}>
            Para produtos em crescimento.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p
            style={{
              color: "#F6F9FC",
              fontFamily: "Inter, sans-serif",
              fontSize: "26px",
              fontWeight: 700,
              margin: 0,
            }}
          >
            R$ 497<span style={{ fontSize: "13px", fontWeight: 400, color: "#5F6B7A" }}>/mês</span>
          </p>
        </CardContent>
        <CardFooter style={{ borderColor: "#1C3D62" }}>
          <Button variant="cta" size="sm" style={{ width: "100%" }}>
            Assinar Pro
          </Button>
        </CardFooter>
      </CardHighlight>

      <Card className="w-56">
        <CardHeader>
          <CardTitle>Enterprise</CardTitle>
          <CardDescription>Para grandes organizações.</CardDescription>
        </CardHeader>
        <CardContent>
          <p
            style={{
              color: "var(--foreground)",
              fontFamily: "Inter, sans-serif",
              fontSize: "20px",
              fontWeight: 600,
              margin: 0,
            }}
          >
            Sob consulta
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" style={{ width: "100%" }}>
            Falar com vendas
          </Button>
        </CardFooter>
      </Card>
    </div>
  ),
  parameters: { backgrounds: { default: "light" } },
};

export const NotificationCard: Story = {
  name: "Exemplo — Notificações",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "360px" }}>
      {[
        {
          title: "Deploy concluído",
          desc: "api-gateway · há 3 min",
          variant: "success" as const,
          text: "Produção",
        },
        {
          title: "Alerta de uso",
          desc: "Worker queue · há 12 min",
          variant: "warning" as const,
          text: "Atenção",
        },
        {
          title: "Falha na build",
          desc: "auth-service · há 1h",
          variant: "destructive" as const,
          text: "Erro",
        },
      ].map((n) => (
        <Card key={n.title}>
          <CardContent className="py-4">
            <div
              style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}
            >
              <div>
                <p
                  style={{
                    color: "var(--foreground)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  {n.title}
                </p>
                <p
                  style={{
                    color: "var(--muted-foreground)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px",
                    margin: "2px 0 0",
                  }}
                >
                  {n.desc}
                </p>
              </div>
              <Badge variant={n.variant} size="sm" dot>
                {n.text}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  ),
  parameters: { backgrounds: { default: "light" } },
};
