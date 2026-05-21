import { CodeBlock } from "@/components/docs/code-block";
import { PropTable } from "@/components/docs/prop-table";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Toast" };

const props = [
  {
    name: "variant",
    type: '"default" | "success" | "warning" | "destructive"',
    default: '"default"',
    description: "Estilo visual — cada variante exibe um ícone automático",
  },
  { name: "open", type: "boolean", description: "Estado controlado de visibilidade" },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Callback ao mudar visibilidade",
  },
  {
    name: "duration",
    type: "number",
    default: "5000",
    description: "Tempo em ms antes de fechar automaticamente",
  },
];

export default function ToastPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-2">
        <p
          className="text-sm"
          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
        >
          codeward add toast
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Toast
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Notificação não-bloqueante com fechamento automático e suporte a swipe. Cada variante
          exibe um ícone automático. Construído sobre{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>@radix-ui/react-toast</code>.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Instalação
        </h2>
        <CodeBlock language="bash" code="codeward add toast" />
        <CodeBlock
          language="bash"
          code="npm install @radix-ui/react-toast class-variance-authority"
        />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Setup
        </h2>
        <p style={{ color: "var(--muted-foreground)" }}>
          Adicione o <code style={{ fontFamily: "var(--font-mono)" }}>ToastProvider</code> e{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>ToastViewport</code> no layout raiz:
        </p>
        <CodeBlock
          filename="src/app/layout.tsx"
          language="tsx"
          code={`import { ToastProvider, ToastViewport } from "@/components/ui/toast";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ToastProvider>
          {children}
          <ToastViewport />
        </ToastProvider>
      </body>
    </html>
  );
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Uso
        </h2>
        <CodeBlock
          language="tsx"
          code={`import { Toast, ToastTitle, ToastDescription } from "@/components/ui/toast";
import { useState } from "react";

function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Salvar</Button>

      <Toast open={open} onOpenChange={setOpen} variant="success">
        <ToastTitle>Salvo com sucesso</ToastTitle>
        <ToastDescription>As alterações foram aplicadas.</ToastDescription>
      </Toast>
    </>
  );
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Variantes
        </h2>
        <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "var(--border)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "var(--muted)" }}>
                {["Variante", "Ícone", "Uso"].map((h) => (
                  <th
                    key={h}
                    className="text-left px-4 py-3 text-xs font-medium uppercase tracking-widest border-b"
                    style={{ color: "var(--muted-foreground)", borderColor: "var(--border)" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["default", "ℹ info (Mint)", "Informações gerais"],
                ["success", "✓ checkmark (verde)", "Ação concluída com sucesso"],
                ["warning", "⚠ alerta (laranja)", "Atenção necessária"],
                ["destructive", "✕ erro (vermelho)", "Erro ou falha crítica"],
              ].map(([variant, icon, use], i) => (
                <tr
                  key={variant as string}
                  style={{ backgroundColor: i % 2 === 0 ? "var(--background)" : "var(--muted)" }}
                >
                  <td className="px-4 py-3 border-b" style={{ borderColor: "var(--border)" }}>
                    <code style={{ fontFamily: "var(--font-mono)", color: "var(--primary)" }}>
                      {variant}
                    </code>
                  </td>
                  <td
                    className="px-4 py-3 border-b"
                    style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
                  >
                    {icon}
                  </td>
                  <td
                    className="px-4 py-3 border-b"
                    style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
                  >
                    {use}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Props — Toast
        </h2>
        <PropTable props={props} />
      </section>
    </div>
  );
}
