import { CodeBlock } from "@/components/docs/code-block";
import { Preview } from "@/components/docs/preview";
import { PropTable } from "@/components/docs/prop-table";
import { Switch } from "@/components/ui/switch";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Switch — Codeward UI" };

const switchProps = [
  {
    name: "label",
    type: "string",
    default: "—",
    description: "Label exibida ao lado do switch. Clicar na label também alterna o estado.",
  },
  {
    name: "description",
    type: "string",
    default: "—",
    description: "Texto auxiliar exibido abaixo da label.",
  },
  {
    name: "checked",
    type: "boolean",
    default: "—",
    description: "Estado controlado. Use com onCheckedChange.",
  },
  {
    name: "defaultChecked",
    type: "boolean",
    default: "false",
    description: "Estado inicial no modo não-controlado.",
  },
  {
    name: "onCheckedChange",
    type: "(checked: boolean) => void",
    default: "—",
    description: "Callback chamado ao alternar o estado.",
  },
  { name: "disabled", type: "boolean", default: "false", description: "Desabilita o switch." },
  {
    name: "id",
    type: "string",
    default: "—",
    description: "ID do elemento — gerado automaticamente se omitido.",
  },
];

export default function SwitchPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-3">
        <p
          className="text-sm"
          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
        >
          npx @codeforward/cli add switch
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Switch
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Toggle para valores booleanos. Usa Mint 500 (
          <code style={{ fontFamily: "var(--font-mono)" }}>var(--cta)</code>) quando ativado —
          seguindo a regra dos 10% da paleta. Construído com{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>role="switch"</code> e{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>aria-checked</code>.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Instalação
        </h2>
        <CodeBlock language="bash" code="npx @codeforward/cli add switch" />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Uso básico
        </h2>
        <Preview>
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Switch label="Notificações por e-mail" />
            <Switch
              label="Modo escuro"
              description="Altera o tema da interface para todos os dispositivos."
              defaultChecked
            />
            <Switch label="Sincronização automática" defaultChecked />
          </div>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`import { Switch } from "@/components/ui/switch";

<Switch label="Notificações por e-mail" />

<Switch
  label="Modo escuro"
  description="Altera o tema da interface para todos os dispositivos."
  defaultChecked
/>

<Switch label="Sincronização automática" defaultChecked />`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Estado desabilitado
        </h2>
        <Preview>
          <div className="flex flex-col gap-4">
            <Switch label="Opção desabilitada" disabled />
            <Switch label="Ativo e desabilitado" defaultChecked disabled />
          </div>
        </Preview>
        <CodeBlock
          language="tsx"
          code={`<Switch label="Opção desabilitada" disabled />
<Switch label="Ativo e desabilitado" defaultChecked disabled />`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Modo controlado
        </h2>
        <CodeBlock
          language="tsx"
          code={`"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";

export function NotificationSettings() {
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [smsEnabled, setSmsEnabled] = useState(false);

  return (
    <div className="space-y-4">
      <Switch
        label="Notificações por e-mail"
        checked={emailEnabled}
        onCheckedChange={setEmailEnabled}
      />
      <Switch
        label="Notificações por SMS"
        description="Mensagens de texto para alertas críticos."
        checked={smsEnabled}
        onCheckedChange={setSmsEnabled}
      />
      <p>Status: e-mail={String(emailEnabled)}, sms={String(smsEnabled)}</p>
    </div>
  );
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Em página de configurações
        </h2>
        <CodeBlock
          language="tsx"
          code={`{/* Painel de preferências */}
<div className="space-y-1">
  <h3 className="text-sm font-medium">Notificações</h3>
  <p className="text-xs text-muted-foreground mb-4">
    Gerencie como você quer ser notificado.
  </p>
  <div className="space-y-4 divide-y">
    <Switch
      label="Atualizações do produto"
      description="Novidades e lançamentos."
      defaultChecked
    />
    <div className="pt-4">
      <Switch
        label="Relatórios semanais"
        description="Resumo toda segunda-feira."
      />
    </div>
    <div className="pt-4">
      <Switch
        label="Alertas de segurança"
        description="Logins e alterações de senha."
        defaultChecked
        disabled
      />
    </div>
  </div>
</div>`}
        />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Props
        </h2>
        <PropTable props={switchProps} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Acessibilidade
        </h2>
        <div
          className="rounded-xl border p-4 space-y-3 text-sm"
          style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
        >
          {[
            ["Space / Enter", "Alterna o estado do switch em foco"],
            ["Tab", "Move o foco para o próximo elemento interativo"],
            ["Shift + Tab", "Move o foco para o elemento anterior"],
          ].map(([key, action]) => (
            <div key={key} className="flex items-center gap-4">
              <code
                className="px-2 py-0.5 rounded text-xs shrink-0"
                style={{
                  backgroundColor: "var(--muted)",
                  color: "var(--foreground)",
                  fontFamily: "var(--font-mono)",
                  border: "1px solid var(--border)",
                }}
              >
                {key}
              </code>
              <span>{action}</span>
            </div>
          ))}
        </div>
        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          O componente usa <code style={{ fontFamily: "var(--font-mono)" }}>role="switch"</code> e{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>aria-checked</code>. Leitores de tela
          anunciam o estado atual como "ligado" ou "desligado".
        </p>
      </section>
    </div>
  );
}
