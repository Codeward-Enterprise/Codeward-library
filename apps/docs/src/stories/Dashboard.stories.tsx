import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarGroup } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const meta = {
  title: "Examples/Dashboard",
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "dark" },
    docs: {
      description: {
        component:
          "Exemplo compositivo de um dashboard SaaS usando Badge, Card, Avatar, Button, Table e Tabs juntos.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Icons ─────────────────────────────────────────────────────────────────────
const TrendUpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M1 10l4-4 3 3 5-6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 4h4v4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const TrendDownIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M1 4l4 4 3-3 5 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 10h4V6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const BellIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M8 1a5 5 0 0 0-5 5v3L2 10h12l-1-1V6a5 5 0 0 0-5-5z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M6.5 13a1.5 1.5 0 0 0 3 0"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);
const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────
const metrics = [
  { label: "MRR", value: "R$ 48.200", delta: "+12,4%", up: true },
  { label: "Clientes ativos", value: "1.847", delta: "+8,1%", up: true },
  { label: "Churn rate", value: "2,3%", delta: "-0,4pp", up: true },
  { label: "NPS", value: "72", delta: "-3", up: false },
];

const services = [
  {
    name: "api-gateway",
    env: "Produção",
    status: "success" as const,
    label: "Online",
    deploy: "há 3 min",
  },
  {
    name: "auth-service",
    env: "Produção",
    status: "success" as const,
    label: "Online",
    deploy: "há 1h",
  },
  {
    name: "worker-queue",
    env: "Produção",
    status: "warning" as const,
    label: "Degradado",
    deploy: "há 4h",
  },
  { name: "mailer", env: "Staging", status: "success" as const, label: "Online", deploy: "há 6h" },
  {
    name: "storage",
    env: "Produção",
    status: "destructive" as const,
    label: "Erro",
    deploy: "há 2d",
  },
];

const team = [
  { name: "João Silva", role: "Tech Lead", initials: "JS" },
  { name: "Ana Costa", role: "Engenheira", initials: "AC" },
  { name: "Pedro Melo", role: "DevOps", initials: "PM" },
  { name: "Laura Reis", role: "Produto", initials: "LR" },
];

const activity = [
  { actor: "JS", action: "fez deploy de", target: "api-gateway v2.4.1", time: "3 min" },
  { actor: "AC", action: "abriu PR", target: "#142 — auth refactor", time: "22 min" },
  { actor: "LR", action: "fechou issue", target: "#138 — bug no onboarding", time: "1h" },
  { actor: "PM", action: "escalou alerta", target: "worker-queue backlog", time: "4h" },
];

// ── Sub-components ─────────────────────────────────────────────────────────────
const MetricCard = ({ label, value, delta, up }: (typeof metrics)[0]) => (
  <Card variant="dark" style={{ flex: 1, minWidth: "160px" }}>
    <CardContent style={{ padding: "20px 20px 16px" }}>
      <p
        style={{
          color: "#5F6B7A",
          fontFamily: "Inter, sans-serif",
          fontSize: "12px",
          fontWeight: 500,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          margin: "0 0 8px",
        }}
      >
        {label}
      </p>
      <p
        style={{
          color: "#F6F9FC",
          fontFamily: "Inter, sans-serif",
          fontSize: "28px",
          fontWeight: 700,
          margin: "0 0 8px",
          lineHeight: 1,
        }}
      >
        {value}
      </p>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          color: up ? "#00D4B8" : "#F87171",
          fontSize: "12px",
          fontWeight: 500,
          fontFamily: "Inter, sans-serif",
        }}
      >
        {up ? <TrendUpIcon /> : <TrendDownIcon />}
        {delta}
      </span>
    </CardContent>
  </Card>
);

