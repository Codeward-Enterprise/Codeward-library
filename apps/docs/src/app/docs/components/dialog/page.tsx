import { CodeBlock } from "@/components/docs/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Dialog" };

export default function DialogPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-2">
        <p
          className="text-sm"
          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
        >
          codeward add dialog
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Dialog
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Modal para interações focadas. Overlay com blur, animações de entrada/saída e botão de
          fechar automático. Construído sobre{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>@radix-ui/react-dialog</code>.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Instalação
        </h2>
        <CodeBlock language="bash" code="codeward add dialog" />
        <CodeBlock language="bash" code="npm install @radix-ui/react-dialog" />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Exemplo
        </h2>
        <CodeBlock
          language="tsx"
          code={`import {
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogTitle, DialogDescription,
  DialogFooter, DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Abrir modal</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirmar exclusão</DialogTitle>
      <DialogDescription>
        Esta ação não pode ser desfeita. O projeto será removido permanentemente.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="ghost">Cancelar</Button>
      </DialogClose>
      <Button variant="destructive">Excluir projeto</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Sub-componentes
        </h2>
        <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "var(--border)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "var(--muted)" }}>
                {["Componente", "Descrição"].map((h) => (
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
                ["Dialog", "Root — gerencia o estado aberto/fechado"],
                ["DialogTrigger", "Elemento que abre o dialog (use asChild para botões)"],
                ["DialogContent", "Container do modal com overlay, animações e botão ×"],
                ["DialogHeader", "Área de título e descrição"],
                ["DialogTitle", "Título do modal (obrigatório para acessibilidade)"],
                ["DialogDescription", "Texto descritivo do modal"],
                ["DialogFooter", "Área de ações — alinha botões à direita"],
                ["DialogClose", "Elemento que fecha o dialog (use asChild para botões)"],
              ].map(([comp, desc], i) => (
                <tr
                  key={comp as string}
                  style={{ backgroundColor: i % 2 === 0 ? "var(--background)" : "var(--muted)" }}
                >
                  <td className="px-4 py-3 border-b" style={{ borderColor: "var(--border)" }}>
                    <code
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.8rem",
                        color: "var(--primary)",
                      }}
                    >
                      {comp}
                    </code>
                  </td>
                  <td
                    className="px-4 py-3 border-b"
                    style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
                  >
                    {desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
