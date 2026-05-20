import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/ui/button";

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Plus = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const Trash = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M2 4h12M5 4V2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V4M6 7v5M10 7v5M3 4l1 9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1l1-9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Settings = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Cinza neutro escuro — contrasta com Navy, Mint e Branco
const Panel = ({ children, width = "auto" }: { children: React.ReactNode; width?: string }) => (
  <div
    style={{
      background: "#252528",
      padding: "2rem",
      borderRadius: "12px",
      width,
      border: "1px solid #333337",
    }}
  >
    {children}
  </div>
);
const Row = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
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
      margin: "0 0 16px",
    }}
  >
    {text}
  </p>
);

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" },
    docs: {
      description: {
        component:
          "Primitiva de ação principal. `primary` para ações padrão; `cta` (Mint 500) é o destaque único por tela — regra 60-30-10.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "cta", "secondary", "outline", "ghost", "link", "destructive"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "icon", "icon-sm", "icon-lg"],
    },
    disabled: { control: "boolean" },
    asChild: { table: { disable: true } },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Construir produto", variant: "primary", size: "md" },
  decorators: [
    (Story) => (
      <Panel>
        <Story />
      </Panel>
    ),
  ],
};
export const CTA: Story = {
  name: "CTA — Mint (use sparingly)",
  args: { children: "Começar agora", variant: "cta", size: "md" },
  decorators: [
    (Story) => (
      <Panel>
        <Story />
      </Panel>
    ),
  ],
};
export const Secondary: Story = {
  args: { children: "Cancelar", variant: "secondary" },
  decorators: [
    (Story) => (
      <Panel>
        <Story />
      </Panel>
    ),
  ],
};
export const Outline: Story = {
  args: { children: "Ver mais", variant: "outline" },
  decorators: [
    (Story) => (
      <Panel>
        <Story />
      </Panel>
    ),
  ],
};
export const Ghost: Story = {
  args: { children: "Configurações", variant: "ghost" },
  decorators: [
    (Story) => (
      <Panel>
        <Story />
      </Panel>
    ),
  ],
};
export const Destructive: Story = {
  args: { children: "Deletar projeto", variant: "destructive" },
  decorators: [
    (Story) => (
      <Panel>
        <Story />
      </Panel>
    ),
  ],
};

export const AllVariants: Story = {
  name: "Todas as variantes",
  render: () => (
    <Panel>
      <Label text="Variants" />
      <Row>
        <Button variant="primary">Primary</Button>
        <Button variant="cta">CTA</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </Row>
    </Panel>
  ),
};
export const Sizes: Story = {
  name: "Tamanhos",
  render: () => (
    <Panel>
      <Label text="Sizes" />
      <Row>
        <Button size="xs" variant="cta">
          xs
        </Button>
        <Button size="sm" variant="cta">
          sm
        </Button>
        <Button size="md" variant="cta">
          md
        </Button>
        <Button size="lg" variant="cta">
          lg
        </Button>
        <Button size="xl" variant="cta">
          xl
        </Button>
      </Row>
    </Panel>
  ),
};
export const WithIcons: Story = {
  name: "Com ícones",
  render: () => (
    <Panel>
      <Label text="With icons" />
      <Row>
        <Button variant="cta">
          <Plus /> Novo projeto
        </Button>
        <Button variant="primary">
          <Settings /> Configurações
        </Button>
        <Button variant="outline">
          <ArrowRight /> Ver detalhes
        </Button>
        <Button variant="destructive">
          <Trash /> Deletar
        </Button>
        <Button variant="ghost" size="icon">
          <Settings />
        </Button>
        <Button variant="outline" size="icon-sm">
          <Plus />
        </Button>
      </Row>
    </Panel>
  ),
};
export const PairExample: Story = {
  name: "Par primário + CTA",
  render: () => (
    <Panel width="360px">
      <p
        style={{
          color: "#F6F9FC",
          fontFamily: "Inter, sans-serif",
          fontSize: "18px",
          fontWeight: 600,
          margin: "0 0 6px",
        }}
      >
        Pronto para começar?
      </p>
      <p
        style={{
          color: "#5F6B7A",
          fontFamily: "Inter, sans-serif",
          fontSize: "13px",
          margin: "0 0 24px",
        }}
      >
        Construa seu produto com o suporte do time Codeward.
      </p>
      <Row>
        <Button variant="cta">Criar conta grátis</Button>
        <Button variant="ghost">Entrar</Button>
      </Row>
    </Panel>
  ),
};
export const Disabled: Story = {
  name: "Estado desabilitado",
  render: () => (
    <Panel>
      <Label text="Disabled" />
      <Row>
        <Button variant="primary" disabled>
          Primary
        </Button>
        <Button variant="cta" disabled>
          CTA
        </Button>
        <Button variant="secondary" disabled>
          Secondary
        </Button>
        <Button variant="outline" disabled>
          Outline
        </Button>
      </Row>
    </Panel>
  ),
};