// ── Story ──────────────────────────────────────────────────────────────────────
const DashboardPage = () => (
  <div style={{ background: "#111113", minHeight: "100vh", padding: "0" }}>
    {/* Topbar */}
    <div
      style={{
        background: "#0A0A0C",
        borderBottom: "1px solid #1E1E22",
        padding: "0 32px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div
          style={{
            width: "28px",
            height: "28px",
            background: "#00D4B8",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              color: "#0A2540",
              fontWeight: 700,
              fontSize: "13px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            C
          </span>
        </div>
        <span
          style={{
            color: "#F6F9FC",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          Codeward
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Button variant="ghost" size="icon-sm">
          <BellIcon />
        </Button>
        <Avatar initials="JS" size="sm" />
      </div>
    </div>

    {/* Content */}
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 32px 64px" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "28px",
        }}
      >
        <div>
          <h1
            style={{
              color: "#F6F9FC",
              fontFamily: "Inter, sans-serif",
              fontSize: "22px",
              fontWeight: 700,
              margin: "0 0 4px",
            }}
          >
            Dashboard
          </h1>
          <p
            style={{
              color: "#5F6B7A",
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              margin: 0,
            }}
          >
            Maio 2025 · Atualizado há 3 min
          </p>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <Button variant="outline" size="sm">
            Exportar
          </Button>
          <Button variant="cta" size="sm">
            <PlusIcon /> Novo deploy
          </Button>
        </div>
      </div>

      {/* Metrics */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "28px", flexWrap: "wrap" }}>
        {metrics.map((m) => (
          <MetricCard key={m.label} {...m} />
        ))}
      </div>

      {/* Main grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 300px",
          gap: "16px",
          alignItems: "start",
        }}
      >
        {/* Left column — Tabs + Table */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Card variant="dark">
            <CardContent style={{ padding: "20px" }}>
              <Tabs defaultValue="services">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "16px",
                  }}
                >
                  <TabsList>
                    <TabsTrigger value="services">Serviços</TabsTrigger>
                    <TabsTrigger value="activity">Atividade</TabsTrigger>
                  </TabsList>
                  <Badge variant="warning" size="sm" dot>
                    1 incidente
                  </Badge>
                </div>

                <TabsContent value="services">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Serviço</TableHead>
                        <TableHead>Ambiente</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Último deploy</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {services.map((s) => (
                        <TableRow key={s.name}>
                          <TableCell>
                            <span
                              style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "13px",
                                color: "var(--foreground)",
                                fontWeight: 500,
                              }}
                            >
                              {s.name}
                            </span>
                          </TableCell>
                          <TableCell>
                            <span style={{ color: "var(--muted-foreground)", fontSize: "13px" }}>
                              {s.env}
                            </span>
                          </TableCell>
                          <TableCell>
                            <Badge variant={s.status} size="sm" dot>
                              {s.label}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <span style={{ color: "var(--muted-foreground)", fontSize: "13px" }}>
                              {s.deploy}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>

                <TabsContent value="activity">
                  <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                    {activity.map((a, i) => (
                      <div
                        key={a.target}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "10px 0",
                          borderBottom: i < activity.length - 1 ? "1px solid #1E1E22" : "none",
                        }}
                      >
                        <Avatar initials={a.actor} size="sm" />
                        <p
                          style={{
                            flex: 1,
                            margin: 0,
                            color: "#A0ADB8",
                            fontFamily: "Inter, sans-serif",
                            fontSize: "13px",
                          }}
                        >
                          <span style={{ color: "#F6F9FC", fontWeight: 500 }}>{a.actor}</span>{" "}
                          {a.action}{" "}
                          <span
                            style={{
                              color: "#00D4B8",
                              fontFamily: "var(--font-mono)",
                              fontSize: "12px",
                            }}
                          >
                            {a.target}
                          </span>
                        </p>
                        <span
                          style={{
                            color: "#5F6B7A",
                            fontSize: "12px",
                            fontFamily: "Inter, sans-serif",
                            flexShrink: 0,
                          }}
                        >
                          {a.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Right column — Team */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Card variant="dark">
            <CardHeader style={{ padding: "20px 20px 12px" }}>
              <div
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
              >
                <p
                  style={{
                    color: "#F6F9FC",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  Time
                </p>
                <AvatarGroup max={4}>
                  {team.map((m) => (
                    <Avatar key={m.name} initials={m.initials} size="sm" />
                  ))}
                </AvatarGroup>
              </div>
            </CardHeader>
            <CardContent style={{ padding: "0 20px 20px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {team.map((member) => (
                  <div
                    key={member.name}
                    style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <Avatar initials={member.initials} size="sm" />
                    <div>
                      <p
                        style={{
                          color: "#F6F9FC",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "13px",
                          fontWeight: 500,
                          margin: 0,
                        }}
                      >
                        {member.name}
                      </p>
                      <p
                        style={{
                          color: "#5F6B7A",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "12px",
                          margin: 0,
                        }}
                      >
                        {member.role}
                      </p>
                    </div>
                    <Badge variant="success" size="sm" className="ml-auto">
                      Online
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card variant="dark">
            <CardContent style={{ padding: "20px" }}>
              <p
                style={{
                  color: "#F6F9FC",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  margin: "0 0 4px",
                }}
              >
                Plano Pro
              </p>
              <p
                style={{
                  color: "#5F6B7A",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  margin: "0 0 16px",
                }}
              >
                R$ 497/mês · Renova em 15 Jun
              </p>
              <div
                style={{
                  background: "#1A1A1E",
                  borderRadius: "6px",
                  height: "6px",
                  marginBottom: "8px",
                  overflow: "hidden",
                }}
              >
                <div style={{ background: "#00D4B8", height: "100%", width: "62%" }} />
              </div>
              <p
                style={{
                  color: "#5F6B7A",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  margin: "0 0 16px",
                }}
              >
                62% do limite de deploys usado
              </p>
              <Button variant="outline" size="sm" style={{ width: "100%" }}>
                Gerenciar plano
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

export const Default: Story = {
  name: "Dashboard SaaS",
  render: () => <DashboardPage />,
  parameters: { layout: "fullscreen", backgrounds: { default: "dark" } },
};
