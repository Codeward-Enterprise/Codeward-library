import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "../components/ui/toast";

const Panel = ({ children }: { children: React.ReactNode }) => (
  <div style={{ background: "#252528", padding: "2.5rem", borderRadius: "12px", border: "1px solid #333337", display: "flex", gap: "12px", flexWrap: "wrap" as const, minHeight: "120px", alignItems: "center" }}>
    {children}
  </div>
);

const meta = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" },
    docs: {
      description: {
        component: "Notificação temporária via Radix UI Toast. Surge no canto inferior direito, tem swipe-to-dismiss e é totalmente acessível. Envolva o app com `ToastProvider` e adicione `ToastViewport` no root.",
      },
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Individual variant demos ───────────────────────────────────────────────────
const ToastDemo = ({ variant, title, description, actionLabel }: {
  variant: "default" | "success" | "warning" | "destructive";
  title: string;
  description: string;
  actionLabel?: string;
}) => {
  const [open, setOpen] = useState(false);
  const labels = {
    default: "Mostrar info",
    success: "Mostrar sucesso",
    warning: "Mostrar alerta",
    destructive: "Mostrar erro",
  };
  const buttonVariants = {
    default: "primary" as const,
    success: "secondary" as const,
    warning: "secondary" as const,
    destructive: "destructive" as const,
  };
  return (
    <ToastProvider swipeDirection="right">
      <Button variant={buttonVariants[variant]} size="sm" onClick={() => setOpen(true)}>
        {labels[variant]}
      </Button>
      <Toast variant={variant} open={open} onOpenChange={setOpen} duration={5000}>
        <div className="flex-1">
          <ToastTitle>{title}</ToastTitle>
          <ToastDescription>{description}</ToastDescription>
        </div>
        {actionLabel && (
          <ToastAction altText={actionLabel} onClick={() => setOpen(false)}>
            {actionLabel}
          </ToastAction>
        )}
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
};

export const Default: Story = {
  name: "Informação",
  render: () => (
    <Panel>
      <ToastDemo
        variant="default"
        title="Atualização disponível"
        description="Uma nova versão da plataforma está disponível."
        actionLabel="Ver novidades"
      />
    </Panel>
  ),
};

export const Success: Story = {
  name: "Sucesso",
  render: () => (
    <Panel>
      <ToastDemo
        variant="success"
        title="Deploy concluído"
        description="api-gateway v2.4.1 publicado em produção com sucesso."
        actionLabel="Ver logs"
      />
    </Panel>
  ),
};

export const Warning: Story = {
  name: "Alerta",
  render: () => (
    <Panel>
      <ToastDemo
        variant="warning"
        title="Performance degradada"
        description="Worker queue com backlog de 1.247 jobs. Verifique os workers."
        actionLabel="Investigar"
      />
    </Panel>
  ),
};

export const Destructive: Story = {
  name: "Erro",
  render: () => (
    <Panel>
      <ToastDemo
        variant="destructive"
        title="Falha no deploy"
        description="auth-service: build falhou na etapa de testes de integração."
        actionLabel="Ver detalhes"
      />
    </Panel>
  ),
};

export const AllVariants: Story = {
  name: "Todas as variantes",
  render: () => (
    <Panel>
      <ToastDemo variant="default" title="Info" description="Atualização disponível." />
      <ToastDemo variant="success" title="Sucesso" description="Deploy concluído." actionLabel="Ver logs" />
      <ToastDemo variant="warning" title="Alerta" description="Performance degradada." />
      <ToastDemo variant="destructive" title="Erro" description="Falha no deploy." actionLabel="Ver detalhes" />
    </Panel>
  ),
};
