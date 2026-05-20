import type { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const LightPanel = ({
  children,
  width = "280px",
}: { children: React.ReactNode; width?: string }) => (
  <div
    style={{
      background: "#FFFFFF",
      padding: "2.5rem",
      borderRadius: "12px",
      width,
      boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    }}
  >
    {children}
  </div>
);

const meta = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "light" },
    docs: {
      description: {
        component:
          "Select dropdown acessível via Radix UI. Composto por `Select`, `SelectTrigger`, `SelectContent`, `SelectItem`, `SelectLabel`, `SelectGroup` e `SelectSeparator`.",
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Padrão",
  render: () => (
    <LightPanel>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Selecionar plano" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="starter">Starter</SelectItem>
          <SelectItem value="pro">Pro</SelectItem>
          <SelectItem value="enterprise">Enterprise</SelectItem>
        </SelectContent>
      </Select>
    </LightPanel>
  ),
  parameters: { backgrounds: { default: "light" } },
};

export const WithGroups: Story = {
  name: "Com grupos e separadores",
  render: () => (
    <LightPanel>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Selecionar região" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>América do Sul</SelectLabel>
            <SelectItem value="sao-paulo">São Paulo (sa-east-1)</SelectItem>
            <SelectItem value="buenos-aires">Buenos Aires (sa-west-1)</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>América do Norte</SelectLabel>
            <SelectItem value="virginia">N. Virginia (us-east-1)</SelectItem>
            <SelectItem value="oregon">Oregon (us-west-2)</SelectItem>
            <SelectItem value="california">California (us-west-1)</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Europa</SelectLabel>
            <SelectItem value="ireland">Ireland (eu-west-1)</SelectItem>
            <SelectItem value="frankfurt">Frankfurt (eu-central-1)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </LightPanel>
  ),
  parameters: { backgrounds: { default: "light" } },
};

export const Disabled: Story = {
  name: "Desabilitado",
  render: () => (
    <LightPanel>
      <Select disabled>
        <SelectTrigger>
          <SelectValue placeholder="Plano Enterprise (indisponível)" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="enterprise">Enterprise</SelectItem>
        </SelectContent>
      </Select>
    </LightPanel>
  ),
  parameters: { backgrounds: { default: "light" } },
};

export const FormExample: Story = {
  name: "Exemplo — Formulário",
  render: () => (
    <LightPanel width="360px">
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label
            htmlFor="select-plano"
            style={{
              color: "var(--foreground)",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Plano
          </label>
          <Select defaultValue="pro">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="starter">Starter — R$ 97/mês</SelectItem>
              <SelectItem value="pro">Pro — R$ 497/mês</SelectItem>
              <SelectItem value="enterprise">Enterprise — Sob consulta</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label
            htmlFor="select-ciclo"
            style={{
              color: "var(--foreground)",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Ciclo de cobrança
          </label>
          <Select defaultValue="anual">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mensal">Mensal</SelectItem>
              <SelectItem value="anual">Anual (2 meses grátis)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </LightPanel>
  ),
  parameters: { backgrounds: { default: "light" } },
};
