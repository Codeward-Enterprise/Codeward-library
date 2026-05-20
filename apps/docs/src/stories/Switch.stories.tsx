import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "../components/ui/switch";

const Panel = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      background: "#252528",
      padding: "2.5rem",
      borderRadius: "12px",
      border: "1px solid #333337",
      display: "flex",
      flexDirection: "column" as const,
      gap: "20px",
      minWidth: "340px",
    }}
  >
    {children}
  </div>
);
const Divider = () => <div style={{ height: "1px", background: "#333337" }} />;

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" },
    docs: {
      description: {
        component: "Toggle switch acessível via Radix UI. Usa Mint 500 no estado ativado.",
      },
    },
  },
  argTypes: {
    label: { control: "text" },
    description: { control: "text" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Ativar notificações" },
  decorators: [
    (Story) => (
      <Panel>
        <Story />
      </Panel>
    ),
  ],
};
export const WithDescription: Story = {
  name: "Com descrição",
  args: {
    label: "Deploy automático",
    description: "Publica automaticamente ao fazer merge na branch main.",
  },
  decorators: [
    (Story) => (
      <Panel>
        <Story />
      </Panel>
    ),
  ],
};
export const EnabledByDefault: Story = {
  name: "Ativado por padrão",
  args: { label: "Modo manutenção", defaultChecked: true },
  decorators: [
    (Story) => (
      <Panel>
        <Story />
      </Panel>
    ),
  ],
};
export const Disabled: Story = {
  args: { label: "Recurso indisponível no seu plano", disabled: true },
  decorators: [
    (Story) => (
      <Panel>
        <Story />
      </Panel>
    ),
  ],
};
export const SettingsPanel: Story = {
  name: "Exemplo — Configurações",
  render: () => (
    <Panel>
      <p
        style={{
          color: "#5F6B7A",
          fontFamily: "Inter, sans-serif",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        Configurações do projeto
      </p>
      <Switch
        label="Deploy automático"
        description="Ativa deploy ao fazer merge na main."
        defaultChecked
      />
      <Divider />
      <Switch
        label="Notificações via Slack"
        description="Alertas de build e deploy no canal #devops."
        defaultChecked
      />
      <Divider />
      <Switch label="Preview environments" description="Cria ambiente de preview para cada PR." />
      <Divider />
      <Switch
        label="Modo manutenção"
        description="Exibe página de manutenção para visitantes."
        disabled
      />
    </Panel>
  ),
};
