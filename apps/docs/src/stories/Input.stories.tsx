import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const EnvelopeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M2 6l7 5 7-5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <rect x="4" y="8" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M6 8V6a3 3 0 1 1 6 0v2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="9" cy="11.5" r="1" fill="currentColor" />
  </svg>
);
const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle cx="9" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M3 15c0-3.314 2.686-6 6-6s6 2.686 6 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M15 15l-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const BuildingIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <rect x="2" y="3" width="14" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 15V9h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7 7h.01M11 7h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Input dark: simula superfície de um app real em Navy 700
const AppSurface = ({
  children,
  width = "360px",
}: { children: React.ReactNode; width?: string }) => (
  <div
    style={{
      background: "#0A2540",
      padding: "2.5rem",
      borderRadius: "12px",
      width,
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      border: "1px solid #1C3D62",
    }}
  >
    {children}
  </div>
);
// Input light: fundo branco com sombra
const LightPanel = ({
  children,
  width = "360px",
}: { children: React.ReactNode; width?: string }) => (
  <div
    style={{
      background: "#FFFFFF",
      padding: "2.5rem",
      borderRadius: "12px",
      width,
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    }}
  >
    {children}
  </div>
);

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" },
    docs: {
      description: {
        component:
          'Input com label, hint, erro e slot de ícone. Use `variant="dark"` em superfícies navy — fundo navy-800 sem borda, anel Mint no foco.',
      },
    },
  },
  argTypes: {
    variant: { control: "select", options: ["default", "dark"] },
    label: { control: "text" },
    placeholder: { control: "text" },
    hint: { control: "text" },
    errorMessage: { control: "text" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkDefault: Story = {
  name: "Dark — padrão",
  args: { label: "E-mail", placeholder: "seu@email.com", variant: "dark", icon: <EnvelopeIcon /> },
  decorators: [
    (Story) => (
      <AppSurface>
        <Story />
      </AppSurface>
    ),
  ],
  parameters: { backgrounds: { default: "navy" } },
};
export const DarkWithError: Story = {
  name: "Dark — erro",
  args: {
    label: "E-mail",
    placeholder: "seu@email.com",
    variant: "dark",
    icon: <EnvelopeIcon />,
    error: true,
    errorMessage: "E-mail inválido. Verifique o endereço.",
  },
  decorators: [
    (Story) => (
      <AppSurface>
        <Story />
      </AppSurface>
    ),
  ],
  parameters: { backgrounds: { default: "navy" } },
};
export const DarkDisabled: Story = {
  name: "Dark — desabilitado",
  args: {
    label: "Plano atual",
    value: "Pro — R$ 497/mês",
    variant: "dark",
    disabled: true,
    hint: "Para trocar, acesse Faturamento.",
  },
  decorators: [
    (Story) => (
      <AppSurface>
        <Story />
      </AppSurface>
    ),
  ],
  parameters: { backgrounds: { default: "navy" } },
};

export const LoginForm: Story = {
  name: "Exemplo — Login",
  render: () => (
    <AppSurface>
      <div>
        <p
          style={{
            color: "#F6F9FC",
            fontFamily: "Inter, sans-serif",
            fontSize: "20px",
            fontWeight: 600,
            margin: "0 0 6px",
          }}
        >
          Entrar na plataforma
        </p>
        <p
          style={{ color: "#5F6B7A", fontFamily: "Inter, sans-serif", fontSize: "13px", margin: 0 }}
        >
          Use suas credenciais Codeward.
        </p>
      </div>
      <Input
        variant="dark"
        label="E-mail"
        placeholder="seu@empresa.com"
        icon={<EnvelopeIcon />}
        type="email"
      />
      <Input
        variant="dark"
        label="Senha"
        placeholder="••••••••"
        icon={<LockIcon />}
        type="password"
      />
      <Button variant="cta" style={{ width: "100%" }}>
        Entrar
      </Button>
      <p
        style={{
          textAlign: "center",
          color: "#5F6B7A",
          fontFamily: "Inter, sans-serif",
          fontSize: "12px",
          margin: 0,
        }}
      >
        Não tem conta? <span style={{ color: "#00D4B8", cursor: "pointer" }}>Criar grátis →</span>
      </p>
    </AppSurface>
  ),
  parameters: { backgrounds: { default: "navy" } },
};
export const RegisterForm: Story = {
  name: "Exemplo — Cadastro",
  render: () => (
    <AppSurface>
      <div>
        <p
          style={{
            color: "#F6F9FC",
            fontFamily: "Inter, sans-serif",
            fontSize: "20px",
            fontWeight: 600,
            margin: "0 0 6px",
          }}
        >
          Criar conta
        </p>
        <p
          style={{ color: "#5F6B7A", fontFamily: "Inter, sans-serif", fontSize: "13px", margin: 0 }}
        >
          Comece seu trial gratuito de 14 dias.
        </p>
      </div>
      <Input variant="dark" label="Nome completo" placeholder="João Silva" icon={<UserIcon />} />
      <Input
        variant="dark"
        label="E-mail corporativo"
        placeholder="joao@empresa.com"
        icon={<EnvelopeIcon />}
        type="email"
      />
      <Input variant="dark" label="Empresa" placeholder="Acme Inc." icon={<BuildingIcon />} />
      <Input
        variant="dark"
        label="Senha"
        placeholder="Mínimo 8 caracteres"
        icon={<LockIcon />}
        type="password"
        hint="Use letras, números e símbolos."
      />
      <Button variant="cta" style={{ width: "100%" }}>
        Criar conta grátis
      </Button>
    </AppSurface>
  ),
  parameters: { backgrounds: { default: "navy" } },
};
export const SearchInput: Story = {
  name: "Exemplo — Busca",
  render: () => (
    <AppSurface>
      <Input variant="dark" placeholder="Buscar projetos, clientes..." icon={<SearchIcon />} />
    </AppSurface>
  ),
  parameters: { backgrounds: { default: "navy" } },
};

export const LightDefault: Story = {
  name: "Light — padrão",
  args: { label: "E-mail", placeholder: "seu@email.com", variant: "default" },
  decorators: [
    (Story) => (
      <LightPanel>
        <Story />
      </LightPanel>
    ),
  ],
  parameters: { backgrounds: { default: "light" } },
};
export const LightWithHint: Story = {
  name: "Light — com hint",
  args: {
    label: "Subdomínio",
    placeholder: "minha-empresa",
    hint: "Usado na URL. Não pode ser alterado depois.",
    variant: "default",
  },
  decorators: [
    (Story) => (
      <LightPanel>
        <Story />
      </LightPanel>
    ),
  ],
  parameters: { backgrounds: { default: "light" } },
};
export const LightWithError: Story = {
  name: "Light — erro",
  args: {
    label: "CNPJ",
    placeholder: "00.000.000/0000-00",
    error: true,
    errorMessage: "CNPJ inválido. Verifique os dígitos.",
    variant: "default",
  },
  decorators: [
    (Story) => (
      <LightPanel>
        <Story />
      </LightPanel>
    ),
  ],
  parameters: { backgrounds: { default: "light" } },
};
