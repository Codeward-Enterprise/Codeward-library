import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Design Tokens/Colors",
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" },
    docs: {
      description: {
        component:
          "Paleta de cores do Codeward Brandbook. Regra 60-30-10: 60% Navy (superfícies, estrutura), 30% Neutral (texto, bordas), 10% Mint (CTAs e destaques únicos).",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Swatch helpers ────────────────────────────────────────────────────────────
interface SwatchProps {
  name: string;
  hex: string;
  cssVar?: string;
  textDark?: boolean;
}

const Swatch = ({ name, hex, cssVar }: SwatchProps) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: 0,
      overflow: "hidden",
      borderRadius: "10px",
      border: "1px solid rgba(255,255,255,0.06)",
      minWidth: "120px",
      flex: "1 1 100px",
      maxWidth: "160px",
    }}
  >
    <div style={{ background: hex, height: "64px" }} />
    <div style={{ padding: "10px 12px", background: "#1E1E1E" }}>
      <p
        style={{
          color: "#F6F9FC",
          fontFamily: "Inter, sans-serif",
          fontSize: "12px",
          fontWeight: 500,
          margin: 0,
        }}
      >
        {name}
      </p>
      <p
        style={{
          color: "#5F6B7A",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "11px",
          margin: "2px 0 0",
        }}
      >
        {hex}
      </p>
      {cssVar && (
        <p
          style={{
            color: "#3A3A3A",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "10px",
            margin: "1px 0 0",
          }}
        >
          {cssVar}
        </p>
      )}
    </div>
  </div>
);

const Section = ({
  title,
  subtitle,
  children,
}: { title: string; subtitle?: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: "2.5rem" }}>
    <div style={{ marginBottom: "16px" }}>
      <p
        style={{
          color: "#F6F9FC",
          fontFamily: "Inter, sans-serif",
          fontSize: "16px",
          fontWeight: 600,
          margin: 0,
        }}
      >
        {title}
      </p>
      {subtitle && (
        <p
          style={{
            color: "#5F6B7A",
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            margin: "4px 0 0",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>{children}</div>
  </div>
);

const Divider = () => (
  <div style={{ height: "1px", background: "#2A2A2A", margin: "8px 0 32px" }} />
);

const SemanticRow = ({ token, value, desc }: { token: string; value: string; desc: string }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "16px",
      padding: "10px 0",
      borderBottom: "1px solid #2A2A2A",
    }}
  >
    <div
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "4px",
        background: value,
        border: "1px solid rgba(255,255,255,0.08)",
        flexShrink: 0,
      }}
    />
    <code
      style={{
        color: "#00D4B8",
        fontFamily: "JetBrains Mono, monospace",
        fontSize: "12px",
        flexShrink: 0,
        minWidth: "200px",
      }}
    >
      {token}
    </code>
    <code
      style={{
        color: "#5F6B7A",
        fontFamily: "JetBrains Mono, monospace",
        fontSize: "11px",
        flexShrink: 0,
        minWidth: "80px",
      }}
    >
      {value}
    </code>
    <p style={{ color: "#98A7B5", fontFamily: "Inter, sans-serif", fontSize: "12px", margin: 0 }}>
      {desc}
    </p>
  </div>
);

