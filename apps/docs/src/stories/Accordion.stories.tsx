import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const LightPanel = ({
  children,
  width = "520px",
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
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "light" },
    docs: {
      description: {
        component:
          'Seções colapsáveis via Radix UI. Use `type="single"` (apenas uma aberta por vez) ou `type="multiple"` (várias simultâneas).',
      },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  name: "Single — uma por vez",
  render: () => (
    <LightPanel>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Como funciona o trial gratuito?</AccordionTrigger>
          <AccordionContent>
            O trial tem duração de 14 dias com acesso completo ao plano Pro. Não é necessário cartão
            de crédito para começar. Ao final do período, você escolhe continuar com um plano pago
            ou migrar para o gratuito.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Posso trocar de plano depois?</AccordionTrigger>
          <AccordionContent>
            Sim. Você pode fazer upgrade ou downgrade a qualquer momento. A cobrança é proporcional
            ao tempo restante do ciclo atual.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Qual é a política de reembolso?</AccordionTrigger>
          <AccordionContent>
            Oferecemos reembolso integral em até 7 dias após qualquer cobrança, sem perguntas. Basta
            entrar em contato com o suporte.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Vocês oferecem desconto para startups?</AccordionTrigger>
          <AccordionContent>
            Sim. Temos um programa especial para startups em early stage com até 50% de desconto.
            Entre em contato via contato@codeward.com.br.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </LightPanel>
  ),
  parameters: { backgrounds: { default: "light" } },
};

export const Multiple: Story = {
  name: "Multiple — várias abertas",
  render: () => (
    <LightPanel>
      <Accordion type="multiple">
        <AccordionItem value="infra">
          <AccordionTrigger>Infraestrutura</AccordionTrigger>
          <AccordionContent>
            Hospedagem em AWS com redundância multi-AZ. SLA de 99,9% garantido em contrato.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="security">
          <AccordionTrigger>Segurança e conformidade</AccordionTrigger>
          <AccordionContent>
            Dados criptografados em trânsito (TLS 1.3) e em repouso (AES-256). Conformidade com LGPD
            e SOC 2 Type II em andamento.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="backup">
          <AccordionTrigger>Backup e recuperação</AccordionTrigger>
          <AccordionContent>
            Backups automáticos diários com retenção de 30 dias. RTO de 4 horas e RPO de 24 horas.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </LightPanel>
  ),
  parameters: { backgrounds: { default: "light" } },
};

export const DefaultOpen: Story = {
  name: "Com item aberto por padrão",
  render: () => (
    <LightPanel>
      <Accordion type="single" defaultValue="item-1" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>O que está incluído no plano Pro?</AccordionTrigger>
          <AccordionContent>
            Deployments ilimitados, 10 ambientes de staging, suporte prioritário via Slack,
            analytics avançado, SSO e acesso à API com rate limit de 10.000 req/min.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Como funciona o suporte?</AccordionTrigger>
          <AccordionContent>
            Plano Pro inclui suporte via Slack com SLA de 4 horas em dias úteis. Plano Enterprise
            tem suporte 24/7 com SLA de 1 hora.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </LightPanel>
  ),
  parameters: { backgrounds: { default: "light" } },
};
