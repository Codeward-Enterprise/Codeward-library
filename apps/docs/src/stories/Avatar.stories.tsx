import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarGroup } from "../components/ui/avatar";

const Panel = ({ children, col = false }: { children: React.ReactNode; col?: boolean }) => (
  <div
    style={{
      background: "#252528",
      padding: "2.5rem",
      borderRadius: "12px",
      border: "1px solid #333337",
      display: "flex",
      flexDirection: col ? "column" : "row",
      flexWrap: "wrap",
      gap: "16px",
      alignItems: col ? "flex-start" : "center",
    }}
  >
    {children}
  </div>
);
const Label = ({ text }: { text: string }) => (
  <p
    style={{
      color: "#5F6B7A",
      fontFamily: "Inter, sans-serif",
      fontSize: "11px",
      fontWeight: 500,
      letterSpacing: "0.08em",
      textTransform: "uppercase" as const,
      margin: "0 0 4px",
      width: "100%",
    }}
  >
    {text}
  </p>
);

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" },
    docs: {
      description: {
        component:
          "Avatar com imagem e fallback automático para iniciais com cor determinística por nome. `AvatarGroup` empilha múltiplos avatares com overflow `+N`.",
      },
    },
  },
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    src: { control: "text" },
    alt: { control: "text" },
    fallback: { control: "text" },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithFallback: Story = {
  name: "Fallback — iniciais e cores por nome",
  render: () => (
    <Panel>
      <Label text="Cada nome gera uma cor diferente" />
      <Avatar alt="João Silva" size="xl" />
      <Avatar alt="Maria Fernanda" size="xl" />
      <Avatar alt="Carlos Eduardo" size="xl" />
      <Avatar alt="Ana Paula" size="xl" />
      <Avatar alt="Roberto Lima" size="xl" />
      <Avatar alt="Fernanda Costa" size="xl" />
    </Panel>
  ),
};
export const Sizes: Story = {
  name: "Tamanhos",
  render: () => (
    <Panel>
      <Label text="Sizes" />
      <Avatar alt="João Silva" size="xs" />
      <Avatar alt="João Silva" size="sm" />
      <Avatar alt="João Silva" size="md" />
      <Avatar alt="João Silva" size="lg" />
      <Avatar alt="João Silva" size="xl" />
    </Panel>
  ),
};
export const Group: Story = {
  name: "AvatarGroup — com overflow",
  render: () => (
    <Panel>
      <Label text="max=4, +3 overflow" />
      <AvatarGroup max={4}>
        <Avatar alt="João Silva" />
        <Avatar alt="Maria Fernanda" />
        <Avatar alt="Carlos Eduardo" />
        <Avatar alt="Ana Paula" />
        <Avatar alt="Roberto Lima" />
        <Avatar alt="Fernanda Costa" />
        <Avatar alt="Lucas Mendes" />
      </AvatarGroup>
    </Panel>
  ),
};
export const InContext: Story = {
  name: "Exemplo — Membros do time",
  render: () => (
    <div
      style={{
        background: "#252528",
        padding: "2.5rem",
        borderRadius: "12px",
        border: "1px solid #333337",
        width: "380px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
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
          Time do projeto
        </p>
        <AvatarGroup max={3} size="sm">
          <Avatar alt="João Silva" />
          <Avatar alt="Maria Fernanda" />
          <Avatar alt="Carlos Eduardo" />
          <Avatar alt="Ana Paula" />
          <Avatar alt="Roberto Lima" />
        </AvatarGroup>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {[
          { name: "João Silva", role: "Tech Lead" },
          { name: "Maria Fernanda", role: "Product Manager" },
          { name: "Carlos Eduardo", role: "Desenvolvedor Full-stack" },
        ].map((member) => (
          <div key={member.name} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Avatar alt={member.name} size="sm" />
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
                  margin: "1px 0 0",
                }}
              >
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
