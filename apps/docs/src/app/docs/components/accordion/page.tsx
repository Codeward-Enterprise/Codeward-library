import { CodeBlock } from "@/components/docs/code-block";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Accordion" };

export default function AccordionPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-2">
        <p
          className="text-sm"
          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
        >
          codeward add accordion
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Accordion
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Seções colapsáveis com animação suave. Construído sobre{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>@radix-ui/react-accordion</code> —
          totalmente acessível com suporte a teclado e ARIA.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Instalação
        </h2>
        <CodeBlock language="bash" code="codeward add accordion" />
        <CodeBlock language="bash" code="npm install @radix-ui/react-accordion" />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Exemplo
        </h2>
        <div
          className="rounded-xl border p-6"
          style={{ backgroundColor: "var(--background)", borderColor: "var(--border)" }}
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Como funciona o modelo de componentes?</AccordionTrigger>
              <AccordionContent>
                Os componentes são copiados diretamente para o seu projeto via CLI. Você recebe o
                código-fonte e pode modificar livremente — sem necessidade de fork.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Quais pacotes preciso instalar?</AccordionTrigger>
              <AccordionContent>
                Os pacotes base são{" "}
                <code style={{ fontFamily: "var(--font-mono)" }}>@codeforward/tokens</code>,{" "}
                <code style={{ fontFamily: "var(--font-mono)" }}>@codeforward/utils</code> e{" "}
                <code style={{ fontFamily: "var(--font-mono)" }}>@codeforward/hooks</code>. Os
                componentes têm peers específicos por componente.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Posso usar sem Tailwind CSS?</AccordionTrigger>
              <AccordionContent>
                Os componentes usam Tailwind CSS v4 com as variáveis CSS dos tokens. Sem Tailwind,
                você precisaria reescrever os estilos manualmente.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <CodeBlock
          language="tsx"
          code={`import {
  Accordion, AccordionItem,
  AccordionTrigger, AccordionContent
} from "@/components/ui/accordion";

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Como funciona?</AccordionTrigger>
    <AccordionContent>
      Os componentes são copiados para o seu projeto via CLI.
    </AccordionContent>
  </AccordionItem>
</Accordion>

{/* Múltiplos abertos ao mesmo tempo */}
<Accordion type="multiple">
  <AccordionItem value="item-1">...</AccordionItem>
  <AccordionItem value="item-2">...</AccordionItem>
</Accordion>`}
        />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Props principais
        </h2>
        <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "var(--border)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "var(--muted)" }}>
                {["Componente", "Prop", "Tipo", "Descrição"].map((h) => (
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
                  "Accordion",
                  "type",
                  '"single" | "multiple"',
                  "single: um item aberto por vez. multiple: vários simultâneos",
                ],
                [
                  "Accordion",
                  "collapsible",
                  "boolean",
                  "Permite fechar o item aberto (somente type=single)",
                ],
                [
                  "Accordion",
                  "defaultValue",
                  "string | string[]",
                  "Item(s) aberto(s) por padrão (não controlado)",
                ],
                ["AccordionItem", "value", "string *", "Identificador único do item"],
              ].map(([comp, prop, type, desc], i) => (
                <tr
                  key={`${comp}-${prop}`}
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
                    <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
                      {prop}
                    </code>
                  </td>
                  <td className="px-4 py-3 border-b" style={{ borderColor: "var(--border)" }}>
                    <code
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.8rem",
                        color: "var(--color-mint-600)",
                      }}
                    >
                      {type}
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
