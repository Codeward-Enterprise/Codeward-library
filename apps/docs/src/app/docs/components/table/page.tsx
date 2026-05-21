import { CodeBlock } from "@/components/docs/code-block";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Table — Codeward UI" };

export default function TablePage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-3">
        <p
          className="text-sm"
          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
        >
          npx @codeforward/cli add table
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Table
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Tabela de dados responsiva com scroll horizontal automático. Headers em uppercase com
          espaçamento wide, linhas com hover state e suporte a caption para acessibilidade.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Instalação
        </h2>
        <CodeBlock language="bash" code="npx @codeforward/cli add table" />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Uso básico
        </h2>
        <Table>
          <TableCaption>Sprints do Q2 2026</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Sprint</TableHead>
              <TableHead>Período</TableHead>
              <TableHead>Velocity</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Sprint 12", "7–13 abr", "28 pts", "success", "Concluído"],
              ["Sprint 13", "14–20 abr", "31 pts", "success", "Concluído"],
              ["Sprint 14", "12–18 mai", "—", "warning", "Em andamento"],
            ].map(([sprint, period, velocity, variant, status]) => (
              <TableRow key={sprint as string}>
                <TableCell className="font-medium">{sprint}</TableCell>
                <TableCell>{period}</TableCell>
                <TableCell>{velocity}</TableCell>
                <TableCell>
                  <Badge variant={variant as "success" | "warning"} dot>
                    {status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <CodeBlock
          language="tsx"
          code={`import {
  Table, TableHeader, TableBody, TableRow,
  TableHead, TableCell, TableCaption,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

<Table>
  <TableCaption>Sprints do Q2 2026</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Sprint</TableHead>
      <TableHead>Período</TableHead>
      <TableHead>Velocity</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">Sprint 14</TableCell>
      <TableCell>12–18 mai</TableCell>
      <TableCell>—</TableCell>
      <TableCell>
        <Badge variant="warning" dot>Em andamento</Badge>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Com TableFooter
        </h2>
        <CodeBlock
          language="tsx"
          code={`import {
  Table, TableHeader, TableBody, TableFooter,
  TableRow, TableHead, TableCell,
} from "@/components/ui/table";

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Produto</TableHead>
      <TableHead>Qtd</TableHead>
      <TableHead className="text-right">Total</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Plano Pro</TableCell>
      <TableCell>3</TableCell>
      <TableCell className="text-right">R$ 447,00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Plano Starter</TableCell>
      <TableCell>5</TableCell>
      <TableCell className="text-right">R$ 245,00</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={2}>Total</TableCell>
      <TableCell className="text-right">R$ 692,00</TableCell>
    </TableRow>
  </TableFooter>
</Table>`}
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
                {["Componente", "Elemento", "Descrição"].map((h) => (
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
                  "Table",
                  "<table>",
                  "Root — envolvido em <div> com overflow-auto e borda arredondada.",
                ],
                ["TableHeader", "<thead>", "Seção de cabeçalho — fundo muted, border-bottom."],
                [
                  "TableBody",
                  "<tbody>",
                  "Corpo da tabela — fundo background. Última linha sem border.",
                ],
                [
                  "TableFooter",
                  "<tfoot>",
                  "Rodapé da tabela — fundo muted, border-top, font-medium.",
                ],
                [
                  "TableRow",
                  "<tr>",
                  "Linha — hover com fundo muted, suporte a data-state=selected.",
                ],
                [
                  "TableHead",
                  "<th>",
                  "Célula de cabeçalho — uppercase, tracking-wide, cor muted-foreground.",
                ],
                ["TableCell", "<td>", "Célula de dados — padding px-4 py-3, cor foreground."],
                [
                  "TableCaption",
                  "<caption>",
                  "Legenda da tabela — texto xs, cor muted-foreground, alinhado à esquerda.",
                ],
              ].map(([comp, el, desc], i) => (
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
                  <td className="px-4 py-3 border-b" style={{ borderColor: "var(--border)" }}>
                    <code
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.8rem",
                        color: "var(--muted-foreground)",
                      }}
                    >
                      {el}
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
