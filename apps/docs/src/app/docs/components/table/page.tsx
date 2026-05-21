import type { Metadata } from "next";
import { CodeBlock } from "@/components/docs/code-block";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const metadata: Metadata = { title: "Table" };

export default function TablePage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-2">
        <p className="text-sm" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}>
          codeward add table
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Table
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Tabela de dados responsiva com scroll horizontal automático. Headers em uppercase com
          espaçamento wide. Linhas com hover state.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>Instalação</h2>
        <CodeBlock language="bash" code="codeward add table" />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>Exemplo</h2>
        <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
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
                    <Badge variant={variant as "success" | "warning"} dot>{status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <CodeBlock
          language="tsx"
          code={`import {
  Table, TableHeader, TableBody, TableRow,
  TableHead, TableCell, TableCaption
} from "@/components/ui/table";

<Table>
  <TableCaption>Lista de sprints</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Sprint</TableHead>
      <TableHead>Período</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Sprint 14</TableCell>
      <TableCell>12–18 mai</TableCell>
      <TableCell>
        <Badge variant="warning" dot>Em andamento</Badge>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>`}
        />
      </section>
    </div>
  );
}
