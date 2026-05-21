import { colors } from "@codeforward/tokens";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Design Tokens" };

function ColorSwatch({
  label,
  hex,
  tag,
}: { label: string; hex: string; tag?: string | undefined }) {
  return (
    <div className="space-y-2">
      <div
        className="h-14 rounded-lg border"
        style={{ backgroundColor: hex, borderColor: "rgba(0,0,0,0.08)" }}
      />
      <div>
        <p
          className="text-xs font-medium"
          style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
        >
          {label}
          {tag && (
            <span
              className="ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full"
              style={{ backgroundColor: "var(--cta)", color: "var(--primary)", fontWeight: 500 }}
            >
              {tag}
            </span>
          )}
        </p>
        <p
          className="text-[11px] font-mono"
          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
        >
          {hex}
        </p>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2
        className="text-xl font-medium"
        style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function TokensPage() {
  return (
    <div className="space-y-12" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-2">
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Design Tokens
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Todos os tokens são exportados pelo pacote{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>@codeforward/tokens</code> como objetos
          JavaScript e variáveis CSS. A regra de uso é{" "}
          <strong style={{ fontWeight: 500 }}>60% Navy · 30% Neutral · 10% Mint</strong>.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      {/* Colors */}
      <Section title="Cores">
        <div
          className="rounded-xl p-6 border space-y-8"
          style={{ backgroundColor: "var(--background)", borderColor: "var(--border)" }}
        >
          {/* Navy */}
          <div>
            <div className="flex items-baseline gap-2 mb-4">
              <p
                className="text-xs font-medium uppercase tracking-widest"
                style={{ color: "var(--muted-foreground)" }}
              >
                Navy
              </p>
              <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                — cor primária da marca
              </span>
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-3">
              {([50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const).map((shade) => (
                <ColorSwatch
                  key={shade}
                  label={`${shade}`}
                  hex={colors.navy[shade]}
                  tag={shade === 700 ? "primary" : undefined}
                />
              ))}
            </div>
          </div>

          {/* Mint */}
          <div>
            <div className="flex items-baseline gap-2 mb-4">
              <p
                className="text-xs font-medium uppercase tracking-widest"
                style={{ color: "var(--muted-foreground)" }}
              >
                Mint
              </p>
              <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                — reservado para CTAs (regra dos 10%)
              </span>
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-9 gap-3">
              {([50, 100, 200, 300, 400, 500, 600, 700, 800] as const).map((shade) => (
                <ColorSwatch
                  key={shade}
                  label={`${shade}`}
                  hex={colors.mint[shade]}
                  tag={shade === 500 ? "cta" : undefined}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className="rounded-xl p-4 border"
          style={{ backgroundColor: "var(--muted)", borderColor: "var(--border)" }}
        >
          <p className="text-sm font-medium mb-3" style={{ color: "var(--foreground)" }}>
            Uso via JavaScript
          </p>
          <pre
            className="text-sm overflow-x-auto"
            style={{ fontFamily: "var(--font-mono)", color: "var(--foreground)", margin: 0 }}
          >
            <code>{`import { colors } from "@codeforward/tokens";

colors.navy[700]  // "#0A2540"
colors.mint[500]  // "#00D4B8"`}</code>
          </pre>
        </div>

        <div
          className="rounded-xl p-4 border"
          style={{ backgroundColor: "var(--muted)", borderColor: "var(--border)" }}
        >
          <p className="text-sm font-medium mb-3" style={{ color: "var(--foreground)" }}>
            Uso via CSS Variables
          </p>
          <pre
            className="text-sm overflow-x-auto"
            style={{ fontFamily: "var(--font-mono)", color: "var(--foreground)", margin: 0 }}
          >
            <code>{`/* após importar @codeforward/tokens/styles */
var(--primary)          /* Navy 700 — #0A2540 */
var(--cta)              /* Mint 500 — #00D4B8 */
var(--background)       /* White */
var(--foreground)       /* Neutral 900 */
var(--muted)            /* Neutral 50 */
var(--muted-foreground) /* Neutral 500 */
var(--border)           /* Neutral 200 */
var(--ring)             /* Mint 500 (focus) */`}</code>
          </pre>
        </div>
      </Section>

      <hr style={{ borderColor: "var(--border)" }} />

      {/* Typography */}
      <Section title="Tipografia">
        <div
          className="rounded-xl p-6 border space-y-6"
          style={{ backgroundColor: "var(--background)", borderColor: "var(--border)" }}
        >
          {[
            {
              label: "Display · 48px · weight 500",
              size: "48px",
              weight: 500,
              text: "Construímos para escalar",
              font: "sans",
            },
            {
              label: "Heading · 32px · weight 500",
              size: "32px",
              weight: 500,
              text: "Entregamos o MVP",
              font: "sans",
            },
            {
              label: "Body · 16px · weight 400",
              size: "16px",
              weight: 400,
              text: "Code review em todo PR. Status diário. Você sabe o que acontece em cada sprint.",
              font: "sans",
            },
            {
              label: "Caption · 14px · weight 400",
              size: "14px",
              weight: 400,
              text: "Atualizado há 2 horas · Sprint 14",
              font: "sans",
              opacity: 0.5,
            },
            {
              label: "Mono · JetBrains Mono · 14px",
              size: "14px",
              weight: 400,
              text: "pnpm add @codeforward/tokens",
              font: "mono",
            },
          ].map(({ label, size, weight, text, font, opacity }) => (
            <div key={label} className="space-y-1">
              <p
                className="text-xs uppercase tracking-widest"
                style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
              >
                {label}
              </p>
              <p
                style={{
                  fontSize: size,
                  fontWeight: weight,
                  fontFamily: font === "mono" ? "var(--font-mono)" : "var(--font-sans)",
                  color: `rgba(26,26,26,${opacity ?? 1})`,
                  lineHeight: 1.3,
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>

        <div
          className="rounded-xl p-4 border"
          style={{ backgroundColor: "var(--muted)", borderColor: "var(--border)" }}
        >
          <p className="text-sm font-medium mb-3" style={{ color: "var(--foreground)" }}>
            Importar fontes (Next.js)
          </p>
          <pre
            className="text-sm overflow-x-auto"
            style={{ fontFamily: "var(--font-mono)", color: "var(--foreground)", margin: 0 }}
          >
            <code>{`import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-jetbrains" });

// no layout.tsx:
<html className={\`\${inter.variable} \${mono.variable}\`}>`}</code>
          </pre>
        </div>
      </Section>

      <hr style={{ borderColor: "var(--border)" }} />

      {/* Spacing */}
      <Section title="Espaçamento">
        <div
          className="rounded-xl p-6 border"
          style={{ backgroundColor: "var(--background)", borderColor: "var(--border)" }}
        >
          <div className="space-y-2">
            {[
              [1, "4px"],
              [2, "8px"],
              [3, "12px"],
              [4, "16px"],
              [5, "20px"],
              [6, "24px"],
              [8, "32px"],
              [10, "40px"],
              [12, "48px"],
              [16, "64px"],
            ].map(([key, value]) => (
              <div key={key} className="flex items-center gap-4">
                <code
                  className="text-xs w-8 text-right shrink-0"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--muted-foreground)" }}
                >
                  {key}
                </code>
                <div
                  className="rounded"
                  style={{
                    width: value as string,
                    height: "20px",
                    backgroundColor: "var(--primary)",
                    opacity: 0.7,
                    flexShrink: 0,
                  }}
                />
                <span
                  className="text-xs"
                  style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <hr style={{ borderColor: "var(--border)" }} />

      {/* Radii */}
      <Section title="Border Radius">
        <div
          className="rounded-xl p-6 border"
          style={{ backgroundColor: "var(--background)", borderColor: "var(--border)" }}
        >
          <div className="flex flex-wrap gap-6">
            {[
              ["none", "0px"],
              ["sm", "2px"],
              ["DEFAULT", "4px"],
              ["md", "6px"],
              ["lg", "8px"],
              ["xl", "12px"],
              ["2xl", "16px"],
              ["3xl", "24px"],
              ["full", "9999px"],
            ].map(([name, value]) => (
              <div key={name} className="flex flex-col items-center gap-2">
                <div
                  className="w-16 h-16 border-2"
                  style={{
                    borderRadius: value as string,
                    borderColor: "var(--primary)",
                    backgroundColor: "var(--color-navy-50)",
                  }}
                />
                <div className="text-center">
                  <p
                    className="text-xs font-medium"
                    style={{ color: "var(--foreground)", fontFamily: "var(--font-mono)" }}
                  >
                    {name}
                  </p>
                  <p
                    className="text-[11px]"
                    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
                  >
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <hr style={{ borderColor: "var(--border)" }} />

      {/* Shadows */}
      <Section title="Sombras">
        <div
          className="rounded-xl p-6 border"
          style={{ backgroundColor: "var(--muted)", borderColor: "var(--border)" }}
        >
          <div className="flex flex-wrap gap-8">
            {[
              ["xs", "0 1px 2px rgba(10,37,64,0.05)"],
              ["sm", "0 1px 3px rgba(10,37,64,0.1)"],
              ["md", "0 4px 6px rgba(10,37,64,0.1)"],
              ["lg", "0 10px 15px rgba(10,37,64,0.1)"],
              ["xl", "0 20px 25px rgba(10,37,64,0.1)"],
              ["mint", "0 0 0 3px rgba(0,212,184,0.3)"],
            ].map(([name, shadow]) => (
              <div key={name} className="flex flex-col items-center gap-3">
                <div
                  className="w-16 h-16 rounded-xl bg-white"
                  style={{ boxShadow: shadow as string }}
                />
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--foreground)", fontFamily: "var(--font-mono)" }}
                >
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
