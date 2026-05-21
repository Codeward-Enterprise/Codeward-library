import { CodeBlock } from "@/components/docs/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Utils" };

export default function UtilsPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-2">
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Utils
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Utilitários do pacote{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>@codeforward/utils</code>: merge de
          classes Tailwind e formatadores/validadores para o mercado brasileiro.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          cn()
        </h2>
        <p style={{ color: "var(--muted-foreground)" }}>
          Merge seguro de classes Tailwind CSS. Combina{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>clsx</code> com{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>tailwind-merge</code> para resolver
          conflitos de classes.
        </p>
        <CodeBlock
          language="tsx"
          code={`import { cn } from "@codeforward/utils";

// Merge de classes condicionais
cn("px-4 py-2", isActive && "bg-primary text-white")

// Resolução de conflito (px-4 vence sobre px-2)
cn("px-2 py-1", "px-4") // → "py-1 px-4"

// Uso em componentes
function Button({ className, ...props }) {
  return (
    <button
      className={cn("rounded-lg font-medium", className)}
      {...props}
    />
  );
}`}
        />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Formatadores
        </h2>

        {[
          {
            name: "formatCPF(value: string): string",
            desc: "Formata CPF no padrão XXX.XXX.XXX-XX",
            code: `import { formatCPF } from "@codeforward/utils";

formatCPF("12345678901")   // "123.456.789-01"
formatCPF("123.456.789-01") // "123.456.789-01" (idempotente)`,
          },
          {
            name: "formatCNPJ(value: string): string",
            desc: "Formata CNPJ no padrão XX.XXX.XXX/XXXX-XX",
            code: `formatCNPJ("12345678000195") // "12.345.678/0001-95"`,
          },
          {
            name: "formatPhone(value: string): string",
            desc: "Formata telefone brasileiro — (XX) XXXX-XXXX ou (XX) XXXXX-XXXX",
            code: `formatPhone("11987654321") // "(11) 98765-4321"
formatPhone("1133334444")  // "(11) 3333-4444"`,
          },
          {
            name: "formatCurrency(value: number, options?): string",
            desc: "Formata valor monetário em BRL (pt-BR)",
            code: `formatCurrency(1000)        // "R$ 1.000,00"
formatCurrency(49.9)        // "R$ 49,90"
formatCurrency(1234567.89)  // "R$ 1.234.567,89"`,
          },
          {
            name: "formatDate(value: Date | string, options?): string",
            desc: "Formata data em pt-BR — padrão DD/MM/YYYY",
            code: `formatDate(new Date("2026-05-20")) // "20/05/2026"
formatDate("2026-05-20", { dateStyle: "long" }) // "20 de maio de 2026"`,
          },
        ].map(({ name, desc, code }) => (
          <div key={name} className="space-y-2">
            <div>
              <code
                className="text-sm font-medium"
                style={{ color: "var(--primary)", fontFamily: "var(--font-mono)" }}
              >
                {name}
              </code>
              <p className="mt-1 text-sm" style={{ color: "var(--muted-foreground)" }}>
                {desc}
              </p>
            </div>
            <CodeBlock language="ts" code={code} />
          </div>
        ))}
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Validadores
        </h2>
        {[
          { name: "isCPF(value: string): boolean", desc: "Valida CPF com dígitos verificadores" },
          { name: "isCNPJ(value: string): boolean", desc: "Valida CNPJ com dígitos verificadores" },
          {
            name: "isPhone(value: string): boolean",
            desc: "Valida telefone celular ou fixo (10 ou 11 dígitos)",
          },
          { name: "isEmail(value: string): boolean", desc: "Validação básica de e-mail via regex" },
          {
            name: "isCEP(value: string): boolean",
            desc: "Valida CEP brasileiro (XXXXX-XXX ou XXXXXXX)",
          },
        ].map(({ name, desc }, i) => (
          <div
            key={name}
            className="flex gap-4 items-start p-3 rounded-lg"
            style={{
              backgroundColor: i % 2 === 0 ? "var(--muted)" : "var(--background)",
              border: "1px solid var(--border)",
            }}
          >
            <code
              className="shrink-0 text-sm"
              style={{ color: "var(--primary)", fontFamily: "var(--font-mono)" }}
            >
              {name}
            </code>
            <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              {desc}
            </span>
          </div>
        ))}
        <CodeBlock
          language="ts"
          code={`import { isCPF, isCNPJ, isPhone, isEmail, isCEP } from "@codeforward/utils";

isCPF("123.456.789-01")          // false (inválido)
isCPF("529.982.247-25")          // true
isCNPJ("12.345.678/0001-95")     // depende dos dígitos verificadores
isPhone("(11) 98765-4321")       // true
isEmail("vitor@codeward.com.br") // true
isCEP("01310-100")               // true`}
        />
      </section>
    </div>
  );
}
