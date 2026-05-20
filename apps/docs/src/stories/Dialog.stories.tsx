import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2 4h12M5 4V2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V4M6 7v5M10 7v5M3 4l1 9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1l1-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Panel = ({ children }: { children: React.ReactNode }) => (
  <div style={{ background: "#252528", padding: "2.5rem", borderRadius: "12px", border: "1px solid #333337", display: "flex", gap: "12px", flexWrap: "wrap" as const }}>
    {children}
  </div>
);

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" },
    docs: {
      description: {
        component: "Modal acessível via Radix UI. Composto por `Dialog`, `DialogTrigger`, `DialogContent`, `DialogHeader`, `DialogTitle`, `DialogDescription`, `DialogFooter` e `DialogClose`.",
      },
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Confirm: Story = {
  name: "Confirmação simples",
  render: () => (
    <Panel>
      <Dialog>
        <DialogTrigger asChild><Button variant="primary">Abrir confirmação</Button></DialogTrigger>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Confirmar ação</DialogTitle>
            <DialogDescription>Tem certeza que deseja prosseguir? Essa ação não pode ser desfeita.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild><Button variant="ghost" size="sm">Cancelar</Button></DialogClose>
            <Button variant="primary" size="sm">Confirmar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Panel>
  ),
};

export const Destructive: Story = {
  name: "Ação destrutiva",
  render: () => (
    <Panel>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive"><TrashIcon /> Deletar projeto</Button>
        </DialogTrigger>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Deletar projeto</DialogTitle>
            <DialogDescription>
              Essa ação é permanente. O projeto <strong>api-gateway</strong> e todos os seus dados serão removidos imediatamente.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild><Button variant="ghost" size="sm">Cancelar</Button></DialogClose>
            <Button variant="destructive" size="sm"><TrashIcon /> Deletar permanentemente</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Panel>
  ),
};

export const WithForm: Story = {
  name: "Com formulário",
  render: () => {
    const EnvelopeIcon = () => (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 6l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
    const UserIcon = () => (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 15c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
    return (
      <Panel>
        <Dialog>
          <DialogTrigger asChild><Button variant="cta">Convidar membro</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Convidar para o time</DialogTitle>
              <DialogDescription>Envie um convite por e-mail. O acesso é liberado assim que o usuário aceitar.</DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4 py-2">
              <Input label="Nome" placeholder="João Silva" icon={<UserIcon />} />
              <Input label="E-mail" placeholder="joao@empresa.com" type="email" icon={<EnvelopeIcon />} />
            </div>
            <DialogFooter>
              <DialogClose asChild><Button variant="ghost" size="sm">Cancelar</Button></DialogClose>
              <Button variant="cta" size="sm">Enviar convite</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Panel>
    );
  },
};
