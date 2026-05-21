import { CodeBlock } from "@/components/docs/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Select" };

export default function SelectPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-2">
        <p
          className="text-sm"
          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
        >
          codeward add select
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Select
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Dropdown de seleção acessível com suporte a grupos, separadores e itens desabilitados.
          Construído sobre{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>@radix-ui/react-select</code>.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Instalação
        </h2>
        <CodeBlock language="bash" code="codeward add select" />
        <CodeBlock language="bash" code="npm install @radix-ui/react-select" />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Exemplo
        </h2>
        <CodeBlock
          language="tsx"
          code={`import {
  Select, SelectTrigger, SelectValue, SelectContent,
  SelectGroup, SelectLabel, SelectItem, SelectSeparator
} from "@/components/ui/select";

<Select>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Selecione o plano" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Planos mensais</SelectLabel>
      <SelectItem value="starter">Starter — R$ 97/mês</SelectItem>
      <SelectItem value="pro">Pro — R$ 497/mês</SelectItem>
      <SelectItem value="enterprise">Enterprise — sob consulta</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Planos anuais</SelectLabel>
      <SelectItem value="starter-anual">Starter Anual — R$ 970/ano</SelectItem>
      <SelectItem value="pro-anual">Pro Anual — R$ 4.970/ano</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>

{/* Controlado */}
<Select value={plan} onValueChange={setPlan}>
  ...
</Select>`}
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
                [
                  "Select",
                  "Root — gerencia o estado. Props: value, defaultValue, onValueChange, disabled",
                ],
                ["SelectTrigger", "Botão que abre o dropdown"],
                ["SelectValue", "Exibe o valor selecionado ou o placeholder"],
                ["SelectContent", "Container do dropdown com posicionamento automático"],
                ["SelectGroup", "Agrupa itens relacionados"],
                ["SelectLabel", "Label do grupo (não selecionável)"],
                ["SelectItem", "Item selecionável. Props: value (obrigatório), disabled"],
                ["SelectSeparator", "Linha divisória entre grupos"],
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
