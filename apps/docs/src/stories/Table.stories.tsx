import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

const LightPanel = ({
  children,
  width = "720px",
}: { children: React.ReactNode; width?: string }) => (
  <div
    style={{
      background: "#FFFFFF",
      padding: "2rem",
      borderRadius: "12px",
      width,
      boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    }}
  >
    {children}
  </div>
);

const TrashIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M2 3.5h10M5 3.5V2.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25V3.5M4 3.5l.75 7.5a.5.5 0 0 0 .5.5h3.5a.5.5 0 0 0 .5-.5L10 3.5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const EditIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M10 2l2 2-7 7H3V9l7-7z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const meta = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "light" },
    docs: {
      description: {
        component:
          "Tabela semântica com header, body, footer e caption. Ideal para listagens de dados com suporte a ações por linha.",
      },
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const services = [
  {
    name: "api-gateway",
    env: "Produção",
    status: "success" as const,
    label: "Online",
    deploy: "há 3 min",
    duration: "1m 12s",
  },
  {
    name: "auth-service",
    env: "Produção",
    status: "success" as const,
    label: "Online",
    deploy: "há 1h",
    duration: "45s",
  },
  {
    name: "worker-queue",
    env: "Produção",
    status: "warning" as const,
    label: "Degradado",
    deploy: "há 4h",
    duration: "2m 38s",
  },
  {
    name: "mailer",
    env: "Staging",
    status: "success" as const,
    label: "Online",
    deploy: "há 6h",
    duration: "38s",
  },
  {
    name: "storage",
    env: "Produção",
    status: "destructive" as const,
    label: "Erro",
    deploy: "há 2d",
    duration: "—",
  },
];

export const Default: Story = {
  name: "Serviços de infraestrutura",
  render: () => (
    <LightPanel>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Serviço</TableHead>
            <TableHead>Ambiente</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Último deploy</TableHead>
            <TableHead>Duração</TableHead>
            <TableHead className="text-right">Ações</TableHead>
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
                <span style={{ color: "var(--muted-foreground)", fontSize: "13px" }}>{s.env}</span>
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
              <TableCell>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {s.duration}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <div style={{ display: "flex", gap: "6px", justifyContent: "flex-end" }}>
                  <Button variant="ghost" size="icon-sm">
                    <EditIcon />
                  </Button>
                  <Button variant="ghost" size="icon-sm" style={{ color: "var(--destructive)" }}>
                    <TrashIcon />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableCaption>5 serviços · 1 em erro · 1 degradado</TableCaption>
      </Table>
    </LightPanel>
  ),
  parameters: { backgrounds: { default: "light" } },
};

const invoices = [
  {
    id: "INV-2025-042",
    client: "Acme Corp",
    value: "R$ 12.500",
    due: "30 Jun 2025",
    status: "warning" as const,
    label: "Pendente",
  },
  {
    id: "INV-2025-041",
    client: "Globo Tech",
    value: "R$ 8.200",
    due: "15 Jun 2025",
    status: "success" as const,
    label: "Pago",
  },
  {
    id: "INV-2025-040",
    client: "StartupX",
    value: "R$ 4.900",
    due: "01 Jun 2025",
    status: "success" as const,
    label: "Pago",
  },
  {
    id: "INV-2025-039",
    client: "FinTech SA",
    value: "R$ 21.000",
    due: "20 Mai 2025",
    status: "destructive" as const,
    label: "Vencido",
  },
];

export const Invoices: Story = {
  name: "Exemplo — Faturas",
  render: () => (
    <LightPanel width="640px">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <div>
          <p
            style={{
              color: "var(--foreground)",
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              fontWeight: 600,
              margin: 0,
            }}
          >
            Faturas recentes
          </p>
          <p
            style={{
              color: "var(--muted-foreground)",
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              margin: "2px 0 0",
            }}
          >
            4 faturas · Abril – Junho 2025
          </p>
        </div>
        <Button variant="cta" size="sm">
          Nova fatura
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Número</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead>Vencimento</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((inv) => (
            <TableRow key={inv.id}>
              <TableCell>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {inv.id}
                </span>
              </TableCell>
              <TableCell style={{ fontWeight: 500 }}>{inv.client}</TableCell>
              <TableCell style={{ fontWeight: 600 }}>{inv.value}</TableCell>
              <TableCell style={{ color: "var(--muted-foreground)", fontSize: "13px" }}>
                {inv.due}
              </TableCell>
              <TableCell>
                <Badge variant={inv.status} size="sm">
                  {inv.label}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </LightPanel>
  ),
  parameters: { backgrounds: { default: "light" } },
};
