import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../components/ui/checkbox";

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
      minWidth: "320px",
    }}
  >
    {children}
  </div>
);

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" },
    docs: {
      description: {
        component:
          "Checkbox acessível via Radix UI. Suporta `label`, `description` e todos os estados nativos.",
      },
    },
  },
  argTypes: {
    label: { control: "text" },
    description: { control: "text" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Aceitar termos de uso" },
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
    label: "Receber notificações por e-mail",
    description: "Você será notificado sobre deploys, alertas e atualizações do time.",
  },
  decorators: [
    (Story) => (
      <Panel>
        <Story />
      </Panel>
    ),
  ],
};
export const Disabled: Story = {
  args: { label: "Opção indisponível no seu plano", disabled: true },
  decorators: [
    (Story) => (
      <Panel>
        <Story />
      </Panel>
    ),
  ],
};
export const CheckedByDefault: Story = {
  name: "Marcado por padrão",
  args: { label: "Ativado por padrão", defaultChecked: true },
  decorators: [
    (Story) => (
      <Panel>
        <Story />
      </Panel>
    ),
  ],
};
export const Group: Story = {
  name: "Grupo de opções",
  render: () => (
    <Panel>
      <p
        style={{
          color: "#F6F9FC",
          fontFamily: "Inter, sans-serif",
          fontSize: "13px",
          fontWeight: 500,
          margin: 0,
        }}
      >
        Notificações
      </p>
      <Checkbox
        label="Deploy concluído"
        description="Quando um deploy for finalizado com sucesso."
        defaultChecked
      />
      <Checkbox
        label="Alertas de performance"
        description="Latência acima de 500ms ou erros 5xx."
        defaultChecked
      />
      <Checkbox
        label="Novidades do produto"
        description="Releases, features e atualizações da plataforma."
      />
      <Checkbox
        label="Relatório semanal"
        description="Resumo enviado toda segunda-feira."
        disabled
      />
    </Panel>
  ),
};
