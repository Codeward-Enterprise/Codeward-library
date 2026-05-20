import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip";

const Panel = ({ children }: { children: React.ReactNode }) => (
  <TooltipProvider>
    <div
      style={{
        background: "#252528",
        padding: "3rem",
        borderRadius: "12px",
        border: "1px solid #333337",
        display: "flex",
        gap: "16px",
        flexWrap: "wrap" as const,
        alignItems: "center",
      }}
    >
      {children}
    </div>
  </TooltipProvider>
);

const SettingsIcon = () => (
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
const TrashIcon = () => (
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
const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect x="5" y="5" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M3 11V3h8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" },
    docs: {
      description: {
        component:
          "Tooltip acessível via Radix UI. Envolva sua aplicação com `TooltipProvider` (uma vez, no root).",
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Padrão",
  render: () => (
    <Panel>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="primary">Hover em mim</Button>
        </TooltipTrigger>
        <TooltipContent>Ação principal do sistema</TooltipContent>
      </Tooltip>
    </Panel>
  ),
};
export const Positions: Story = {
  name: "Posições",
  render: () => (
    <Panel>
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger asChild>
            <Button variant="secondary" size="sm">
              {side}
            </Button>
          </TooltipTrigger>
          <TooltipContent side={side}>Tooltip {side}</TooltipContent>
        </Tooltip>
      ))}
    </Panel>
  ),
};
export const IconButtons: Story = {
  name: "Exemplo — Botões de ação",
  render: () => (
    <Panel>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <CopyIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Copiar</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <SettingsIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Configurações</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" style={{ color: "#EF4444" }}>
            <TrashIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Deletar projeto</TooltipContent>
      </Tooltip>
    </Panel>
  ),
};