// ── The full color page ───────────────────────────────────────────────────────
const ColorPage = () => (
  <div style={{ maxWidth: "900px", padding: "2rem", fontFamily: "Inter, sans-serif" }}>
    {/* Header */}
    <div style={{ marginBottom: "2.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #0A2540, #00D4B8)",
          }}
        />
        <h1 style={{ color: "#F6F9FC", fontSize: "24px", fontWeight: 700, margin: 0 }}>
          Paleta de Cores
        </h1>
      </div>
      <p style={{ color: "#5F6B7A", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
        Regra <strong style={{ color: "#F6F9FC" }}>60-30-10</strong>: 60% Navy (estrutura), 30%
        Neutral (conteúdo), 10% Mint (destaques únicos). Todas as cores são acessíveis via CSS
        custom properties — importe{" "}
        <code
          style={{ color: "#00D4B8", fontFamily: "JetBrains Mono, monospace", fontSize: "12px" }}
        >
          @codeforward/tokens/styles
        </code>
        .
      </p>
    </div>

    <Divider />

    {/* Navy Scale */}
    <Section
      title="Navy — Primary (60%)"
      subtitle="Cor principal da marca. Use em backgrounds, headers e elementos de estrutura."
    >
      <Swatch name="Navy 50" hex="#F0F4F9" cssVar="--color-navy-50" />
      <Swatch name="Navy 100" hex="#D9E2EE" cssVar="--color-navy-100" />
      <Swatch name="Navy 200" hex="#BBCCDF" cssVar="--color-navy-200" />
      <Swatch name="Navy 300" hex="#8DA8CC" cssVar="--color-navy-300" />
      <Swatch name="Navy 400" hex="#5E80A8" cssVar="--color-navy-400" />
      <Swatch name="Navy 500" hex="#2D5685" cssVar="--color-navy-500" />
      <Swatch name="Navy 600" hex="#1C3D62" cssVar="--color-navy-600" />
      <Swatch name="Navy 700" hex="#0A2540" cssVar="--color-navy-700" />
      <Swatch name="Navy 800" hex="#061929" cssVar="--color-navy-800" />
      <Swatch name="Navy 900" hex="#04111F" cssVar="--color-navy-900" />
    </Section>

    <Divider />

    {/* Mint Scale */}
    <Section
      title="Mint — CTA (10%)"
      subtitle="Cor de destaque. Reserve para o único CTA por tela, badges de status ao vivo e indicadores ativos."
    >
      <Swatch name="Mint 50" hex="#E6FCF8" cssVar="--color-mint-50" />
      <Swatch name="Mint 100" hex="#B3F5E9" cssVar="--color-mint-100" />
      <Swatch name="Mint 200" hex="#7EEDDB" cssVar="--color-mint-200" />
      <Swatch name="Mint 300" hex="#4DE7CC" cssVar="--color-mint-300" />
      <Swatch name="Mint 400" hex="#27DEC2" cssVar="--color-mint-400" />
      <Swatch name="Mint 500" hex="#00D4B8" cssVar="--color-mint-500" />
      <Swatch name="Mint 600" hex="#00A593" cssVar="--color-mint-600" />
      <Swatch name="Mint 700" hex="#007A6F" cssVar="--color-mint-700" />
      <Swatch name="Mint 800" hex="#005048" cssVar="--color-mint-800" />
      <Swatch name="Mint 900" hex="#003330" cssVar="--color-mint-900" />
    </Section>

    <Divider />

    {/* Neutral Scale */}
    <Section
      title="Neutral — Supporting (30%)"
      subtitle="Escala de cinzas para texto, bordas, superfícies e ícones. Base funcional da interface."
    >
      <Swatch name="White" hex="#FFFFFF" cssVar="--color-neutral-0" />
      <Swatch name="Neutral 50" hex="#F6F9FC" cssVar="--color-neutral-50" />
      <Swatch name="Neutral 200" hex="#E2E8F0" cssVar="--color-neutral-200" />
      <Swatch name="Neutral 300" hex="#C8D3DD" cssVar="--color-neutral-300" />
      <Swatch name="Neutral 400" hex="#98A7B5" cssVar="--color-neutral-400" />
      <Swatch name="Neutral 500" hex="#5F6B7A" cssVar="--color-neutral-500" />
      <Swatch name="Neutral 700" hex="#374151" cssVar="--color-neutral-700" />
      <Swatch name="Neutral 900" hex="#1A1A1A" cssVar="--color-neutral-900" />
      <Swatch name="Neutral 950" hex="#0D0D0D" cssVar="--color-neutral-950" />
    </Section>

    <Divider />

    {/* Status Colors */}
    <Section
      title="Status"
      subtitle="Feedback semântico para validações, alertas e estados de erro."
    >
      <Swatch name="Success 50" hex="#F0FDF4" cssVar="--color-success-50" />
      <Swatch name="Success 500" hex="#22C55E" cssVar="--color-success-500" />
      <Swatch name="Success 700" hex="#15803D" cssVar="--color-success-700" />
      <Swatch name="Warning 50" hex="#FFFBEB" cssVar="--color-warning-50" />
      <Swatch name="Warning 500" hex="#F59E0B" cssVar="--color-warning-500" />
      <Swatch name="Warning 700" hex="#B45309" cssVar="--color-warning-700" />
      <Swatch name="Error 50" hex="#FEF2F2" cssVar="--color-error-50" />
      <Swatch name="Error 500" hex="#EF4444" cssVar="--color-error-500" />
      <Swatch name="Error 700" hex="#B91C1C" cssVar="--color-error-700" />
    </Section>

    <Divider />

    {/* Semantic tokens */}
    <div>
      <div style={{ marginBottom: "16px" }}>
        <p
          style={{
            color: "#F6F9FC",
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            fontWeight: 600,
            margin: 0,
          }}
        >
          Tokens Semânticos
        </p>
        <p
          style={{
            color: "#5F6B7A",
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            margin: "4px 0 0",
          }}
        >
          Variáveis prontas para uso nos componentes. Nunca use cores brutas — use sempre os tokens.
        </p>
      </div>
      <SemanticRow token="--primary" value="#0A2540" desc="Fundo de botões primários, headers" />
      <SemanticRow token="--primary-hover" value="#1C3D62" desc="Hover do primary" />
      <SemanticRow token="--primary-foreground" value="#FFFFFF" desc="Texto sobre fundos navy" />
      <SemanticRow
        token="--cta"
        value="#00D4B8"
        desc="Botão CTA, badges de destaque, switch ativo"
      />
      <SemanticRow token="--cta-hover" value="#00A593" desc="Hover do CTA" />
      <SemanticRow token="--cta-foreground" value="#0A2540" desc="Texto sobre fundo mint" />
      <SemanticRow token="--background" value="#FFFFFF" desc="Superfície principal (light mode)" />
      <SemanticRow token="--foreground" value="#1A1A1A" desc="Texto principal" />
      <SemanticRow token="--muted" value="#F6F9FC" desc="Superfície secundária, hover de ghost" />
      <SemanticRow
        token="--muted-foreground"
        value="#5F6B7A"
        desc="Texto secundário, placeholders, ícones"
      />
      <SemanticRow token="--border" value="#E2E8F0" desc="Bordas de inputs, cards, separadores" />
      <SemanticRow token="--ring" value="#00D4B8" desc="Focus ring (Mint 500)" />
      <SemanticRow token="--destructive" value="#EF4444" desc="Ações destrutivas, erros" />
    </div>
  </div>
);

export const AllColors: Story = {
  name: "Todas as cores",
  render: () => <ColorPage />,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "dark" },
  },
};
