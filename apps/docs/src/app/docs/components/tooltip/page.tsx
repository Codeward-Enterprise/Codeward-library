import type { Metadata } from "next";
import { CodeBlock } from "@/components/docs/code-block";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const metadata: Metadata = { title: "Tooltip" };

export default function TooltipPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-2">
        <p className="text-sm" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}>
          codeward add tooltip
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Tooltip
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Label flutuante exibida ao passar o mouse. Renderizado via portal para evitar problemas
          de overflow. Construído sobre{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>@radix-ui/react-tooltip</code>.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>Instalação</h2>
        <CodeBlock language="bash" code="codeward add tooltip" />
        <CodeBlock language="bash" code="npm install @radix-ui/react-tooltip" />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>Exemplo</h2>
        <div className="rounded-xl border p-8 flex gap-4 justify-center" style={{ backgroundColor: "var(--background)", borderColor: "var(--border)" }}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover aqui</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Salvar documento</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <CodeBlock
          language="tsx"
          code={`import {
  TooltipProvider, Tooltip,
  TooltipTrigger, TooltipContent
} from "@/components/ui/tooltip";

{/* Adicione TooltipProvider no layout raiz */}
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost" size="icon">
        <SaveIcon />
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Salvar documento</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
        />
        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          Adicione <code style={{ fontFamily: "var(--font-mono)" }}>TooltipProvider</code> uma única
          vez no layout raiz para que múltiplos tooltips compartilhem o delay de abertura.
        </p>
      </section>
    </div>
  );
}
