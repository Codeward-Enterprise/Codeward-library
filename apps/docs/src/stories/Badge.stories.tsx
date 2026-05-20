import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../components/ui/badge";

const Panel = ({ children, width = "auto" }: { children: React.ReactNode; width?: string }) => (
  <div style={{ background: "#252528", padding: "2.5rem", borderRadius: "12px", border: "1px solid #333337", width }}>
    {children}
  </div>
);
const Label = ({ text }: { text: string }) => (
  <p style={{ color: "#5F6B7A", fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" as const, margin: "0 0 16px" }}>
    {text}
  </p>
);
const Row = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
    {children}
  </div>
);

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" },
    docs: {
      description: {
        component: "Label compacta para status, categorias e contagens. `cta` (Mint 500) destaca o estado mais importante — use com moderação.",
      },
    },
  },
  argTypes: {
    variant: { control: "select", options: ["primary", "cta", "secondary", "outline", "outline-primary", "success", "warning", "destructive"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    dot: { control: "boolean" },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Em desenvolvimento", variant: "primary" },
  decorators: [(Story) => <Panel><Story /></Panel>],
};
export const CTABadge: Story = {
  name: "CTA — Mint (use sparingly)",
  args: { children: "Novo", variant: "cta" },
  decorators: [(Story) => <Panel><Story /></Panel>],
};
export const AllVariants: Story = {
  name: "Todas as variantes",
  render: () => (
    <Panel><Label text="Variants" /><Row>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="cta">CTA</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="outline-primary">Outline Primary</Badge>
      <Badge variant="success">Entregue</Badge>
      <Badge variant="warning">Pendente</Badge>
      <Badge variant="destructive">Bloqueado</Badge>
    </Row></Panel>
  ),
};
export const WithDot: Story = {
  name: "Com indicador de status",
  render: () => (
    <Panel><Label text="Live status dots" /><Row>
      <Badge variant="cta" dot>Ao vivo</Badge>
      <Badge variant="success" dot>Online</Badge>
      <Badge variant="warning" dot>Processando</Badge>
      <Badge variant="destructive" dot>Erro</Badge>
      <Badge variant="secondary" dot>Offline</Badge>
    </Row></Panel>
  ),
};
export const Sizes: Story = {
  name: "Tamanhos",
  render: () => (
    <Panel><Label text="Sizes" /><Row>
      <Badge size="sm" variant="cta">sm</Badge>
      <Badge size="md" variant="cta">md</Badge>
      <Badge size="lg" variant="cta">lg</Badge>
    </Row></Panel>
  ),
};
export const InContext: Story = {
  name: "Exemplo — Status do sistema",
  render: () => (
    <Panel width="380px">
      <Label text="System health" />
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {[
          { label: "API Gateway", status: "success" as const, text: "Online", desc: "Latência média: 42ms" },
          { label: "Worker Queue", status: "warning" as const, text: "Degradado", desc: "Backlog: 1.247 jobs" },
          { label: "Storage", status: "destructive" as const, text: "Erro", desc: "Região us-east-1" },
        ].map((item) => (
          <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <p style={{ color: "#F6F9FC", fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500, margin: 0 }}>{item.label}</p>
              <p style={{ color: "#5F6B7A", fontFamily: "Inter, sans-serif", fontSize: "12px", margin: "2px 0 0" }}>{item.desc}</p>
            </div>
            <Badge variant={item.status} dot>{item.text}</Badge>
          </div>
        ))}
      </div>
    </Panel>
  ),
};
