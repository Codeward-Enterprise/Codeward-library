import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Switch } from "../components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const LightPanel = ({
  children,
  width = "480px",
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

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "light" },
    docs: {
      description: {
        component:
          "Navegação em abas acessível via Radix UI. Composto por `Tabs`, `TabsList`, `TabsTrigger` e `TabsContent`.",
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Padrão",
  render: () => (
    <LightPanel>
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Visão geral</TabsTrigger>
          <TabsTrigger value="activity">Atividade</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <p style={{ color: "var(--muted-foreground)", fontSize: "14px", lineHeight: 1.6 }}>
            Resumo do projeto. Selecione outra aba para ver mais detalhes.
          </p>
        </TabsContent>
        <TabsContent value="activity">
          <p style={{ color: "var(--muted-foreground)", fontSize: "14px", lineHeight: 1.6 }}>
            Histórico de atividades do time nos últimos 30 dias.
          </p>
        </TabsContent>
        <TabsContent value="settings">
          <p style={{ color: "var(--muted-foreground)", fontSize: "14px", lineHeight: 1.6 }}>
            Configurações do projeto e integrações.
          </p>
        </TabsContent>
      </Tabs>
    </LightPanel>
  ),
  parameters: { backgrounds: { default: "light" } },
};

export const WithBadges: Story = {
  name: "Com badges",
  render: () => (
    <LightPanel>
      <Tabs defaultValue="open">
        <TabsList>
          <TabsTrigger value="open">
            Em aberto{" "}
            <Badge size="sm" variant="warning" className="ml-1">
              12
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="review">
            Em review{" "}
            <Badge size="sm" variant="primary" className="ml-1">
              4
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="done">
            Concluídos{" "}
            <Badge size="sm" variant="success" className="ml-1">
              38
            </Badge>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="open">
          <p style={{ color: "var(--muted-foreground)", fontSize: "14px" }}>
            12 itens aguardando trabalho.
          </p>
        </TabsContent>
        <TabsContent value="review">
          <p style={{ color: "var(--muted-foreground)", fontSize: "14px" }}>
            4 pull requests aguardando revisão.
          </p>
        </TabsContent>
        <TabsContent value="done">
          <p style={{ color: "var(--muted-foreground)", fontSize: "14px" }}>
            38 itens entregues este sprint.
          </p>
        </TabsContent>
      </Tabs>
    </LightPanel>
  ),
  parameters: { backgrounds: { default: "light" } },
};

export const SettingsTabs: Story = {
  name: "Exemplo — Configurações",
  render: () => {
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
    const EnvelopeIcon = () => (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 6l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
    return (
      <LightPanel width="520px">
        <Tabs defaultValue="profile">
          <TabsList>
            <TabsTrigger value="profile">Perfil</TabsTrigger>
            <TabsTrigger value="notifications">Notificações</TabsTrigger>
            <TabsTrigger value="billing">Faturamento</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Input label="Nome completo" defaultValue="João Silva" icon={<UserIcon />} />
              <Input
                label="E-mail"
                defaultValue="joao@codeward.com.br"
                type="email"
                icon={<EnvelopeIcon />}
              />
              <Button variant="primary" size="sm" style={{ alignSelf: "flex-end" }}>
                Salvar alterações
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="notifications">
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Switch
                label="Deploy concluído"
                description="Notificar quando um deploy finalizar."
                defaultChecked
              />
              <Switch
                label="Alertas de performance"
                description="Latência ou erros acima do threshold."
                defaultChecked
              />
              <Switch label="Relatório semanal" description="Resumo enviado toda segunda-feira." />
            </div>
          </TabsContent>
          <TabsContent value="billing">
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div
                style={{
                  padding: "16px",
                  background: "var(--muted)",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "var(--foreground)",
                  }}
                >
                  Plano Pro
                </p>
                <p
                  style={{ margin: "4px 0 0", fontSize: "12px", color: "var(--muted-foreground)" }}
                >
                  R$ 497/mês · Renova em 15 Jun 2025
                </p>
              </div>
              <Button variant="outline" size="sm">
                Gerenciar assinatura
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </LightPanel>
    );
  },
  parameters: { backgrounds: { default: "light" } },
};
